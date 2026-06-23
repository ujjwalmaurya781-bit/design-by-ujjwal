/**
 * Home Page View
 */
import { renderMarquee } from '../components/marquee.js';
import { renderProjectCard } from '../components/project-card.js';
import { fetchImagesFromFolder } from '../src/utils.js';

const marqueeItems = [
    "BRAND COMMUNICATION",
    "SOCIAL MEDIA CAMPAIGNS",
    "AMAZON A+ CONTENT",
    "PRODUCT STORYTELLING",
    "ADVERTISING CREATIVES",
    "VISUAL BRANDING"
];

const projects = [
    {
        id: "campaigns",
        num: "01",
        category: "Social Media Campaigns",
        title: "Advertising & Launch Graphics",
        description: "Large-format advertising campaigns, marketing banners, launch campaigns, fitness advertising, and promotional creatives.",
        coverImage: "",
        link: "#campaigns"
    },
    {
        id: "brand-comm",
        num: "02",
        category: "Brand Communication",
        title: "Social Campaigns & Brand Identity",
        description: "Social media visual campaigns, product promos, awareness creatives, festival graphics, and corporate dealer promotions.",
        coverImage: "",
        link: "#brand-comm"
    },
    {
        id: "ecommerce-design",
        num: "03",
        category: "E-commerce Design",
        title: "Listing Pages & Storefronts",
        description: "Amazon Listing Images, Amazon A+ Content modules, infographics, product storytelling layouts, and conversion-focused creatives.",
        coverImage: "",
        link: "#ecommerce"
    },
    {
        id: "renders",
        num: "04",
        category: "Product Rendering",
        title: "3D CGI Renders & Packshots",
        description: "Packaging renders, lifestyles, product visualization, structural details, and high-fidelity CGI arrangements.",
        coverImage: "",
        link: "#renders"
    }
];

const experiences = [
    {
        date: "APRIL 2026 - PRESENT",
        company: "Freelance",
        title: "Graphic Designer & Visual Storyteller",
        description: "Collaborating with brands and businesses on social media campaigns, brand communication, advertising creatives, Amazon A+ content, e-commerce graphics, and visual storytelling projects."
    },
    {
        date: "FEBRUARY 2026 - APRIL 2026",
        company: "NextZen Digital",
        title: "Graphic Designer",
        description: "Created social media campaigns, e-commerce creatives, performance marketing graphics, and visual branding materials for growing businesses."
    },
    {
        date: "MAY 2025 - JANUARY 2026",
        company: "Keyword India",
        title: "Graphic Designer",
        description: "Worked on social media campaigns, advertising creatives, marketing collateral, and brand communication assets for multiple clients and industries."
    },
    {
        date: "2024 - 2025",
        company: "Self-Managed YouTube Channel & Ayush Bhandari",
        title: "Content Creator & Content Ideation",
        description: "Developed content strategies, managed creative concepts, created thumbnails, explored audience psychology, and built a strong foundation in storytelling and visual communication."
    }
];

const skills = [
    {
        name: "Photoshop",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="skill-icon"><rect x="3" y="3" width="18" height="18" rx="4" stroke="#31a8ff"></rect><path d="M7 8h3a2 2 0 1 1 0 4H7v4M7 11h3" stroke="#31a8ff"></path><path d="M13 14.2c.3.3.8.5 1.3.5.6 0 1-.3 1-.7 0-.4-.3-.6-.9-.8-.7-.2-1.4-.4-1.4-1.2 0-.7.6-1.3 1.4-1.3.5 0 .9.2 1.2.4" stroke="#31a8ff"></path></svg>`
    },
    {
        name: "Illustrator",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="skill-icon"><rect x="3" y="3" width="18" height="18" rx="4" stroke="#ff9a00"></rect><path d="M7 15l2.5-6.5L12 15M8 13h3" stroke="#ff9a00"></path><line x1="15" y1="10" x2="15" y2="15" stroke="#ff9a00"></line><circle cx="15" cy="8" r="0.5" fill="#ff9a00" stroke="#ff9a00"></circle></svg>`
    },
    {
        name: "After Effects",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="skill-icon"><rect x="3" y="3" width="18" height="18" rx="4" stroke="#9999ff"></rect><path d="M6 15l2-5.5L10 15M7 13.5h2" stroke="#9999ff"></path><path d="M13.5 13h2.5c0-.8-.4-1.4-1.2-1.4-.8 0-1.2.6-1.2 1.4zm0 0c0 .8.4 1.4 1.2 1.4.5 0 .9-.3 1.1-.6" stroke="#9999ff"></path></svg>`
    },
    {
        name: "Premiere Pro",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="skill-icon"><rect x="3" y="3" width="18" height="18" rx="4" stroke="#ea77ff"></rect><path d="M6 8h2.5a1.75 1.75 0 0 1 0 3.5H6v3.5M6 11.5h2.5" stroke="#ea77ff"></path><path d="M13 11v4M13 12c.3-.6.8-1 1.4-1h.6" stroke="#ea77ff"></path></svg>`
    },
    {
        name: "AI Creative Tools",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="skill-icon"><path d="M12 2v4M12 18v4M4 12h4M18 12h4" stroke="var(--color-accent)"></path><path d="M12 6c0 3 3 6 6 6-3 0-6 3-6 6 0-3-3-6-6-6 3 0 6-3 6-6z" stroke="var(--color-accent)" fill="rgba(255, 107, 0, 0.1)"></path><path d="M19 5c0 1.5 1 2.5 2.5 2.5-1.5 0-2.5 1-2.5 2.5 0-1.5-1-2.5-2.5-2.5 1.5 0 2.5-1 2.5-2.5z" stroke="var(--color-accent)"></path></svg>`
    },
    {
        name: "Brand Communication",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="skill-icon"><circle cx="12" cy="7" r="3" stroke="var(--color-accent)"></circle><circle cx="6" cy="17" r="3" stroke="var(--color-accent)"></circle><circle cx="18" cy="17" r="3" stroke="var(--color-accent)"></circle><line x1="10.2" y1="9.5" x2="7.8" y2="14.5" stroke="var(--color-text-dark)"></line><line x1="13.8" y1="9.5" x2="16.2" y2="14.5" stroke="var(--color-text-dark)"></line><line x1="9" y1="17" x2="15" y2="17" stroke="var(--color-text-dark)"></line></svg>`
    },
    {
        name: "Amazon A+ Content",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="skill-icon"><rect x="3" y="3" width="18" height="6" rx="1" stroke="var(--color-accent)"></rect><rect x="3" y="11" width="8" height="10" rx="1" stroke="var(--color-accent)"></rect><rect x="13" y="11" width="8" height="4" rx="1" stroke="var(--color-text-dark)"></rect><rect x="13" y="17" width="8" height="4" rx="1" stroke="var(--color-text-dark)"></rect></svg>`
    },
    {
        name: "Visual Storytelling",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="skill-icon"><rect x="3" y="4" width="18" height="16" rx="2" stroke="var(--color-accent)"></rect><path d="M8 4v16M16 4v16M3 8h5M16 8h5M3 12h5M16 12h5M3 16h5M16 16h5" stroke="var(--color-text-dark)"></path><polygon points="11,9 15,12 11,15" stroke="var(--color-accent)" fill="rgba(255, 107, 0, 0.1)"></polygon></svg>`
    }
];

export function renderHome() {
    const projectCardsHtml = projects.map(p => renderProjectCard(p)).join('');

    const timelineHtml = experiences.map(exp => `
        <div class="timeline-item fade-in-section">
            <div class="timeline-meta">
                <span class="timeline-date">${exp.date}</span>
                <span class="timeline-company">${exp.company}</span>
            </div>
            <h4 class="timeline-title">${exp.title}</h4>
            <p class="timeline-desc">${exp.description}</p>
        </div>
    `).join('');

    const skillsHtml = skills.map(skill => `
        <div class="specialization-card">
            <div class="specialization-icon-wrapper">
                ${skill.icon}
            </div>
            <span class="specialization-label">${skill.name}</span>
        </div>
    `).join('');

    return `
    <!-- 1. HERO SECTION -->
    <section class="hero-section" id="home">
        <div class="container">
            <div class="hero-glass-container">
                <div class="hero-grid">
            <div class="hero-content">
                <span class="hero-label">BRAND DESIGNER • VISUAL STORYTELLER • AI CREATIVE SPECIALIST</span>
                <h1 class="hero-title">UJJWAL<br>MAURYA</h1>
                <p class="hero-description">
                    Visual Designer &amp; Brand Communication Specialist crafting high-impact social media campaigns, advertising creatives, Amazon listing graphics, and visual storytelling experiences.
                </p>
                
                <!-- Horizontal Stats Row -->
                <div class="hero-stats-container">
                    <div class="hero-stat-card">
                        <span class="hero-stat-num">1.5+</span>
                        <span class="hero-stat-label">Years Experience</span>
                    </div>
                    <div class="hero-stat-card">
                        <span class="hero-stat-num">80+</span>
                        <span class="hero-stat-label">Projects Delivered</span>
                    </div>
                    <div class="hero-stat-card">
                        <span class="hero-stat-num">50+</span>
                        <span class="hero-stat-label">Brands Worked With</span>
                    </div>
                    <div class="hero-stat-card">
                        <span class="hero-stat-num">AI</span>
                        <span class="hero-stat-label">Powered Workflow</span>
                    </div>
                </div>

                <div class="hero-actions" style="margin-bottom: var(--space-md);">
                    <a href="#selected-work" class="btn btn-primary">
                        <span>View Work</span>
                        <span class="btn-icon">&rarr;</span>
                    </a>
                    <a href="javascript:void(0)" class="btn btn-secondary hero-download-btn">
                        <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="btn-icon-left" style="margin-right: 8px; vertical-align: middle;"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                        <span>Download Resume</span>
                    </a>
                </div>
                
                <!-- Hero Clickable Social Links Row -->
                <div class="hero-social-links" style="display: flex; gap: 16px; align-items: center;">
                    <a href="mailto:ujjwalmaurya781@gmail.com" target="_blank" rel="noopener" class="hero-social-icon-link" aria-label="Email Ujjwal">
                        <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    </a>
                    <a href="https://www.linkedin.com/in/ujjwal-maurya-3a997521a" target="_blank" rel="noopener noreferrer" class="hero-social-icon-link" aria-label="LinkedIn Profile">
                        <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    </a>
                    <a href="https://www.behance.net/ujjwalmaurya2" target="_blank" rel="noopener noreferrer" class="hero-social-icon-link" aria-label="Behance Profile">
                        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8.224 8.448c.515 0 .973.076 1.373.228a2.533 2.533 0 0 1 1.002.668c.264.293.46.657.585 1.092.126.435.189.925.189 1.472 0 .548-.066 1.033-.199 1.458-.133.424-.336.782-.609 1.071a2.802 2.802 0 0 1-1.043.682c-.419.162-.924.243-1.516.243H3.067V8.448h5.157zm-1.09 3.033c0-.306-.03-.564-.092-.773a1.298 1.298 0 0 0-.293-.538 1.258 1.258 0 0 0-.52-.338c-.218-.083-.497-.124-.836-.124H5.197v3.527h1.037c.367 0 .66-.039.879-.118.219-.078.394-.2.525-.367.13-.167.222-.375.275-.625.053-.25.079-.533.079-.848c-.001.002-.001.002-.001.002zm1.096-4.526c.394 0 .736.031 1.028.092.292.062.537.159.736.293.199.134.351.314.457.538.106.225.159.508.159.851 0 .285-.038.533-.114.743a1.597 1.597 0 0 1-.36.562 1.936 1.936 0 0 1-.655.421c-.279.112-.647.168-1.106.168H5.197V6.955H8.23zm-.462 2.115c0-.18-.018-.328-.053-.446a.792.792 0 0 0-.171-.302.736.736 0 0 0-.307-.189c-.13-.046-.307-.069-.533-.069H5.197v2.022h1.564c.225 0 .399-.02.52-.059a.784.784 0 0 0 .3-.171c.097-.091.166-.211.205-.36a1.458 1.458 0 0 0 .06-.411v-.016zm12.333-.509h-4.945c.012-.416.082-.767.21-1.053.128-.286.309-.52.544-.702a2.38 2.38 0 0 1 .842-.405c.328-.088.7-.132 1.116-.132.394 0 .738.041 1.032.124.294.083.541.206.742.367.2.161.353.364.456.609.103.245.16.529.171.854.004-.002.032-.062.032-.062zm.315 2.115h1.996a6.388 6.388 0 0 1-.416 1.583 4.549 4.549 0 0 1-.94 1.383c-.413.413-.918.736-1.517.969-.598.232-1.29.349-2.077.349-.817 0-1.529-.12-2.136-.359a4.673 4.673 0 0 1-1.602-1.026 5.093 5.093 0 0 1-1.047-1.637c-.25-.639-.375-1.371-.375-2.196 0-.814.122-1.536.367-2.166a4.896 4.896 0 0 1 1.028-1.633 4.678 4.678 0 0 1 1.583-1.032c.602-.245 1.3-.367 2.094-.367.755 0 1.425.111 2.01.334.585.222 1.074.536 1.468.94.394.404.69.897.888 1.48.199.582.289 1.233.27 1.953h-7.653c0 .356.035.688.106.994.07.307.19.57.359.789.168.219.394.39.675.513.282.123.633.184 1.053.184.533 0 .963-.092 1.29-.276a2.27 2.27 0 0 0 .805-.724c.214-.298.358-.636.432-1.014.07-.384.101-.762.092-1.139zm-.375-7.534h-4.333v1.083h4.333V4.004z"></path></svg>
                    </a>
                    <a href="https://instagram.com/ujjwaldesigns" target="_blank" rel="noopener noreferrer" class="hero-social-icon-link" aria-label="Instagram Profile">
                        <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                    </a>
                    <a href="https://youtube.com/@buntyyyyyyy" target="_blank" rel="noopener noreferrer" class="hero-social-icon-link" aria-label="YouTube Channel">
                        <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
                    </a>
                </div>
            </div>
            
            <!-- Floating Portrait Composition -->
            <div class="hero-portrait-wrapper">
                <!-- Organic flowing outline -->
                <div class="portrait-blob-outline"></div>
                <div class="portrait-organic-glow"></div>
                <div class="floating-circle-blur"></div>
                
                <!-- Floating background cards, blurred and subtle -->
                <div class="floating-card-wrapper hero-showcase-wrapper hero-showcase-1-wrap hero-layer-1">
                    <div class="hero-showcase-card hero-showcase-1">
                        <img src="assets/brand-communication/aagaz-locks/aagaz_creative_1.jpg" alt="Aagaz Locks Creative">
                    </div>
                </div>
                <div class="floating-card-wrapper hero-showcase-wrapper hero-showcase-2-wrap hero-layer-2">
                    <div class="hero-showcase-card hero-showcase-2">
                        <img src="assets/brand-communication/goldwood-ply/post-01.jpg" alt="Goldwood Ply Creative">
                    </div>
                </div>
                <div class="floating-card-wrapper hero-showcase-wrapper hero-showcase-3-wrap hero-layer-3">
                    <div class="hero-showcase-card hero-showcase-3">
                        <img src="assets/brand-communication/madhav-food-products/madhav-mamara-post.jpg" alt="Madhav Foods Creative">
                    </div>
                </div>
                <div class="floating-card-wrapper hero-showcase-wrapper hero-showcase-4-wrap hero-layer-1">
                    <div class="hero-showcase-card hero-showcase-4">
                        <img src="assets/ecommerce/camx/am-01/listing/Artboard 1.png" alt="CAMX Amazon Creative">
                    </div>
                </div>
                <div class="floating-card-wrapper hero-showcase-wrapper hero-showcase-5-wrap hero-layer-2">
                    <div class="hero-showcase-card hero-showcase-5">
                        <img src="assets/campaigns/jewar-organics/jewar flour banner.jpg" alt="Jewar Organics Campaign">
                    </div>
                </div>
                <div class="floating-card-wrapper hero-showcase-wrapper hero-showcase-6-wrap hero-layer-3">
                    <div class="hero-showcase-card hero-showcase-6">
                        <img src="assets/campaigns/muscle-smith/Focus preworkout mobile v2(f).png" alt="Muscle Smith Campaign">
                    </div>
                </div>
                <div class="floating-card-wrapper hero-showcase-wrapper hero-showcase-7-wrap hero-layer-1">
                    <div class="hero-showcase-card hero-showcase-7">
                        <img src="assets/brand-communication/uninox-houseware/uninox-independenc.jpg" alt="Uninox Houseware Creative">
                    </div>
                </div>
                <div class="floating-card-wrapper hero-showcase-wrapper hero-showcase-8-wrap hero-layer-2">
                    <div class="hero-showcase-card hero-showcase-8">
                        <img src="assets/brand-communication/aagaz-locks/aagaz_creative_2.jpg" alt="Aagaz Locks Creative">
                    </div>
                </div>
                <div class="floating-card-wrapper hero-showcase-wrapper hero-showcase-9-wrap hero-layer-3">
                    <div class="hero-showcase-card hero-showcase-9">
                        <img src="assets/brand-communication/goldwood-ply/post-02.jpg" alt="Goldwood Ply Creative">
                    </div>
                </div>
                <div class="floating-card-wrapper hero-showcase-wrapper hero-showcase-10-wrap hero-layer-1">
                    <div class="hero-showcase-card hero-showcase-10">
                        <img src="assets/brand-communication/madhav-food-products/madhav-teachers-day.jpg" alt="Madhav Foods Creative">
                    </div>
                </div>
                <div class="floating-card-wrapper hero-showcase-wrapper hero-showcase-11-wrap hero-layer-2">
                    <div class="hero-showcase-card hero-showcase-11">
                        <img src="assets/ecommerce/camx/am-01/listing/Artboard 2.png" alt="CAMX Amazon Creative">
                    </div>
                </div>
                <div class="floating-card-wrapper hero-showcase-wrapper hero-showcase-12-wrap hero-layer-3">
                    <div class="hero-showcase-card hero-showcase-12">
                        <img src="assets/campaigns/jewar-organics/jewar holi special.jpg" alt="Jewar Organics Campaign">
                    </div>
                </div>
                <div class="floating-card-wrapper hero-showcase-wrapper hero-showcase-13-wrap hero-layer-1">
                    <div class="hero-showcase-card hero-showcase-13">
                        <img src="assets/campaigns/muscle-smith/whey protein mobile v1(f).png" alt="Muscle Smith Campaign">
                    </div>
                </div>
                <div class="floating-card-wrapper hero-showcase-wrapper hero-showcase-14-wrap hero-layer-2">
                    <div class="hero-showcase-card hero-showcase-14">
                        <img src="assets/brand-communication/uninox-houseware/uninox-new-sep01.jpg" alt="Uninox Houseware Creative">
                    </div>
                </div>
                
                <!-- Portrait Canvas (z-index 100) -->
                <div class="hero-portrait-canvas">
                    <div class="portrait-frame-backdrop"></div>
                    <div class="portrait-image-container" id="portrait-reveal-container">
                        <!-- Layer 1: Real portrait underlay (visible underneath, sharp face) -->
                        <div class="portrait-underlay real-portrait-underlay">
                            <img src="assets/ujjwal_portrait.png" alt="Ujjwal Maurya Profile Portrait" class="portrait-underlay-sharp">
                            <img src="assets/ujjwal_portrait.png" alt="Ujjwal Maurya Profile Portrait" class="portrait-underlay-blur">
                        </div>
                        
                        <!-- Layer 2: Glass overlay with backdrop blur (very subtle, with reflections and streaks) -->
                        <div class="portrait-glass-layer">
                            <div class="glass-reflection-highlight"></div>
                            <div class="glass-noise-grain"></div>
                        </div>
                        
                        <!-- Layer 3: Spotlight layer (revealed on top of glass, sharp and bright) -->
                        <div class="portrait-spotlight-layer" id="portrait-reveal-mask">
                            <img src="assets/ujjwal_portrait.png" alt="Ujjwal Maurya Profile Portrait" class="spotlight-portrait-img">
                            <div class="portrait-contour-glow"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Scroll to Explore -->
            <div class="hero-scroll-explore">
                <div class="explore-capsule">
                    <span class="explore-dot"></span>
                </div>
                <span class="explore-text">Scroll to Explore</span>
            </div>
            
            <!-- Floating Creative Preview -->
            <div class="hero-creative-preview">
                <div class="preview-glass-card">
                    <div class="preview-carousel" id="hero-carousel">
                        <div class="preview-slide active" style="background-image: url('assets/brand-communication/goldwood-ply/post-01.jpg');"></div>
                        <div class="preview-slide" style="background-image: url('assets/brand-communication/madhav-food-products/madhav-mamara-post.jpg');"></div>
                        <div class="preview-slide" style="background-image: url('assets/ecommerce/camx/am-01/listing/Artboard 1.png');"></div>
                        <div class="preview-slide" style="background-image: url('assets/campaigns/muscle-smith/Focus preworkout mobile v2(f).png');"></div>
                    </div>
                    <div class="preview-info">
                        <span class="preview-count">200+</span>
                        <span class="preview-title">Design Assets</span>
                        <span class="preview-subtitle">Across Categories</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

    <!-- 2. MOVING MARQUEE -->
    <section class="marquee-section">
        ${renderMarquee(marqueeItems)}
    </section>

    <!-- RIGHT SIDE NAVIGATION DOTS -->
    <nav class="right-nav-dots" id="right-nav-dots" aria-label="Page sections navigation">
        <a href="#home" class="nav-dot active" data-section="home" title="Hero" aria-label="Go to Hero section"></a>
        <a href="#design-universe" class="nav-dot" data-section="design-universe" title="Universe" aria-label="Go to Design Universe section"></a>
        <a href="#selected-work" class="nav-dot" data-section="selected-work" title="Work" aria-label="Go to Selected Work section"></a>
        <a href="#about" class="nav-dot" data-section="about" title="About" aria-label="Go to About section"></a>
        <a href="#resume" class="nav-dot" data-section="resume" title="Resume" aria-label="Go to Resume section"></a>
        <a href="#contact" class="nav-dot" data-section="contact" title="Contact" aria-label="Go to Contact section"></a>
    </nav>

    <!-- 3. DESIGN UNIVERSE (3D Floating Portal Space) -->
    <section id="design-universe" class="universe-section">
        <div class="universe-sticky-viewport">
            <!-- Canvas Serene Background -->
            <canvas id="universe-canvas"></canvas>

            <div class="universe-marquee-header">
                <span class="section-subtitle">CREATIVE ARCHIVE</span>
                <h2 class="section-title">Design Universe</h2>
                <p class="section-desc">A floating creative universe of projects in 3D space. Move your cursor to experience the depth parallax.</p>
            </div>

            <!-- 3D Space -->
            <div class="universe-3d-space"></div>

            <!-- Portal Expansion Overlay -->
            <div class="portal-expand-overlay" id="portal-expand-overlay">
                <div class="portal-modal-glass">
                    <button class="portal-modal-close" id="portal-modal-close" aria-label="Close portal">&times;</button>
                    <div class="portal-modal-body">
                        <!-- Left Side: Project details and large Cover Image -->
                        <div class="portal-modal-left-side">
                            <span class="portal-modal-category" id="portal-modal-category">CATEGORY</span>
                            <h2 class="portal-modal-title" id="portal-modal-title">PROJECT TITLE</h2>
                            <p class="portal-modal-description" id="portal-modal-description">Short description...</p>
                            <div class="portal-modal-image-container">
                                <img src="" alt="" class="portal-modal-img" id="portal-modal-img">
                            </div>
                            <div class="portal-modal-actions" style="margin-top: 20px;">
                                <button class="btn btn-secondary" id="portal-modal-gallery-btn">
                                    <span>Explore Creatives</span>
                                </button>
                                <a href="" class="btn btn-primary" id="portal-modal-action-link">
                                    <span>View Full Case Study</span>
                                    <span class="btn-icon">&rarr;</span>
                                </a>
                            </div>
                        </div>
                        <!-- Right Side: Creative Previews Grid -->
                        <div class="portal-modal-right-side">
                            <h3 class="previews-title">Creative Previews</h3>
                            <div class="portal-modal-previews-grid" id="portal-modal-previews-grid">
                                <!-- Creative previews injected dynamically -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Lightbox Overlay (Slideshow) -->
            <div class="lightbox-overlay" id="portal-lightbox-overlay" style="display: none; z-index: 20000;">
                <button class="lightbox-close" id="portal-lightbox-close" aria-label="Close Lightbox">&times;</button>
                <button class="lightbox-btn lightbox-prev-btn" id="portal-lightbox-prev" aria-label="Previous Image">&lsaquo;</button>
                <div class="lightbox-wrapper">
                    <img class="lightbox-image" id="portal-lightbox-image" src="" alt="Lightbox Preview">
                </div>
                <button class="lightbox-btn lightbox-next-btn" id="portal-lightbox-next" aria-label="Next Image">&rsaquo;</button>
                <div class="lightbox-counter" id="portal-lightbox-counter">Creative 1 / 1</div>
                <div class="lightbox-swipe-hint">Swipe to browse</div>
            </div>
        </div>

        <!-- Mobile Swipeable Fallback Layout -->
        <div class="universe-mobile-view">
            <div class="mobile-universe-header">
                <span class="section-subtitle">CREATIVE ARCHIVE</span>
                <h2 class="section-title">Design Universe</h2>
            </div>
            
            <div class="mobile-category-group">
                <h3 class="mobile-category-title">Brand Communication</h3>
                <div class="mobile-scroll-row" id="mobile-row-brands"></div>
            </div>
            
            <div class="mobile-category-group">
                <h3 class="mobile-category-title">Ecommerce Design</h3>
                <div class="mobile-scroll-row" id="mobile-row-ecommerce"></div>
            </div>
            
            <div class="mobile-category-group">
                <h3 class="mobile-category-title">Campaigns</h3>
                <div class="mobile-scroll-row" id="mobile-row-campaigns"></div>
            </div>
            
            <div class="mobile-category-group">
                <h3 class="mobile-category-title">Product Renders</h3>
                <div class="mobile-scroll-row" id="mobile-row-renders"></div>
            </div>
        </div>
    </section>

    <!-- 10-STEP PROGRESS TRACKER -->
    <div class="global-progress-tracker-panel">
        <div class="tracker-steps-container">
            <div class="tracker-step active" data-step="1" title="Hero">
                <span class="tracker-dot"></span>
                <span class="tracker-text">01 HERO</span>
            </div>
            <div class="tracker-step" data-step="2" title="Vision">
                <span class="tracker-dot"></span>
                <span class="tracker-text">02 VISION</span>
            </div>
            <div class="tracker-step" data-step="3" title="Brands">
                <span class="tracker-dot"></span>
                <span class="tracker-text">03 BRANDS</span>
            </div>
            <div class="tracker-step" data-step="4" title="Ecommerce">
                <span class="tracker-dot"></span>
                <span class="tracker-text">04 ECOMMERCE</span>
            </div>
            <div class="tracker-step" data-step="5" title="Campaigns">
                <span class="tracker-dot"></span>
                <span class="tracker-text">05 CAMPAIGNS</span>
            </div>
            <div class="tracker-step" data-step="6" title="Visuals">
                <span class="tracker-dot"></span>
                <span class="tracker-text">06 VISUALS</span>
            </div>
            <div class="tracker-step" data-step="7" title="Portfolio">
                <span class="tracker-dot"></span>
                <span class="tracker-text">07 PORTFOLIO</span>
            </div>
            <div class="tracker-step" data-step="8" title="About">
                <span class="tracker-dot"></span>
                <span class="tracker-text">08 ABOUT</span>
            </div>
            <div class="tracker-step" data-step="9" title="Resume">
                <span class="tracker-dot"></span>
                <span class="tracker-text">09 RESUME</span>
            </div>
            <div class="tracker-step" data-step="10" title="Connect">
                <span class="tracker-dot"></span>
                <span class="tracker-text">10 CONNECT</span>
            </div>
        </div>
        <div class="tracker-progress-bar">
            <div class="tracker-progress-fill"></div>
        </div>
    </div>

    <!-- 3. SELECTED WORK SECTION -->
    <section id="selected-work">
        <div class="container">
            <div class="section-header">
                <div>
                    <span class="section-subtitle">Portfolio</span>
                    <h2 class="section-title">Selected Work</h2>
                </div>
                <div style="font-family: var(--font-heading); color: var(--color-text-dark); font-weight: 500;">
                    05 / WORK CATEGORIES
                </div>
            </div>
            
            <div class="project-grid">
                ${projectCardsHtml}
            </div>
        </div>
    </section>

    <!-- 4. ABOUT SECTION -->
    <section id="about" style="background-color: var(--color-bg-pitch);">
        <div class="container">
            <div class="section-header">
                <div>
                    <span class="section-subtitle">Biography</span>
                    <h2 class="section-title">About Me</h2>
                </div>
                <div style="font-family: var(--font-heading); color: var(--color-text-dark); font-weight: 500;">
                    JOURNEY
                </div>
            </div>

            <div class="about-grid">
                <!-- Left Column: Portrait -->
                <div class="about-portrait-wrapper fade-in-section">
                    <div class="about-portrait-card">
                        <div class="about-portrait-frame">
                            <img src="assets/ujjwal_portrait.png" alt="Ujjwal Maurya Portrait" class="about-portrait-img">
                        </div>
                        <div class="about-portrait-caption">Freelance Graphic Designer &amp; Visual Storyteller</div>
                    </div>
                </div>

                <!-- Right Column: Content -->
                <div class="about-content-wrapper">
                    <div class="about-editorial-text fade-in-section" style="margin-bottom: var(--space-md);">
                        Graphic Designer &amp; Visual Storyteller with <span>1.5+ years of experience</span> creating brand communication systems, social media campaigns, advertising creatives, Amazon A+ content, and e-commerce design solutions.
                    </div>
                    <div class="about-details fade-in-section">
                        <p class="about-bio-para" style="margin-bottom: var(--space-sm);">
                            My journey started through content creation, visual storytelling, and content ideation before evolving into professional graphic design. Over the years, I have worked with agencies, brands, and independent clients across hardware, FMCG, interiors, technology, lifestyle, and consumer product industries.
                        </p>
                        <p class="about-bio-para" style="margin-bottom: var(--space-md);">
                            I specialize in transforming business ideas into compelling visual experiences that connect strategy with creativity. From social media communication and advertising campaigns to Amazon listings and brand identity systems, my focus is always on creating work that is both visually engaging and commercially effective.
                        </p>
                        
                        <div class="about-stat-row">
                            <div class="about-stat-box">
                                <div class="about-stat-num">1.5+</div>
                                <div class="about-stat-label">Years Experience</div>
                            </div>
                            <div class="about-stat-box">
                                <div class="about-stat-num">80+</div>
                                <div class="about-stat-label">Projects Completed</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- 5. RESUME SECTION -->
    <section id="resume">
        <div class="container">
            <div class="section-header">
                <div>
                    <span class="section-subtitle">Experience &amp; Skills</span>
                    <h2 class="section-title">Resume</h2>
                </div>
                <div style="font-family: var(--font-heading); color: var(--color-text-dark); font-weight: 500;">
                    CURRICULUM VITAE
                </div>
            </div>

            <div class="resume-grid">
                <!-- Vertical Timeline -->
                <div class="timeline">
                    ${timelineHtml}
                </div>

                <!-- Core Tooling & PDF Resume -->
                <div class="skills-container fade-in-section">
                    <h3 class="skills-title">Core Tooling</h3>
                    <p class="about-bio-para" style="font-size: 0.95rem; margin-bottom: var(--space-md); line-height: 1.7;">
                        High proficiency in Adobe Creative Suite, specifically Adobe Photoshop for composite design, Illustrator for vector identity files, and After Effects &amp; Premiere Pro for motion visual campaigns and content ideation.
                    </p>
                    <a href="javascript:void(0)" class="btn btn-secondary hero-download-btn" style="width: 100%; border-radius: 30px;">
                        <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="btn-icon-left" style="margin-right: 8px; vertical-align: middle;"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                        <span>Download Resume PDF</span>
                    </a>
                </div>
            </div>

            <!-- Full-Width Design Specializations Grid -->
            <div class="specializations-container fade-in-section" style="margin-top: var(--space-xl);">
                <h3 class="skills-title" style="margin-bottom: var(--space-lg);">Design Specializations</h3>
                <div class="specializations-grid">
                    ${skillsHtml}
                </div>
            </div>
        </div>
    </section>

    <!-- 6. CONTACT / LET'S WORK TOGETHER SECTION -->
    <section id="contact" class="premium-contact-section">
        <div class="contact-glow-blur"></div>
        <div class="container">
            <div class="contact-wrapper">
                <span class="section-subtitle" style="margin-bottom: var(--space-md);">Get In Touch</span>
                <h2 class="contact-hero-heading">LET'S WORK TOGETHER</h2>
                <a href="mailto:ujjwalmaurya781@gmail.com" target="_blank" rel="noopener" class="contact-email-link">
                    ujjwalmaurya781@gmail.com
                </a>
                
                <!-- CTA buttons with new tab opening -->
                <div class="contact-cta-buttons fade-in-section">
                    <a href="mailto:ujjwalmaurya781@gmail.com" target="_blank" rel="noopener" class="btn btn-primary cta-btn glow-button">
                        <svg class="cta-icon" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                        <span>Email Me</span>
                    </a>
                    <a href="https://www.linkedin.com/in/ujjwal-maurya-3a997521a" target="_blank" rel="noopener" class="btn btn-secondary cta-btn">
                        <svg class="cta-icon" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                        <span>LinkedIn</span>
                    </a>
                    <a href="https://www.behance.net/ujjwalmaurya2" target="_blank" rel="noopener" class="btn btn-secondary cta-btn">
                        <svg class="cta-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M8.224 8.448c.515 0 .973.076 1.373.228a2.533 2.533 0 0 1 1.002.668c.264.293.46.657.585 1.092.126.435.189.925.189 1.472 0 .548-.066 1.033-.199 1.458-.133.424-.336.782-.609 1.071a2.802 2.802 0 0 1-1.043.682c-.419.162-.924.243-1.516.243H3.067V8.448h5.157zm-1.09 3.033c0-.306-.03-.564-.092-.773a1.298 1.298 0 0 0-.293-.538 1.258 1.258 0 0 0-.52-.338c-.218-.083-.497-.124-.836-.124H5.197v3.527h1.037c.367 0 .66-.039.879-.118.219-.078.394-.2.525-.367.13-.167.222-.375.275-.625.053-.25.079-.533.079-.848c-.001.002-.001.002-.001.002zm1.096-4.526c.394 0 .736.031 1.028.092.292.062.537.159.736.293.199.134.351.314.457.538.106.225.159.508.159.851 0 .285-.038.533-.114.743a1.597 1.597 0 0 1-.36.562 1.936 1.936 0 0 1-.655.421c-.279.112-.647.168-1.106.168H5.197V6.955H8.23zm-.462 2.115c0-.18-.018-.328-.053-.446a.792.792 0 0 0-.171-.302.736.736 0 0 0-.307-.189c-.13-.046-.307-.069-.533-.069H5.197v2.022h1.564c.225 0 .399-.02.52-.059a.784.784 0 0 0 .3-.171c.097-.091.166-.211.205-.36a1.458 1.458 0 0 0 .06-.411v-.016zm12.333-.509h-4.945c.012-.416.082-.767.21-1.053.128-.286.309-.52.544-.702a2.38 2.38 0 0 1 .842-.405c.328-.088.7-.132 1.116-.132.394 0 .738.041 1.032.124.294.083.541.206.742.367.2.161.353.364.456.609.103.245.16.529.171.854.004-.002.032-.062.032-.062zm.315 2.115h1.996a6.388 6.388 0 0 1-.416 1.583 4.549 4.549 0 0 1-.94 1.383c-.413.413-.918.736-1.517.969-.598.232-1.29.349-2.077.349-.817 0-1.529-.12-2.136-.359a4.673 4.673 0 0 1-1.602-1.026 5.093 5.093 0 0 1-1.047-1.637c-.25-.639-.375-1.371-.375-2.196 0-.814.122-1.536.367-2.166a4.896 4.896 0 0 1 1.028-1.633 4.678 4.678 0 0 1 1.583-1.032c.602-.245 1.3-.367 2.094-.367.755 0 1.425.111 2.01.334.585.222 1.074.536 1.468.94.394.404.69.897.888 1.48.199.582.289 1.233.27 1.953h-7.653c0 .356.035.688.106.994.07.307.19.57.359.789.168.219.394.39.675.513.282.123.633.184 1.053.184.533 0 .963-.092 1.29-.276a2.27 2.27 0 0 0 .805-.724c.214-.298.358-.636.432-1.014.07-.384.101-.762.092-1.139zm-.375-7.534h-4.333v1.083h4.333V4.004z"></path></svg>
                        <span>Behance</span>
                    </a>
                    <a href="https://instagram.com/ujjwaldesigns" target="_blank" rel="noopener noreferrer" class="btn btn-secondary cta-btn">
                        <svg class="cta-icon" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                        <span>Instagram</span>
                    </a>
                </div>

                <!-- RESUME PREVIEW MODAL -->
                <div class="resume-modal-overlay" id="resume-modal">
                    <div class="resume-modal-container">
                        <button class="resume-modal-close" id="resume-modal-close" aria-label="Close Modal">&times;</button>
                        <div class="resume-modal-content">
                            <div class="resume-modal-preview">
                                <div class="resume-preview-img-wrapper" style="position: relative; width: 100%; display: flex; align-items: center; justify-content: center; overflow: hidden; border-radius: 12px; background: rgba(255, 255, 255, 0.01);">
                                    <img src="/assets/resume/resume-preview.jpg" alt="Ujjwal Maurya Resume Preview" class="resume-preview-img" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                                    <div class="resume-preview-fallback" style="display: none; width: 100%; height: 100%; align-items: center; justify-content: center; text-align: center; color: var(--color-text-muted); font-style: italic; min-height: 400px; font-family: var(--font-body); font-size: 0.9rem;">
                                        Resume Preview Not Available
                                    </div>
                                </div>
                            </div>
                            <div class="resume-modal-details">
                                <h3 class="resume-modal-title">Ujjwal Maurya</h3>
                                <p class="resume-modal-subtitle">Brand Designer &amp; Visual Storyteller</p>
                                <div class="resume-modal-divider"></div>
                                <h4 class="resume-modal-section-title">Professional Summary</h4>
                                <p class="resume-modal-text">
                                    Visual Designer &amp; Brand Communication Specialist with 1.5+ years of experience. High proficiency in Adobe Creative Suite, crafting high-impact social media campaigns, advertising creatives, and e-commerce storytelling. Combining strategic design with visual storytelling to create premium brand experiences.
                                </p>
                                <div class="resume-modal-actions">
                                    <a href="/assets/resume/Ujjwal-Maurya-Resume.pdf" download="Ujjwal-Maurya-Resume.pdf" class="btn btn-primary resume-modal-download-btn">
                                        <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="btn-icon-left" style="margin-right: 8px; vertical-align: middle;"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                                        <span>Download Resume</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    `;
}

export async function initHome() {
    // Cache elements
    const universeSection = document.getElementById('design-universe');
    const universe3DSpace = document.querySelector('.universe-3d-space');
    
    // Portal expand modal overlay elements
    const portalModal = document.getElementById('portal-expand-overlay');
    const portalModalClose = document.getElementById('portal-modal-close');
    const portalModalImg = document.getElementById('portal-modal-img');
    const portalModalCategory = document.getElementById('portal-modal-category');
    const portalModalTitle = document.getElementById('portal-modal-title');
    const portalModalDesc = document.getElementById('portal-modal-description');
    const portalModalLink = document.getElementById('portal-modal-action-link');

    // Bind Resume Modal Overlay logic synchronously on load
    const modal = document.getElementById('resume-modal');
    const closeBtn = document.getElementById('resume-modal-close');
    const downloadBtns = document.querySelectorAll('.hero-download-btn');

    if (modal && closeBtn && downloadBtns.length > 0) {
        const openModal = (e) => {
            e.preventDefault();
            e.stopPropagation();
            modal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Scroll lock
        };

        const closeModal = () => {
            modal.classList.remove('active');
            document.body.style.overflow = ''; // Scroll restore
        };

        downloadBtns.forEach(btn => {
            btn.addEventListener('click', openModal);
        });

        closeBtn.addEventListener('click', closeModal);

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });

        // ESC Key listener
        const escListener = (e) => {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                closeModal();
            }
        };
        document.addEventListener('keydown', escListener);

        // Cleanup key listener when route changes (since SPA replaces elements)
        const cleanupModal = () => {
            document.removeEventListener('keydown', escListener);
            window.removeEventListener('hashchange', cleanupModal);
        };
        window.addEventListener('hashchange', cleanupModal);
    }

    let targetProgress = 0;
    let currentProgress = 0;
    let activeRingIndex = 1;
    let rAFId = null;

    let targetMouseX = 0;
    let targetMouseY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;

    let isDragging = false;
    let startTouchX = 0;
    let startTouchY = 0;
    let baseTouchX = 0;
    let baseTouchY = 0;

    let hasGyro = false;
    let gyroX = 0;
    let gyroY = 0;

    // Map project card IDs to their primary target folders to scan for cover images
    const projectFolderMappings = {
        'campaigns': 'assets/campaigns/jewar-organics/',
        'brand-comm': 'assets/brand-communication/goldwood-ply/',
        'ecommerce-design': 'assets/ecommerce/rumaisa/perfume-01/listing/',
        'renders': 'assets/renders/'
    };

    for (const [projectId, folderPath] of Object.entries(projectFolderMappings)) {
        const coverImg = document.getElementById(`cover-img-${projectId}`);
        const coverWrapper = document.getElementById(`cover-wrapper-${projectId}`);

        if (coverImg && coverWrapper) {
            const images = await fetchImagesFromFolder(folderPath);
            if (images && images.length > 0) {
                // Set the cover image as the first image in the folder
                coverImg.src = images[0];
                coverImg.style.display = 'block';
                coverWrapper.classList.remove('no-image');
            } else {
                // No images in the folder, hide image element and trigger the CSS fallback
                coverImg.style.display = 'none';
                coverWrapper.classList.add('no-image');
            }
        }
    }



    // ==========================================================================
    // CINEMATIC ENHANCEMENTS BOOTSTRAPPING
    // ==========================================================================

    // 1. GLASS HERO PORTRAIT MASK REVEAL (SPOTLIGHT EFFECT)
    const portraitContainer = document.getElementById('portrait-reveal-container');
    const revealLayer = document.getElementById('portrait-reveal-mask');
    let targetRevealX = 0;
    let targetRevealY = 0;
    let currentRevealX = 0;
    let currentRevealY = 0;
    let targetRevealRadius = 0;
    let currentRevealRadius = 0;
    let isMouseOverPortrait = false;

    if (portraitContainer && revealLayer) {
        const rect = portraitContainer.getBoundingClientRect();
        currentRevealX = targetRevealX = rect.width / 2;
        currentRevealY = targetRevealY = rect.height / 2;
        targetRevealRadius = 0; // Inactive by default
        currentRevealRadius = 0;
        
        revealLayer.style.setProperty('--reveal-x', `${currentRevealX}px`);
        revealLayer.style.setProperty('--reveal-y', `${currentRevealY}px`);
        revealLayer.style.setProperty('--reveal-radius', `${currentRevealRadius}px`);
        const pctX = rect.width > 0 ? (currentRevealX / rect.width) : 0.5;
        const pctY = rect.height > 0 ? (currentRevealY / rect.height) : 0.5;
        revealLayer.style.setProperty('--reveal-pct-x', pctX.toFixed(3));
        revealLayer.style.setProperty('--reveal-pct-y', pctY.toFixed(3));

        const handlePortraitMouseMove = (e) => {
            if (window.innerWidth < 768) return; // Disable on mobile
            const r = portraitContainer.getBoundingClientRect();
            targetRevealX = e.clientX - r.left;
            targetRevealY = e.clientY - r.top;
            isMouseOverPortrait = true;
            targetRevealRadius = 220; // 220px spotlight radius on hover
        };

        const handlePortraitMouseEnter = () => {
            if (window.innerWidth < 768) return;
            isMouseOverPortrait = true;
            targetRevealRadius = 220;
        };

        const handlePortraitMouseLeave = () => {
            isMouseOverPortrait = false;
            targetRevealRadius = 0; // Reset to 0 (spotlight off)
        };

        portraitContainer.addEventListener('mousemove', handlePortraitMouseMove);
        portraitContainer.addEventListener('mouseenter', handlePortraitMouseEnter);
        portraitContainer.addEventListener('mouseleave', handlePortraitMouseLeave);

        portraitContainer._cursorRevealCleanup = () => {
            portraitContainer.removeEventListener('mousemove', handlePortraitMouseMove);
            portraitContainer.removeEventListener('mouseenter', handlePortraitMouseEnter);
            portraitContainer.removeEventListener('mouseleave', handlePortraitMouseLeave);
        };
    }

    // 2. DESIGN UNIVERSE CONFIGURATIONS
    const PROJECT_CARDS_CONFIG = {
        1: [ // Brand Communication
            { folder: 'assets/brand-communication/goldwood-ply/', brand: 'GOLDWOOD PLY', category: 'Brand Communication', link: '#brand-comm/goldwood-ply', aspectRatio: 1.0, desc: 'Premium brand communication creatives focusing on durability, interior aesthetics, and structural trust.' },
            { folder: 'assets/brand-communication/whitsun/', brand: 'WHITSUN', category: 'Brand Communication', link: '#brand-comm/whitsun', aspectRatio: 1.0, desc: 'Social media branding campaigns, visual promotions, and dealer engagement designs.' },
            { folder: 'assets/brands/radicab-cables/', brand: 'RADICAB CABLES', category: 'Brand Communication', link: '#brand-comm/radicab-cables', aspectRatio: 1.0, desc: 'Corporate dealer campaigns, visual communication, and product marketing banners.' }
        ],
        2: [ // Ecommerce Design
            { folder: 'assets/ecommerce/amanzi/product-01/listing/', brand: 'AMANZI WATER', category: 'Ecommerce', link: '#ecommerce/amanzi', aspectRatio: 1.0, desc: 'Amazon Listing designs and storefront assets focusing on features, filtration storytelling, and conversion.' },
            { folder: 'assets/ecommerce/camx/am-01/listing/', brand: 'CAMX LISTINGS', category: 'Ecommerce', link: '#ecommerce/camx', aspectRatio: 1.0, desc: 'E-commerce product listings, infographics, and layout storytelling.' },
            { folder: 'assets/ecommerce/rumaisa/amara/listing/', brand: 'RUMAISA FRAGRANCE', category: 'Ecommerce', link: '#ecommerce/rumaisa', aspectRatio: 1.0, desc: 'Visual identity design, premium packaging, and brand aesthetics.' }
        ],
        3: [ // Campaigns
            { folder: 'assets/projects/muscle-smith/designs/', brand: 'MUSCLE SMITH', category: 'Campaigns', link: '#campaigns/muscle-smith', aspectRatio: 0.8, desc: 'High-energy brand campaign creatives, preworkout promotions, and lifestyle banners.' },
            { folder: 'assets/campaigns/jewar-organics/', brand: 'JEWAR ORGANICS', category: 'Campaigns', link: '#campaigns/jewar-organics', aspectRatio: 0.8, desc: 'Natural, organic product visuals, festival special campaigns, and flour packaging promotions.' },
            { folder: 'assets/campaigns/rafaan-banners/', brand: 'RAFAAN BANNERS', category: 'Campaigns', link: '#campaigns/rafaan-banners', aspectRatio: 1.777, desc: 'High-converting marketing banners, launch creatives, and fitness promotions.' }
        ],
        4: [ // Product Renders / AI
            { folder: 'assets/renders/', brand: 'CGI RENDERS', category: 'Product Renders', link: '#renders/cgi-renders', aspectRatio: 1.0, desc: 'Structural product packaging rendering, lifestyle packshots, and CGI arrangements.' },
            { folder: 'assets/ai-creative/', brand: 'FUTURISTIC SHOE', category: 'AI Creative', link: '#ecommerce/futuristic-shoe', aspectRatio: 1.0, filterKeyword: 'shoe', desc: 'AI-assisted concept visualization, futuristic product rendering, and footwear aesthetics.' },
            { folder: 'assets/ai-creative/', brand: 'PERFUME SPLASH', category: 'AI Creative', link: '#ecommerce/perfume-splash', aspectRatio: 1.0, filterKeyword: 'splash', desc: 'Liquid simulation visual creatives, AI product art, and packaging renders.' }
        ]
    };

    const loadFolderAssets = async (folder, filterKeyword = null) => {
        const imgs = await fetchImagesFromFolder(folder);
        const filtered = imgs.filter(img => 
            (img.endsWith('.png') || img.endsWith('.jpg') || img.endsWith('.jpeg') || img.endsWith('.webp') || img.endsWith('.PNG') || img.endsWith('.JPG') || img.endsWith('.JPEG') || img.endsWith('.WEBP')) && 
            !img.includes('.gitkeep')
        );
        if (filterKeyword) {
            return filtered.filter(img => img.toLowerCase().includes(filterKeyword.toLowerCase()));
        }
        return filtered;
    };

    const RING_RADIUS = 360; // Radius of orbits
    let cardStates = [];
    let portalsData = [];

    let activeGalleryAssets = [];
    let currentLightboxIndex = 0;

    const portalLightbox = document.getElementById('portal-lightbox-overlay');
    const portalLightboxImg = document.getElementById('portal-lightbox-image');
    const portalLightboxClose = document.getElementById('portal-lightbox-close');
    const portalLightboxPrev = document.getElementById('portal-lightbox-prev');
    const portalLightboxNext = document.getElementById('portal-lightbox-next');

    const openLightbox = (index, assets) => {
        if (!portalLightbox || !portalLightboxImg || !assets || assets.length === 0) return;
        activeGalleryAssets = assets;
        currentLightboxIndex = index;
        
        if (portalLightboxImg) portalLightboxImg.classList.remove('zoomed');
        portalLightboxImg.src = activeGalleryAssets[currentLightboxIndex];
        
        const counter = document.getElementById('portal-lightbox-counter');
        if (counter) {
            counter.textContent = `Creative ${currentLightboxIndex + 1} / ${activeGalleryAssets.length}`;
        }
        
        portalLightbox.style.display = 'flex';
        setTimeout(() => {
            portalLightbox.classList.add('active');
        }, 10);
    };

    const updateLightboxImg = () => {
        if (portalLightboxImg && activeGalleryAssets[currentLightboxIndex]) {
            portalLightboxImg.classList.remove('zoomed');
            portalLightboxImg.src = activeGalleryAssets[currentLightboxIndex];
            
            const counter = document.getElementById('portal-lightbox-counter');
            if (counter) {
                counter.textContent = `Creative ${currentLightboxIndex + 1} / ${activeGalleryAssets.length}`;
            }
        }
    };

    const handlePortalLightboxZoom = (e) => {
        e.stopPropagation();
        portalLightboxImg.classList.toggle('zoomed');
    };

    if (portalLightboxImg) {
        portalLightboxImg.addEventListener('click', handlePortalLightboxZoom);
    }

    if (portalLightboxClose) {
        portalLightboxClose.addEventListener('click', () => {
            if (portalLightbox) {
                portalLightbox.classList.remove('active');
                if (portalLightboxImg) portalLightboxImg.classList.remove('zoomed');
                setTimeout(() => {
                    portalLightbox.style.display = 'none';
                }, 350);
            }
        });
    }

    if (portalLightboxPrev) {
        portalLightboxPrev.addEventListener('click', (e) => {
            e.stopPropagation();
            if (activeGalleryAssets.length > 0) {
                currentLightboxIndex = (currentLightboxIndex - 1 + activeGalleryAssets.length) % activeGalleryAssets.length;
                updateLightboxImg();
            }
        });
    }

    if (portalLightboxNext) {
        portalLightboxNext.addEventListener('click', (e) => {
            e.stopPropagation();
            if (activeGalleryAssets.length > 0) {
                currentLightboxIndex = (currentLightboxIndex + 1) % activeGalleryAssets.length;
                updateLightboxImg();
            }
        });
    }

    if (portalLightbox) {
        portalLightbox.addEventListener('click', (e) => {
            if (e.target === portalLightbox || e.target.classList.contains('lightbox-wrapper')) {
                portalLightboxClose.click();
            }
        });
    }

    const handleLightboxKeys = (e) => {
        if (portalLightbox && portalLightbox.classList.contains('active')) {
            if (e.key === 'ArrowLeft') {
                portalLightboxPrev.click();
            } else if (e.key === 'ArrowRight') {
                portalLightboxNext.click();
            } else if (e.key === 'Escape') {
                portalLightboxClose.click();
            }
        }
    };
    document.addEventListener('keydown', handleLightboxKeys);

    // Swipe gestures for Design Universe lightbox
    let touchstartX = 0;
    let touchendX = 0;

    const handlePortalSwipe = () => {
        if (touchendX < touchstartX - 50) {
            if (portalLightboxNext) portalLightboxNext.click();
        }
        if (touchendX > touchstartX + 50) {
            if (portalLightboxPrev) portalLightboxPrev.click();
        }
    };

    const handlePortalTouchStart = (e) => {
        touchstartX = e.changedTouches[0].screenX;
    };

    const handlePortalTouchEnd = (e) => {
        touchendX = e.changedTouches[0].screenX;
        handlePortalSwipe();
    };

    const lightboxWrapper = document.querySelector('#portal-lightbox-overlay .lightbox-wrapper');
    if (lightboxWrapper) {
        lightboxWrapper.addEventListener('touchstart', handlePortalTouchStart, { passive: true });
        lightboxWrapper.addEventListener('touchend', handlePortalTouchEnd, { passive: true });
    }

    const openProjectModal = (project) => {
        if (!portalModal || !project) return;
        
        const item = project.item || project;
        const cfg = item.cfg || {};
        const assets = item.assets || [];

        portalModalCategory.textContent = cfg.category || 'PROJECT';
        portalModalTitle.textContent = cfg.brand || 'Untitled';
        portalModalDesc.textContent = cfg.desc || cfg.category || '';
        portalModalLink.href = cfg.link || '#';
        
        const coverImage = assets[0] || 'assets/placeholder.jpg';
        portalModalImg.src = coverImage;
        portalModalImg.alt = cfg.brand || 'Cover';

        // Previews: take next 3-4 images from assets (excluding index 0)
        let previews = [];
        if (assets.length > 1) {
            previews = assets.slice(1, 5); // assets[1] to assets[4]
        } else if (assets.length > 0) {
            previews = [assets[0]];
        }

        const previewsGrid = document.getElementById('portal-modal-previews-grid');
        if (previewsGrid) {
            previewsGrid.innerHTML = '';
            previews.forEach((imgSrc) => {
                const imgCard = document.createElement('div');
                imgCard.className = 'preview-grid-item';
                imgCard.innerHTML = `<img src="${imgSrc}" alt="Creative Preview" loading="lazy">`;
                
                imgCard.addEventListener('click', (e) => {
                    e.stopPropagation();
                    openLightbox(assets.indexOf(imgSrc), assets);
                });
                
                previewsGrid.appendChild(imgCard);
            });
        }

        // View More button action
        const galleryBtn = document.getElementById('portal-modal-gallery-btn');
        if (galleryBtn) {
            const newGalleryBtn = galleryBtn.cloneNode(true);
            galleryBtn.parentNode.replaceChild(newGalleryBtn, galleryBtn);
            newGalleryBtn.addEventListener('click', (e) => {
                e.preventDefault();
                openLightbox(0, assets);
            });
        }
        
        portalModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    if (portalModalClose) {
        portalModalClose.addEventListener('click', () => {
            portalModal.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    if (portalModal) {
        portalModal.addEventListener('click', (e) => {
            if (e.target === portalModal) {
                portalModal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    // Escape key listener for closing project modal
    const handleEscKey = (e) => {
        if (e.key === 'Escape' && portalModal && portalModal.classList.contains('active')) {
            if (portalLightbox && portalLightbox.classList.contains('active')) {
                return;
            }
            portalModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    };
    document.addEventListener('keydown', handleEscKey);

    const buildOrbitRings = async () => {
        const fetchPromises = [];
        const flatConfigs = [];
        
        for (let ringIndex = 1; ringIndex <= 4; ringIndex++) {
            const configs = PROJECT_CARDS_CONFIG[ringIndex] || [];
            configs.forEach((cfg, i) => {
                fetchPromises.push(loadFolderAssets(cfg.folder, cfg.filterKeyword));
                flatConfigs.push({ ringIndex, cardIndex: i, cfg });
            });
        }
        
        const allFetchedAssets = await Promise.all(fetchPromises);
        
        flatConfigs.forEach((item, index) => {
            const assets = allFetchedAssets[index] || [];
            item.assets = assets;
            item.count = assets.length;
        });

        // 1. Populate Mobile fallbacks
        const mobileRows = {
            1: document.getElementById('mobile-row-brands'),
            2: document.getElementById('mobile-row-ecommerce'),
            3: document.getElementById('mobile-row-campaigns'),
            4: document.getElementById('mobile-row-renders')
        };

        for (let ringIndex = 1; ringIndex <= 4; ringIndex++) {
            const rowEl = mobileRows[ringIndex];
            if (!rowEl) continue;
            rowEl.innerHTML = '';
            
            const ringConfigs = flatConfigs.filter(item => item.ringIndex === ringIndex);
            ringConfigs.forEach((item) => {
                const imgUrl = item.assets[0] || 'assets/placeholder.jpg';
                const card = document.createElement('div');
                card.className = 'mobile-orbit-card';
                card.innerHTML = `
                    <div class="mobile-card-media">
                        <img src="${imgUrl}" alt="${item.cfg.brand}" style="object-fit: contain;">
                    </div>
                    <div class="mobile-card-info">
                        <h4>${item.cfg.brand}</h4>
                        <p>${item.cfg.category}</p>
                        <a href="${item.cfg.link}" class="mobile-card-link">View Project &rarr;</a>
                    </div>
                `;
                rowEl.appendChild(card);
            });
        }

        // 2. Populate Desktop 3D Portal Space
        if (universe3DSpace) {
            universe3DSpace.innerHTML = '';
            portalsData = [];

            flatConfigs.forEach((item, index) => {
                if (!item.assets || item.assets.length === 0) return;
                const imgUrl = item.assets[0];

                const desktopRingIndex = Math.floor(index / 4) + 1; // 1, 2, or 3
                const cardInRingIndex = index % 4;
                
                // Evenly distribute 4 cards per ring (spaced by PI/2), with offset per ring
                const baseTheta = (cardInRingIndex * (2 * Math.PI / 4)) + (desktopRingIndex * Math.PI / 6);
                
                let radius = 260;
                if (desktopRingIndex === 2) radius = 410;
                else if (desktopRingIndex === 3) radius = 560;

                const card = document.createElement('div');
                card.className = `creative-portal portal-layer-${desktopRingIndex}`;
                card.setAttribute('data-index', index);
                
                card.innerHTML = `
                    <div class="portal-card-glass">
                        <div class="portal-image-wrapper">
                            <img src="${imgUrl}" alt="${item.cfg.brand}" class="portal-img" loading="lazy">
                        </div>
                        <div class="portal-card-info">
                            <h3 class="portal-title">${item.cfg.brand}</h3>
                            <span class="portal-category">${item.cfg.category}</span>
                            <div class="portal-cta-wrap">
                                <span class="portal-cta">VIEW PROJECT &rarr;</span>
                            </div>
                        </div>
                        <div class="portal-border-glow"></div>
                    </div>
                `;

                universe3DSpace.appendChild(card);

                card.addEventListener('click', (e) => {
                    e.preventDefault();
                    openProjectModal(item);
                });

                card.addEventListener('mouseenter', () => {
                    card.classList.add('hovered');
                });

                card.addEventListener('mouseleave', () => {
                    card.classList.remove('hovered');
                });

                portalsData.push({
                    element: card,
                    index: index,
                    ringIndex: desktopRingIndex,
                    baseTheta: baseTheta,
                    radius: radius,
                    aspectRatio: item.cfg.aspectRatio || 1.0,
                    seedX: Math.random() * Math.PI * 2,
                    seedY: Math.random() * Math.PI * 2,
                    seedZ: Math.random() * Math.PI * 2,
                    driftSpeedX: 0.08 + Math.random() * 0.1,
                    driftSpeedY: 0.06 + Math.random() * 0.08,
                    driftSpeedZ: 0.04 + Math.random() * 0.06,
                    driftRangeX: 5 + Math.random() * 5,
                    driftRangeY: 8 + Math.random() * 8,
                    driftRangeZ: 5 + Math.random() * 5,
                    rotSpeed: 0.015 + Math.random() * 0.02,
                    rotSeed: Math.random() * Math.PI * 2,
                    item: item
                });
            });
        }
    };
    buildOrbitRings();

    // Mouse position listener for 3D universe parallax
    const handleUniverseMouseMove = (e) => {
        if (window.innerWidth < 768) return;
        // Normalize mouse to -1..1 relative to viewport
        targetMouseX = (e.clientX / window.innerWidth) * 2 - 1;
        targetMouseY = (e.clientY / window.innerHeight) * 2 - 1;
    };

    const handleUniverseMouseLeave = () => {
        targetMouseX = 0;
        targetMouseY = 0;
    };

    // Touch event listeners for mobile dragging
    const handleTouchStart = (e) => {
        // Request gyroscope permission on first touch interaction if on iOS
        if (typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function') {
            DeviceOrientationEvent.requestPermission().then(permissionState => {
                if (permissionState === 'granted') {
                    window.addEventListener('deviceorientation', handleDeviceOrientation);
                }
            }).catch(err => console.warn('Gyro permission rejected:', err));
        }

        if (e.touches.length === 1) {
            isDragging = true;
            startTouchX = e.touches[0].clientX;
            startTouchY = e.touches[0].clientY;
            baseTouchX = targetMouseX;
            baseTouchY = targetMouseY;
        }
    };

    const handleTouchMove = (e) => {
        if (isDragging && e.touches.length === 1) {
            const dx = e.touches[0].clientX - startTouchX;
            const dy = e.touches[0].clientY - startTouchY;
            
            // Map touch delta to target mouse range -1.5..1.5 for visible drag response
            targetMouseX = baseTouchX + (dx / window.innerWidth) * 3;
            targetMouseY = baseTouchY + (dy / window.innerHeight) * 3;
            
            // Constrain targetMouseX and targetMouseY
            targetMouseX = Math.max(-1.5, Math.min(1.5, targetMouseX));
            targetMouseY = Math.max(-1.5, Math.min(1.5, targetMouseY));

            // Prevent default vertical page scroll only if dragging mostly horizontally
            if (Math.abs(dx) > Math.abs(dy) * 1.2) {
                if (e.cancelable) {
                    e.preventDefault();
                }
            }
        }
    };

    const handleTouchEnd = () => {
        isDragging = false;
    };

    // Gyroscope orientation listener
    const handleDeviceOrientation = (e) => {
        if (e.gamma !== null && e.beta !== null) {
            hasGyro = true;
            // Gamma: left/right tilt [-90, 90]. Comfortable range is roughly -30..30.
            // Beta: front/back tilt [-180, 180]. Typically viewed at 45deg, so offset by 45.
            gyroX = Math.max(-1, Math.min(1, e.gamma / 30));
            gyroY = Math.max(-1, Math.min(1, (e.beta - 45) / 30));
        }
    };

    window.addEventListener('mousemove', handleUniverseMouseMove);
    if (universeSection) {
        universeSection.addEventListener('mouseleave', handleUniverseMouseLeave);
        
        // Touch events
        universeSection.addEventListener('touchstart', handleTouchStart, { passive: false });
        universeSection.addEventListener('touchmove', handleTouchMove, { passive: false });
        universeSection.addEventListener('touchend', handleTouchEnd);
    }

    if (window.DeviceOrientationEvent && typeof DeviceOrientationEvent.requestPermission !== 'function') {
        // Non-iOS devices: directly bind gyroscope listener
        window.addEventListener('deviceorientation', handleDeviceOrientation);
    }

    // 3. CANVAS SERENE BACKGROUND
    const canvas = document.getElementById('universe-canvas');
    let ctx = null;
    let stars = [];
    let dustParticles = [];
    let orbitParticles = [];
    let width = 0, height = 0;
    let universeTime = 0;

    const handleResize = () => {
        if (canvas) {
            width = canvas.width = canvas.offsetWidth;
            height = canvas.height = canvas.offsetHeight;
        }
    };

    if (canvas) {
        ctx = canvas.getContext('2d');
        handleResize();
        window.addEventListener('resize', handleResize);

        // Subtle tiny twinkling stars
        for (let i = 0; i < 90; i++) {
            stars.push({
                x: Math.random() * 2000 - 1000,
                y: Math.random() * 2000 - 1000,
                z: Math.random() * 1000,
                size: Math.random() * 0.7 + 0.1,
                twinkleSpeed: Math.random() * 0.015 + 0.003,
                phase: Math.random() * Math.PI * 2
            });
        }

        // Slow-moving amber dust particles
        for (let i = 0; i < 40; i++) {
            dustParticles.push({
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                size: Math.random() * 1.5 + 0.4,
                vx: Math.random() * 0.12 - 0.06,
                vy: Math.random() * 0.1 + 0.03,
                opacity: Math.random() * 0.07 + 0.02,
                phase: Math.random() * Math.PI * 2
            });
        }

    }

    const drawUniverse = (scrollProgress) => {
        if (!ctx || !canvas) return;
        
        let fadeOpacity = 1.0;
        if (scrollProgress < 0.08) {
            fadeOpacity = scrollProgress / 0.08;
        } else if (scrollProgress > 0.92) {
            fadeOpacity = (1.0 - scrollProgress) / 0.08;
        }

        // 1. Deep space backdrop (No pure empty black)
        const bgGrad = ctx.createRadialGradient(width / 2, height / 2, 10, width / 2, height / 2, Math.max(width, height));
        bgGrad.addColorStop(0, '#120a07'); // Warm amber core glow
        bgGrad.addColorStop(0.4, '#09050b'); // Galaxy violet glow
        bgGrad.addColorStop(1, '#040305'); // Deep night space edge
        ctx.fillStyle = bgGrad;
        ctx.fillRect(0, 0, width, height);

        // 2. Layered nebulae depth clouds
        const nebX = width / 2;
        const nebY = height / 2;
        const nebGrad = ctx.createRadialGradient(nebX, nebY, 50, nebX, nebY, Math.max(width, height) / 1.3);
        nebGrad.addColorStop(0, 'rgba(255, 107, 0, 0.08)');
        nebGrad.addColorStop(0.5, 'rgba(255, 107, 0, 0.02)');
        nebGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = nebGrad;
        ctx.fillRect(0, 0, width, height);

        const nebGradViolet = ctx.createRadialGradient(width / 3, height / 3, 20, width / 3, height / 3, Math.max(width, height) / 1.6);
        nebGradViolet.addColorStop(0, 'rgba(120, 40, 255, 0.08)');
        nebGradViolet.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = nebGradViolet;
        ctx.fillRect(0, 0, width, height);

        // 3. Update and draw drifting stars
        stars.forEach(star => {
            star.z -= 0.35; // drift forward
            if (star.z <= 0) {
                star.z = 1000;
                star.x = Math.random() * 2000 - 1000;
                star.y = Math.random() * 2000 - 1000;
            }
            star.phase += star.twinkleSpeed;
            const brightness = Math.max(0.1, Math.min(1.0, 0.5 + Math.sin(star.phase) * 0.4));
            
            const k = 450 / star.z;
            const px = star.x * k + width / 2;
            const py = star.y * k + height / 2;

            if (px >= 0 && px < width && py >= 0 && py < height) {
                const s = star.size * k * 0.7;
                ctx.fillStyle = `rgba(255, 255, 255, ${brightness * 0.55 * fadeOpacity})`;
                ctx.beginPath();
                ctx.arc(px, py, s, 0, Math.PI * 2);
                ctx.fill();
            }
        });

        // 4. Update and draw subtle wobbly dust particles
        dustParticles.forEach(p => {
            p.x += p.vx + Math.sin(p.phase) * 0.08;
            p.y += p.vy;
            p.phase += 0.005;

            if (p.x < 0) p.x = width;
            if (p.x > width) p.x = 0;
            if (p.y < 0) p.y = height;
            if (p.y > height) p.y = 0;

            const currentOpacity = p.opacity * (0.5 + Math.sin(p.phase) * 0.5) * fadeOpacity;
            ctx.fillStyle = `rgba(255, 107, 0, ${currentOpacity})`;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
        });

        // 5. Depth fog gradients
        const topFog = ctx.createLinearGradient(0, 0, 0, 180);
        topFog.addColorStop(0, 'rgba(5, 5, 5, 0.12)');
        topFog.addColorStop(1, 'rgba(5, 5, 5, 0)');
        ctx.fillStyle = topFog;
        ctx.fillRect(0, 0, width, 180);

        const bottomFog = ctx.createLinearGradient(0, height - 180, 0, height);
        bottomFog.addColorStop(0, 'rgba(5, 5, 5, 0)');
        bottomFog.addColorStop(1, 'rgba(5, 5, 5, 0.12)');
        ctx.fillStyle = bottomFog;
        ctx.fillRect(0, height - 180, width, 180);
    };

    const getChapterOpacity = (p, index) => {
        const start = (index - 1) / 4;
        const end = index / 4;
        if (p < start || p > end) return 0;
        
        const range = end - start;
        const fadeRange = range * 0.22;
        
        if (p < start + fadeRange) {
            return (p - start) / fadeRange;
        } else if (p > end - fadeRange) {
            return (end - p) / fadeRange;
        }
        return 1;
    };

    const getRingY = (p, index) => {
        const start = (index - 1) / 4;
        const end = index / 4;
        
        if (p < start) {
            const factor = (start - p) / 0.25;
            return factor * 320; // Stacks beautifully near the bottom
        } else if (p > end) {
            const factor = (p - end) / 0.25;
            return -factor * 320; // Stacks beautifully near the top
        } else {
            const localProgress = (p - start) / 0.25;
            return (0.5 - localProgress) * 40; // Subtle continuous drift
        }
    };

    const updateOrbitTransforms = (p) => {
        if (!universeSection) return;

        const isMobile = window.innerWidth < 768;

        let fadeOpacity = 1.0;
        if (p < 0.08) {
            fadeOpacity = p / 0.08;
        } else if (p > 0.92) {
            fadeOpacity = (1.0 - p) / 0.08;
        }

        // Mouse/Cursor positions normalized between -1 and 1
        const mouseX = currentMouseX;
        const mouseY = currentMouseY;

        portalsData.forEach(portal => {
            // On mobile, show all 3 rings (all 12 projects) for full parity
            portal.element.style.display = 'block';

            // Alternate clockwise/counter-clockwise orbit directions based on ring index
            const orbitDir = portal.ringIndex % 2 === 0 ? -1 : 1;
            const orbitSpeed = (isMobile ? 0.04 : 0.06) * orbitDir;
            // Scroll rotates the universe dynamically
            const scrollRotation = p * 2.2 * orbitDir;
            const angle = portal.baseTheta + (universeTime * orbitSpeed) + scrollRotation;
            
            // Base trigonometric orbit coordinate math
            // Scale radius down on mobile so elements stay on screen
            let radius = portal.radius;
            if (isMobile) {
                if (portal.ringIndex === 1) radius = 90;
                else if (portal.ringIndex === 2) radius = 160;
                else radius = 230;
            }
            const x_orbit = radius * Math.cos(angle) * (isMobile ? 1.15 : 1.5); // Stretch horizontally slightly
            const z_orbit = radius * Math.sin(angle);
            // On mobile, we align vertically around center with concentric ring separation
            const y_orbit = radius * Math.sin(angle) * 0.3 + (isMobile ? (portal.ringIndex === 1 ? -30 : (portal.ringIndex === 2 ? 0 : 30)) : (portal.ringIndex - 2) * 55);
            
            // Endless bobbing/drift offsets
            const driftX = Math.sin(universeTime * portal.driftSpeedX + portal.seedX) * (isMobile ? 3 : portal.driftRangeX);
            const driftY = Math.cos(universeTime * portal.driftSpeedY + portal.seedY) * (isMobile ? 6 : portal.driftRangeY);
            const driftZ = Math.sin(universeTime * portal.driftSpeedZ + portal.seedZ) * (isMobile ? 3 : portal.driftRangeZ);

            const x_current = x_orbit + driftX;
            const y_current = y_orbit + driftY;
            const z_current = z_orbit + driftZ;

            // Interactive Parallax
            // Layered parallax: elements close to camera (z_current > 0) shift in direction of cursor,
            // while elements in back (z_current < 0) shift opposite.
            const maxRadius = isMobile ? 230 : 560;
            const depthFactor = (z_current + maxRadius) / (2 * maxRadius); // 0 (far) to 1 (near)
            
            const parallaxX = mouseX * (isMobile ? 25 : 70) * (z_current / maxRadius);
            const parallaxY = mouseY * (isMobile ? 15 : 45) * (z_current / maxRadius);
            
            // Cursor based depth: mouse Y shifts depth coordinate
            const parallaxZ = mouseY * (isMobile ? -40 : -120);

            const finalX = x_current + parallaxX;
            const finalY = y_current + parallaxY;
            const finalZ = z_current + parallaxZ;

            // Size cards dynamically to preserve aspect ratios and prevent cropping
            let baseWidth = 210;
            if (isMobile) {
                if (portal.ringIndex === 1) baseWidth = 115;
                else if (portal.ringIndex === 2) baseWidth = 95;
                else baseWidth = 75;
            } else {
                if (portal.ringIndex === 1) baseWidth = 260;
                else if (portal.ringIndex === 2) baseWidth = 200;
                else baseWidth = 140;
            }

            const cardW = baseWidth;
            const cardH = Math.round(baseWidth / portal.aspectRatio);

            portal.element.style.setProperty('--card-w', `${cardW}px`);
            portal.element.style.setProperty('--card-h', `${cardH}px`);

            // Perspective scale: map Z depth to scale
            const scale = (isMobile ? 0.65 : 0.5) + depthFactor * (isMobile ? 0.45 : 0.65); // 0.65 to 1.1 on mobile

            // Micro rotation drift (subtle and fluid)
            const rot = Math.sin(universeTime * portal.rotSpeed + portal.rotSeed) * 1.2;

            // Tilt based on mouse position
            const rx = -mouseY * 8 * scale;
            const ry = mouseX * 8 * scale;

            // Dynamic z-index based on depth position
            const zIndex = Math.round(finalZ + 1000);

            // Dynamic opacity: elements in front are fully opaque, back are faded
            let opacityVal = 0.25 + depthFactor * 0.7; // 0.25 to 0.95
            opacityVal = Math.max(0.15, Math.min(0.95, opacityVal)) * fadeOpacity;

            // Check hovered state to override transforms
            const isHovered = portal.element.classList.contains('hovered');
            if (isHovered) {
                portal.element.style.transform = `translate3d(${finalX}px, ${finalY}px, ${finalZ + (isMobile ? 20 : 60)}px) scale(${scale * 1.08}) rotateX(${rx * 0.5}deg) rotateY(${ry * 0.5}deg) rotate(${rot * 0.2}deg)`;
                portal.element.style.opacity = 1.0;
                portal.element.style.zIndex = 3000;
            } else {
                portal.element.style.transform = `translate3d(${finalX}px, ${finalY}px, ${finalZ}px) scale(${scale}) rotateX(${rx}deg) rotateY(${ry}deg) rotate(${rot}deg)`;
                portal.element.style.opacity = opacityVal.toFixed(3);
                portal.element.style.zIndex = zIndex;
            }
        });
    };

    // Smooth LERP loop
    const tick = () => {
        if (!universeSection) return;

        // 1. LERP scroll progress and mouse parallax coordinates
        const diff = targetProgress - currentProgress;
        if (Math.abs(diff) > 0.0001) {
            currentProgress += diff * 0.07;
        } else {
            currentProgress = targetProgress;
        }
        
        if (hasGyro && !isDragging) {
            const blendedTargetX = targetMouseX + gyroX * 0.7;
            const blendedTargetY = targetMouseY + gyroY * 0.7;
            currentMouseX += (blendedTargetX - currentMouseX) * 0.08;
            currentMouseY += (blendedTargetY - currentMouseY) * 0.08;
        } else {
            currentMouseX += (targetMouseX - currentMouseX) * 0.08;
            currentMouseY += (targetMouseY - currentMouseY) * 0.08;
        }
        
        universeTime += 0.0018; // Global continuous clock for auto-scroll and float bobbing

        // 2. LERP glass reveal coordinates
        if (revealLayer && portraitContainer) {
            const r = portraitContainer.getBoundingClientRect();
            if (isMouseOverPortrait) {
                currentRevealX += (targetRevealX - currentRevealX) * 0.12;
                currentRevealY += (targetRevealY - currentRevealY) * 0.12;
                currentRevealRadius += (targetRevealRadius - currentRevealRadius) * 0.12;
            } else {
                const cx = r.width / 2;
                const cy = r.height / 2;
                currentRevealX += (cx - currentRevealX) * 0.05;
                currentRevealY += (cy - currentRevealY) * 0.05;
                currentRevealRadius += (targetRevealRadius - currentRevealRadius) * 0.08;
            }
            revealLayer.style.setProperty('--reveal-x', `${currentRevealX}px`);
            revealLayer.style.setProperty('--reveal-y', `${currentRevealY}px`);
            revealLayer.style.setProperty('--reveal-radius', `${currentRevealRadius}px`);
            
            const pctX = r.width > 0 ? (currentRevealX / r.width) : 0.5;
            const pctY = r.height > 0 ? (currentRevealY / r.height) : 0.5;
            revealLayer.style.setProperty('--reveal-pct-x', pctX.toFixed(3));
            revealLayer.style.setProperty('--reveal-pct-y', pctY.toFixed(3));

            // Set refraction variables for Layer 1 shifting effect
            const refractX = (pctX - 0.5) * -12;
            const refractY = (pctY - 0.5) * -12;
            portraitContainer.style.setProperty('--refract-x', `${refractX.toFixed(2)}px`);
            portraitContainer.style.setProperty('--refract-y', `${refractY.toFixed(2)}px`);
        }

        // Draw background starfield
        drawUniverse(currentProgress);

        // Update orbits
        updateOrbitTransforms(currentProgress);

        rAFId = requestAnimationFrame(tick);
    };

    const updateOrbitPositions = () => {
        if (!universeSection) return;
        const rect = universeSection.getBoundingClientRect();
        const sectionHeight = rect.height - window.innerHeight;

        if (rect.top <= 0 && rect.bottom >= 0 && sectionHeight > 0) {
            targetProgress = Math.max(0, Math.min(1, -rect.top / sectionHeight));
        } else if (rect.top > 0) {
            targetProgress = 0;
        } else if (rect.bottom < 0) {
            targetProgress = 1;
        }

        // Sync 10-step progress tracker dots
        const scrollY = window.scrollY;
        const viewportHeight = window.innerHeight;
        const middleY = scrollY + viewportHeight / 2;

        const getElementTop = (id) => {
            const el = document.getElementById(id);
            return el ? window.scrollY + el.getBoundingClientRect().top : 0;
        };
        const getElementBottom = (id) => {
            const el = document.getElementById(id);
            return el ? window.scrollY + el.getBoundingClientRect().bottom : 0;
        };

        const uTop = getElementTop('design-universe');
        const uBot = getElementBottom('design-universe');
        const workTop = getElementTop('selected-work');
        const aboutTop = getElementTop('about');
        const resumeTop = getElementTop('resume');
        const contactTop = getElementTop('contact');

        let activeStep = 1;

        if (middleY < uTop) {
            activeStep = 1; // Hero
        } else if (middleY >= uTop && middleY < uBot) {
            const uHeight = uBot - uTop - viewportHeight;
            const progress = uHeight > 0 ? Math.max(0, Math.min(1, (window.scrollY - uTop) / uHeight)) : 0;
            
            if (progress < 0.05) {
                activeStep = 2; // Vision/Intro
            } else if (progress < 0.29) {
                activeStep = 3; // Brands Category
            } else if (progress < 0.53) {
                activeStep = 4; // Ecommerce Category
            } else if (progress < 0.77) {
                activeStep = 5; // Campaigns Category
            } else {
                activeStep = 6; // Product Renders Category
            }
        } else if (middleY >= uBot && middleY < aboutTop) {
            activeStep = 7; // Selected Work
        } else if (middleY >= aboutTop && middleY < resumeTop) {
            activeStep = 8; // About
        } else if (middleY >= resumeTop && middleY < contactTop) {
            activeStep = 9; // Resume
        } else {
            activeStep = 10; // Contact
        }

        const steps = document.querySelectorAll('.tracker-step');
        steps.forEach(step => {
            const stepNum = parseInt(step.getAttribute('data-step'), 10);
            if (stepNum === activeStep) {
                step.classList.add('active');
            } else {
                step.classList.remove('active');
            }
        });

        const fillEl = document.querySelector('.tracker-progress-fill');
        if (fillEl) {
            const totalScrollable = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = totalScrollable > 0 ? (window.scrollY / totalScrollable) * 100 : 0;
            fillEl.style.height = `${scrollPercent}%`;
        }
    };

    const handleTrackerClick = (e) => {
        const stepNum = parseInt(e.currentTarget.getAttribute('data-step'), 10);
        let targetScrollY = 0;

        const getElementTop = (id) => {
            const el = document.getElementById(id);
            return el ? window.scrollY + el.getBoundingClientRect().top : 0;
        };
        const getElementBottom = (id) => {
            const el = document.getElementById(id);
            return el ? window.scrollY + el.getBoundingClientRect().bottom : 0;
        };

        const uTop = getElementTop('design-universe');
        const uBot = getElementBottom('design-universe');
        const uHeight = uBot - uTop - window.innerHeight;

        if (stepNum === 1) {
            targetScrollY = 0;
        } else if (stepNum === 2) {
            targetScrollY = uTop;
        } else if (stepNum === 3) {
            targetScrollY = uTop + uHeight * 0.15;
        } else if (stepNum === 4) {
            targetScrollY = uTop + uHeight * 0.40;
        } else if (stepNum === 5) {
            targetScrollY = uTop + uHeight * 0.65;
        } else if (stepNum === 6) {
            targetScrollY = uTop + uHeight * 0.90;
        } else if (stepNum === 7) {
            targetScrollY = getElementTop('selected-work') - 80;
        } else if (stepNum === 8) {
            targetScrollY = getElementTop('about') - 80;
        } else if (stepNum === 9) {
            targetScrollY = getElementTop('resume') - 80;
        } else if (stepNum === 10) {
            targetScrollY = getElementTop('contact') - 80;
        }

        window.scrollTo({
            top: targetScrollY,
            behavior: 'smooth'
        });
    };

    const trackerSteps = document.querySelectorAll('.tracker-step');
    trackerSteps.forEach(step => {
        step.addEventListener('click', handleTrackerClick);
    });

    window.addEventListener('scroll', updateOrbitPositions);
    rAFId = requestAnimationFrame(tick);
    updateOrbitPositions();

    // 4. HERO CREATIVE PREVIEW CAROUSEL
    const carouselSlides = document.querySelectorAll('#hero-carousel .preview-slide');
    let currentSlideIdx = 0;
    let carouselInterval = null;

    if (carouselSlides.length > 0) {
        carouselInterval = setInterval(() => {
            carouselSlides[currentSlideIdx].classList.remove('active');
            currentSlideIdx = (currentSlideIdx + 1) % carouselSlides.length;
            carouselSlides[currentSlideIdx].classList.add('active');
        }, 3000);
    }

    // 5. RIGHT SIDE NAVIGATION DOTS
    const initRightNavDots = () => {
        const navDotsContainer = document.getElementById('right-nav-dots');
        if (!navDotsContainer) return;

        const navDots = navDotsContainer.querySelectorAll('.nav-dot');
        const sections = ['home', 'design-universe', 'selected-work', 'about', 'resume', 'contact'];

        // Click handlers for dots
        navDots.forEach((dot, index) => {
            dot.addEventListener('click', (e) => {
                e.preventDefault();
                const sectionId = sections[index];
                const section = document.getElementById(sectionId);
                if (section) {
                    const header = document.getElementById('app-header');
                    const headerHeight = header ? header.offsetHeight : 80;
                    const targetY = section.getBoundingClientRect().top + window.scrollY - headerHeight;
                    window.scrollTo({
                        top: targetY,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Store cleanup function
        window._rightNavDotsCleanup = () => {
            // No observer to disconnect
        };
    };

    initRightNavDots();

    const cleanupHome = () => {
        if (rAFId) cancelAnimationFrame(rAFId);
        if (carouselInterval) clearInterval(carouselInterval);
        window.removeEventListener('scroll', updateOrbitPositions);
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('mousemove', handleUniverseMouseMove);
        if (universeSection) {
            universeSection.removeEventListener('mouseleave', handleUniverseMouseLeave);
            universeSection.removeEventListener('touchstart', handleTouchStart);
            universeSection.removeEventListener('touchmove', handleTouchMove);
            universeSection.removeEventListener('touchend', handleTouchEnd);
        }
        window.removeEventListener('deviceorientation', handleDeviceOrientation);
        document.removeEventListener('keydown', handleEscKey);
        document.removeEventListener('keydown', handleLightboxKeys);
        
        if (portalLightboxImg) {
            portalLightboxImg.removeEventListener('click', handlePortalLightboxZoom);
        }
        if (lightboxWrapper) {
            lightboxWrapper.removeEventListener('touchstart', handlePortalTouchStart);
            lightboxWrapper.removeEventListener('touchend', handlePortalTouchEnd);
        }

        trackerSteps.forEach(step => {
            step.removeEventListener('click', handleTrackerClick);
        });
        cardStates.forEach(state => {
            if (state.element._hoverCleanup) state.element._hoverCleanup();
        });
        if (portraitContainer && portraitContainer._cursorRevealCleanup) {
            portraitContainer._cursorRevealCleanup();
        }
        if (window._rightNavDotsCleanup) {
            window._rightNavDotsCleanup();
            window._rightNavDotsCleanup = null;
        }
        window.removeEventListener('hashchange', cleanupHome);
    };
    window.addEventListener('hashchange', cleanupHome);
}
