/**
 * Social Media Communication Page Controller
 */
import { initDynamicGallery } from '../src/utils.js';

const socialBrands = [
    {
        id: "aagaz-locks",
        name: "Aagaz Locks",
        industry: "Locks & Security Hardware",
        objective: "Created social media campaigns, product promotions, awareness creatives, and dealer engagement creatives for Aagaz Locks.",
        approach: "High-impact portrait graphics highlighting secure lock technology, modern finishes, and industrial strength standards.",
        folderPath: "assets/brand-communication/aagaz-locks/",
        images: []
    },
    {
        id: "goldwood-ply",
        name: "Goldwood Ply",
        industry: "Plywood & Home Infrastructure",
        objective: "Designed engaging visual campaigns, product showcases, festival designs, and dealer promotions representing premium plywood durability.",
        approach: "Warm timber textures, structural overlays, and clean corporate product positioning.",
        folderPath: "assets/brand-communication/goldwood-ply/",
        images: []
    },
    {
        id: "madhav-food-products",
        name: "Madhav Food Products",
        industry: "Consumer Packaged Foods",
        objective: "Crafted vibrant consumer-facing food creatives, festival promos, product story layouts, and promotional graphics.",
        approach: "Bright organic food hues, appetizing design elements, and high-impact visual messaging.",
        folderPath: "assets/brand-communication/madhav-food-products/",
        images: []
    },
    {
        id: "uninox-houseware",
        name: "Uninox Houseware",
        industry: "Premium Kitchenware & Utensils",
        objective: "Produced aesthetic product promotions, festival campaigns, kitchen visual concepts, and social media branding creatives.",
        approach: "Sleek metallic reflections, clean layouts, modern kitchen compositions, and product utility highlights.",
        folderPath: "assets/brand-communication/uninox-houseware/",
        images: []
    }
];

export function renderBrandComm() {
    const sectionsHtml = socialBrands.map((brand, index) => {
        return `
        <section class="brand-detail-section" id="${brand.id}" style="padding: var(--space-xl) 8vw; ${index % 2 === 1 ? 'background-color: var(--color-bg-pitch);' : ''} border-bottom: 1px solid var(--color-border);">
            <div class="container">
                <!-- Brand Header Section -->
                <div class="brand-detail-header" style="margin-bottom: var(--space-lg);">
                    <span style="font-family: var(--font-heading); color: var(--color-accent); font-weight: 600; font-size: 0.9rem; letter-spacing: 0.25em; text-transform: uppercase;">0${index + 1} / SOCIAL MEDIA BRAND</span>
                    <h3 class="brand-name" style="font-size: clamp(2.5rem, 5vw, 3.5rem); font-weight: 900; letter-spacing: -0.02em; margin: 15px 0 25px 0; color: var(--color-text-light); text-transform: uppercase;">${brand.name}</h3>
                    
                    <!-- Metadata Info Grid -->
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: var(--space-md); margin-top: var(--space-md); border-top: 1px solid var(--color-border); padding-top: var(--space-md); margin-bottom: var(--space-md);">
                        <div>
                            <h4 style="font-family: var(--font-heading); color: var(--color-text-dark); font-size: 0.75rem; letter-spacing: 0.15em; text-transform: uppercase; margin-bottom: 8px;">Industry</h4>
                            <p style="font-size: 1.1rem; font-weight: 600; color: var(--color-accent);">${brand.industry}</p>
                        </div>
                        <div>
                            <h4 style="font-family: var(--font-heading); color: var(--color-text-dark); font-size: 0.75rem; letter-spacing: 0.15em; text-transform: uppercase; margin-bottom: 8px;">Campaign Objective</h4>
                            <p style="font-size: 0.95rem; font-weight: 300; line-height: 1.6; color: var(--color-text-muted);">${brand.objective}</p>
                        </div>
                        <div>
                            <h4 style="font-family: var(--font-heading); color: var(--color-text-dark); font-size: 0.75rem; letter-spacing: 0.15em; text-transform: uppercase; margin-bottom: 8px;">Design Approach</h4>
                            <p style="font-size: 0.95rem; font-weight: 300; line-height: 1.6; color: var(--color-text-muted);">${brand.approach}</p>
                        </div>
                    </div>
                </div>

                <h4 style="font-family: var(--font-heading); color: var(--color-text-light); font-size: 0.85rem; letter-spacing: 0.2em; text-transform: uppercase; margin-bottom: 24px; font-weight: 600;">Campaign Gallery</h4>
                
                <!-- Masonry Gallery -->
                <div class="masonry-grid" id="grid-${brand.id}">
                    <!-- Loaded dynamically -->
                </div>

                <!-- Show More/Less Button Container -->
                <div id="toggle-container-${brand.id}" style="display: none; text-align: center; margin-top: var(--space-lg);">
                    <button class="btn btn-secondary toggle-gallery-btn" data-brand="${brand.id}" id="toggle-btn-${brand.id}">
                        <span>Show More</span>
                    </button>
                </div>
            </div>
        </section>
        `;
    }).join('');

    return `
    <!-- Case Study Hero -->
    <section class="case-study-hero" style="background-image: linear-gradient(180deg, rgba(10, 10, 10, 0.4) 0%, rgba(10, 10, 10, 0.95) 100%), radial-gradient(circle at center, #1a1a1a 0%, #050505 100%); min-height: 45vh;">
        <div class="container case-study-title-block">
            <span class="case-study-category">PORTFOLIO CATEGORY 01</span>
            <h1 class="case-study-title">Social Media Communication</h1>
            <p style="color: var(--color-text-muted); font-size: 1.15rem; max-width: 650px; font-weight: 300; margin-bottom: var(--space-md);">
                Social media campaigns, product promotions, awareness creatives, festival campaigns, dealer engagement creatives, and visual communication projects. Click any creative to preview in full resolution.
            </p>
            <a href="#home#selected-work" class="btn btn-secondary" style="padding: 0.75rem 1.5rem; font-size: 0.75rem;">
                &larr; Back to Portfolio
            </a>
        </div>
    </section>

    <!-- Brand Sections -->
    ${sectionsHtml}

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
}

export function initBrandComm() {
    // Lightbox Elements
    const lightbox = document.getElementById('lightbox-overlay');
    const lightboxImg = document.getElementById('lightbox-image');
    const closeBtn = document.getElementById('lightbox-close');
    const prevBtn = document.getElementById('lightbox-prev-btn');
    const nextBtn = document.getElementById('lightbox-next-btn');

    if (!lightbox || !lightboxImg) return;

    let activeBrandId = null;
    let activeImages = [];
    let currentImgIndex = 0;

    // Open Lightbox
    function openLightbox(brandId, imgIndex) {
        const campaign = socialBrands.find(b => b.id === brandId);
        if (!campaign || !campaign.images || campaign.images.length === 0) return;

        activeBrandId = brandId;
        activeImages = campaign.images;
        currentImgIndex = parseInt(imgIndex, 10);

        updateLightboxContent();
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden'; // Lock scrolling
    }

    // Close Lightbox
    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = ''; // Unlock scrolling
        lightboxImg.src = '';
    }

    // Update Lightbox Source
    function updateLightboxContent() {
        if (currentImgIndex < 0) {
            currentImgIndex = activeImages.length - 1;
        } else if (currentImgIndex >= activeImages.length) {
            currentImgIndex = 0;
        }
        lightboxImg.src = activeImages[currentImgIndex];
    }

    // Init Dynamic Galleries for each brand section
    socialBrands.forEach(brand => {
        initDynamicGallery(brand.id, brand.folderPath, (images) => {
            brand.images = images;

            // Handle Show More toggle container visibility
            const toggleContainer = document.getElementById(`toggle-container-${brand.id}`);
            const toggleBtn = document.getElementById(`toggle-btn-${brand.id}`);
            
            if (toggleContainer && toggleBtn) {
                if (images.length > 6) {
                    toggleContainer.style.display = 'block';
                    toggleBtn.querySelector('span').textContent = 'Show More';
                } else {
                    toggleContainer.style.display = 'none';
                }
            }

            // Click listener for lightbox triggers
            const grid = document.getElementById(`grid-${brand.id}`);
            if (grid) {
                const items = grid.querySelectorAll('.masonry-item');
                items.forEach(item => {
                    item.addEventListener('click', () => {
                        const imgIndex = item.getAttribute('data-img-index');
                        openLightbox(brand.id, imgIndex);
                    });
                });
            }
        }, "Upload Creative");

        // Add event listener to the toggle buttons
        const toggleBtn = document.getElementById(`toggle-btn-${brand.id}`);
        if (toggleBtn) {
            toggleBtn.addEventListener('click', () => {
                const grid = document.getElementById(`grid-${brand.id}`);
                if (!grid) return;

                const items = grid.querySelectorAll('.masonry-item');
                let isExpanded = false;

                items.forEach((item, index) => {
                    if (index >= 6) {
                        item.classList.toggle('gallery-item-hidden');
                        if (!item.classList.contains('gallery-item-hidden')) {
                            isExpanded = true;
                        }
                    }
                });

                toggleBtn.querySelector('span').textContent = isExpanded ? 'Show Less' : 'Show More';
            });
        }
    });

    // Lightbox controls binding
    closeBtn.addEventListener('click', closeLightbox);
    
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox || e.target.classList.contains('lightbox-wrapper')) {
            closeLightbox();
        }
    });

    prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        currentImgIndex--;
        updateLightboxContent();
    });

    nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        currentImgIndex++;
        updateLightboxContent();
    });

    function handleKeyDown(e) {
        if (!lightbox.classList.contains('active')) return;
        
        if (e.key === 'Escape') {
            closeLightbox();
        } else if (e.key === 'ArrowLeft') {
            currentImgIndex--;
            updateLightboxContent();
        } else if (e.key === 'ArrowRight') {
            currentImgIndex++;
            updateLightboxContent();
        }
    }
    
    window.addEventListener('keydown', handleKeyDown);

    const cleanupRouter = () => {
        window.removeEventListener('keydown', handleKeyDown);
        window.removeEventListener('hashchange', cleanupRouter);
    };
    window.addEventListener('hashchange', cleanupRouter);
}
