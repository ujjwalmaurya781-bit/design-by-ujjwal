import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Simple mock for browser environment
const createMockElement = (id = '') => ({
    id,
    classList: {
        add: () => {},
        remove: () => {},
        toggle: () => {},
        contains: () => false
    },
    addEventListener: () => {},
    removeEventListener: () => {},
    setAttribute: () => {},
    getAttribute: () => '',
    style: {
        setProperty: () => {}
    },
    querySelector: (sel) => createMockElement(),
    querySelectorAll: (sel) => [],
    appendChild: () => {},
    getBoundingClientRect: () => ({ top: 0, bottom: 0, left: 0, right: 0, width: 100, height: 100 }),
    innerHTML: '',
    textContent: ''
});

global.window = {
    innerWidth: 1024,
    innerHeight: 768,
    scrollY: 0,
    addEventListener: () => {},
    removeEventListener: () => {},
    scrollTo: () => {}
};

global.document = {
    getElementById: (id) => createMockElement(id),
    querySelector: (sel) => createMockElement(),
    querySelectorAll: (sel) => {
        if (sel === '#hero-carousel .preview-slide') {
            return [createMockElement()];
        }
        if (sel === '.tracker-step') {
            const el = createMockElement();
            el.getAttribute = () => '1';
            return [el];
        }
        return [];
    },
    addEventListener: () => {}
};

// global.navigator is read-only in Node 24+

global.Image = class {
    constructor() {
        setTimeout(() => {
            if (this.onload) this.onload();
        }, 10);
    }
};

global.IntersectionObserver = class {
    constructor(callback) { this.callback = callback; }
    observe() {}
    unobserve() {}
    disconnect() {}
};

global.requestAnimationFrame = (cb) => setTimeout(cb, 16);
global.cancelAnimationFrame = (id) => clearTimeout(id);
global.fetch = () => Promise.resolve({
    ok: true,
    json: () => Promise.resolve({
        'assets/brand-communication/goldwood-ply/': ['assets/brand-communication/goldwood-ply/post-01.jpg']
    })
});

// Import pages/home.js
const homePath = path.resolve(__dirname, '../pages/home.js');
console.log('Importing home.js from:', homePath);

try {
    const { initHome } = await import('file:///' + homePath.replace(/\\/g, '/'));
    console.log('Imported successfully, running initHome...');
    await initHome();
    console.log('initHome executed successfully without exceptions!');
} catch (err) {
    console.error('CRASH DETECTED:', err);
}
process.exit(0);
