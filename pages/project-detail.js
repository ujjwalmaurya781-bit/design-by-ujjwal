import { fetchImagesFromFolder, assetsManifest, uploadFileToFolder } from '../src/utils.js';
import { supabase } from '../src/supabase.js';
import { STATIC_PROJECTS } from './portfolio-view.js';

// Central Registry of Projects with metadata, deliverables, stats, and sections
const PROJECT_REGISTRY = {
    "amanzi": {
        id: "amanzi",
        title: "Amanzi Fragrances",
        category: "Ecommerce",
        industry: "Luxury Fragrances & Personal Care",
        role: "Lead Graphic Designer",
        deliverables: "Amazon Listing Images, Product Graphics, Conversion Focused Ecommerce Creatives",
        overview: "Designed a complete Amazon listing ecosystem for Amanzi Fragrances, covering 22 products across Roll On and Premium Collection categories with conversion-focused product storytelling.",
        stats: [
            { num: "22", label: "Products", sub: "Amazon Listings" },
            { num: "17", label: "Roll Ons", sub: "Designed" },
            { num: "5", label: "Collections", sub: "Designed" },
            { num: "100+", label: "Creative Assets", sub: "Premium Fragrances" }
        ],
        layoutType: "amanzi",
        sections: [
            {
                title: "ROLL ON SERIES",
                items: [
                    { id: "white-oud", name: "White Oud", folder: "assets/ecommerce/amanzi/product-01/listing/", aplusFolder: "assets/ecommerce/amanzi/product-01/a-plus/" },
                    { id: "meraki", name: "Meraki", folder: "assets/ecommerce/amanzi/product-02-meraki/listing/", aplusFolder: "assets/ecommerce/amanzi/product-02-meraki/a-plus/" },
                    { id: "green-ajmeri", name: "Green Ajmeri", folder: "assets/ecommerce/amanzi/product-03-green-ajmeri/listing/", aplusFolder: "assets/ecommerce/amanzi/product-03-green-ajmeri/a-plus/" },
                    { id: "extreme-sx", name: "Extreme SX", folder: "assets/ecommerce/amanzi/product-04-extreme-sx/listing/", aplusFolder: "assets/ecommerce/amanzi/product-04-extreme-sx/a-plus/" },
                    { id: "choco-musk", name: "Choco Musk", folder: "assets/ecommerce/amanzi/product-05-choco-musk/listing/", aplusFolder: "assets/ecommerce/amanzi/product-05-choco-musk/a-plus/" },
                    { id: "burj-dubai", name: "Burj Dubai", folder: "assets/ecommerce/amanzi/product-06-burj-dubai/listing/", aplusFolder: "assets/ecommerce/amanzi/product-06-burj-dubai/a-plus/" },
                    { id: "blue", name: "Blue", folder: "assets/ecommerce/amanzi/product-07-blue/listing/", aplusFolder: "assets/ecommerce/amanzi/product-07-blue/a-plus/" },
                    { id: "aladin", name: "Aladin", folder: "assets/ecommerce/amanzi/product-08-aladin/listing/", aplusFolder: "assets/ecommerce/amanzi/product-08-aladin/a-plus/" },
                    { id: "al-waridi", name: "Al Waridi", folder: "assets/ecommerce/amanzi/product-09-al-waridi/listing/", aplusFolder: "assets/ecommerce/amanzi/product-09-al-waridi/a-plus/" },
                    { id: "ruh-gulab", name: "Ruh Gulab", folder: "assets/ecommerce/amanzi/product-10-ruh-gulab/listing/", aplusFolder: "assets/ecommerce/amanzi/product-10-ruh-gulab/a-plus/" },
                    { id: "pink-sugar", name: "Pink Sugar", folder: "assets/ecommerce/amanzi/product-11-pink-sugar/listing/", aplusFolder: "assets/ecommerce/amanzi/product-11-pink-sugar/a-plus/" },
                    { id: "oudh-absolute", name: "Oudh Absolute", folder: "assets/ecommerce/amanzi/product-12-oudh-absolute/listing/", aplusFolder: "assets/ecommerce/amanzi/product-12-oudh-absolute/a-plus/" },
                    { id: "nature", name: "Nature", folder: "assets/ecommerce/amanzi/product-13-nature/listing/", aplusFolder: "assets/ecommerce/amanzi/product-13-nature/a-plus/" },
                    { id: "mysore-sandal", name: "Mysore Sandal", folder: "assets/ecommerce/amanzi/product-14-mysore-sandal/listing/", aplusFolder: "assets/ecommerce/amanzi/product-14-mysore-sandal/a-plus/" },
                    { id: "mukhallat", name: "Mukhallat", folder: "assets/ecommerce/amanzi/product-15-mukhallat/listing/", aplusFolder: "assets/ecommerce/amanzi/product-15-mukhallat/a-plus/" },
                    { id: "zeus", name: "Zeus", folder: "assets/ecommerce/amanzi/product-16-zeus/listing/", aplusFolder: "assets/ecommerce/amanzi/product-16-zeus/a-plus/" },
                    { id: "savage", name: "Savage", folder: "assets/ecommerce/amanzi/product-17-savage/listing/", aplusFolder: "assets/ecommerce/amanzi/product-17-savage/a-plus/" }
                ]
            },
            {
                title: "PREMIUM COLLECTIONS",
                items: [
                    { id: "royal", name: "Royal", folder: "assets/ecommerce/amanzi/product-18-royal/listing/", aplusFolder: "assets/ecommerce/amanzi/product-18-royal/a-plus/" },
                    { id: "taj", name: "Taj", folder: "assets/ecommerce/amanzi/product-19-taj/listing/", aplusFolder: "assets/ecommerce/amanzi/product-19-taj/a-plus/" },
                    { id: "eternal", name: "Eternal", folder: "assets/ecommerce/amanzi/product-20-eternal/listing/", aplusFolder: "assets/ecommerce/amanzi/product-20-eternal/a-plus/" },
                    { id: "imperial", name: "Imperial", folder: "assets/ecommerce/amanzi/product-21-imperial/listing/", aplusFolder: "assets/ecommerce/amanzi/product-21-imperial/a-plus/" },
                    { id: "french", name: "French", folder: "assets/ecommerce/amanzi/product-22-french/listing/", aplusFolder: "assets/ecommerce/amanzi/product-22-french/a-plus/" }
                ]
            }
        ]
    },
    "goldwood-ply": {
        id: "goldwood-ply",
        title: "Goldwood Ply",
        category: "Brand Communication",
        industry: "Plywood & Home Infrastructure",
        role: "Lead Designer",
        deliverables: "Social Media Campaigns, Corporate Dealer Promotions, Visual Graphics",
        overview: "Designed engaging visual campaigns, product showcases, festival designs, and dealer promotions representing premium plywood durability.",
        stats: [
            { num: "Goldwood", label: "Brand Partner", sub: "Plywood" },
            { num: "Gallery", label: "Visuals", sub: "Delivered" }
        ],
        layoutType: "standard",
        sections: [
            {
                title: "CREATIVE GALLERY",
                items: [
                    { id: "goldwood-ply-gallery", name: "Goldwood Ply Gallery", folder: "assets/brand-communication/goldwood-ply/" }
                ]
            }
        ]
    },
    "muscle-smith": {
        id: "muscle-smith",
        title: "Muscle Smith",
        category: "Campaigns",
        industry: "Fitness & Sports Nutrition",
        role: "Lead Graphic Designer",
        deliverables: "High-Impact Ad Creatives, Performance Marketing Graphics, Product Promos",
        overview: "Designed high-impact advertising creatives for fitness and nutrition products to improve engagement and campaign performance.",
        stats: [
            { num: "MuscleSmith", label: "Brand Partner", sub: "Sports Nutrition" },
            { num: "Gallery", label: "Ad Creatives", sub: "Delivered" }
        ],
        layoutType: "standard",
        sections: [
            {
                title: "CREATIVE GALLERY",
                items: [
                    { id: "muscle-smith-gallery", name: "Muscle Smith Gallery", folder: "assets/projects/muscle-smith/designs/" }
                ]
            }
        ]
    },
    "radicab-cables": {
        id: "radicab-cables",
        title: "Radicab Cables",
        category: "Brand Communication",
        industry: "Electrical Cables & Wire Solutions",
        role: "Graphic Designer",
        deliverables: "Product Promotion Banners, Dealer Communication Visuals",
        overview: "Designed product promotion campaigns, dealer communication creatives, and electrical infrastructure themes.",
        stats: [
            { num: "Radicab", label: "Brand Partner", sub: "Cable Solutions" },
            { num: "Gallery", label: "Visuals", sub: "Created" }
        ],
        layoutType: "standard",
        sections: [
            {
                title: "CREATIVE GALLERY",
                items: [
                    { id: "radicab-gallery", name: "Radicab Cables Gallery", folder: "assets/brands/radicab-cables/" }
                ]
            }
        ]
    },
    "kelvin-pumps": {
        id: "kelvin-pumps",
        title: "Kelvin Pumps",
        category: "Brand Communication",
        industry: "Industrial Pumps & Water Solutions",
        role: "Visual Storyteller",
        deliverables: "Technical Infographics, Brand Engagement Graphics",
        overview: "Designed product-focused social media campaigns and technical promotional creatives.",
        stats: [
            { num: "Kelvin", label: "Brand Partner", sub: "Water Solutions" },
            { num: "Gallery", label: "Creatives", sub: "Created" }
        ],
        layoutType: "standard",
        sections: [
            {
                title: "CREATIVE GALLERY",
                items: [
                    { id: "kelvin-gallery", name: "Kelvin Pumps Gallery", folder: "assets/brand-communication/kelvin-pumps/" }
                ]
            }
        ]
    },
    "whitsun": {
        id: "whitsun",
        title: "Whitsun",
        category: "Brand Communication",
        industry: "Floor Cleaner & Home Hygiene",
        role: "Graphic Designer",
        deliverables: "Social Media Posts, Product Promotions, Festival Creatives, Marketing Creatives",
        overview: "Designed a complete set of social media creatives for Whitsun — a home cleaning and floor hygiene brand — including product promotions, awareness posts, festival designs, and engagement content.",
        stats: [
            { num: "Whitsun", label: "Brand Partner", sub: "Home Hygiene" },
            { num: "Gallery", label: "Creatives", sub: "Delivered" }
        ],
        layoutType: "standard",
        sections: [
            {
                title: "SOCIAL MEDIA CREATIVE GALLERY",
                items: [
                    { id: "whitsun-gallery", name: "Whitsun Social Creatives", folder: "assets/brand-communication/whitsun/" }
                ]
            }
        ]
    },
    "amanzi-social": {
        id: "amanzi-social",
        title: "Amanzi Fragrances",
        category: "Brand Communication",
        industry: "Perfume & Fragrance",
        role: "Graphic Designer",
        deliverables: "Social Media Posts, Product Promotions, Festival Creatives, Brand Awareness Creatives",
        overview: "Designed a complete social media creative suite for Amanzi Fragrances — a premium perfume brand — including product promotions, fragrance awareness posts, festival designs, and brand engagement content.",
        stats: [
            { num: "Amanzi", label: "Brand Partner", sub: "Fragrances" },
            { num: "Gallery", label: "Creatives", sub: "Delivered" }
        ],
        layoutType: "standard",
        sections: [
            {
                title: "SOCIAL MEDIA CREATIVE GALLERY",
                items: [
                    { id: "amanzi-social-gallery", name: "Amanzi Social Creatives", folder: "assets/brand-communication/amanzi-social/" }
                ]
            }
        ]
    },
    "cgi-renders": {
        id: "cgi-renders",
        title: "Product Rendering",
        category: "Product Renders",
        industry: "Packaging & 3D Visualization",
        role: "3D Render & CGI Artist",
        deliverables: "Packaging Renders, Lifestyle Compositions, High-Fidelity CGI Arrangements",
        overview: "Created high-fidelity product renders and packaging visualization to highlight structural details and texture configurations.",
        stats: [
            { num: "1", label: "Showcase", sub: "3D Packshots" },
            { num: "10+", label: "High-Res CGI", sub: "Completed" }
        ],
        layoutType: "standard",
        sections: [
            {
                title: "GALLERY Showcase",
                items: [
                    { id: "3d-renders", name: "3D Renders & CGI", folder: "assets/renders/" }
                ]
            }
        ]
    },
    "futuristic-shoe": {
        id: "futuristic-shoe",
        title: "Futuristic Footwear Design",
        category: "AI Creative",
        industry: "Athletic Wear Concept",
        role: "AI Creative Specialist",
        deliverables: "AI Generative Concepts, Photoshop Composites",
        overview: "Explored AI-driven industrial product design and texture generation, merging generative design with custom graphic adjustments.",
        stats: [
            { num: "1", label: "Concept", sub: "Footwear Draft" },
            { num: "1", label: "Composite", sub: "Completed" }
        ],
        layoutType: "standard",
        sections: [
            {
                title: "AI CONCEPT",
                items: [
                    { id: "footwear-vis", name: "Futuristic Footwear Design", folder: "assets/ai-creative/", filterKeywords: ["shoe"] }
                ]
            }
        ]
    },
    "perfume-splash": {
        id: "perfume-splash",
        title: "Luxury Perfume Visual",
        category: "AI Creative",
        industry: "Cosmetics Campaign Concept",
        role: "AI Art Director",
        deliverables: "AI Backdrop Renders, Packaging Mockups, Color Grading",
        overview: "Designed premium advertising packshots by combining AI rendering workflows with standard packaging compositing.",
        stats: [
            { num: "1", label: "Campaign", sub: "Cosmetics Concept" },
            { num: "1", label: "CGI Visual", sub: "Completed" }
        ],
        layoutType: "standard",
        sections: [
            {
                title: "AI CAMPAIGN CONCEPT",
                items: [
                    { id: "perfume-vis", name: "Luxury Perfume Visual", folder: "assets/ai-creative/", filterKeywords: ["splash"] }
                ]
            }
        ]
    },
    "jewar-organics": {
        id: "jewar-organics",
        title: "Jewar Organics Banners",
        category: "Campaigns",
        industry: "Organic Foods & Agriculture",
        role: "Graphic Designer",
        deliverables: "Social Media Ads, Banner Promos",
        overview: "Created advertising banners and promotional creatives for organic food products. Natural visual language, premium organic presentation, and freshness-focused branding.",
        stats: [
            { num: "1", label: "Brand", sub: "Jewar Organics" },
            { num: "10+", label: "Assets", sub: "Delivered" }
        ],
        layoutType: "standard",
        sections: [
            {
                title: "ADVERTISING BANNERS",
                items: [
                    { id: "jewar-organics-listing", name: "Campaign Visuals", folder: "assets/campaigns/jewar-organics/" }
                ]
            }
        ]
    },
    "rafaan-banners": {
        id: "rafaan-banners",
        title: "Rafaan Banners",
        category: "Campaigns",
        industry: "Marketing & Advertising",
        role: "Graphic Designer",
        deliverables: "Promotional Banners, Marketing Banners, Advertising Banners, Product Banners, Brand Awareness Banners",
        overview: "Designed a complete set of promotional and advertising banners for Rafaan — including product promotion banners, brand awareness creatives, and marketing campaign visuals with bold horizontal compositions.",
        stats: [
            { num: "Rafaan", label: "Brand Partner", sub: "Advertising" },
            { num: "Gallery", label: "Banners", sub: "Delivered" }
        ],
        layoutType: "standard",
        sections: [
            {
                title: "BANNER GALLERY",
                items: [
                    { id: "rafaan-gallery", name: "Rafaan Banner Creatives", folder: "assets/campaigns/rafaan-banners/" }
                ]
            }
        ]
    },
    "camx": {
        id: "camx",
        title: "CAMX",
        category: "Ecommerce",
        industry: "Camera Accessories",
        role: "Graphic Designer",
        deliverables: "Amazon Listings, Technical Graphics",
        overview: "Drafted a complete e-commerce product listings and custom brand storytelling blueprint showing high-tolerance engineering designs.",
        stats: [
            { num: "2", label: "Products", sub: "Amazon Listings" },
            { num: "2", label: "Designed", sub: "Active Galleries" }
        ],
        layoutType: "amanzi",
        sections: [
            {
                title: "CAMX COLLECTION",
                items: [
                    { id: "am-01", name: "AM-01", folder: "assets/ecommerce/camx/am-01/listing/", aplusFolder: "assets/ecommerce/camx/am-01/a-plus/" },
                    { id: "am-02", name: "AM-02", folder: "assets/ecommerce/camx/am-02/listing/", aplusFolder: "assets/ecommerce/camx/am-02/a-plus/" }
                ]
            }
        ]
    },
    "rumaisa": {
        id: "rumaisa",
        title: "Rumaisa Fragrance Listings",
        category: "Ecommerce",
        industry: "Fragrances & Cosmetics",
        role: "Lead Designer",
        deliverables: "Listing Design, Packaging Presentation",
        overview: "Designed luxury packaging listings and lifestyle infographics focusing on scents profiles, ingredients highlights, and premium bottle designs.",
        stats: [
            { num: "4", label: "Products", sub: "Amazon Listings" },
            { num: "1", label: "Designed", sub: "Active Galleries" }
        ],
        layoutType: "amanzi",
        sections: [
            {
                title: "RUMAISA COLLECTION",
                items: [
                    { id: "amara", name: "AMARA", folder: "assets/ecommerce/rumaisa/amara/listing/", aplusFolder: "assets/ecommerce/rumaisa/amara/a-plus/" },
                    { id: "veloura", name: "VELOURA", folder: "assets/ecommerce/rumaisa/veloura/listing/", aplusFolder: "assets/ecommerce/rumaisa/veloura/a-plus/" },
                    { id: "lavance", name: "LAVANCE", folder: "assets/ecommerce/rumaisa/lavance/listing/", aplusFolder: "assets/ecommerce/rumaisa/lavance/a-plus/" },
                    { id: "cigarette-pack-perfumes", name: "CIGARETTE PACK PERFUMES", folder: "assets/ecommerce/rumaisa/cigarette-pack-perfumes/listing/", aplusFolder: "assets/ecommerce/rumaisa/cigarette-pack-perfumes/a-plus/" }
                ]
            }
        ]
    },
    "petro-luxury": {
        id: "petro-luxury",
        title: "Petro Luxury Storefront",
        category: "Ecommerce",
        industry: "Luxury Fragrances",
        role: "Lead Designer",
        deliverables: "E-commerce Graphics, Storefront Visuals",
        overview: "Crafted high-fidelity commercial creatives and product infographics representing elite perfumes, luxury lifestyles, and conversion banners.",
        stats: [
            { num: "1", label: "Brand", sub: "PETRO LUXURY" },
            { num: "8", label: "Assets", sub: "Delivered" }
        ],
        layoutType: "standard",
        sections: [
            {
                title: "BASIC LISTING IMAGES",
                items: [
                    { id: "petro-luxury-listing", name: "Premium Perfume Graphics", folder: "assets/ecommerce/petro-luxury/product-01/listing/" }
                ]
            },
            {
                title: "A+ CONTENT",
                items: [
                    { id: "petro-luxury-aplus", name: "A+ Content Modules", folder: "assets/ecommerce/petro-luxury/product-01/a-plus/" }
                ]
            }
        ]
    },
    "leatherific": {
        id: "leatherific",
        title: "Leatherific A+ Layouts",
        category: "Ecommerce",
        industry: "Premium Leather Goods",
        role: "Lead Designer",
        deliverables: "Amazon A+ Content Modules",
        overview: "Structured e-commerce infographics emphasizing full-grain leather textures, precise stitching craftsmanship, and utility specifications.",
        stats: [
            { num: "1", label: "Brand", sub: "LEATHERIFIC" },
            { num: "7", label: "Assets", sub: "Delivered" }
        ],
        layoutType: "standard",
        sections: [
            {
                title: "BASIC LISTING IMAGES",
                items: [
                    { id: "leatherific-listing", name: "Product Listing Graphics", folder: "assets/ecommerce/leatherific/product-01/listing/" }
                ]
            },
            {
                title: "A+ CONTENT",
                items: [
                    { id: "leatherific-aplus", name: "Amazon A+ Modules", folder: "assets/ecommerce/leatherific/product-01/a-plus/" }
                ]
            }
        ]
    },
    "storage-containers": {
        id: "storage-containers",
        title: "Kitchen Containers A+",
        category: "Ecommerce",
        industry: "Home & Kitchen",
        role: "Graphic Designer",
        deliverables: "Amazon A+ Content Layouts",
        overview: "Drafted conversion-centric listings highlighting materials safety, space-saving layouts, modular stacking, and everyday convenience.",
        stats: [
            { num: "1", label: "Brand", sub: "STORAGE CONTAINERS" },
            { num: "6", label: "Assets", sub: "Delivered" }
        ],
        layoutType: "standard",
        sections: [
            {
                title: "BASIC LISTING IMAGES",
                items: [
                    { id: "storage-containers-listing", name: "Product Listing Graphics", folder: "assets/ecommerce/storage-containers/product-01/listing/" }
                ]
            },
            {
                title: "A+ CONTENT",
                items: [
                    { id: "storage-containers-aplus", name: "A+ Content Modules", folder: "assets/ecommerce/storage-containers/product-01/a-plus/" }
                ]
            }
        ]
    },
    "elitemotion": {
        id: "elitemotion",
        title: "ELITEMOTION",
        category: "Ecommerce",
        industry: "Gym Chalk Powder",
        role: "Graphic Designer",
        deliverables: "Amazon Listing Images, A+ Content",
        overview: "ELITEMOTION is a gym chalk powder brand used for Weightlifting, Powerlifting, CrossFit, Gym Training, and Grip Enhancement.",
        stats: [
            { num: "ELITEMOTION", label: "Gym Chalk Powder", sub: "Brand Partner" },
            { num: "Amazon", label: "Listing & A+", sub: "Infographics" }
        ],
        layoutType: "standard",
        sections: [
            {
                title: "BASIC LISTING IMAGES",
                items: [
                    { id: "elitemotion-listing", name: "Gym Chalk Powder Graphics", folder: "assets/ecommerce/elitemotion/listing/" }
                ]
            },
            {
                title: "A+ CONTENT",
                items: [
                    { id: "elitemotion-aplus", name: "A+ Content Modules", folder: "assets/ecommerce/elitemotion/a-plus/" }
                ]
            }
        ]
    },
    "tmc-leather-diary": {
        id: "tmc-leather-diary",
        title: "TMC LEATHER DIARY",
        category: "Ecommerce",
        industry: "Premium Leather Journals & Diaries",
        role: "Lead Designer",
        deliverables: "Amazon Listing Images, A+ Content",
        overview: "Designed premium Amazon listing creatives and A+ content showcasing craftsmanship, leather quality, durability, gifting appeal, and luxury presentation.",
        stats: [
            { num: "TMC", label: "Leather Diary", sub: "Brand Partner" },
            { num: "Amazon", label: "Listing & A+", sub: "Infographics" }
        ],
        layoutType: "standard",
        sections: [
            {
                title: "BASIC LISTING IMAGES",
                items: [
                    { id: "tmc-leather-diary-listing", name: "Premium Leather Journal Listings", folder: "assets/ecommerce/tmc-leather-diary/listing/" }
                ]
            },
            {
                title: "A+ CONTENT",
                items: [
                    { id: "tmc-leather-diary-aplus", name: "A+ Content Modules", folder: "assets/ecommerce/tmc-leather-diary/a-plus/" }
                ]
            }
        ]
    }
};

let currentProject = null;
let projectImagesList = []; // Flat list of images for lightbox
let currentImgIndex = 0;

// Helper to lookup previous and next projects within the same category scoped in STATIC_PROJECTS
function getNextPrevProjects(currentId, category) {
    const sameCategoryProjects = STATIC_PROJECTS.filter(p => p.category === category);
    if (sameCategoryProjects.length <= 1) return { prev: null, next: null };
    
    const currentIndex = sameCategoryProjects.findIndex(p => p.id === currentId);
    if (currentIndex === -1) return { prev: null, next: null };
    
    const prevIndex = (currentIndex - 1 + sameCategoryProjects.length) % sameCategoryProjects.length;
    const nextIndex = (currentIndex + 1) % sameCategoryProjects.length;
    
    let prev = sameCategoryProjects[prevIndex];
    let next = sameCategoryProjects[nextIndex];
    
    // If they point to the same project (occurs when length is 2)
    if (prev.id === next.id) {
        next = null;
    }
    
    return { prev, next };
}

// Helper to build the sticky project navigation bar below the main header
function buildTopNextPrevNavigationHTML(proj) {
    const { prev, next } = getNextPrevProjects(proj.id, proj.category);

    const catHash = proj.category.toLowerCase().includes('brand') ? 'brand-comm' :
                    proj.category.toLowerCase().includes('ecommerce') ? 'ecommerce' :
                    proj.category.toLowerCase().includes('campaign') ? 'campaigns' :
                    proj.category.toLowerCase().includes('render') ? 'renders' : 'ecommerce';

    const catLabel = proj.category === 'Brand Communication' ? 'Brand Communication' :
                     proj.category === 'Ecommerce' ? 'Ecommerce' :
                     proj.category === 'Campaigns' ? 'Campaigns' :
                     proj.category === 'Product Renders' ? 'Product Renders' : proj.category;

    const prevHtml = prev
        ? `<a href="#${catHash}/${prev.id}" class="proj-nav-action" id="proj-nav-prev" title="Previous: ${prev.brand || prev.name}">
               <span class="proj-nav-arrow">&larr;</span>
               <span class="proj-nav-label">Prev</span>
           </a>`
        : `<span class="proj-nav-action proj-nav-action--disabled">
               <span class="proj-nav-arrow">&larr;</span>
               <span class="proj-nav-label">Prev</span>
           </span>`;

    const nextHtml = next
        ? `<a href="#${catHash}/${next.id}" class="proj-nav-action" id="proj-nav-next" title="Next: ${next.brand || next.name}">
               <span class="proj-nav-label">Next</span>
               <span class="proj-nav-arrow">&rarr;</span>
           </a>`
        : `<span class="proj-nav-action proj-nav-action--disabled">
               <span class="proj-nav-label">Next</span>
               <span class="proj-nav-arrow">&rarr;</span>
           </span>`;

    return `
        <!-- Sticky Project Navigation Bar -->
        <div class="sticky-proj-nav" id="sticky-proj-nav">
            <div class="sticky-proj-nav__inner">
                <!-- Left: Back to Category -->
                <a href="#${catHash}" class="proj-nav-action proj-nav-back" id="proj-nav-back">
                    <span class="proj-nav-arrow">&larr;</span>
                    <span class="proj-nav-label">Back to <span class="proj-nav-cat">${catLabel}</span></span>
                </a>

                <!-- Center: Prev / Category breadcrumb / Next -->
                <div class="proj-nav-center">
                    ${prevHtml}
                    <a href="#${catHash}" class="proj-nav-cat-chip">${catLabel}</a>
                    ${nextHtml}
                </div>

                <!-- Right: Home -->
                <a href="#home" class="proj-nav-action proj-nav-home" id="proj-nav-home">
                    <span class="proj-nav-label">Home</span>
                    <svg class="proj-nav-home-icon" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 9.5L10 3l7 6.5V17a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 18v-6h4v6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </a>
            </div>
        </div>
    `;
}

// Helper to build Next/Prev scoped navigation buttons at the bottom of case studies
function buildNextPrevNavigationHTML(proj) {
    const { prev, next } = getNextPrevProjects(proj.id, proj.category);

    const catHash = proj.category.toLowerCase().includes('brand') ? 'brand-comm' :
                    proj.category.toLowerCase().includes('ecommerce') ? 'ecommerce' :
                    proj.category.toLowerCase().includes('campaign') ? 'campaigns' :
                    proj.category.toLowerCase().includes('render') ? 'renders' : 'ecommerce';

    const catLabel = proj.category === 'Brand Communication' ? 'Brand Communication' :
                     proj.category === 'Ecommerce' ? 'Ecommerce' :
                     proj.category === 'Campaigns' ? 'Campaigns' :
                     proj.category === 'Product Renders' ? 'Product Renders' : proj.category;

    let prevHtml = "";
    if (prev) {
        prevHtml = `
            <a href="#${catHash}/${prev.id}" class="next-prev-btn prev-btn" style="display: flex; flex-direction: column; align-items: flex-start; text-decoration: none; transition: all 0.3s ease;">
                <span style="font-family: var(--font-heading); font-size: 0.72rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--color-text-dark); margin-bottom: 5px;">&larr; Previous Brand</span>
                <span class="next-prev-brand-name" style="font-family: var(--font-heading); font-size: 1.15rem; font-weight: 700; color: var(--color-text-light); text-transform: uppercase; transition: color 0.3s ease;">${prev.brand || prev.name}</span>
            </a>
        `;
    } else {
        prevHtml = `<div></div>`;
    }

    let nextHtml = "";
    if (next) {
        nextHtml = `
            <a href="#${catHash}/${next.id}" class="next-prev-btn next-btn" style="display: flex; flex-direction: column; align-items: flex-end; text-decoration: none; transition: all 0.3s ease; text-align: right;">
                <span style="font-family: var(--font-heading); font-size: 0.72rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--color-text-dark); margin-bottom: 5px;">Next Brand &rarr;</span>
                <span class="next-prev-brand-name" style="font-family: var(--font-heading); font-size: 1.15rem; font-weight: 700; color: var(--color-text-light); text-transform: uppercase; transition: color 0.3s ease;">${next.brand || next.name}</span>
            </a>
        `;
    } else {
        nextHtml = `<div></div>`;
    }

    return `
        <!-- Bottom Navigation -->
        <section class="next-prev-navigation-section" style="background-color: #050505; border-top: 1px solid var(--color-border); padding: 50px 4vw;">
            <div class="container" style="display: flex; flex-direction: column; align-items: center; gap: 30px;">
                <style>
                    .next-prev-btn:hover .next-prev-brand-name {
                        color: var(--color-accent) !important;
                    }
                    @media (max-width: 576px) {
                        .bottom-nav-row {
                            flex-direction: column;
                            align-items: stretch;
                            gap: 20px;
                        }
                        .next-prev-btn {
                            width: 100%;
                            padding: 15px;
                            background: #080808;
                            border: 1px solid var(--color-border);
                            border-radius: 12px;
                        }
                        .next-prev-btn.next-btn {
                            align-items: flex-start !important;
                            text-align: left !important;
                        }
                    }
                </style>
                <!-- Prev / Next row -->
                <div class="bottom-nav-row" style="display: flex; justify-content: space-between; align-items: center; gap: 30px; width: 100%;">
                    ${prevHtml}
                    ${nextHtml}
                </div>
                <!-- Back to Category + Back to Top row -->
                <div style="display: flex; align-items: center; gap: 16px; flex-wrap: wrap; justify-content: center;">
                    <a href="#${catHash}" class="bottom-nav-cat-btn">&larr; Back to ${catLabel}</a>
                    <button onclick="window.scrollTo({top: 0, behavior: 'smooth'})" class="bottom-nav-top-btn">Back to Top &uarr;</button>
                </div>
            </div>
        </section>
    `;
}

// Helper function to build dynamic project detail page HTML
export function buildProjectDetailHTML(proj) {
    const catHash = proj.category.toLowerCase().includes('brand') ? 'brand-comm' :
                    proj.category.toLowerCase().includes('ecommerce') ? 'ecommerce' :
                    proj.category.toLowerCase().includes('campaign') ? 'campaigns' :
                    proj.category.toLowerCase().includes('render') ? 'renders' : 'ecommerce';
    const backRoute = '#' + catHash;
    const statsHtml = proj.stats.map(s => `
        <div class="case-stat-card">
            <div class="case-stat-num">${s.num}</div>
            <div class="case-stat-label">${s.label}</div>
            <div class="case-stat-sub">${s.sub}</div>
        </div>
    `).join('');

    let sectionsHtml = "";
    let chipsHtml = "";

    const allItems = proj.sections.flatMap(s => s.items);
    if (proj.layoutType === "amanzi" || allItems.length > 5) {
        chipsHtml = `
        <div class="project-chips-wrapper" style="position: sticky; top: 70px; z-index: 100; display: flex; flex-wrap: wrap; gap: 12px; padding: 18px 0; background: rgba(3, 3, 3, 0.96); backdrop-filter: blur(16px); margin-bottom: 40px; border-bottom: 1px solid var(--color-border); justify-content: center; width: 100%;">
            <style>
                .project-chip-btn {
                    background: #080808;
                    border: 1px solid var(--color-border);
                    color: var(--color-text-muted);
                    padding: 10px 22px;
                    border-radius: 24px;
                    font-family: var(--font-heading);
                    font-size: 0.8rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    cursor: pointer;
                    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
                    letter-spacing: 0.05em;
                }
                .project-chip-btn:hover {
                    background: #111 !important;
                    border-color: rgba(255, 107, 0, 0.5) !important;
                    color: var(--color-text-light) !important;
                    transform: translateY(-2px);
                }
                .project-chip-btn.active {
                    background: var(--color-accent) !important;
                    border-color: var(--color-accent) !important;
                    color: #fff !important;
                    box-shadow: 0 0 20px rgba(255, 107, 0, 0.4);
                }
                .project-chip-btn:active {
                    transform: translateY(0);
                }
            </style>
            ${allItems.map(item => `
                <button class="project-chip-btn" data-target="product-${item.id}">
                    ${item.name}
                </button>
            `).join('')}
        </div>
        `;
    }

    sectionsHtml = proj.sections.map(sec => {
        const isAplus = proj.category === "Ecommerce" && (
            sec.title.toUpperCase().includes("A+") ||
            sec.title.toUpperCase().includes("A-PLUS") ||
            sec.title.toUpperCase().includes("A PLUS")
        );
        const isAdaptive = proj.category === "Campaigns" || proj.category === "Brand Communication";

        return `
        <div class="case-section-block" style="margin-bottom: 60px;">
            <h2 class="case-section-title-header" style="font-size: 1.8rem; color: var(--color-accent); margin-bottom: 30px; border-bottom: 1px solid var(--color-border); padding-bottom: 10px; text-transform: uppercase; letter-spacing: 0.05em;">${sec.title}</h2>
            <div class="case-products-wrapper">
                ${sec.items.map(item => {
                    const showSubtitle = !isAplus && !isAdaptive;
                    let gridClass = "case-product-grid standard-grid";
                    if (isAplus) {
                        gridClass = "case-aplus-story-list";
                    } else if (isAdaptive) {
                        gridClass = "case-adaptive-grid";
                    }

                    if (proj.layoutType === "amanzi") {
                        return `
                        <div class="product-group-anchor" id="product-${item.id}" style="margin-bottom: 60px; scroll-margin-top: 150px; border-bottom: 1px solid rgba(255,255,255,0.03); padding-bottom: 40px;">
                            <h3 class="product-group-title" style="font-family: var(--font-heading); font-size: 1.3rem; font-weight: 700; color: var(--color-text-light); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 20px;">${item.name}</h3>
                            
                            <!-- Basic Listing Section -->
                            <div class="product-listing-section" style="margin-bottom: 35px;">
                                <h4 style="font-family: var(--font-heading); font-size: 0.85rem; font-weight: 700; color: var(--color-text-dark); text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 15px;">Basic Listing Images</h4>
                                <div class="case-adaptive-grid" id="grid-listing-${item.id}">
                                    <div class="grid-loading-placeholder" style="color: var(--color-text-dark); font-family: var(--font-heading); font-size: 0.85rem; letter-spacing: 0.1em; text-transform: uppercase;">Loading listings...</div>
                                </div>
                            </div>
                            
                            <!-- A+ Content Section -->
                            <div class="product-aplus-section" id="aplus-section-${item.id}" style="margin-top: 35px;">
                                <h4 style="font-family: var(--font-heading); font-size: 0.85rem; font-weight: 700; color: var(--color-text-dark); text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 15px;">A+ Content</h4>
                                <div class="case-aplus-story-list" id="grid-aplus-${item.id}">
                                    <div class="grid-loading-placeholder" style="color: var(--color-text-dark); font-family: var(--font-heading); font-size: 0.85rem; letter-spacing: 0.1em; text-transform: uppercase;">Loading A+ Content...</div>
                                </div>
                            </div>
                        </div>
                        `;
                    }

                    return `
                    <div class="product-group-anchor" id="product-${item.id}" style="margin-bottom: 40px; scroll-margin-top: 150px;">
                        <h3 class="product-group-title" style="font-family: var(--font-heading); font-size: 1.2rem; font-weight: 700; color: var(--color-text-light); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 20px; display: ${showSubtitle ? 'block' : 'none'};">${item.name}</h3>
                        <div class="${gridClass}" id="grid-${item.id}">
                            <div class="grid-loading-placeholder" style="color: var(--color-text-dark); font-family: var(--font-heading); font-size: 0.85rem; letter-spacing: 0.1em; text-transform: uppercase;">Loading creatives...</div>
                        </div>
                    </div>
                    `;
                }).join('')}
            </div>
        </div>
        `;
    }).join('');

    return `
    <!-- Case Study Dynamic Page Layout -->
    <section class="case-study-hero" style="background-image: linear-gradient(180deg, rgba(10, 10, 10, 0.4) 0%, rgba(10, 10, 10, 0.95) 100%), radial-gradient(circle at center, #1f1208 0%, #050505 100%); background-size: cover; background-position: center; min-height: 32vh; display: flex; align-items: center; padding: 100px 0 30px 0; border-bottom: 1px solid var(--color-border);">
        <div class="container">
            <span class="case-study-category" style="color: var(--color-accent); font-family: var(--font-heading); font-size: 0.85rem; font-weight: 600; letter-spacing: 0.25em; text-transform: uppercase; margin-bottom: 10px; display: block;">${proj.category} Design Case Study</span>
            <h1 class="case-study-title" style="font-size: clamp(2rem, 5vw, 3.5rem); font-weight: 900; letter-spacing: -0.02em; margin-bottom: 10px; color: var(--color-text-light); text-transform: uppercase;">${proj.title}</h1>
            <div style="display: flex; flex-wrap: wrap; gap: 40px; margin-bottom: 20px; font-size: 0.85rem; color: var(--color-text-muted);">
                <div>
                    <span style="font-family: var(--font-heading); text-transform: uppercase; color: var(--color-text-dark); display: block; font-size: 0.7rem; letter-spacing: 0.1em; margin-bottom: 4px;">Industry</span>
                    <span style="font-weight: 600; color: var(--color-text-light);">${proj.industry}</span>
                </div>
                <div style="width: 1px; background: var(--color-border); align-self: stretch;"></div>
                <div>
                    <span style="font-family: var(--font-heading); text-transform: uppercase; color: var(--color-text-dark); display: block; font-size: 0.7rem; letter-spacing: 0.1em; margin-bottom: 4px;">Work</span>
                    <span style="font-weight: 600; color: var(--color-text-light);">${proj.category === 'Brand Communication' ? 'Social Media Creatives' : proj.category === 'Ecommerce' ? 'Amazon Listing Images' : proj.category}</span>
                </div>
                <div style="width: 1px; background: var(--color-border); align-self: stretch;"></div>
                <div>
                    <span style="font-family: var(--font-heading); text-transform: uppercase; color: var(--color-text-dark); display: block; font-size: 0.7rem; letter-spacing: 0.1em; margin-bottom: 4px;">Deliverables</span>
                    <span id="dynamic-deliverables-text" style="font-weight: 600; color: var(--color-text-light);">${proj.deliverables}</span>
                </div>
            </div>
        </div>
    </section>

    ${buildTopNextPrevNavigationHTML(proj)}

    <!-- Case Study Overview Section -->
    <section class="case-overview-section" style="background-color: #050505; padding: 60px 4vw; border-bottom: 1px solid var(--color-border);">
        <div class="container case-overview-grid">
            <div>
                <span style="font-family: var(--font-heading); color: var(--color-accent); font-weight: 600; font-size: 0.8rem; letter-spacing: 0.2em; text-transform: uppercase; display: block; margin-bottom: 12px;">Project Objective</span>
                <h2 style="font-size: 2rem; font-weight: 800; text-transform: uppercase; margin-bottom: 20px; line-height: 1.2; color: var(--color-text-light);">Overview</h2>
                <p style="font-size: 1rem; color: var(--color-text-muted); font-weight: 300; line-height: 1.7;">
                    ${proj.overview}
                </p>
            </div>
            
            <div class="case-stats-grid">
                ${statsHtml}
            </div>
        </div>
    </section>

    <!-- Showcase Container -->
    <section class="case-showcase-section" style="background-color: #030303; padding: 60px 4vw;">
        <div class="container">
            ${chipsHtml}
            
            <div class="case-sections-root">
                ${sectionsHtml}
            </div>

            <!-- (Back to Top is now a floating button globally) -->
        </div>
    </section>

    <!-- Shared Fullscreen Lightbox Overlay -->
    <div class="lightbox-overlay" id="project-lightbox" aria-hidden="true">
        <button class="lightbox-close" id="lightbox-close-btn" aria-label="Close Lightbox">&times;</button>
        <button class="lightbox-btn lightbox-prev-btn" id="lightbox-prev-btn" aria-label="Previous Image">&lsaquo;</button>
        <div class="lightbox-wrapper">
            <img class="lightbox-image" id="lightbox-main-img" src="" alt="Lightbox Preview">
        </div>
        <button class="lightbox-btn lightbox-next-btn" id="lightbox-next-btn" aria-label="Next Image">&rsaquo;</button>
        <div class="lightbox-counter" id="lightbox-img-counter">Image 0 / 0</div>
    </div>

    ${buildNextPrevNavigationHTML(proj)}

    <!-- Floating Back to Top Button -->
    <button class="floating-back-top" id="floating-back-top" aria-label="Back to top" onclick="window.scrollTo({top: 0, behavior: 'smooth'})">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path d="M12 19V5M5 12l7-7 7 7" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </button>
    `;
}

export function resolveProject(projectId) {
    if (!projectId) return null;
    const cleanId = projectId.toLowerCase().trim();
    
    // If it's CAMX, dynamically scan its folders and populate items
    if (cleanId === "camx" && PROJECT_REGISTRY["camx"]) {
        const keys = Object.keys(assetsManifest);
        const productsFound = new Set();
        const prefix = "assets/ecommerce/camx/";
        for (const key of keys) {
            if (key.startsWith(prefix)) {
                const subPath = key.substring(prefix.length);
                const firstSlash = subPath.indexOf('/');
                if (firstSlash !== -1) {
                    const folderName = subPath.substring(0, firstSlash);
                    productsFound.add(folderName);
                }
            }
        }
        
        const productsList = Array.from(productsFound).sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }));
        const items = productsList.map(prodId => {
            return {
                id: prodId,
                name: prodId.toUpperCase(),
                folder: `assets/ecommerce/camx/${prodId}/listing/`,
                aplusFolder: `assets/ecommerce/camx/${prodId}/a-plus/`
            };
        });
        
        PROJECT_REGISTRY["camx"].sections = [
            {
                title: "CAMX COLLECTION",
                items: items
            }
        ];
        
        const designedCount = items.filter(item => {
            const hasListing = (assetsManifest[`assets/ecommerce/camx/${item.id}/listing/`] || []).length > 0;
            const hasAplus = (assetsManifest[`assets/ecommerce/camx/${item.id}/a-plus/`] || []).length > 0;
            return hasListing || hasAplus;
        }).length;
        
        PROJECT_REGISTRY["camx"].stats = [
            { num: String(items.length), label: "Products", sub: "Amazon Listings" },
            { num: String(designedCount), label: "Designed", sub: "Active Galleries" }
        ];
    }
    
    // If it's Rumaisa, dynamically calculate its stats based on assetsManifest
    if (cleanId === "rumaisa" && PROJECT_REGISTRY["rumaisa"]) {
        const items = PROJECT_REGISTRY["rumaisa"].sections[0].items;
        const designedCount = items.filter(item => {
            const hasListing = (assetsManifest[`assets/ecommerce/rumaisa/${item.id}/listing/`] || []).length > 0;
            const hasAplus = (assetsManifest[`assets/ecommerce/rumaisa/${item.id}/a-plus/`] || []).length > 0;
            return hasListing || hasAplus;
        }).length;
        PROJECT_REGISTRY["rumaisa"].stats = [
            { num: String(items.length), label: "Products", sub: "Amazon Listings" },
            { num: String(designedCount), label: "Designed", sub: "Active Galleries" }
        ];
    }
    
    // 1. Direct match in registry
    if (PROJECT_REGISTRY[projectId]) {
        return { key: projectId, proj: PROJECT_REGISTRY[projectId], anchor: null };
    }
    if (PROJECT_REGISTRY[cleanId]) {
        return { key: cleanId, proj: PROJECT_REGISTRY[cleanId], anchor: null };
    }

    // 2. Special aliases
    const aliases = {
        "goldwood": "goldwood-ply",
        "radicab": "radicab-cables",
        "kelvin": "kelvin-pumps",
        "aagaz": "aagaz-locks",
        "madhav": "madhav-food-products",
        "uninox": "uninox-houseware"
    };
    if (aliases[cleanId] && PROJECT_REGISTRY[aliases[cleanId]]) {
        return { key: aliases[cleanId], proj: PROJECT_REGISTRY[aliases[cleanId]], anchor: null };
    }

    // 3. Generic hyphen split for nested/child projects (e.g. parent-child)
    if (cleanId.includes('-')) {
        const parts = cleanId.split('-');
        let parentId = parts[0];
        if (aliases[parentId]) parentId = aliases[parentId];

        const parentResolved = PROJECT_REGISTRY[parentId];
        if (parentResolved) {
            const childId = parts.slice(1).join('-');
            
            // Search inside parent sections for this child
            const allItems = parentResolved.sections?.flatMap(s => s.items) || [];
            const childItem = allItems.find(item => item.id.toLowerCase() === childId.toLowerCase());
            
            const catHash = parentResolved.category.toLowerCase().includes('brand') ? 'brand-comm' :
                            parentResolved.category.toLowerCase().includes('ecommerce') ? 'ecommerce' :
                            parentResolved.category.toLowerCase().includes('campaign') ? 'campaigns' :
                            parentResolved.category.toLowerCase().includes('render') ? 'renders' : 'ecommerce';
            
            if (childItem) {
                // Update URL to redirect to parent project with element anchor
                window.location.replace(`#${catHash}/${parentId}#product-${childItem.id}`);
                return { key: parentId, proj: parentResolved, anchor: `product-${childItem.id}` };
            } else {
                // Child product not found/missing under this parent, redirect safely to parent project
                window.location.replace(`#${catHash}/${parentId}`);
                return { key: parentId, proj: parentResolved, anchor: null };
            }
        }
    }

    // 4. Fuzzy registry check (starts with or contains)
    for (const key of Object.keys(PROJECT_REGISTRY)) {
        const cleanKey = key.toLowerCase();
        if (cleanKey.includes(cleanId) || cleanId.includes(cleanKey)) {
            return { key: key, proj: PROJECT_REGISTRY[key], anchor: null };
        }
    }

    // 5. Look in STATIC_PROJECTS from portfolio-view.js
    if (STATIC_PROJECTS) {
        const staticProj = STATIC_PROJECTS.find(p => {
            const cleanPId = p.id.toLowerCase();
            return cleanPId === cleanId || cleanPId.includes(cleanId) || cleanId.includes(cleanPId);
        });
        
        if (staticProj) {
            // Build standard project config dynamically for simplicity and unified hierarchy
            const dynamicConfig = {
                id: staticProj.id,
                title: staticProj.name,
                category: staticProj.category,
                industry: staticProj.industry || "Design & Brand Identity",
                role: "Visual Designer",
                deliverables: "Creative Graphics, Visual Assets",
                overview: staticProj.objective || staticProj.approach || "Premium brand communication and product storytelling case study.",
                stats: [
                    { num: "1", label: "Brand Partner", sub: staticProj.brand },
                    { num: "Asset Showcase", label: "Gallery", sub: "Delivered" }
                ],
                layoutType: "standard",
                sections: [
                    {
                        title: staticProj.category === "Campaigns" ? "CAMPAIGN BANNERS" :
                               staticProj.category === "Brand Communication" ? "CREATIVE GALLERY" : "PROJECT CREATIVES",
                        items: [
                            { id: staticProj.id, name: staticProj.name, folder: staticProj.folderPath }
                        ]
                    }
                ]
            };
            return { key: staticProj.id, proj: dynamicConfig, anchor: null };
        }
    }

    return null;
}

export function renderProjectDetail(projectId) {
    const resolved = resolveProject(projectId);
    
    if (!resolved) {
        // Return a shell with a loading spinner for dynamic projects
        return `
        <div id="dynamic-project-loading" style="background-color: #050505; min-height: 80vh; display: flex; align-items: center; justify-content: center; padding-top: 100px;">
            <div class="container" style="text-align: center;">
                <div class="spinner" style="border: 3px solid rgba(255,107,0,0.1); border-top: 3px solid var(--color-accent); border-radius: 50%; width: 50px; height: 50px; margin: 0 auto 20px auto; animation: spin 1s linear infinite;"></div>
                <p style="font-family: var(--font-heading); font-size: 0.9rem; letter-spacing: 0.15em; text-transform: uppercase; color: var(--color-text-muted);">Syncing Case Study...</p>
            </div>
        </div>
        <div id="dynamic-project-content"></div>
        
        <style>
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
        </style>
        `;
    }

    return buildProjectDetailHTML(resolved.proj);
}

async function handleUploadedFiles(item, files, uploadZone, isAplus = false) {
    if (!uploadZone) return;
    uploadZone.innerHTML = `
        <div class="spinner" style="border: 2px solid rgba(255,107,0,0.1); border-top: 2px solid var(--color-accent); border-radius: 50%; width: 24px; height: 24px; margin-bottom: 8px; animation: spin 1s linear infinite;"></div>
        <span style="font-family: var(--font-heading); font-size: 0.75rem; text-transform: uppercase; color: var(--color-accent); font-weight: 700; letter-spacing: 0.05em;">Uploading ${files.length} images...</span>
    `;
    uploadZone.style.pointerEvents = 'none';

    let success = true;
    const targetFolder = isAplus ? item.aplusFolder : item.folder;
    for (const file of files) {
        const ok = await uploadFileToFolder(targetFolder, file);
        if (!ok) success = false;
    }

    if (success) {
        uploadZone.innerHTML = `
            <span style="font-size: 1.5rem; color: #00ff66; margin-bottom: 6px;">✓</span>
            <span style="font-family: var(--font-heading); font-size: 0.75rem; text-transform: uppercase; color: #00ff66; font-weight: 700; letter-spacing: 0.05em;">Uploaded Successfully!</span>
        `;
    } else {
        uploadZone.innerHTML = `
            <span style="font-size: 1.5rem; color: #ff3b30; margin-bottom: 6px;">&times;</span>
            <span style="font-family: var(--font-heading); font-size: 0.75rem; text-transform: uppercase; color: #ff3b30; font-weight: 700; letter-spacing: 0.05em;">Upload Failed</span>
        `;
    }

    setTimeout(() => {
        window.location.reload();
    }, 1000);
}

export async function initProjectDetail(projectId) {
    const resolved = resolveProject(projectId);
    
    if (resolved) {
        currentProject = resolved.proj;
    } else {
        // Try fetching from Supabase
        if (supabase) {
            try {
                const { data: p, error: pErr } = await supabase.from('projects').select('*').eq('id', projectId).single();
                if (!pErr && p) {
                    const { data: b, error: bErr } = await supabase.from('brands').select('*').eq('id', p.brand_id).single();
                    const categoryName = b ? b.category : "Design";
                    const brandName = b ? b.name : "Custom Brand";

                    currentProject = {
                        id: p.id,
                        title: p.name,
                        category: categoryName,
                        industry: p.industry || "Custom Project",
                        role: p.role || "Designer",
                        deliverables: p.deliverables || "Creative Assets",
                        overview: p.overview || "Custom design and brand communication project.",
                        stats: [
                            { num: p.images ? String(p.images.length) : "0", label: "Assets", sub: "Delivered" }
                        ],
                        layoutType: "standard",
                        sections: [
                            {
                                title: "CREATIVE WORK",
                                items: [
                                    { id: p.id, name: p.name, folder: "", dbImages: p.images || [] }
                                ]
                            }
                        ]
                    };
                }
            } catch (err) {
                console.error("Error fetching dynamic project: ", err);
            }
        }
    }

    if (!currentProject) {
        // Still not found, render project not found
        const appRoot = document.getElementById('app-root');
        if (appRoot) {
            appRoot.innerHTML = `
            <section class="case-study-hero" style="min-height: 80vh; display: flex; align-items: center; justify-content: center; padding-top: 100px;">
                <div class="container" style="text-align: center;">
                    <h1 style="color: var(--color-text-light); text-transform: uppercase;">Project Not Found</h1>
                    <p style="color: var(--color-text-muted); margin-bottom: 24px;">The case study you are looking for does not exist.</p>
                    <a href="#home" class="btn btn-secondary" style="border-radius: 30px;">Back to Home</a>
                </div>
            </section>
            `;
        }
        return;
    }

    // Replace dynamic loading shell if present
    const loadingShell = document.getElementById('dynamic-project-loading');
    if (loadingShell) {
        const appRoot = document.getElementById('app-root');
        if (appRoot) {
            appRoot.innerHTML = buildProjectDetailHTML(currentProject);
        }
    }

    projectImagesList = []; // Clear current flat array of project images
    
    // Asynchronously load files for each section item
    const loadPromises = currentProject.sections.flatMap(sec => {
        return sec.items.map(async (item) => {
            let listingImages = [];
            let aplusImages = [];

            if (item.dbImages) {
                listingImages = item.dbImages;
            } else {
                let folderPath = item.folder;
                let aplusFolderPath = item.aplusFolder;

                // Dynamically resolve folder paths from assetsManifest keys
                const keys = Object.keys(assetsManifest);
                for (const key of keys) {
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
                        
                        if (slug === item.id) {
                            const folderType = match[4];
                            if (folderType === "listing") {
                                folderPath = key;
                            } else if (folderType === "a-plus") {
                                aplusFolderPath = key;
                            }
                        }
                    }
                }

                listingImages = await fetchImagesFromFolder(folderPath);
                
                if (listingImages.length === 0 && item.fallback) {
                    listingImages = await fetchImagesFromFolder(item.fallback);
                }
                if (currentProject.layoutType === "amanzi" && aplusFolderPath) {
                    aplusImages = await fetchImagesFromFolder(aplusFolderPath);
                }

                // General console logs showing detected image count per product
                if (currentProject.layoutType === "amanzi") {
                    console.log(`[DEBUG] Product: ${item.name} (${item.id}) | Listing Folder: ${folderPath} | Found: ${listingImages.length}`, listingImages);
                    if (aplusFolderPath) {
                        console.log(`[DEBUG] Product: ${item.name} (${item.id}) | A+ Folder: ${aplusFolderPath} | Found: ${aplusImages.length}`, aplusImages);
                    }
                }

                // Update the item properties for UI rendering
                item.folder = folderPath;
                item.aplusFolder = aplusFolderPath;
            }

            // Natural sorting to handle numeric indices correctly (e.g. Artboard 2 before Artboard 10)
            const naturalSort = (a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' });
            listingImages.sort(naturalSort);
            aplusImages.sort(naturalSort);

            return {
                id: item.id,
                name: item.name,
                listingImages: listingImages,
                aplusImages: aplusImages,
                images: [...listingImages, ...aplusImages]
            };
        });
    });

    const resolvedItems = await Promise.all(loadPromises);

    // Fetch image dimensions in parallel for adaptive sizing
    const dimensionPromises = [];
    resolvedItems.forEach(item => {
        item.images.forEach(imgSrc => {
            dimensionPromises.push(new Promise((resolve) => {
                const img = new Image();
                img.onload = () => {
                    resolve({ src: imgSrc, width: img.naturalWidth, height: img.naturalHeight });
                };
                img.onerror = () => {
                    resolve({ src: imgSrc, width: 0, height: 0 });
                };
                img.src = imgSrc;
            }));
        });
    });
    const dimensionsList = await Promise.all(dimensionPromises);
    const dimensionsMap = new Map(dimensionsList.map(d => [d.src, d]));

    // Build the flat list of images for lightbox sequencing
    resolvedItems.forEach(item => {
        if (currentProject.layoutType === "amanzi") {
            item.listingImages.forEach(img => {
                projectImagesList.push({
                    src: img,
                    productName: `${item.name} - Listing`
                });
            });
            item.aplusImages.forEach(img => {
                projectImagesList.push({
                    src: img,
                    productName: `${item.name} - A+ Content`
                });
            });
        } else {
            item.images.forEach(img => {
                projectImagesList.push({
                    src: img,
                    productName: item.name
                });
            });
        }
    });

    // Update dynamic deliverables counter dynamically
    const deliverablesTextEl = document.getElementById('dynamic-deliverables-text');
    if (deliverablesTextEl) {
        const totalCount = projectImagesList.length;
        if (currentProject.category === 'Brand Communication') {
            deliverablesTextEl.textContent = `${totalCount} Creative ${totalCount === 1 ? 'Post' : 'Posts'}`;
        } else if (currentProject.category === 'Ecommerce') {
            deliverablesTextEl.textContent = `${totalCount} Listing ${totalCount === 1 ? 'Image' : 'Images'}`;
        } else {
            deliverablesTextEl.textContent = `${totalCount} Asset ${totalCount === 1 ? 'Showcase' : 'Showcases'}`;
        }
    }

    // Populate each grid in the DOM
    resolvedItems.forEach(item => {
        // Dynamically inject styled image count badge into the product section header
        const productEl = document.getElementById(`product-${item.id}`);
        if (productEl) {
            const titleEl = productEl.querySelector('.product-group-title');
            if (titleEl) {
                const totalImages = currentProject.layoutType === "amanzi" 
                    ? (item.listingImages.length + item.aplusImages.length) 
                    : item.images.length;
                titleEl.innerHTML = `${item.name} <span class="product-image-count" style="font-size: 0.75rem; font-weight: 500; color: var(--color-text-muted); text-transform: uppercase; letter-spacing: 0.05em; margin-left: 10px; background: rgba(255,255,255,0.03); padding: 4px 10px; border-radius: 12px; border: 1px solid var(--color-border);">${totalImages} ${totalImages === 1 ? 'Image' : 'Images'}</span>`;
            }
        }

        if (currentProject.layoutType === "amanzi") {
            const listingGrid = document.getElementById(`grid-listing-${item.id}`);
            const aplusGrid = document.getElementById(`grid-aplus-${item.id}`);
            
            // 1. Populate Listing Grid
            if (listingGrid) {
                if (item.listingImages.length === 0) {
                    listingGrid.innerHTML = `
                    <div style="width: 100%; display: flex; flex-direction: column; gap: 20px;">
                        <div class="coming-soon-placeholder" style="border: 1px dashed var(--color-border); border-radius: 12px; padding: 45px 20px; text-align: center; background: rgba(255,255,255,0.01); width: 100%;">
                            <span style="font-family: var(--font-heading); font-size: 0.85rem; text-transform: uppercase; color: var(--color-text-muted); font-weight: 600; letter-spacing: 0.1em;">Listing Images Coming Soon</span>
                        </div>
                        <div class="product-upload-wrapper" id="upload-wrapper-${item.id}">
                            <div class="product-upload-zone" id="upload-zone-${item.id}">
                                <div class="upload-icon">+</div>
                                <div class="upload-label">Upload Listing Images</div>
                                <div class="upload-sub">Drag & drop or click to select files</div>
                                <input type="file" id="file-input-${item.id}" multiple accept="image/*" style="display: none;">
                            </div>
                            <div class="upload-preview-grid" id="upload-preview-${item.id}"></div>
                            <button class="upload-submit-btn" id="upload-submit-${item.id}" type="button" disabled>Upload Selected Images</button>
                        </div>
                    </div>
                    `;

                    const uploadZone = document.getElementById(`upload-zone-${item.id}`);
                    const fileInput = document.getElementById(`file-input-${item.id}`);
                    const previewGrid = document.getElementById(`upload-preview-${item.id}`);
                    const uploadButton = document.getElementById(`upload-submit-${item.id}`);
                    let selectedFiles = [];

                    const renderPreview = (files) => {
                        selectedFiles = files;
                        if (!previewGrid) return;

                        if (files.length === 0) {
                            previewGrid.innerHTML = '';
                            if (uploadButton) uploadButton.disabled = true;
                            return;
                        }

                        previewGrid.innerHTML = files.map((file, idx) => {
                            const previewUrl = URL.createObjectURL(file);
                            return `
                                <div class="upload-preview-card">
                                    <img src="${previewUrl}" alt="Preview ${idx + 1}">
                                    <span>${file.name}</span>
                                </div>
                            `;
                        }).join('');

                        if (uploadButton) uploadButton.disabled = false;
                    };

                    const selectFiles = (files) => {
                        const validFiles = Array.from(files || []).filter(file => file.type.startsWith('image/'));
                        renderPreview(validFiles);
                    };

                    if (uploadZone && fileInput) {
                        uploadZone.addEventListener('click', () => fileInput.click());
                        uploadZone.addEventListener('dragover', (e) => {
                            e.preventDefault();
                            uploadZone.classList.add('drag-over');
                        });
                        uploadZone.addEventListener('dragleave', () => {
                            uploadZone.classList.remove('drag-over');
                        });
                        uploadZone.addEventListener('drop', (e) => {
                            e.preventDefault();
                            uploadZone.classList.remove('drag-over');
                            selectFiles(e.dataTransfer.files);
                        });
                        fileInput.addEventListener('change', (e) => {
                            selectFiles(e.target.files);
                        });
                    }

                    if (uploadButton) {
                        uploadButton.onclick = async () => {
                            if (!selectedFiles.length) return;
                            uploadButton.disabled = true;
                            uploadButton.textContent = 'Uploading...';
                            await handleUploadedFiles(item, selectedFiles, uploadZone, false);
                        };
                    }
                } else {
                    listingGrid.innerHTML = item.listingImages.map(imgSrc => {
                        const globalIdx = projectImagesList.findIndex(x => x.src === imgSrc);
                        const dims = dimensionsMap.get(imgSrc) || { width: 0, height: 0 };
                        let spanClass = "span-4";
                        if (dims.width > 0 && dims.height > 0) {
                            const ratio = dims.width / dims.height;
                            if (ratio > 1.5) {
                                spanClass = "span-12";
                            } else if (ratio > 1.15) {
                                spanClass = "span-8";
                            } else if (ratio < 0.8) {
                                spanClass = "span-vertical";
                            }
                        }
                        return `
                        <div class="adaptive-card ${spanClass}" data-global-idx="${globalIdx}">
                            <img src="${imgSrc}" alt="${item.name} Listing" loading="lazy">
                        </div>
                        `;
                    }).join('');
                }
            }
            
            // 2. Populate A+ Story Grid
            if (aplusGrid) {
                if (item.aplusImages.length === 0) {
                    aplusGrid.style.display = 'flex';
                    aplusGrid.innerHTML = `
                    <div style="width: 100%; display: flex; flex-direction: column; gap: 20px;">
                        <div class="coming-soon-placeholder" style="border: 1px dashed var(--color-border); border-radius: 12px; padding: 45px 20px; text-align: center; background: rgba(255,255,255,0.01); width: 100%;">
                            <span style="font-family: var(--font-heading); font-size: 0.85rem; text-transform: uppercase; color: var(--color-text-muted); font-weight: 600; letter-spacing: 0.1em;">A+ Content Coming Soon</span>
                        </div>
                        <div class="product-upload-wrapper" id="upload-wrapper-aplus-${item.id}">
                            <div class="product-upload-zone" id="upload-zone-aplus-${item.id}">
                                <div class="upload-icon">+</div>
                                <div class="upload-label">Upload A+ Content Images</div>
                                <div class="upload-sub">Drag & drop or click to select files</div>
                                <input type="file" id="file-input-aplus-${item.id}" multiple accept="image/*" style="display: none;">
                            </div>
                            <div class="upload-preview-grid" id="upload-preview-aplus-${item.id}"></div>
                            <button class="upload-submit-btn" id="upload-submit-aplus-${item.id}" type="button" disabled>Upload Selected Images</button>
                        </div>
                    </div>
                    `;

                    const uploadZoneAplus = document.getElementById(`upload-zone-aplus-${item.id}`);
                    const fileInputAplus = document.getElementById(`file-input-aplus-${item.id}`);
                    const previewGridAplus = document.getElementById(`upload-preview-aplus-${item.id}`);
                    const uploadButtonAplus = document.getElementById(`upload-submit-aplus-${item.id}`);
                    let selectedFilesAplus = [];

                    const renderPreviewAplus = (files) => {
                        selectedFilesAplus = files;
                        if (!previewGridAplus) return;

                        if (files.length === 0) {
                            previewGridAplus.innerHTML = '';
                            if (uploadButtonAplus) uploadButtonAplus.disabled = true;
                            return;
                        }

                        previewGridAplus.innerHTML = files.map((file, idx) => {
                            const previewUrl = URL.createObjectURL(file);
                            return `
                                <div class="upload-preview-card">
                                    <img src="${previewUrl}" alt="Preview ${idx + 1}">
                                    <span>${file.name}</span>
                                </div>
                            `;
                        }).join('');

                        if (uploadButtonAplus) uploadButtonAplus.disabled = false;
                    };

                    const selectFilesAplus = (files) => {
                        const validFiles = Array.from(files || []).filter(file => file.type.startsWith('image/'));
                        renderPreviewAplus(validFiles);
                    };

                    if (uploadZoneAplus && fileInputAplus) {
                        uploadZoneAplus.addEventListener('click', () => fileInputAplus.click());
                        uploadZoneAplus.addEventListener('dragover', (e) => {
                            e.preventDefault();
                            uploadZoneAplus.classList.add('drag-over');
                        });
                        uploadZoneAplus.addEventListener('dragleave', () => {
                            uploadZoneAplus.classList.remove('drag-over');
                        });
                        uploadZoneAplus.addEventListener('drop', (e) => {
                            e.preventDefault();
                            uploadZoneAplus.classList.remove('drag-over');
                            selectFilesAplus(e.dataTransfer.files);
                        });
                        fileInputAplus.addEventListener('change', (e) => {
                            selectFilesAplus(e.target.files);
                        });
                    }

                    if (uploadButtonAplus) {
                        uploadButtonAplus.onclick = async () => {
                            if (!selectedFilesAplus.length) return;
                            uploadButtonAplus.disabled = true;
                            uploadButtonAplus.textContent = 'Uploading...';
                            await handleUploadedFiles(item, selectedFilesAplus, uploadZoneAplus, true);
                        };
                    }
                } else {
                    aplusGrid.style.display = 'flex';
                    aplusGrid.innerHTML = item.aplusImages.map(imgSrc => {
                        const globalIdx = projectImagesList.findIndex(x => x.src === imgSrc);
                        return `
                        <div class="aplus-story-card" data-global-idx="${globalIdx}">
                            <img src="${imgSrc}" alt="${item.name} A+ Content" loading="lazy">
                        </div>
                        `;
                    }).join('');
                }
            }
            
            // Bind click triggers for listing and A+ cards under this product anchor
            if (productEl) {
                productEl.querySelectorAll('.case-creative-card, .aplus-story-card, .adaptive-card').forEach(card => {
                    card.onclick = (e) => {
                        e.stopPropagation();
                        const globalIdx = parseInt(card.getAttribute('data-global-idx'), 10);
                        openLightbox(globalIdx);
                    };
                });
            }

            // Bind upload triggers if present
            const uploadZone = document.getElementById(`upload-zone-${item.id}`);
            const fileInput = document.getElementById(`file-input-${item.id}`);
            
            if (uploadZone && fileInput) {
                uploadZone.onclick = (e) => {
                    e.stopPropagation();
                    fileInput.click();
                };

                ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
                    uploadZone.addEventListener(eventName, (e) => {
                        e.preventDefault();
                        e.stopPropagation();
                    }, false);
                });

                ['dragenter', 'dragover'].forEach(eventName => {
                    uploadZone.addEventListener(eventName, () => {
                        uploadZone.style.borderColor = 'var(--color-accent)';
                        uploadZone.style.background = 'rgba(255, 107, 0, 0.04)';
                    }, false);
                });

                ['dragleave', 'drop'].forEach(eventName => {
                    uploadZone.addEventListener(eventName, () => {
                        uploadZone.style.borderColor = 'var(--color-border)';
                        uploadZone.style.background = 'rgba(255, 255, 255, 0.01)';
                    }, false);
                });

                uploadZone.addEventListener('drop', async (e) => {
                    const files = Array.from(e.dataTransfer.files);
                    if (files.length > 0) {
                        await handleUploadedFiles(item, files, uploadZone, false);
                    }
                });

                fileInput.onchange = async (e) => {
                    const files = Array.from(e.target.files);
                    if (files.length > 0) {
                        await handleUploadedFiles(item, files, uploadZone, false);
                    }
                };
            }

            // Bind A+ upload triggers if present
            const uploadZoneAplus = document.getElementById(`upload-zone-aplus-${item.id}`);
            const fileInputAplus = document.getElementById(`file-input-aplus-${item.id}`);
            
            if (uploadZoneAplus && fileInputAplus) {
                uploadZoneAplus.onclick = (e) => {
                    e.stopPropagation();
                    fileInputAplus.click();
                };

                ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
                    uploadZoneAplus.addEventListener(eventName, (e) => {
                        e.preventDefault();
                        e.stopPropagation();
                    }, false);
                });

                ['dragenter', 'dragover'].forEach(eventName => {
                    uploadZoneAplus.addEventListener(eventName, () => {
                        uploadZoneAplus.style.borderColor = 'var(--color-accent)';
                        uploadZoneAplus.style.background = 'rgba(255, 107, 0, 0.04)';
                    }, false);
                });

                ['dragleave', 'drop'].forEach(eventName => {
                    uploadZoneAplus.addEventListener(eventName, () => {
                        uploadZoneAplus.style.borderColor = 'var(--color-border)';
                        uploadZoneAplus.style.background = 'rgba(255, 255, 255, 0.01)';
                    }, false);
                });

                uploadZoneAplus.addEventListener('drop', async (e) => {
                    const files = Array.from(e.dataTransfer.files);
                    if (files.length > 0) {
                        await handleUploadedFiles(item, files, uploadZoneAplus, true);
                    }
                });

                fileInputAplus.onchange = async (e) => {
                    const files = Array.from(e.target.files);
                    if (files.length > 0) {
                        await handleUploadedFiles(item, files, uploadZoneAplus, true);
                    }
                };
            }
        } else {
            const grid = document.getElementById(`grid-${item.id}`);
            if (!grid) return;

            if (item.images.length === 0) {
                grid.innerHTML = `
                <div class="product-empty-creatives">
                    <span class="product-empty-label">Upload creatives to begin showcase</span>
                </div>
                `;
            } else {
                const isAplus = grid.classList.contains("case-aplus-story-list");
                const isAdaptive = grid.classList.contains("case-adaptive-grid");
                const isCampaigns = currentProject.category === "Campaigns";
                
                if (isCampaigns) {
                    // Step-by-Step Visual Hierarchy Layout for Campaign projects
                    const heroImg = item.images[0];
                    const restImages = item.images.slice(1);
                    
                    const majorBanners = [];
                    const supportingGrid = [];
                    const secondaryAssets = [];
                    
                    restImages.forEach(imgSrc => {
                        const dims = dimensionsMap.get(imgSrc) || { width: 0, height: 0 };
                        const ratio = dims.width > 0 && dims.height > 0 ? dims.width / dims.height : 1.0;
                        
                        if (ratio > 1.2) {
                            majorBanners.push(imgSrc);
                        } else if (ratio >= 0.8) {
                            supportingGrid.push(imgSrc);
                        } else {
                            secondaryAssets.push(imgSrc);
                        }
                    });
                    
                    let campaignHtml = "";
                    
                    if (heroImg) {
                        const globalIdx = projectImagesList.findIndex(x => x.src === heroImg);
                        campaignHtml += `
                        <div class="campaign-step-container span-12" style="margin-bottom: 50px; width: 100%;">
                            <div class="campaign-step-label" style="font-family: var(--font-heading); font-size: 0.8rem; letter-spacing: 0.2em; color: var(--color-accent); margin-bottom: 15px; text-transform: uppercase; font-weight: 700;">01 &bull; Lead Campaign Creative</div>
                            <div class="adaptive-card span-12" data-global-idx="${globalIdx}" style="cursor: pointer; width: 100%;">
                                <img src="${heroImg}" alt="Lead Campaign Creative" loading="lazy" style="width: 100%; height: auto; display: block; object-fit: contain;">
                            </div>
                        </div>
                        `;
                    }
                    
                    if (majorBanners.length > 0) {
                        campaignHtml += `
                        <div class="campaign-step-container span-12" style="margin-bottom: 50px; width: 100%;">
                            <div class="campaign-step-label" style="font-family: var(--font-heading); font-size: 0.8rem; letter-spacing: 0.2em; color: var(--color-accent); margin-bottom: 15px; text-transform: uppercase; font-weight: 700;">02 &bull; Promotional Banners</div>
                            <div class="case-adaptive-grid" style="align-items: start;">
                                ${majorBanners.map(imgSrc => {
                                    const globalIdx = projectImagesList.findIndex(x => x.src === imgSrc);
                                    return `
                                    <div class="adaptive-card span-12" data-global-idx="${globalIdx}" style="cursor: pointer;">
                                        <img src="${imgSrc}" alt="Promotional Banner" loading="lazy">
                                    </div>
                                    `;
                                }).join('')}
                            </div>
                        </div>
                        `;
                    }
                    
                    if (supportingGrid.length > 0) {
                        campaignHtml += `
                        <div class="campaign-step-container span-12" style="margin-bottom: 50px; width: 100%;">
                            <div class="campaign-step-label" style="font-family: var(--font-heading); font-size: 0.8rem; letter-spacing: 0.2em; color: var(--color-accent); margin-bottom: 15px; text-transform: uppercase; font-weight: 700;">03 &bull; Supporting Creatives</div>
                            <div class="standard-grid" style="align-items: start;">
                                ${supportingGrid.map(imgSrc => {
                                    const globalIdx = projectImagesList.findIndex(x => x.src === imgSrc);
                                    return `
                                    <div class="case-creative-card" data-global-idx="${globalIdx}" style="cursor: pointer;">
                                        <img src="${imgSrc}" alt="Supporting Creative" loading="lazy">
                                    </div>
                                    `;
                                }).join('')}
                            </div>
                        </div>
                        `;
                    }
                    
                    if (secondaryAssets.length > 0) {
                        campaignHtml += `
                        <div class="campaign-step-container span-12" style="margin-bottom: 50px; width: 100%;">
                            <div class="campaign-step-label" style="font-family: var(--font-heading); font-size: 0.8rem; letter-spacing: 0.2em; color: var(--color-accent); margin-bottom: 15px; text-transform: uppercase; font-weight: 700;">04 &bull; Additional Designs</div>
                            <div class="campaign-secondary-grid" style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; align-items: start; width: 100%;">
                                <style>
                                    @media screen and (max-width: 992px) {
                                        .campaign-secondary-grid {
                                            grid-template-columns: repeat(2, 1fr) !important;
                                        }
                                    }
                                    @media screen and (max-width: 576px) {
                                        .campaign-secondary-grid {
                                            grid-template-columns: 1fr !important;
                                        }
                                    }
                                </style>
                                ${secondaryAssets.map(imgSrc => {
                                    const globalIdx = projectImagesList.findIndex(x => x.src === imgSrc);
                                    return `
                                    <div class="case-creative-card" data-global-idx="${globalIdx}" style="cursor: pointer;">
                                        <img src="${imgSrc}" alt="Additional Creative" loading="lazy">
                                    </div>
                                    `;
                                }).join('')}
                            </div>
                        </div>
                        `;
                    }
                    
                    grid.innerHTML = campaignHtml;
                } else {
                    // E-commerce Listing, A+ storytelling, or Brand Comm Adaptive layouts
                    grid.innerHTML = item.images.map(imgSrc => {
                        const globalIdx = projectImagesList.findIndex(x => x.src === imgSrc);
                        if (isAplus) {
                            return `
                            <div class="aplus-story-card" data-global-idx="${globalIdx}">
                                <img src="${imgSrc}" alt="${item.name} Creative" loading="lazy">
                            </div>
                            `;
                        } else if (isAdaptive) {
                            const dims = dimensionsMap.get(imgSrc) || { width: 0, height: 0 };
                            let spanClass = "span-4";
                            if (dims.width > 0 && dims.height > 0) {
                                const ratio = dims.width / dims.height;
                                if (ratio > 1.5) {
                                    spanClass = "span-12";
                                } else if (ratio > 1.15) {
                                    spanClass = "span-8";
                                } else if (ratio < 0.8) {
                                    spanClass = "span-vertical";
                                }
                            }
                            return `
                            <div class="adaptive-card ${spanClass}" data-global-idx="${globalIdx}">
                                <img src="${imgSrc}" alt="${item.name} Creative" loading="lazy">
                            </div>
                            `;
                        } else {
                            return `
                            <div class="case-creative-card" data-global-idx="${globalIdx}">
                                <img src="${imgSrc}" alt="${item.name} Creative" loading="lazy">
                            </div>
                            `;
                        }
                    }).join('');
                }

                // Bind click triggers to open lightbox for all card formats
                grid.querySelectorAll('.case-creative-card, .aplus-story-card, .adaptive-card').forEach(card => {
                    card.onclick = (e) => {
                        e.stopPropagation();
                        const globalIdx = parseInt(card.getAttribute('data-global-idx'), 10);
                        openLightbox(globalIdx);
                    };
                });
            }
        }
    });

    // Setup chip scrolling navigation & active state tracking (ScrollSpy)
    const chipsWrapper = document.querySelector('.project-chips-wrapper');
    if (chipsWrapper) {
        const chips = chipsWrapper.querySelectorAll('.project-chip-btn');

        if (chips.length > 0) {
            chips[0].classList.add('active');
        }

        chips.forEach(btn => {
            btn.onclick = () => {
                const targetId = btn.getAttribute('data-target');
                const targetEl = document.getElementById(targetId);
                if (targetEl) {
                    const headerOffset = 150;
                    const elementPosition = targetEl.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    
                    chips.forEach(c => c.classList.remove('active'));
                    btn.classList.add('active');
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            };
        });

        // ScrollSpy observer
        const observerOptions = {
            root: null,
            rootMargin: '-160px 0px -50% 0px',
            threshold: 0
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const targetId = entry.target.id;
                    chips.forEach(btn => {
                        if (btn.getAttribute('data-target') === targetId) {
                            btn.classList.add('active');
                        } else {
                            btn.classList.remove('active');
                        }
                    });
                }
            });
        }, observerOptions);

        // Observe each product group
        resolvedItems.forEach(item => {
            const el = document.getElementById(`product-${item.id}`);
            if (el) observer.observe(el);
        });
    }

    // Scroll to sub-product anchor if redirected from a child project
    if (resolved && resolved.anchor) {
        setTimeout(() => {
            const targetEl = document.getElementById(resolved.anchor);
            if (targetEl) {
                const headerOffset = 150;
                const elementPosition = targetEl.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }, 600); // Allow browser rendering to settle
    }

    // Floating Back-to-Top button visibility
    const floatingBtn = document.getElementById('floating-back-top');
    if (floatingBtn) {
        const onScroll = () => {
            if (window.scrollY > 300) {
                floatingBtn.classList.add('visible');
            } else {
                floatingBtn.classList.remove('visible');
            }
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll(); // Run once immediately

        // Cleanup on route change
        window.addEventListener('hashchange', () => {
            window.removeEventListener('scroll', onScroll);
        }, { once: true });
    }

    // Sticky project nav scroll shadow
    const stickyNav = document.getElementById('sticky-proj-nav');
    if (stickyNav) {
        const onNavScroll = () => {
            if (window.scrollY > 10) {
                stickyNav.classList.add('scrolled');
            } else {
                stickyNav.classList.remove('scrolled');
            }
        };
        window.addEventListener('scroll', onNavScroll, { passive: true });
        window.addEventListener('hashchange', () => {
            window.removeEventListener('scroll', onNavScroll);
        }, { once: true });
    }

    setupLightboxControls();
}

// --- LIGHTBOX CAPABILITIES ---

function openLightbox(index) {
    if (projectImagesList.length === 0) return;
    currentImgIndex = index;

    updateLightboxSlide();

    const lightbox = document.getElementById('project-lightbox');
    if (lightbox) {
        lightbox.classList.add('active');
        lightbox.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden'; // Scroll lock
    }
}

function closeLightbox() {
    const lightbox = document.getElementById('project-lightbox');
    if (lightbox) {
        lightbox.classList.remove('active');
        lightbox.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = ''; // Restore scroll
        
        const mainImg = document.getElementById('lightbox-main-img');
        if (mainImg) {
            mainImg.src = '';
            mainImg.classList.remove('zoomed');
        }
    }
}

function updateLightboxSlide() {
    const slide = projectImagesList[currentImgIndex];
    if (!slide) return;

    const mainImg = document.getElementById('lightbox-main-img');
    const counterEl = document.getElementById('lightbox-img-counter');

    if (mainImg) {
        mainImg.src = slide.src;
        mainImg.classList.remove('zoomed');
        
        // Asynchronously preload the next slide in sequence for faster navigation
        const nextIdx = (currentImgIndex + 1) % projectImagesList.length;
        const nextSlide = projectImagesList[nextIdx];
        if (nextSlide) {
            const tempImg = new Image();
            tempImg.src = nextSlide.src;
        }
    }

    if (counterEl) {
        // e.g. "White Oud - Creative 2 / 7"
        const productGroupImages = projectImagesList.filter(x => x.productName === slide.productName);
        const relativeIdx = productGroupImages.findIndex(x => x.src === slide.src);
        counterEl.textContent = `${slide.productName} • Creative ${relativeIdx + 1} / ${productGroupImages.length}`;
    }
}

function navigateLightbox(direction) {
    if (projectImagesList.length === 0) return;

    const wrapper = document.querySelector('.lightbox-wrapper');
    if (wrapper) {
        wrapper.style.opacity = '0';
        wrapper.style.transform = direction === 'next' ? 'scale(0.96) translateX(15px)' : 'scale(0.96) translateX(-15px)';
        wrapper.style.transition = 'opacity 0.2s ease, transform 0.2s ease';
        
        setTimeout(() => {
            if (direction === 'next') {
                currentImgIndex = (currentImgIndex + 1) % projectImagesList.length;
            } else {
                currentImgIndex = (currentImgIndex - 1 + projectImagesList.length) % projectImagesList.length;
            }
            updateLightboxSlide();
            
            wrapper.style.transform = direction === 'next' ? 'scale(0.96) translateX(-15px)' : 'scale(0.96) translateX(15px)';
            wrapper.style.transition = 'none';
            
            setTimeout(() => {
                wrapper.style.opacity = '1';
                wrapper.style.transform = 'scale(1) translateX(0)';
                wrapper.style.transition = 'opacity 0.2s ease, transform 0.2s ease';
            }, 20);
        }, 200);
    } else {
        if (direction === 'next') {
            currentImgIndex = (currentImgIndex + 1) % projectImagesList.length;
        } else {
            currentImgIndex = (currentImgIndex - 1 + projectImagesList.length) % projectImagesList.length;
        }
        updateLightboxSlide();
    }
}

function setupLightboxControls() {
    const closeBtn = document.getElementById('lightbox-close-btn');
    const prevBtn = document.getElementById('lightbox-prev-btn');
    const nextBtn = document.getElementById('lightbox-next-btn');
    const mainImg = document.getElementById('lightbox-main-img');
    const overlay = document.getElementById('project-lightbox');

    if (closeBtn) closeBtn.onclick = closeLightbox;
    if (prevBtn) {
        prevBtn.onclick = (e) => {
            e.stopPropagation();
            navigateLightbox('prev');
        };
    }
    if (nextBtn) {
        nextBtn.onclick = (e) => {
            e.stopPropagation();
            navigateLightbox('next');
        };
    }

    if (mainImg) {
        mainImg.onclick = (e) => {
            e.stopPropagation();
            mainImg.classList.toggle('zoomed');
        };
    }

    if (overlay) {
        overlay.onclick = (e) => {
            if (e.target === overlay || e.target.classList.contains('lightbox-wrapper')) {
                closeLightbox();
            }
        };
    }

    // Keyboard listeners
    function handleKeyPress(e) {
        const lb = document.getElementById('project-lightbox');
        if (!lb || !lb.classList.contains('active')) return;

        if (e.key === 'Escape') closeLightbox();
        else if (e.key === 'ArrowRight') navigateLightbox('next');
        else if (e.key === 'ArrowLeft') navigateLightbox('prev');
    }
    window.addEventListener('keydown', handleKeyPress);

    // Swipe gestures
    let touchstartX = 0;
    let touchendX = 0;

    function handleSwipe() {
        if (touchendX < touchstartX - 50) {
            navigateLightbox('next');
        }
        if (touchendX > touchstartX + 50) {
            navigateLightbox('prev');
        }
    }

    const wrapper = document.querySelector('.lightbox-wrapper');
    if (wrapper) {
        wrapper.addEventListener('touchstart', e => {
            touchstartX = e.changedTouches[0].screenX;
        }, { passive: true });

        wrapper.addEventListener('touchend', e => {
            touchendX = e.changedTouches[0].screenX;
            handleSwipe();
        }, { passive: true });
    }

    // Cleanup listeners on router navigation
    const cleanupRouter = () => {
        window.removeEventListener('keydown', handleKeyPress);
        window.removeEventListener('hashchange', cleanupRouter);
    };
    window.addEventListener('hashchange', cleanupRouter);
}
