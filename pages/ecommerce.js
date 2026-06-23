/**
 * E-Commerce Design Case Study Page
 */
import { fetchImagesFromFolder, uploadFileToFolder, fetchSubdirsFromFolder, assetsManifest } from '../src/utils.js';

const CLIENT_META = {
    "camx": {
        name: "CAMX",
        description: "High-reliability professional camera accessories and electronic equipment styling.",
        category: "Camera Accessories",
        summary: "Drafted a complete e-commerce product listings and custom brand storytelling blueprint showing high-tolerance engineering designs.",
        coverImg: "assets/ecommerce/camx/am-01/listing/Artboard 1.png"
    },
    "rumaisa": {
        name: "RUMAISA",
        description: "Exquisite and luxury fragrance bottle packaging, listing imagery, and conversion branding.",
        category: "Fragrances & Cosmetics",
        summary: "Designed luxury packaging listings and lifestyle infographics focusing on scents profiles, ingredients highlights, and premium bottle designs.",
        coverImg: "assets/ecommerce/rumaisa/perfume-01/listing/Artboard 1.png"
    },
    "petro-luxury": {
        name: "PETRO LUXURY",
        description: "Premium perfume brand showcasing elite aesthetics and lifestyle digital storefront designs.",
        category: "Luxury Fragrances",
        summary: "Crafted high-fidelity commercial creatives and product infographics representing elite perfumes, luxury lifestyles, and conversion banners.",
        coverImg: "assets/ecommerce/petro-luxury/product-01/listing/Artboard 1.png"
    },
    "amanzi": {
        name: "AMANZI",
        description: "Artisanal scents and premium body fragrances with sophisticated visual storytelling.",
        category: "Body Scents & Care",
        summary: "Developed visual listings and conversion-centric graphics to capture customer attention and establish premium product positioning.",
        coverImg: "assets/ecommerce/amanzi/product-01/listing/Artboard 1.png"
    },
    "leatherific": {
        name: "LEATHERIFIC",
        description: "Genuine leather accessories, tech sleeves, and crafted travel goods storefront visuals.",
        category: "Premium Leather Goods",
        summary: "Structured e-commerce infographics emphasizing full-grain leather textures, precise stitching craftsmanship, and utility specifications.",
        coverImg: "assets/ecommerce/leatherific/product-01/a-plus/Leatherific-Wrist-Prime-Plus-!_01.png"
    },
    "storage-containers": {
        name: "STORAGE CONTAINERS",
        description: "Smart home organization, kitchen storage, and space-saving utility design systems.",
        category: "Home & Kitchen",
        summary: "Drafted conversion-centric listings highlighting materials safety, space-saving layouts, modular stacking, and everyday convenience.",
        coverImg: "assets/ecommerce/storage-containers/product-01/listing/1.png"
    },
    "elitemotion": {
        name: "ELITEMOTION",
        description: "Gym chalk powder for weightlifting, powerlifting, CrossFit, gym training, and grip enhancement.",
        category: "Gym Accessories / Fitness Grip Chalk Powder",
        summary: "Premium Amazon listing images and A+ content for ELITEMOTION chalk powder.",
        coverImg: "assets/ecommerce/elitemotion/listing/cover.png"
    },
    "tmc-leather-diary": {
        name: "TMC LEATHER DIARY",
        description: "Designed premium Amazon listing creatives and A+ content showcasing craftsmanship, leather quality, durability, gifting appeal, and luxury presentation.",
        category: "Premium Leather Journals & Diaries",
        summary: "Luxury visual storytelling, premium product presentation, handcrafted detailing, lifestyle usage, and conversion-focused ecommerce design.",
        coverImg: "assets/ecommerce/tmc-leather-diary/listing/140 pages.png"
    }
};

// Registry for Amanzi Products (17 Roll-ons, 5 Collections)
const AMANZI_PRODUCTS = [
    // Roll-On Series (17 products)
    { id: "white-oud", name: "White Oud", category: "Roll-On Series" },
    { id: "meraki", name: "Meraki", category: "Roll-On Series" },
    { id: "green-ajmeri", name: "Green Ajmeri", category: "Roll-On Series" },
    { id: "extreme-sx", name: "Extreme SX", category: "Roll-On Series" },
    { id: "choco-musk", name: "Choco Musk", category: "Roll-On Series" },
    { id: "burj-dubai", name: "Burj Dubai", category: "Roll-On Series" },
    { id: "blue", name: "Blue", category: "Roll-On Series" },
    { id: "aladin", name: "Aladin", category: "Roll-On Series" },
    { id: "al-waridi", name: "Al Waridi", category: "Roll-On Series" },
    { id: "ruh-gulab", name: "Ruh Gulab", category: "Roll-On Series" },
    { id: "pink-sugar", name: "Pink Sugar", category: "Roll-On Series" },
    { id: "oudh-absolute", name: "Oudh Absolute", category: "Roll-On Series" },
    { id: "nature", name: "Nature", category: "Roll-On Series" },
    { id: "mysore-sandal", name: "Mysore Sandal", category: "Roll-On Series" },
    { id: "mukhallat", name: "Mukhallat", category: "Roll-On Series" },
    { id: "zeus", name: "Zeus", category: "Roll-On Series" },
    { id: "savage", name: "Savage", category: "Roll-On Series" },

    // Premium Collections (5 products)
    { id: "royal", name: "Royal", category: "Premium Collection" },
    { id: "taj", name: "Taj", category: "Premium Collection" },
    { id: "eternal", name: "Eternal", category: "Premium Collection" },
    { id: "imperial", name: "Imperial", category: "Premium Collection" },
    { id: "french", name: "French", category: "Premium Collection" }
];

function getAmanziFoldersForId(prodId) {
    let listingFolder = "";
    let aplusFolder = "";
    
    // Scan assetsManifest keys
    const keys = Object.keys(assetsManifest);
    for (const key of keys) {
        // Match key like "assets/ecommerce/amanzi/product-02-meraki/listing/"
        const match = key.match(/^assets\/ecommerce\/amanzi\/(product-(\d+)(?:-([^/]+))?)\/(listing|a-plus)\/$/);
        if (match) {
            const index = parseInt(match[2], 10);
            let slug = match[3] || "";
            if (index === 1 && !slug) {
                slug = "white-oud";
            }
            if (!slug) {
                slug = `product-${match[2]}`;
            }
            
            if (slug === prodId) {
                const folderType = match[4]; // "listing" or "a-plus"
                if (folderType === "listing") {
                    listingFolder = key;
                } else if (folderType === "a-plus") {
                    aplusFolder = key;
                }
            }
        }
    }
    
    // If not found, build a standard fallback path based on the item index
    if (!listingFolder) {
        const prodIndex = AMANZI_PRODUCTS.findIndex(p => p.id === prodId);
        const idxStr = String(prodIndex >= 0 ? prodIndex + 1 : 1).padStart(2, '0');
        const folderName = prodId === 'white-oud' ? 'product-01' : `product-${idxStr}-${prodId}`;
        listingFolder = `assets/ecommerce/amanzi/${folderName}/listing/`;
        aplusFolder = `assets/ecommerce/amanzi/${folderName}/a-plus/`;
    }
    
    return { listingFolder, aplusFolder };
}

async function getAmanziProductAssets(prodId) {
    const { listingFolder, aplusFolder } = getAmanziFoldersForId(prodId);
    
    const listingImages = await fetchImagesFromFolder(listingFolder);
    const aplusImages = await fetchImagesFromFolder(aplusFolder);
    
    const images = [...listingImages, ...aplusImages];
    
    // Find cover image (e.g. cover.png or the first image in listingImages)
    let coverImg = listingImages.find(img => img.toLowerCase().endsWith('/cover.png') || img.toLowerCase().endsWith('cover.jpg') || img.toLowerCase().endsWith('cover.png'));
    if (!coverImg && listingImages.length > 0) {
        coverImg = listingImages[0];
    }
    if (!coverImg && images.length > 0) {
        coverImg = images[0];
    }
    
    // Gallery images are all listing images + a-plus images except cover
    let galleryImages = images.filter(img => img !== coverImg);
    
    // Sort gallery images alphabetically
    galleryImages.sort((a, b) => a.localeCompare(b));
    
    return {
        coverImg: coverImg || null,
        gallery: galleryImages,
        totalCount: images.length
    };
}

export function renderEcommerce(subRoute) {
    if (!subRoute) {
        // Category Page View
        const brandListHtml = Object.entries(CLIENT_META).map(([id, meta]) => {
            const coverImg = meta.coverImg || "";

            return `
            <a href="#ecommerce/${id}" class="category-brand-card fade-in-section">
                <div class="category-brand-img-wrapper">
                    <img src="${coverImg}" alt="${meta.name}" loading="lazy">
                </div>
                <div class="category-brand-info">
                    <span class="category-brand-tag">${meta.category}</span>
                    <h3 class="category-brand-name">${meta.name}</h3>
                    <p class="category-brand-desc">${meta.description}</p>
                    <div class="category-brand-cta-text">
                        <span>View Case Study</span>
                        <span class="category-brand-cta-arrow">&rarr;</span>
                    </div>
                </div>
            </a>
            `;
        }).join('');

        return `
        <!-- Category Hero -->
        <section class="case-study-hero" style="background-image: linear-gradient(180deg, rgba(10, 10, 10, 0.4) 0%, rgba(10, 10, 10, 0.95) 100%), radial-gradient(circle at center, #1a1a1a 0%, #050505 100%); min-height: 40vh;">
            <div class="container case-study-title-block">
                <span class="case-study-category">PORTFOLIO CATEGORY 03</span>
                <h1 class="case-study-title">Amazon A+ Content &amp; Listing Pages</h1>
                <p style="color: var(--color-text-muted); font-size: 1.15rem; font-weight: 300; margin-bottom: var(--space-md);">
                    Amazon product listings, A+ Content layouts, infographical details, and brand storefront modules. Select a client below to view their listing case study.
                </p>
                <a href="#selected-work" class="btn btn-secondary" style="padding: 0.75rem 1.5rem; font-size: 0.75rem;">
                    &larr; Back to Portfolio
                </a>
            </div>
        </section>

        <!-- Brands Grid -->
        <section class="category-brands-section" style="padding: var(--space-xl) 4vw;">
            <div class="container">
                <h2 style="font-family: var(--font-heading); color: var(--color-text-light); text-transform: uppercase; font-size: 1.5rem; margin-bottom: var(--space-lg); letter-spacing: 0.1em; border-bottom: 1px solid var(--color-border); padding-bottom: var(--space-xs);">SELECTED CLIENT WORK</h2>
                <div class="category-brand-grid">
                    ${brandListHtml}
                </div>
            </div>
        </section>
        `;
    } else if (subRoute === 'amanzi') {
        return `
        <!-- Case Study Hero -->
        <section class="case-study-hero amanzi-hero" style="background-image: linear-gradient(180deg, rgba(10, 10, 10, 0.5) 0%, rgba(10, 10, 10, 0.98) 100%), radial-gradient(circle at center, #1f1208 0%, #050505 100%); background-size: cover; background-position: center; min-height: 55vh; display: flex; align-items: center; justify-content: center; padding-top: 140px; border-bottom: 1px solid var(--color-border);">
            <div class="container case-study-title-block" style="text-align: center;">
                <span class="case-study-category" style="color: var(--color-accent); font-family: var(--font-heading); font-size: 0.9rem; font-weight: 600; letter-spacing: 0.25em; text-transform: uppercase; margin-bottom: 15px; display: block;">Luxury Fragrance Ecommerce Design System</span>
                <h1 class="case-study-title" style="font-size: clamp(2.5rem, 6vw, 4.5rem); font-weight: 900; letter-spacing: -0.02em; margin-bottom: 10px; color: var(--color-text-light); text-transform: uppercase;">AMANZI FRAGRANCES</h1>
                <p style="font-family: var(--font-heading); font-size: clamp(1.1rem, 1.8vw, 1.4rem); color: var(--color-accent); font-weight: 500; letter-spacing: 0.05em; text-transform: uppercase; margin-bottom: 25px;">
                    22 Product Listings Designed
                </p>
                <div style="display: inline-flex; gap: 30px; margin-bottom: 30px; font-family: var(--font-heading); font-size: 0.85rem; letter-spacing: 0.15em; text-transform: uppercase; color: var(--color-text-muted);">
                    <span>17 Roll On Products</span>
                    <span style="color: var(--color-border); font-weight: 100;">|</span>
                    <span>5 Premium Collection Products</span>
                </div>
                <p style="color: var(--color-text-muted); font-size: 1.15rem; font-weight: 300; max-width: 800px; margin: 0 auto 35px auto; line-height: 1.7;">
                    Designed a complete Amazon listing ecosystem for Amanzi Fragrances, covering 22 products across Roll On and Premium Collection categories with conversion-focused product storytelling and premium visual presentation.
                </p>
                <a href="#ecommerce" class="btn btn-secondary" style="padding: 0.75rem 1.5rem; font-size: 0.75rem; border-radius: 30px;">
                    &larr; Back to Amazon A+ Content
                </a>
            </div>
        </section>

        <!-- Project Stats Section -->
        <section class="amanzi-stats-section" style="background-color: #080808; padding: 60px 4vw; border-bottom: 1px solid var(--color-border);">
            <div class="container">
                <div class="amanzi-stats-grid">
                    <!-- Stat Card 1 -->
                    <div class="amanzi-stat-card">
                        <div class="amanzi-stat-num">22</div>
                        <div class="amanzi-stat-label">Products</div>
                        <div class="amanzi-stat-sub">Amazon Listings</div>
                    </div>
                    <!-- Stat Card 2 -->
                    <div class="amanzi-stat-card">
                        <div class="amanzi-stat-num">17</div>
                        <div class="amanzi-stat-label">Roll Ons</div>
                        <div class="amanzi-stat-sub">Designed</div>
                    </div>
                    <!-- Stat Card 3 -->
                    <div class="amanzi-stat-card">
                        <div class="amanzi-stat-num">5</div>
                        <div class="amanzi-stat-label">Collections</div>
                        <div class="amanzi-stat-sub">Designed</div>
                    </div>
                    <!-- Stat Card 4 -->
                    <div class="amanzi-stat-card">
                        <div class="amanzi-stat-num">100+</div>
                        <div class="amanzi-stat-label">Visual Assets</div>
                        <div class="amanzi-stat-sub">Premium Fragrance Brand</div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Project Overview Section -->
        <section class="amanzi-overview-section" style="background-color: #050505; padding: 80px 4vw; border-bottom: 1px solid var(--color-border);">
            <div class="container">
                <div class="amanzi-overview-grid">
                    <div>
                        <span style="font-family: var(--font-heading); color: var(--color-accent); font-weight: 600; font-size: 0.8rem; letter-spacing: 0.2em; text-transform: uppercase; display: block; margin-bottom: 12px;">The Challenge</span>
                        <h2 style="font-size: clamp(1.8rem, 3vw, 2.5rem); font-weight: 800; text-transform: uppercase; margin-bottom: 20px; line-height: 1.2;">Project Objective</h2>
                        <p style="font-size: 1.15rem; color: var(--color-text-light); font-weight: 300; line-height: 1.7; margin-bottom: 20px;">
                            Create high-converting premium ecommerce visuals for fragrance products.
                        </p>
                        <p style="font-size: 1rem; color: var(--color-text-muted); font-weight: 300; line-height: 1.6;">
                            The goal was to establish a cohesive luxury identity on Amazon across 22 products. By blending rich ingredients storytelling with premium package renders, we crafted listings optimized for conversion, making the scents tangible to online customers.
                        </p>
                    </div>
                    <div class="amanzi-overview-meta-box">
                        <div>
                            <h4 class="amanzi-overview-meta-label">Industry</h4>
                            <p class="amanzi-overview-meta-value">Luxury Fragrances</p>
                        </div>
                        <div>
                            <h4 class="amanzi-overview-meta-label">Role</h4>
                            <p class="amanzi-overview-meta-value">Lead Graphic Designer</p>
                        </div>
                        <div>
                            <h4 class="amanzi-overview-meta-label">Services</h4>
                            <p class="amanzi-overview-meta-value">Amazon Listing Design</p>
                        </div>
                        <div>
                            <h4 class="amanzi-overview-meta-label">Deliverables</h4>
                            <p class="amanzi-overview-meta-value">Product Listing Images</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Product Showcase Section -->
        <section class="amanzi-showcase-section" style="background-color: #030303; padding: 80px 4vw; min-height: 60vh;">
            <div class="container">
                <div style="text-align: center; margin-bottom: 50px;">
                    <span class="section-subtitle" style="font-family: var(--font-heading); color: var(--color-accent); font-weight: 600; font-size: 0.85rem; letter-spacing: 0.25em; text-transform: uppercase; margin-bottom: 10px; display: block;">PRODUCT SHOWCASE</span>
                    <h2 style="font-size: clamp(2rem, 3.5vw, 2.75rem); font-weight: 800; text-transform: uppercase; color: var(--color-text-light);">22 Amazon Product Listings Designed For Amanzi Fragrances</h2>
                </div>
                
                <!-- Filter Bar -->
                <div class="amanzi-filter-bar">
                    <button class="amanzi-filter-btn active" data-filter="all">All Products</button>
                    <button class="amanzi-filter-btn" data-filter="roll-on">Roll-On Series</button>
                    <button class="amanzi-filter-btn" data-filter="premium-collection">Premium Collections</button>
                </div>

                <div id="amanzi-showcase-container">
                    <div style="text-align: center; padding: 40px; color: var(--color-text-muted);">
                        <div class="spinner" style="border: 3px solid rgba(255,107,0,0.1); border-top: 3px solid var(--color-accent); border-radius: 50%; width: 40px; height: 40px; margin: 0 auto 20px auto; animation: spin 1s linear infinite;"></div>
                        <p style="font-family: var(--font-heading); font-size: 0.9rem; letter-spacing: 0.1em; text-transform: uppercase;">Loading Amanzi Design System...</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Lightbox Dynamic Overlay Container -->
        <div class="lightbox-overlay" id="lightbox-overlay">
            <button class="lightbox-close" id="lightbox-close" aria-label="Close Lightbox">&times;</button>
            <button class="lightbox-btn lightbox-prev-btn" id="lightbox-prev-btn" aria-label="Previous Image">&lsaquo;</button>
            <div class="lightbox-wrapper">
                <img class="lightbox-image" id="lightbox-image" src="" alt="Lightbox Preview">
            </div>
            <button class="lightbox-btn lightbox-next-btn" id="lightbox-next-btn" aria-label="Next Image">&rsaquo;</button>
        </div>
        `;
    } else {
        // Individual Client Case Study View
        const clientId = subRoute;
        const meta = CLIENT_META[clientId];
        if (!meta) {
            window.location.hash = '#ecommerce';
            return '';
        }

        return `
        <!-- Case Study Hero -->
        <section class="case-study-hero" style="background-image: linear-gradient(180deg, rgba(10, 10, 10, 0.4) 0%, rgba(10, 10, 10, 0.95) 100%), radial-gradient(circle at center, #1a1a1a 0%, #050505 100%); background-size: cover; background-position: center; min-height: 40vh;">
            <div class="container case-study-title-block">
                <span class="case-study-category">Amazon A+ Case Study</span>
                <h1 class="case-study-title">${meta.name}</h1>
                <p style="color: var(--color-text-muted); font-size: 1.15rem; font-weight: 300; margin-bottom: var(--space-md);">
                    ${meta.description}
                </p>
                <a href="#ecommerce" class="btn btn-secondary" style="padding: 0.75rem 1.5rem; font-size: 0.75rem;">
                    &larr; Back to Amazon A+ Content
                </a>
            </div>
        </section>

        <!-- Dynamic Clients Showcase Container -->
        <div id="ecommerce-brands-root" style="background-color: #050505; min-height: 50vh;">
            <div class="container" style="padding: var(--space-xl) 0; text-align: center; color: var(--color-text-muted);">
                <div class="spinner" style="border: 3px solid rgba(255,107,0,0.1); border-top: 3px solid var(--color-accent); border-radius: 50%; width: 40px; height: 40px; margin: 0 auto 20px auto; animation: spin 1s linear infinite;"></div>
                <p style="font-family: var(--font-heading); font-size: 0.9rem; letter-spacing: 0.1em; text-transform: uppercase;">Loading client database...</p>
            </div>
        </div>

        <!-- Lightbox Dynamic Overlay Container -->
        <div class="lightbox-overlay" id="lightbox-overlay">
            <button class="lightbox-close" id="lightbox-close" aria-label="Close Lightbox">&times;</button>
            <button class="lightbox-btn lightbox-prev-btn" id="lightbox-prev-btn" aria-label="Previous Image">&lsaquo;</button>
            <div class="lightbox-wrapper">
                <img class="lightbox-image" id="lightbox-image" src="" alt="Lightbox Preview">
            </div>
            <button class="lightbox-btn lightbox-next-btn" id="lightbox-next-btn" aria-label="Next Image">&rsaquo;</button>
        </div>

        <style>
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
        </style>
        `;
    }
}

export async function initEcommerce(subRoute) {
    if (!subRoute) {
        return;
    }

    if (subRoute === 'amanzi') {
        const container = document.getElementById('amanzi-showcase-container');
        if (!container) return;

        // Load metadata dynamically
        for (const prod of AMANZI_PRODUCTS) {
            const assetsData = await getAmanziProductAssets(prod.id);
            prod.coverImg = assetsData.coverImg;
            prod.gallery = assetsData.gallery;
            prod.assetCount = assetsData.totalCount;
        }

        let currentExpandedProductId = null;
        let activeFilter = 'all';
        
        // Lightbox state
        let activeImagesList = [];
        let activeImgIndex = 0;
        
        // Lightbox Elements
        const lightbox = document.getElementById('lightbox-overlay');
        const lightboxImg = document.getElementById('lightbox-image');
        const closeBtn = document.getElementById('lightbox-close');
        const prevBtn = document.getElementById('lightbox-prev-btn');
        const nextBtn = document.getElementById('lightbox-next-btn');

        function openLightbox(imgUrl) {
            if (!lightbox || !lightboxImg) return;
            activeImgIndex = activeImagesList.indexOf(imgUrl);
            if (activeImgIndex === -1) {
                activeImagesList = [imgUrl];
                activeImgIndex = 0;
            }
            updateLightboxContent();
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeLightbox() {
            if (!lightbox) return;
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
            lightboxImg.src = '';
            lightboxImg.classList.remove('zoomed');
        }

        function updateLightboxContent() {
            if (activeImgIndex < 0) {
                activeImgIndex = activeImagesList.length - 1;
            } else if (activeImgIndex >= activeImagesList.length) {
                activeImgIndex = 0;
            }
            lightboxImg.src = activeImagesList[activeImgIndex];
            lightboxImg.classList.remove('zoomed');
        }

        if (closeBtn) closeBtn.onclick = closeLightbox;
        if (prevBtn) {
            prevBtn.onclick = (e) => {
                e.stopPropagation();
                activeImgIndex--;
                updateLightboxContent();
            };
        }
        if (nextBtn) {
            nextBtn.onclick = (e) => {
                e.stopPropagation();
                activeImgIndex++;
                updateLightboxContent();
            };
        }
        if (lightbox) {
            lightbox.onclick = (e) => {
                if (e.target === lightbox || e.target.classList.contains('lightbox-wrapper')) {
                    closeLightbox();
                }
            };
        }
        
        if (lightboxImg) {
            lightboxImg.onclick = (e) => {
                e.stopPropagation();
                lightboxImg.classList.toggle('zoomed');
            };
        }

        function handleKeyDown(e) {
            if (!lightbox || !lightbox.classList.contains('active')) return;
            if (e.key === 'Escape') closeLightbox();
            else if (e.key === 'ArrowLeft') {
                activeImgIndex--;
                updateLightboxContent();
            } else if (e.key === 'ArrowRight') {
                activeImgIndex++;
                updateLightboxContent();
            }
        }
        window.addEventListener('keydown', handleKeyDown);

        const cleanupRouter = () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('hashchange', cleanupRouter);
        };
        window.addEventListener('hashchange', cleanupRouter);

        // Render Product Showcase Grid
        function renderShowcaseGrid() {
            container.innerHTML = `
            <div class="amanzi-products-grid">
                ${AMANZI_PRODUCTS.map((prod, idx) => {
                    const coverImgHtml = prod.coverImg 
                        ? `<img src="${prod.coverImg}" alt="${prod.name}" loading="lazy">`
                        : `
                          <div class="amanzi-product-empty-cover">
                              <span style="font-family: var(--font-heading); font-size: 0.65rem; color: var(--color-accent); font-weight: 600; letter-spacing: 0.15em; text-transform: uppercase;">Amanzi</span>
                              <div style="font-family: var(--font-heading); font-size: 1.1rem; font-weight: 800; color: var(--color-text-muted); text-transform: uppercase; margin-top: 5px;">${prod.name}</div>
                              <span style="font-size: 0.65rem; color: var(--color-text-dark); text-transform: uppercase; letter-spacing: 0.05em; margin-top: 15px; border: 1px dashed var(--color-border); padding: 4px 8px; border-radius: 4px;">Assets coming soon</span>
                          </div>
                          `;
                    
                    return `
                    <div class="amanzi-product-card" data-prod-id="${prod.id}" data-prod-index="${idx}" data-category="${prod.category === 'Roll-On Series' ? 'roll-on' : 'premium-collection'}">
                        <div class="amanzi-product-img-wrapper">
                            ${coverImgHtml}
                        </div>
                        <div class="amanzi-product-info">
                            <div>
                                <h3 class="amanzi-product-name">${prod.name}</h3>
                                <span class="amanzi-product-category-label">${prod.category}</span>
                            </div>
                            <div class="amanzi-product-card-cta">
                                <span>View Project</span>
                                <span class="amanzi-arrow">&rarr;</span>
                            </div>
                        </div>
                    </div>
                    `;
                }).join('')}
            </div>
            `;
            
            // Setup card events
            container.querySelectorAll('.amanzi-product-card').forEach(card => {
                card.onclick = () => {
                    toggleProductExpansion(card);
                };
            });
            
            applyFilter();
        }

        // Accordion toggle expansion
        function toggleProductExpansion(cardElement) {
            const prodId = cardElement.getAttribute('data-prod-id');
            
            // Collapse if clicking the currently expanded card
            if (currentExpandedProductId === prodId) {
                collapseActiveProduct();
                if (window.rebindCursor) window.rebindCursor();
                return;
            }
            
            // Collapse existing
            collapseActiveProduct();
            
            currentExpandedProductId = prodId;
            cardElement.classList.add('expanded-active');
            
            const prod = AMANZI_PRODUCTS.find(p => p.id === prodId);
            
            // Create panel
            const panel = document.createElement('div');
            panel.className = 'amanzi-expanded-panel-row';
            panel.id = `expanded-panel-${prod.id}`;
            
            const galleryContent = prod.gallery.length === 0
                ? `
                  <div class="amanzi-gallery-empty-state">
                      <p style="font-family: var(--font-heading); font-size: 0.9rem; letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 8px;">No listing assets uploaded yet</p>
                      <p style="font-size: 0.8rem; font-weight: 300; max-width: 450px; margin: 0 auto; line-height: 1.5; color: var(--color-text-muted);">Manually place PNG files (image-01.png, image-02.png, etc.) inside the public/assets/amanzi/${prod.id}/ folder to automatically render them here.</p>
                  </div>
                  `
                : `
                  <div class="amanzi-gallery-masonry">
                      ${prod.gallery.map((imgSrc, imgIdx) => `
                          <div class="amanzi-gallery-image-card" data-img-url="${imgSrc}">
                              <img src="${imgSrc}" alt="${prod.name} Listing Image ${imgIdx + 1}" loading="lazy">
                          </div>
                      `).join('')}
                  </div>
                  `;

            panel.innerHTML = `
            <button class="amanzi-expanded-close-btn" aria-label="Close details">&times;</button>
            <div class="amanzi-expanded-content-grid">
                <!-- Details column -->
                <div class="amanzi-expanded-details-col">
                    <div>
                        <span class="amanzi-expanded-category-tag">${prod.category}</span>
                        <h3 class="amanzi-expanded-title-text">${prod.name}</h3>
                        
                        <div class="amanzi-expanded-meta-list">
                            <div class="amanzi-expanded-meta-item">
                                <span class="meta-label">Brand</span>
                                <span class="meta-value">Amanzi Fragrances</span>
                            </div>
                            <div class="amanzi-expanded-meta-item">
                                <span class="meta-label">Service</span>
                                <span class="meta-value">Amazon Listing Design</span>
                            </div>
                            <div class="amanzi-expanded-meta-item">
                                <span class="meta-label">Role</span>
                                <span class="meta-value">Lead Graphic Designer</span>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Prev/Next Navigation inside panel -->
                    <div class="amanzi-expanded-nav-block">
                        <button class="amanzi-expanded-nav-btn btn-prev">&larr; Previous Product</button>
                        <button class="amanzi-expanded-nav-btn btn-next">Next Product &rarr;</button>
                    </div>
                </div>
                
                <!-- Gallery column -->
                <div class="amanzi-expanded-gallery-col">
                    ${galleryContent}
                </div>
            </div>
            `;
            
            // Insert in DOM after cardElement
            cardElement.after(panel);
            
            // Trigger animation
            setTimeout(() => {
                panel.classList.add('visible');
            }, 10);
            
            // Scroll card into view
            cardElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            
            // Bind Close button
            panel.querySelector('.amanzi-expanded-close-btn').onclick = (e) => {
                e.stopPropagation();
                collapseActiveProduct();
                if (window.rebindCursor) window.rebindCursor();
            };
            
            // Bind gallery items to open fullscreen lightbox
            panel.querySelectorAll('.amanzi-gallery-image-card').forEach(item => {
                item.onclick = (e) => {
                    e.stopPropagation();
                    activeImagesList = prod.gallery;
                    openLightbox(item.getAttribute('data-img-url'));
                };
            });
            
            // Bind Prev/Next buttons
            panel.querySelector('.btn-prev').onclick = (e) => {
                e.stopPropagation();
                navigateProduct('prev');
            };
            panel.querySelector('.btn-next').onclick = (e) => {
                e.stopPropagation();
                navigateProduct('next');
            };
            
            if (window.rebindCursor) {
                window.rebindCursor();
            }
        }
        
        function collapseActiveProduct() {
            if (!currentExpandedProductId) return;
            const activeCard = container.querySelector(`.amanzi-product-card[data-prod-id="${currentExpandedProductId}"]`);
            if (activeCard) {
                activeCard.classList.remove('expanded-active');
            }
            const panel = container.querySelector(`.amanzi-expanded-panel-row`);
            if (panel) {
                panel.remove();
            }
            currentExpandedProductId = null;
        }
        
        function navigateProduct(direction) {
            const cards = Array.from(container.querySelectorAll('.amanzi-product-card'));
            const visibleCards = cards.filter(card => card.style.display !== 'none');
            if (visibleCards.length === 0) return;
            
            const currentIdx = visibleCards.findIndex(card => card.getAttribute('data-prod-id') === currentExpandedProductId);
            if (currentIdx === -1) return;
            
            let targetIdx = currentIdx + (direction === 'next' ? 1 : -1);
            if (targetIdx >= visibleCards.length) targetIdx = 0;
            if (targetIdx < 0) targetIdx = visibleCards.length - 1;
            
            const targetCard = visibleCards[targetIdx];
            
            // Toggle expansion of target card
            toggleProductExpansion(targetCard);
        }

        // Apply filtering
        function applyFilter() {
            collapseActiveProduct();
            
            const cards = container.querySelectorAll('.amanzi-product-card');
            cards.forEach(card => {
                const cardCat = card.getAttribute('data-category');
                
                if (activeFilter === 'all' || cardCat === activeFilter) {
                    card.style.display = 'flex';
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        card.style.transition = 'opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1), transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)';
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    card.style.display = 'none';
                }
            });
            
            if (window.rebindCursor) {
                window.rebindCursor();
            }
        }

        // Set up Filter Bar click listeners
        const filterBar = document.querySelector('.amanzi-filter-bar');
        if (filterBar) {
            const buttons = filterBar.querySelectorAll('.amanzi-filter-btn');
            buttons.forEach(btn => {
                btn.onclick = () => {
                    buttons.forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    activeFilter = btn.getAttribute('data-filter');
                    applyFilter();
                };
            });
        }

        // Initial render
        renderShowcaseGrid();
        return;
    }

    // Individual Client Case Study View Initialization
    const brandsRoot = document.getElementById('ecommerce-brands-root');
    if (!brandsRoot) return;

    // Lightbox elements
    const lightbox = document.getElementById('lightbox-overlay');
    const lightboxImg = document.getElementById('lightbox-image');
    const closeBtn = document.getElementById('lightbox-close');
    const prevBtn = document.getElementById('lightbox-prev-btn');
    const nextBtn = document.getElementById('lightbox-next-btn');

    let activeImagesList = [];
    let activeImgIndex = 0;

    function openLightbox(imgUrl) {
        if (!lightbox || !lightboxImg) return;
        activeImgIndex = activeImagesList.indexOf(imgUrl);
        if (activeImgIndex === -1) {
            activeImagesList = [imgUrl];
            activeImgIndex = 0;
        }
        updateLightboxContent();
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        if (!lightbox) return;
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
        lightboxImg.src = '';
    }

    function updateLightboxContent() {
        if (activeImgIndex < 0) {
            activeImgIndex = activeImagesList.length - 1;
        } else if (activeImgIndex >= activeImagesList.length) {
            activeImgIndex = 0;
        }
        lightboxImg.src = activeImagesList[activeImgIndex];
    }

    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
    if (prevBtn) {
        prevBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            activeImgIndex--;
            updateLightboxContent();
        });
    }
    if (nextBtn) {
        nextBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            activeImgIndex++;
            updateLightboxContent();
        });
    }
    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox || e.target.classList.contains('lightbox-wrapper')) {
                closeLightbox();
            }
        });
    }

    function handleKeyDown(e) {
        if (!lightbox || !lightbox.classList.contains('active')) return;
        if (e.key === 'Escape') closeLightbox();
        else if (e.key === 'ArrowLeft') {
            activeImgIndex--;
            updateLightboxContent();
        } else if (e.key === 'ArrowRight') {
            activeImgIndex++;
            updateLightboxContent();
        }
    }
    window.addEventListener('keydown', handleKeyDown);

    const cleanupRouter = () => {
        window.removeEventListener('keydown', handleKeyDown);
        window.removeEventListener('hashchange', cleanupRouter);
    };
    window.addEventListener('hashchange', cleanupRouter);

    const clientId = subRoute;
    const meta = CLIENT_META[clientId] || {
        name: clientId.toUpperCase().replace('-', ' '),
        description: "Custom brand communication and e-commerce design layout.",
        category: "E-Commerce Product",
        summary: "Commercial visual presentation, feature listing design, and conversion-focused infographics."
    };

    brandsRoot.innerHTML = `
    <section class="brand-detail-section" id="section-${clientId}" style="padding: var(--space-xl) 4vw; border-bottom: 1px solid var(--color-border);">
        <div class="container">
            <!-- Brand Header -->
            <div style="margin-bottom: var(--space-md);">
                <span style="font-family: var(--font-heading); color: var(--color-accent); font-weight: 600; font-size: 0.9rem; letter-spacing: 0.25em; text-transform: uppercase;">E-COMMERCE CLIENT CASE STUDY</span>
                <h3 style="font-size: clamp(2.5rem, 5vw, 3.5rem); font-weight: 900; letter-spacing: -0.02em; margin: 15px 0 10px 0; color: var(--color-text-light); text-transform: uppercase;">${meta.name}</h3>
                <p style="font-size: 1.15rem; color: var(--color-text-muted); font-weight: 300; line-height: 1.6; margin-bottom: 25px;">${meta.description}</p>
            </div>

            <!-- Navigation Tabs -->
            <div class="product-tabs" id="tabs-${clientId}">
                <!-- Loaded dynamically -->
            </div>

            <!-- Showcase Panel -->
            <div class="product-showcase-panel" id="showcase-panel-${clientId}">
                <!-- Loaded dynamically on tab selection -->
            </div>
        </div>
    </section>
    `;

    const pSubdirs = await fetchSubdirsFromFolder(`assets/ecommerce/${clientId}`);
    let products = pSubdirs || [];
    if (products.length === 0) {
        if (clientId === "camx") {
            products = ["am-01", "am-02", "am-03", "am-04"];
        } else {
            products = ["product-01"];
        }
    }

    const tabsContainer = document.getElementById(`tabs-${clientId}`);
    if (tabsContainer) {
        tabsContainer.innerHTML = products.map((prodId, pIdx) => {
            const label = prodId.toUpperCase().replace('-', ' ');
            return `
                <button class="product-tab-btn ${pIdx === 0 ? 'active' : ''}" data-client="${clientId}" data-product="${prodId}">
                    ${label}
                </button>
            `;
        }).join('');

        const tabButtons = tabsContainer.querySelectorAll('.product-tab-btn');
        tabButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                tabButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                loadProductShowcase(clientId, btn.getAttribute('data-product'));
            });
        });
    }

    if (products.length > 0) {
        loadProductShowcase(clientId, products[0]);
    }

    async function loadProductShowcase(cId, productId) {
        const showcasePanel = document.getElementById(`showcase-panel-${cId}`);
        if (!showcasePanel) return;

        showcasePanel.innerHTML = `
            <div style="text-align: center; padding: 40px; color: var(--color-text-muted);">
                <p style="font-family: var(--font-heading); font-size: 0.8rem; letter-spacing: 0.1em; text-transform: uppercase;">Loading product details...</p>
            </div>
        `;

        const listingFolderPath = `assets/ecommerce/${cId}/${productId}/listing/`;
        const aplusFolderPath = `assets/ecommerce/${cId}/${productId}/a-plus/`;

        const listingImages = await fetchImagesFromFolder(listingFolderPath);
        const aplusImages = await fetchImagesFromFolder(aplusFolderPath);

        const prodLabel = productId.toUpperCase().replace('-', ' ');

        showcasePanel.innerHTML = `
            <!-- Product Info Hero Grid -->
            <div class="product-metadata-grid">
                <div>
                    <h4 class="product-meta-title">Product Name</h4>
                    <p class="product-meta-value accent-text">${meta.name} - ${prodLabel}</p>
                </div>
                <div>
                    <h4 class="product-meta-title">Category &amp; Deliverables</h4>
                    <p class="product-meta-value"><strong>Category:</strong> ${meta.category}</p>
                    <p class="product-meta-value" style="margin-top: 5px;"><strong>Deliverables:</strong> Amazon Listing Design, Amazon A+ Content, Infographics, Technical Overlay Blueprint Sheets</p>
                </div>
                <div>
                    <h4 class="product-meta-title">Project Summary</h4>
                    <p class="product-meta-value">${meta.summary}</p>
                    <p class="product-meta-value" style="margin-top: 5px;"><strong>Role:</strong> Lead Graphic Designer</p>
                </div>
            </div>

            <!-- Listing Section -->
            <div style="margin-bottom: var(--space-xl);">
                <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 20px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 10px;">
                    <h4 style="font-family: var(--font-heading); color: var(--color-text-light); font-size: 0.9rem; letter-spacing: 0.15em; text-transform: uppercase; margin: 0; font-weight: 700;">01 / Amazon Listing Images</h4>
                    <span style="font-size: 0.8rem; color: var(--color-text-dark); text-transform: uppercase; letter-spacing: 0.05em;">Vertical creatives (1080 &times; 1350)</span>
                </div>
                <div class="masonry-grid" id="listing-grid-${cId}-${productId}">
                    <!-- Dynamically populated -->
                </div>
            </div>

            <!-- A+ Content Section -->
            <div style="margin-top: var(--space-xl);">
                <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 24px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 10px;">
                    <h4 style="font-family: var(--font-heading); color: var(--color-text-light); font-size: 0.9rem; letter-spacing: 0.15em; text-transform: uppercase; margin: 0; font-weight: 700;">02 / Amazon A+ Content</h4>
                    <span style="font-size: 0.8rem; color: var(--color-text-dark); text-transform: uppercase; letter-spacing: 0.05em;">Brand narratives &amp; modules</span>
                </div>
                <div class="aplus-container" id="aplus-grid-${cId}-${productId}">
                    <!-- Dynamically populated -->
                </div>
            </div>
        `;

        const listingGrid = document.getElementById(`listing-grid-${cId}-${productId}`);
        if (listingGrid) {
            if (listingImages && listingImages.length > 0) {
                listingGrid.innerHTML = listingImages.map((imgSrc, imgIdx) => `
                    <div class="masonry-item" data-img-url="${imgSrc}">
                        <img src="${imgSrc}" alt="Listing Image ${imgIdx + 1}" loading="lazy" class="gallery-image">
                    </div>
                `).join('');

                listingGrid.querySelectorAll('.masonry-item').forEach(item => {
                    item.addEventListener('click', () => {
                        activeImagesList = [...listingImages, ...aplusImages];
                        openLightbox(item.getAttribute('data-img-url'));
                    });
                });
            } else {
                listingGrid.innerHTML = `
                    <div class="upload-placeholder-card" id="upload-listing-${cId}-${productId}">
                        <div class="upload-placeholder-icon" style="color: var(--color-accent);">+</div>
                        <div class="upload-placeholder-text">Upload Listing Images</div>
                        <input type="file" id="input-listing-${cId}-${productId}" accept="image/*" multiple style="display: none;">
                    </div>
                `;
                const uploadCard = document.getElementById(`upload-listing-${cId}-${productId}`);
                const fileInput = document.getElementById(`input-listing-${cId}-${productId}`);
                if (uploadCard && fileInput) {
                    uploadCard.addEventListener('click', () => fileInput.click());
                    fileInput.addEventListener('change', async (e) => {
                        const files = Array.from(e.target.files);
                        if (files.length === 0) return;
                        uploadCard.style.pointerEvents = 'none';
                        uploadCard.querySelector('.upload-placeholder-text').textContent = 'Uploading...';
                        for (const file of files) {
                            await uploadFileToFolder(listingFolderPath, file);
                        }
                        loadProductShowcase(cId, productId);
                    });
                }
            }
        }

        const aplusGrid = document.getElementById(`aplus-grid-${cId}-${productId}`);
        if (aplusGrid) {
            if (aplusImages && aplusImages.length > 0) {
                aplusGrid.innerHTML = aplusImages.map((imgSrc, imgIdx) => `
                    <div class="aplus-module-card" data-img-url="${imgSrc}">
                        <img src="${imgSrc}" alt="A+ Module ${imgIdx + 1}" loading="lazy">
                    </div>
                `).join('');

                aplusGrid.querySelectorAll('.aplus-module-card').forEach(item => {
                    item.addEventListener('click', () => {
                        activeImagesList = [...listingImages, ...aplusImages];
                        openLightbox(item.getAttribute('data-img-url'));
                    });
                });
            } else {
                aplusGrid.innerHTML = `
                    <div class="upload-placeholder-card" id="upload-aplus-${cId}-${productId}" style="aspect-ratio: 97 / 30; min-height: 180px;">
                        <div class="upload-placeholder-icon" style="color: var(--color-accent);">+</div>
                        <div class="upload-placeholder-text">Upload A+ Content Modules</div>
                        <input type="file" id="input-aplus-${cId}-${productId}" accept="image/*" multiple style="display: none;">
                    </div>
                `;
                const uploadCard = document.getElementById(`upload-aplus-${cId}-${productId}`);
                const fileInput = document.getElementById(`input-aplus-${cId}-${productId}`);
                if (uploadCard && fileInput) {
                    uploadCard.addEventListener('click', () => fileInput.click());
                    fileInput.addEventListener('change', async (e) => {
                        const files = Array.from(e.target.files);
                        if (files.length === 0) return;
                        uploadCard.style.pointerEvents = 'none';
                        uploadCard.querySelector('.upload-placeholder-text').textContent = 'Uploading...';
                        for (const file of files) {
                            await uploadFileToFolder(aplusFolderPath, file);
                        }
                        loadProductShowcase(cId, productId);
                    });
                }
            }
        }

        if (window.rebindCursor) {
            window.rebindCursor();
        }
    }
}
