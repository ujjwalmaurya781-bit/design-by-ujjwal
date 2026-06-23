/**
 * Unified Portfolio & Universal Viewer Controller
 */
import { fetchImagesFromFolder } from '../src/utils.js';
import { supabase } from '../src/supabase.js';

// Static / fallback registry of projects for offline mode
export const STATIC_PROJECTS = [
    {
        id: "jewar-organics",
        name: "Jewar Organics Banners",
        brand: "Jewar Organics",
        category: "Campaigns",
        folderPath: "assets/campaigns/jewar-organics/",
        industry: "Organic Foods & Agriculture",
        objective: "Created advertising banners and promotional creatives for organic food products.",
        approach: "Natural visual language, premium organic presentation, and freshness-focused branding."
    },
    {
        id: "muscle-smith",
        name: "Muscle Smith Campaigns",
        brand: "Muscle Smith",
        category: "Campaigns",
        folderPath: "assets/projects/muscle-smith/designs/",
        industry: "Fitness & Sports Nutrition",
        objective: "Designed high-impact advertising creatives for fitness and nutrition products.",
        approach: "Bold typography, energetic compositions, and modern fitness branding."
    },
    {
        id: "rafaan-banners",
        name: "Rafaan Banners",
        brand: "Rafaan",
        category: "Campaigns",
        folderPath: "assets/campaigns/rafaan-banners/",
        industry: "Marketing & Advertising",
        objective: "Designed promotional, marketing, and advertising banners for brand awareness and product campaigns.",
        approach: "Wide-format horizontal compositions, bold product-forward layouts, and high-impact advertising visuals."
    },

    // --- BRAND COMMUNICATION ---
    {
        id: "aagaz-locks",
        name: "Aagaz Locks Branding",
        brand: "Aagaz Locks",
        category: "Brand Communication",
        folderPath: "assets/brand-communication/aagaz-locks/",
        industry: "Locks & Security Hardware",
        objective: "Created social media campaigns, product promotions, awareness creatives, and dealer engagement creatives.",
        approach: "High-impact portrait graphics highlighting secure lock technology and modern finishes."
    },
    {
        id: "goldwood-ply",
        name: "Goldwood Ply Campaigns",
        brand: "Goldwood Ply",
        category: "Brand Communication",
        folderPath: "assets/brand-communication/goldwood-ply/",
        industry: "Plywood & Home Infrastructure",
        objective: "Designed engaging visual campaigns, product showcases, festival designs, and dealer promotions.",
        approach: "Warm timber textures, structural overlays, and clean corporate product positioning."
    },
    {
        id: "madhav-food-products",
        name: "Madhav Food Branding",
        brand: "Madhav Food Products",
        category: "Brand Communication",
        folderPath: "assets/brand-communication/madhav-food-products/",
        industry: "Consumer Packaged Foods",
        objective: "Crafted vibrant consumer-facing food creatives, festival promos, and product story layouts.",
        approach: "Bright organic food hues, appetizing design elements, and high-impact visual messaging."
    },
    {
        id: "uninox-houseware",
        name: "Uninox Kitchen Creatives",
        brand: "Uninox Houseware",
        category: "Brand Communication",
        folderPath: "assets/brand-communication/uninox-houseware/",
        industry: "Premium Kitchenware & Utensils",
        objective: "Produced aesthetic product promotions, festival campaigns, kitchen visual concepts, and social media branding.",
        approach: "Sleek metallic reflections, clean layouts, modern kitchen compositions, and product utility highlights."
    },
    {
        id: "kelvin-pumps",
        name: "Kelvin Pumps Campaigns",
        brand: "Kelvin Pumps",
        category: "Brand Communication",
        folderPath: "assets/brand-communication/kelvin-pumps/",
        industry: "Industrial Pumps & Water Solutions",
        objective: "Designed product-focused social media campaigns, technical promotional creatives, and branding assets.",
        approach: "Technical and clean engineering diagrams, high-contrast product renders, and bold typography."
    },
    {
        id: "radicab-cables",
        name: "Radicab Cables Visuals",
        brand: "RADICAB CABLES",
        category: "Brand Communication",
        folderPath: "assets/brands/radicab-cables/",
        industry: "Electrical Cables & Wire Solutions",
        objective: "Designed product promotion campaigns, dealer communication creatives, and industrial marketing assets.",
        approach: "Clean industrial layouts, technical product highlighting, and strong brand visibility."
    },
    {
        id: "whitsun",
        name: "Whitsun Social Creatives",
        brand: "Whitsun",
        category: "Brand Communication",
        folderPath: "assets/brand-communication/whitsun/",
        industry: "Floor Cleaner & Home Hygiene",
        objective: "Designed social media posts, product promotions, festival creatives, and marketing engagement content for a home cleaning brand.",
        approach: "Fresh, clean visual language with vibrant hygiene-focused product storytelling and lifestyle appeal."
    },
    {
        id: "amanzi-social",
        name: "Amanzi Fragrances Social Media",
        brand: "Amanzi Fragrances",
        category: "Brand Communication",
        folderPath: "assets/brand-communication/amanzi-social/",
        industry: "Perfume & Fragrance",
        objective: "Designed social media creatives including product promotion posts, fragrance awareness content, festival designs, and brand engagement posts.",
        approach: "Luxurious fragrance lifestyle visuals, elegant product storytelling, and premium social media branding."
    },

    // --- PRODUCT RENDERS ---
    {
        id: "cgi-renders",
        name: "3D CGI Renders & Packshots",
        brand: "Ujjwal Maurya",
        category: "Product Renders",
        folderPath: "assets/renders/",
        industry: "Packaging & 3D Visualization",
        objective: "Created packaging renders, lifestyles, product visualization, and high-fidelity CGI arrangements.",
        approach: "Sleek textures, advanced studio lighting setups, and photorealistic CGI positioning."
    },

    // --- ECOMMERCE ---
    {
        id: "amanzi",
        name: "Amanzi Fragrances",
        brand: "Amanzi Fragrances",
        category: "Ecommerce",
        folderPath: "assets/ecommerce/amanzi/product-01/listing/",
        industry: "Luxury Fragrances & Personal Care",
        objective: "Designed a complete Amazon listing ecosystem for Amanzi Fragrances, covering 22 products across Roll On and Premium Collection categories.",
        approach: "Premium and luxury fragrance presentation with conversion-focused digital branding."
    },
    {
        id: "camx",
        name: "CAMX",
        brand: "CAMX",
        category: "Ecommerce",
        folderPath: "assets/ecommerce/camx/am-01/listing/",
        industry: "Camera Accessories",
        objective: "Drafted a complete e-commerce product listings and custom brand storytelling blueprint.",
        approach: "High-tolerance engineering designs and lifestyle camera accessory infographic layouts."
    },
    {
        id: "rumaisa",
        name: "Rumaisa Fragrance Listings",
        brand: "RUMAISA",
        category: "Ecommerce",
        folderPath: "assets/ecommerce/rumaisa/amara/listing/",
        industry: "Fragrances & Cosmetics",
        objective: "Designed luxury packaging listings and lifestyle infographics focusing on scents profiles and ingredients.",
        approach: "Exquisite and luxury fragrance bottle packaging and conversion branding."
    },
    {
        id: "petro-luxury",
        name: "Petro Luxury Storefront",
        brand: "PETRO LUXURY",
        category: "Ecommerce",
        folderPath: "assets/ecommerce/petro-luxury/product-01/listing/",
        industry: "Luxury Fragrances",
        objective: "Crafted high-fidelity commercial creatives and product infographics representing elite perfumes.",
        approach: "Elite aesthetics and lifestyle digital storefront designs."
    },
    {
        id: "leatherific",
        name: "Leatherific A+ Layouts",
        brand: "LEATHERIFIC",
        category: "Ecommerce",
        folderPath: "assets/ecommerce/leatherific/product-01/a-plus/",
        industry: "Premium Leather Goods",
        objective: "Structured e-commerce infographics emphasizing full-grain leather textures and utility specs.",
        approach: "Genuine leather accessories, tech sleeves, and travel goods storefront visuals."
    },
    {
        id: "storage-containers",
        name: "Kitchen Containers A+",
        brand: "STORAGE CONTAINERS",
        category: "Ecommerce",
        folderPath: "assets/ecommerce/storage-containers/product-01/listing/",
        industry: "Home & Kitchen",
        objective: "Drafted conversion-centric listings highlighting materials safety and space-saving layouts.",
        approach: "Smart home organization, kitchen storage, and modular stacking visuals."
    },
    {
        id: "elitemotion",
        name: "ELITEMOTION",
        brand: "ELITEMOTION",
        category: "Ecommerce",
        folderPath: "assets/ecommerce/elitemotion/listing/",
        industry: "Gym Chalk Powder",
        objective: "ELITEMOTION is a gym chalk powder brand used for Weightlifting, Powerlifting, CrossFit, Gym Training, and Grip Enhancement.",
        approach: "Premium Amazon listing images and A+ content for ELITEMOTION chalk powder."
    },
    {
        id: "tmc-leather-diary",
        name: "TMC LEATHER DIARY",
        brand: "TMC LEATHER DIARY",
        category: "Ecommerce",
        folderPath: "assets/ecommerce/tmc-leather-diary/listing/",
        industry: "Premium Leather Journals & Diaries",
        objective: "Designed premium Amazon listing creatives and A+ content showcasing craftsmanship, leather quality, durability, gifting appeal, and luxury presentation.",
        approach: "Luxury visual storytelling, premium product presentation, handcrafted detailing, lifestyle usage, and conversion-focused ecommerce design."
    }
];

let allProjectsData = [];
let activeCategoryFilter = 'all';

export function renderPortfolioView() {
    return `
    <!-- Universal Portfolio Hero -->
    <section class="case-study-hero" style="background-image: linear-gradient(180deg, rgba(10, 10, 10, 0.4) 0%, rgba(10, 10, 10, 0.95) 100%), radial-gradient(circle at center, #1a1a1a 0%, #050505 100%); min-height: 45vh; display: flex; align-items: center; justify-content: center; padding-top: 100px;">
        <div class="container case-study-title-block" style="text-align: center;">
            <span class="case-study-category" style="color: var(--color-accent); font-family: var(--font-heading); font-size: 0.9rem; font-weight: 600; letter-spacing: 0.25em; text-transform: uppercase; margin-bottom: 15px; display: block;">Creative Portfolio Archive</span>
            <h1 class="case-study-title" style="font-size: clamp(2.5rem, 6vw, 4rem); font-weight: 900; letter-spacing: -0.02em; margin-bottom: 10px; color: var(--color-text-light); text-transform: uppercase;">DESIGN WORK</h1>
            <p style="color: var(--color-text-muted); font-size: 1.15rem; font-weight: 300; max-width: 800px; margin: 0 auto 35px auto; line-height: 1.7;">
                Explore high-converting listing designs, premium package visuals, 3D CGI renders, and social media brand communication templates. Click any card to view the case study.
            </p>
            <a href="#selected-work" class="btn btn-secondary" style="padding: 0.75rem 1.5rem; font-size: 0.75rem; border-radius: 30px;">
                &larr; Back to Home
            </a>
        </div>
    </section>

    <!-- Unified Portfolio Section -->
    <section class="universal-portfolio-section" style="background-color: #030303; padding: 60px 4vw; min-height: 60vh;">
        <div class="container">
            <!-- Filter Bar -->
            <div class="universal-filter-bar">
                <button class="universal-filter-btn active" data-filter="all">All</button>
                <button class="universal-filter-btn" data-filter="Brand Communication">Brand Communication</button>
                <button class="universal-filter-btn" data-filter="Ecommerce">Ecommerce</button>
                <button class="universal-filter-btn" data-filter="Campaigns">Campaigns</button>
                <button class="universal-filter-btn" data-filter="Product Renders">Product Renders</button>
            </div>

            <!-- Loader -->
            <div id="portfolio-loader" style="text-align: center; padding: 80px 0; color: var(--color-text-muted);">
                <div class="spinner" style="border: 3px solid rgba(255,107,0,0.1); border-top: 3px solid var(--color-accent); border-radius: 50%; width: 40px; height: 40px; margin: 0 auto 20px auto; animation: spin 1s linear infinite;"></div>
                <p style="font-family: var(--font-heading); font-size: 0.9rem; letter-spacing: 0.1em; text-transform: uppercase;">Syncing Design Archive...</p>
            </div>

            <!-- Showcase Grid -->
            <div id="portfolio-showcase-grid" class="universal-showcase-grid" style="display: none;"></div>
        </div>
    </section>
    `;
}

export async function initPortfolioView(categoryFilter = 'all') {
    activeCategoryFilter = translateCategoryHash(categoryFilter);
    
    // Sync filter buttons active class
    const buttons = document.querySelectorAll('.universal-filter-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-filter').toLowerCase() === activeCategoryFilter.toLowerCase()) {
            btn.classList.add('active');
        }
    });

    await loadAllProjects();
    renderShowcaseGrid();
    setupFilters();
}

function translateCategoryHash(hash) {
    if (!hash || hash === 'all') return 'all';
    if (hash === 'ecommerce') return 'Ecommerce';
    if (hash === 'brand-comm') return 'Brand Communication';
    if (hash === 'campaigns') return 'Campaigns';
    if (hash === 'renders') return 'Product Renders';
    return hash;
}

async function loadAllProjects() {
    allProjectsData = [];

    // Try fetching from Supabase first
    let dbBrands = [];
    let dbProjects = [];
    if (supabase) {
        try {
            const { data: brands, error: bErr } = await supabase.from('brands').select('*');
            const { data: projects, error: pErr } = await supabase.from('projects').select('*').order('sort_order', { ascending: true });
            
            if (!bErr && !pErr && brands && projects) {
                dbBrands = brands;
                dbProjects = projects;
            }
        } catch (e) {
            console.error("Supabase fetch error, using local fallback: ", e);
        }
    }

    // Process static projects first
    for (const proj of STATIC_PROJECTS) {
        let images = await fetchImagesFromFolder(proj.folderPath);
        
        let coverImg = proj.coverImage || "";
        if (!coverImg && images.length > 0) {
            // Check if there is cover.png, cover.jpg, or use first image
            const cImg = images.find(img => img.toLowerCase().endsWith('/cover.png') || img.toLowerCase().endsWith('cover.jpg') || img.toLowerCase().endsWith('cover.png'));
            coverImg = cImg || images[0];
        }

        allProjectsData.push({
            id: proj.id,
            name: proj.name,
            brand: proj.brand,
            category: proj.category,
            coverImage: coverImg,
            images: images,
            isStatic: true
        });
    }

    // Merge in Supabase projects if they exist
    if (dbBrands.length > 0 && dbProjects.length > 0) {
        dbProjects.forEach(p => {
            const brandObj = dbBrands.find(b => b.id === p.brand_id);
            if (brandObj) {
                allProjectsData.push({
                    id: p.id,
                    name: p.name,
                    brand: brandObj.name,
                    category: brandObj.category,
                    coverImage: p.cover_image,
                    images: p.images || [],
                    isStatic: false
                });
            }
        });
    }
}

function getCategoryHash(category) {
    const cat = category.toLowerCase();
    if (cat.includes('brand')) return 'brand-comm';
    if (cat.includes('ecommerce') || cat.includes('e-commerce')) return 'ecommerce';
    if (cat.includes('campaign')) return 'campaigns';
    if (cat.includes('render')) return 'renders';
    if (cat.includes('ai')) return 'ai-creative';
    return 'ecommerce';
}

function renderShowcaseGrid() {
    const loader = document.getElementById('portfolio-loader');
    const grid = document.getElementById('portfolio-showcase-grid');
    if (!grid) return;

    // Filter projects based on active filter
    const filtered = allProjectsData.filter(proj => {
        // Exclude individual Amanzi child product pages from the main portfolio index
        // (these are sub-products like amanzi-meraki, amanzi-white-oud, etc.)
        // but allow top-level projects like amanzi-social (Brand Communication)
        const EXCLUDED_IDS = new Set([
            'amanzi-white-oud','amanzi-meraki','amanzi-green-ajmeri','amanzi-extreme-sx',
            'amanzi-choco-musk','amanzi-burj-dubai','amanzi-blue','amanzi-aladin',
            'amanzi-al-waridi','amanzi-ruh-gulab','amanzi-pink-sugar','amanzi-oudh-absolute',
            'amanzi-nature','amanzi-mysore-sandal','amanzi-mukhallat','amanzi-zeus',
            'amanzi-savage','amanzi-royal','amanzi-taj','amanzi-eternal',
            'amanzi-imperial','amanzi-french'
        ]);
        if (EXCLUDED_IDS.has(proj.id)) return false;

        if (activeCategoryFilter === 'all') return true;
        return proj.category.toLowerCase() === activeCategoryFilter.toLowerCase();
    });

    if (filtered.length === 0) {
        grid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 80px 0; color: var(--color-text-dark);">
            <h3 style="font-family: var(--font-heading); font-size: 1.5rem; text-transform: uppercase; margin-bottom: 8px;">No projects found</h3>
            <p style="font-size: 0.9rem; font-weight: 300;">Add items in the admin panel to populate this archive.</p>
        </div>
        `;
    } else {
        grid.innerHTML = filtered.map(proj => {
            const assetCount = proj.images.length;
            const coverSrc = proj.coverImage || "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'><rect width='100' height='100' fill='%23111'/><text x='50' y='50' fill='%23333' font-family='sans-serif' font-size='10' text-anchor='middle' alignment-baseline='middle'>COMING SOON</text></svg>";
            return `
            <div class="universal-project-card" data-proj-id="${proj.id}">
                <div class="universal-card-img-wrapper">
                    <img src="${coverSrc}" alt="${proj.name}" loading="lazy">
                    <div class="universal-card-overlay">
                        <span class="universal-card-view-text">View Work</span>
                    </div>
                </div>
                <div class="universal-card-info">
                    <div>
                        <h3 class="universal-card-name">${proj.name}</h3>
                        <span class="universal-card-type-tag">${proj.category}</span>
                    </div>
                    <div class="universal-card-meta">
                        <span class="universal-card-brand-label">${proj.brand}</span>
                        <span class="universal-card-counter">${assetCount} ${assetCount === 1 ? 'Asset' : 'Assets'}</span>
                    </div>
                </div>
            </div>
            `;
        }).join('');

        // Bind click events on cards to route to Case Study Page
        grid.querySelectorAll('.universal-project-card').forEach(card => {
            card.onclick = () => {
                const projId = card.getAttribute('data-proj-id');
                const proj = filtered.find(p => p.id === projId);
                if (proj) {
                    const catHash = getCategoryHash(proj.category);
                    window.location.hash = `#${catHash}/${projId}`;
                }
            };
        });
    }

    if (loader) loader.style.display = 'none';
    grid.style.display = 'grid';

    if (window.rebindCursor) {
        window.rebindCursor();
    }
}

function setupFilters() {
    const filterButtons = document.querySelectorAll('.universal-filter-btn');
    filterButtons.forEach(btn => {
        btn.onclick = () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            activeCategoryFilter = btn.getAttribute('data-filter');
            
            // Apply filtering transitions
            const grid = document.getElementById('portfolio-showcase-grid');
            if (grid) {
                grid.style.opacity = '0';
                grid.style.transform = 'translateY(10px)';
                grid.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                setTimeout(() => {
                    renderShowcaseGrid();
                    grid.style.opacity = '1';
                    grid.style.transform = 'translateY(0)';
                }, 300);
            }
        };
    });
}
