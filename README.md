# Ujjwal Maurya - Visual Designer Portfolio

A world-class, premium visual designer portfolio built for **Ujjwal Maurya**. Designed with award-winning agency aesthetics, dark-mode textures, cinematic grid spacing, and smooth interactive motion.

## Features

- **Premium Dark Aesthetic**: Rich HSL dark colors, fine-grained SVG texture overlay, elegant typography (Outfit for headings, Inter for body), and electric orange accents (`#FF6B00`).
- **Dynamic Routing**: Built as a custom Vanilla JS Single Page Application (SPA) using a hash-based router. Enables seamless page swaps with clean animations.
- **Masonry Layouts**: Brand details pages display creative work in their original aspect ratios (ideal for 1080x1350 Instagram sizes, landscape banners, etc.) without cropping or distorting.
- **Case Study Templates**: Dedicated e-commerce case study pages with structured sections for Overview, Problem, Approach, Final Designs, and full galleries.
- **Responsive Layout**: Designed to adapt perfectly to mobile screens (320px, 375px), tablets (768px), and large desktops (1024px, 1440px+).

## Project Structure

```
/
├── src/
│   ├── main.js         # Initializer and interactive bindings
│   ├── router.js       # Hash-based router
│   └── utils.js        # Scroll animation and interactive effects
├── public/             # Static files
├── assets/             # Generated premium assets (Portraits, Mockups)
│   └── resume/         # Resume documents (PDF)
├── components/         # Reusable layouts (Navbar, Footer, Gallery, Cards)
├── pages/              # Main pages (Home, Brand Details, E-Commerce Details)
├── styles/             # Modular CSS stylesheet
├── package.json        # Project metadata
├── server.ps1          # Custom PowerShell development HTTP server
└── index.html          # Main HTML application shell
```

## Running the Website Locally

Since the project uses ES6 modules, opening `index.html` directly in the browser via `file://` might lead to CORS blockings. A lightweight HTTP server is provided.

### Windows (PowerShell)

1. Open PowerShell in this project folder.
2. Run the start command:
   ```powershell
   ./server.ps1
   ```
3. Open your browser and navigate to:
   [http://localhost:8000](http://localhost:8000)

---

## Replacing Placeholder Images

The website contains placeholder graphics located under `assets/`. To display your own work:
1. Save your creatives/photos in the appropriate folders (e.g. `assets/brand_comm/`, `assets/ecommerce/`).
2. Update the corresponding files or edit data inside:
   - `pages/brand-comm.js` (for brand works)
   - `pages/ecommerce.js` (for product case studies)
   - `pages/home.js` (for cover images and biography photo)
3. Ensure your files are named correctly or update image paths in the JavaScript page configs.
