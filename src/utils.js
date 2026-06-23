/**
 * Helper Utilities & Micro-interactions
 */

// ── Assets Manifest ─────────────────────────────────────────────────────────
// In dev mode: fetched live from /api/assets-manifest (real filesystem scan).
// In production build: uses import.meta.glob (compiled at build time).
//
// The manifest maps folder paths (e.g. "assets/ecommerce/petro-luxury/product-01/listing/")
// to arrays of URL strings (e.g. ["assets/ecommerce/petro-luxury/product-01/listing/Artboard 1.png"])
// ────────────────────────────────────────────────────────────────────────────

// Build-time glob fallback (used in production / first paint before fetch resolves)
const globModules = import.meta.glob('/public/assets/**/*.{png,jpg,jpeg,svg,pdf,webp,JPG,PNG,JPEG,WEBP}', { query: '?url', eager: true });

export const assetsManifest = {};

for (const [key, value] of Object.entries(globModules)) {
    const cleanKey = key.replace(/^\/public\//, '').split('?')[0];
    const lastSlash = cleanKey.lastIndexOf('/');
    if (lastSlash !== -1) {
        const folder = cleanKey.substring(0, lastSlash + 1);
        if (!assetsManifest[folder]) {
            assetsManifest[folder] = [];
        }
        const resolvedUrl = (value && typeof value === 'object' && 'default' in value) ? value.default : value;
        // Vite serves public/ assets at root — strip the leading /public/ from the URL
        let cleanUrl = typeof resolvedUrl === 'string' ? resolvedUrl.replace(/^\/public\//, '/').replace(/^\/?/, '') : cleanKey;
        cleanUrl = cleanUrl.split('?')[0];
        assetsManifest[folder].push(cleanUrl);
    }
}

for (const folder in assetsManifest) {
    assetsManifest[folder].sort((a, b) => a.localeCompare(b));
}

// In dev mode, overlay the live filesystem manifest so newly uploaded/added
// files are visible without a page reload or server restart.
let _liveManifestLoaded = false;

async function loadLiveManifest() {
    if (_liveManifestLoaded) return;
    try {
        const res = await fetch('/api/assets-manifest');
        if (!res.ok) return;
        const liveManifest = await res.json();
        // Merge live manifest into assetsManifest (live wins)
        for (const [folder, files] of Object.entries(liveManifest)) {
            assetsManifest[folder] = files.slice().sort((a, b) => a.localeCompare(b));
        }
        _liveManifestLoaded = true;
    } catch (err) {
        // /api/assets-manifest only exists in dev (Vite plugin) — ignore in production
    }
}

// Kick off live manifest fetch immediately (non-blocking)
if (window.location.hostname === 'localhost') {
  loadLiveManifest();
}


// 1. Scroll-driven Fade-in Observer
export function initScrollObserver() {
    const fadeSections = document.querySelectorAll('.fade-in-section');
    
    const observerOptions = {
        root: null,
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Once visible, stop observing
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeSections.forEach(section => {
        observer.observe(section);
    });
}

// 2. Custom Magnetic Cursor Controller
export function initCustomCursor() {
    const cursor = document.getElementById('custom-cursor');
    const follower = document.getElementById('custom-cursor-follower');
    const spotlight = document.getElementById('cursor-spotlight');
    
    if (!cursor || !follower) return;

    let mouseX = 0, mouseY = 0;
    let followerX = 0, followerY = 0;
    let spotlightX = 0, spotlightY = 0;

    // Follower lag factor (lerp)
    const lerpFactor = 0.15;
    const spotlightLerpFactor = 0.08;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // Instant position for the dot
        cursor.style.left = mouseX + 'px';
        cursor.style.top = mouseY + 'px';
    });

    // Animate follower loop
    function animateFollower() {
        followerX += (mouseX - followerX) * lerpFactor;
        followerY += (mouseY - followerY) * lerpFactor;
        
        follower.style.left = followerX + 'px';
        follower.style.top = followerY + 'px';

        if (spotlight) {
            spotlightX += (mouseX - spotlightX) * spotlightLerpFactor;
            spotlightY += (mouseY - spotlightY) * spotlightLerpFactor;
            spotlight.style.left = spotlightX + 'px';
            spotlight.style.top = spotlightY + 'px';
        }
        
        requestAnimationFrame(animateFollower);
    }
    animateFollower();

    // Hover listeners
    const hoverElements = 'a, button, .project-card, .skill-tag, .back-to-top, .mobile-toggle';
    
    function addCursorHoverListeners() {
        const targets = document.querySelectorAll(hoverElements);
        targets.forEach(target => {
            target.addEventListener('mouseenter', () => {
                document.body.classList.add('cursor-hover');
            });
            target.addEventListener('mouseleave', () => {
                document.body.classList.remove('cursor-hover');
            });
            target.addEventListener('mousedown', () => {
                document.body.classList.add('cursor-click');
            });
            target.addEventListener('mouseup', () => {
                document.body.classList.remove('cursor-click');
            });
        });
    }

    addCursorHoverListeners();

    // Expose dynamic rebinding for route transitions
    window.rebindCursor = addCursorHoverListeners;
}

// 3. Hero Mouse Parallax Effect
export function initHeroParallax() {
    const heroSection = document.querySelector('.hero-section');
    const floatingArts = document.querySelectorAll('.floating-card-wrapper');
    const portraitCanvas = document.querySelector('.hero-portrait-canvas');

    if (!heroSection) return;

    heroSection.addEventListener('mousemove', (e) => {
        const { width, height } = heroSection.getBoundingClientRect();
        const mouseX = e.clientX - width / 2;
        const mouseY = e.clientY - height / 2;

        // Move art shapes with different intensities (depth layering)
        floatingArts.forEach((art, index) => {
            const factor = ((index % 3) + 1) * 8; // Cycle depth layers (8, 16, 24)
            const x = (mouseX / width) * factor;
            const y = (mouseY / height) * factor;
            art.style.transform = `translate(${x}px, ${y}px)`;
        });

        // Tilt portrait slightly
        if (portraitCanvas) {
            const tiltX = (mouseY / height) * 8; // Max 8 deg
            const tiltY = -(mouseX / width) * 8;
            portraitCanvas.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
        }
    });

    heroSection.addEventListener('mouseleave', () => {
        // Reset positions
        floatingArts.forEach((art, index) => {
            art.style.transform = '';
        });
        if (portraitCanvas) {
            portraitCanvas.style.transform = '';
        }
    });
}

// 4. Fetch images from a folder via manifest (live in dev, glob in prod)
export async function fetchImagesFromFolder(folderPath) {
    // Ensure live manifest is loaded before we look up the folder
    await loadLiveManifest();

    let cleanPath = folderPath.replace(/\\/g, '/').replace(/^\//, '');
    if (cleanPath && !cleanPath.endsWith('/')) {
        cleanPath += '/';
    }
    return assetsManifest[cleanPath] || [];
}

// 5. Fetch subdirectories under a folder path via manifest
export async function fetchSubdirsFromFolder(folderPath) {
    await loadLiveManifest();

    let cleanPath = folderPath.replace(/\\/g, '/').replace(/^\//, '');
    if (cleanPath && !cleanPath.endsWith('/')) {
        cleanPath += '/';
    }
    
    const subdirs = new Set();
    const keys = Object.keys(assetsManifest);
    
    for (const key of keys) {
        if (key.startsWith(cleanPath) && key !== cleanPath) {
            const subPath = key.substring(cleanPath.length);
            const firstSegment = subPath.split('/')[0];
            if (firstSegment) {
                subdirs.add(firstSegment);
            }
        }
    }
    return Array.from(subdirs);
}

// 6. Upload file to a folder (using local Vite upload API in dev/local mode)
export async function uploadFileToFolder(folderPath, file) {
    try {
        let cleanFolder = folderPath.replace(/\\/g, '/').replace(/^\//, '');
        if (cleanFolder && !cleanFolder.endsWith('/')) {
            cleanFolder += '/';
        }
        
        // Construct destination path (ensure it is relative to workspace root and starts with public/assets)
        const targetPath = `public/${cleanFolder}${file.name}`;
        
        const response = await fetch('/api/upload', {
            method: 'POST',
            headers: {
                'x-target-path': targetPath
            },
            body: file
        });
        
        if (response.ok) {
            const data = await response.json();
            // Reset live manifest so it re-fetches on next call
            _liveManifestLoaded = false;
            return data.success;
        } else {
            console.error("Upload failed:", response.statusText);
            return false;
        }
    } catch (err) {
        console.error("Upload error:", err);
        return false;
    }
}

// 7. Initialize a dynamic image gallery container
export async function initDynamicGallery(brandId, folderPath, onRenderGallery, placeholderText = "Upload Campaign Creatives") {
    const grid = document.getElementById(`grid-${brandId}`);
    if (!grid) return;

    // Load initial images
    let images = await fetchImagesFromFolder(folderPath);
    
    async function render() {
        if (!images || images.length === 0) {
            // Render Upload Placeholder Card
            grid.innerHTML = `
                <div class="upload-placeholder-card" id="upload-card-${brandId}">
                    <div class="upload-placeholder-icon" style="color: var(--color-accent);">+</div>
                    <div class="upload-placeholder-text">${placeholderText}</div>
                    <input type="file" id="file-input-${brandId}" accept="image/*" multiple style="display: none;">
                </div>
            `;
            
            // Set up click upload functionality
            const uploadCard = document.getElementById(`upload-card-${brandId}`);
            const fileInput = document.getElementById(`file-input-${brandId}`);
            
            if (uploadCard && fileInput) {
                uploadCard.addEventListener('click', () => {
                    fileInput.click();
                });
                
                fileInput.addEventListener('change', async (e) => {
                    const files = Array.from(e.target.files);
                    if (files.length === 0) return;
                    
                    uploadCard.style.pointerEvents = 'none';
                    uploadCard.querySelector('.upload-placeholder-text').textContent = 'Uploading...';
                    
                    for (const file of files) {
                        await uploadFileToFolder(folderPath, file);
                    }
                    
                    // Reload gallery
                    images = await fetchImagesFromFolder(folderPath);
                    render();
                });
            }
        } else {
            // Render images preserving aspect ratio
            grid.innerHTML = images.map((imgSrc, imgIndex) => {
                const isHidden = imgIndex >= 6 ? 'gallery-item-hidden' : '';
                return `
                    <div class="masonry-item ${isHidden}" data-img-index="${imgIndex}">
                        <img src="${imgSrc}" alt="Creative Asset" loading="lazy" class="gallery-image">
                    </div>
                `;
            }).join('');
        }
        
        // Notify parent controller so it can bind lightbox/toggle events
        if (onRenderGallery) {
            onRenderGallery(images);
        }
    }
    
    await render();
}
