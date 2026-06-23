import { defineConfig } from 'vite';
import fs from 'fs';
import path from 'path';

// Recursively scan public/assets and build a folder -> [filenames] manifest
function buildAssetsManifest(assetsDir) {
  const manifest = {};
  const imageExts = new Set(['.png', '.jpg', '.jpeg', '.webp', '.svg', '.PNG', '.JPG', '.JPEG', '.WEBP']);

  function walk(dir, relBase) {
    let entries;
    try {
      entries = fs.readdirSync(dir, { withFileTypes: true });
    } catch {
      return;
    }
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      const relPath = relBase ? `${relBase}/${entry.name}` : entry.name;
      if (entry.isDirectory()) {
        walk(fullPath, relPath);
      } else if (entry.isFile()) {
        const ext = path.extname(entry.name);
        if (imageExts.has(ext)) {
          // Keys use "assets/" prefix to match fetchImagesFromFolder lookups
          const folder = `assets/${relBase ? relBase + '/' : ''}`;
          if (!manifest[folder]) manifest[folder] = [];
          // URL served at /assets/... (public/ is stripped by Vite)
          manifest[folder].push(`assets/${relPath}`);
        }
      }
    }
  }

  walk(assetsDir, '');
  return manifest;
}

export default defineConfig({
  server: {
    watch: {
      // Ignore public/ to prevent Windows EBUSY file-lock crashes when images are dropped in.
      // New files are detected via the /api/assets-manifest endpoint (live fs scan) instead.
      ignored: ['**/public/**', '**/node_modules/**', '**/.git/**']
    }
  },
  plugins: [

    {
      name: 'assets-server',
      configureServer(server) {
        const workspaceRoot = process.cwd();
        const publicAssetsDir = path.resolve(workspaceRoot, 'public/assets');

        server.middlewares.use(async (req, res, next) => {
          // ── /api/assets-manifest ── live filesystem scan ──
          if (req.url === '/api/assets-manifest' && req.method === 'GET') {
            try {
              const manifest = buildAssetsManifest(publicAssetsDir);
              res.statusCode = 200;
              res.setHeader('Content-Type', 'application/json');
              res.setHeader('Cache-Control', 'no-store');
              res.end(JSON.stringify(manifest));
            } catch (err) {
              res.statusCode = 500;
              res.end(JSON.stringify({ error: err.message }));
            }
            return;
          }

          // ── /api/upload ── file upload endpoint ──
          if (req.url.startsWith('/api/upload') && req.method === 'POST') {
            try {
              const targetPath = req.headers['x-target-path'];
              if (!targetPath) {
                res.statusCode = 400;
                res.end(JSON.stringify({ error: 'Missing x-target-path header' }));
                return;
              }

              const absolutePath = path.resolve(workspaceRoot, targetPath);
              if (!absolutePath.startsWith(path.resolve(workspaceRoot, 'public/assets'))) {
                res.statusCode = 403;
                res.end(JSON.stringify({ error: 'Access denied: Path must be within public/assets' }));
                return;
              }

              const dir = path.dirname(absolutePath);
              if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir, { recursive: true });
              }

              const fileStream = fs.createWriteStream(absolutePath);
              req.pipe(fileStream);

              req.on('end', () => {
                console.log(`[Vite Upload Server] Successfully wrote file to: ${absolutePath}`);

                // Invalidate utils.js module cache so import.meta.glob also re-evaluates
                const utilsPath = path.resolve(workspaceRoot, 'src/utils.js');
                const mods = server.moduleGraph.getModulesByFile(utilsPath);
                if (mods) {
                  mods.forEach(mod => server.moduleGraph.invalidateModule(mod));
                }

                // Send full-reload to browser client
                server.ws.send({ type: 'full-reload' });

                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ success: true, path: targetPath }));
              });

              req.on('error', (err) => {
                console.error('[Vite Upload Server] Error writing file:', err);
                res.statusCode = 500;
                res.end(JSON.stringify({ error: err.message }));
              });

            } catch (err) {
              console.error('[Vite Upload Server] Internal error:', err);
              res.statusCode = 500;
              res.end(JSON.stringify({ error: err.message }));
            }
          } else {
            next();
          }
        });
      }
    }
  ]
});
