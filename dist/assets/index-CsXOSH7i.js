(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(){return`
    <div class="nav-container">
        <div class="logo">
            <a href="#home">UJJWAL<span>.</span></a>
        </div>
        
        <button class="mobile-toggle" id="mobile-toggle" aria-label="Toggle Navigation">
            <span></span>
            <span></span>
            <span></span>
        </button>

        <ul class="nav-menu" id="nav-menu">
            <li><a href="#home" class="nav-link active" data-section="home">Home</a></li>
            <li><a href="#home#selected-work" class="nav-link" data-section="selected-work">Selected Work</a></li>
            <li><a href="#home#about" class="nav-link" data-section="about">About</a></li>
            <li><a href="#home#resume" class="nav-link" data-section="resume">Resume</a></li>
            <li><a href="#home#contact" class="nav-link" data-section="contact">Contact</a></li>
        </ul>
    </div>
    `}function t(){let t=document.getElementById(`app-header`);t.innerHTML=e();let n=document.getElementById(`mobile-toggle`),r=document.getElementById(`nav-menu`),i=document.querySelectorAll(`.nav-link`);window.addEventListener(`scroll`,()=>{window.scrollY>50?t.classList.add(`scrolled`):t.classList.remove(`scrolled`)}),n.addEventListener(`click`,()=>{n.classList.toggle(`open`),r.classList.toggle(`open`)}),i.forEach(e=>{e.addEventListener(`click`,()=>{n.classList.remove(`open`),r.classList.remove(`open`),i.forEach(e=>e.classList.remove(`active`)),e.classList.add(`active`)})})}function n(){return`
    <div class="footer-container">
        <div class="footer-left">
            <h3 style="font-family: var(--font-heading); text-transform: uppercase; letter-spacing: 2px; color: var(--color-text-light); font-size: 1.1rem; margin-bottom: 5px;">UJJWAL MAURYA</h3>
            <p style="font-weight: 300;">Visual Designer &bull; Portfolio 2026</p>
            <p style="margin-top: 10px; font-size: 0.75rem; color: var(--color-text-dark);">&copy; ${new Date().getFullYear()} Ujjwal Maurya. All rights reserved.</p>
        </div>
        
        <!-- Footer Social Links -->
        <div class="footer-socials" style="display: flex; gap: 20px; flex-wrap: wrap; justify-content: center; margin: 15px 0;">
            <a href="mailto:ujjwalmaurya781@gmail.com" target="_blank" rel="noopener" class="footer-link">Email</a>
            <a href="https://www.linkedin.com/in/ujjwal-maurya-3a997521a" target="_blank" rel="noopener" class="footer-link">LinkedIn</a>
            <a href="https://www.behance.net/ujjwalmaurya2" target="_blank" rel="noopener" class="footer-link">Behance</a>
            <a href="https://www.instagram.com/krishhhhhmaurya" target="_blank" rel="noopener" class="footer-link">Instagram</a>
            <a href="https://youtube.com/@buntyyyyyyy" target="_blank" rel="noopener" class="footer-link">YouTube</a>
        </div>
        
        <div class="footer-right">
            <button class="back-to-top" id="back-to-top">Back to Top &uarr;</button>
        </div>
    </div>
    `}function r(){let e=document.getElementById(`app-footer`);e.innerHTML=n();let t=document.getElementById(`back-to-top`);t&&t.addEventListener(`click`,()=>{window.scrollTo({top:0,behavior:`smooth`})})}function i(e=[]){return`
    <div class="marquee-container">
        <div class="marquee-content">
            ${[...e,...e,...e].map(e=>`
        <span class="marquee-item">
            <span class="marquee-dot"></span>
            ${e}
        </span>
    `).join(``)}
        </div>
    </div>
    `}function a(e){return`
    <a href="${e.link}" class="project-card fade-in-section" data-id="${e.id}">
        <div class="project-img-wrapper" id="cover-wrapper-${e.id}">
            <img src="${e.coverImage}" alt="${e.title}" loading="lazy" id="cover-img-${e.id}" onerror="this.style.display='none'; this.parentElement.classList.add('no-image');">
        </div>
        <div class="project-info">
            <div class="project-meta">
                <span class="project-category">${e.category}</span>
                <span class="project-num">${e.num}</span>
            </div>
            <h3 class="project-card-title">${e.title}</h3>
            <p class="project-desc">${e.description}</p>
            <div class="project-action-btn">
                <span>View Project</span>
                <span class="project-action-icon">&rarr;</span>
            </div>
        </div>
    </a>
    `}function o(){let e=document.querySelectorAll(`.fade-in-section`),t=new IntersectionObserver((e,t)=>{e.forEach(e=>{e.isIntersecting&&(e.target.classList.add(`visible`),t.unobserve(e.target))})},{root:null,threshold:.1,rootMargin:`0px 0px -50px 0px`});e.forEach(e=>{t.observe(e)})}function s(){let e=document.getElementById(`custom-cursor`),t=document.getElementById(`custom-cursor-follower`),n=document.getElementById(`cursor-spotlight`);if(!e||!t)return;let r=0,i=0,a=0,o=0,s=0,c=0,l=.15,u=.08;document.addEventListener(`mousemove`,t=>{r=t.clientX,i=t.clientY,e.style.left=r+`px`,e.style.top=i+`px`});function d(){a+=(r-a)*l,o+=(i-o)*l,t.style.left=a+`px`,t.style.top=o+`px`,n&&(s+=(r-s)*u,c+=(i-c)*u,n.style.left=s+`px`,n.style.top=c+`px`),requestAnimationFrame(d)}d();function f(){document.querySelectorAll(`a, button, .project-card, .skill-tag, .back-to-top, .mobile-toggle`).forEach(e=>{e.addEventListener(`mouseenter`,()=>{document.body.classList.add(`cursor-hover`)}),e.addEventListener(`mouseleave`,()=>{document.body.classList.remove(`cursor-hover`)}),e.addEventListener(`mousedown`,()=>{document.body.classList.add(`cursor-click`)}),e.addEventListener(`mouseup`,()=>{document.body.classList.remove(`cursor-click`)})})}f(),window.rebindCursor=f}function c(){let e=document.querySelector(`.hero-section`),t=document.querySelectorAll(`.floating-card-wrapper`),n=document.querySelector(`.hero-portrait-canvas`);e&&(e.addEventListener(`mousemove`,r=>{let{width:i,height:a}=e.getBoundingClientRect(),o=r.clientX-i/2,s=r.clientY-a/2;if(t.forEach((e,t)=>{let n=(t%3+1)*8,r=o/i*n,c=s/a*n;e.style.transform=`translate(${r}px, ${c}px)`}),n){let e=s/a*8,t=-(o/i)*8;n.style.transform=`perspective(1000px) rotateX(${e}deg) rotateY(${t}deg)`}}),e.addEventListener(`mouseleave`,()=>{t.forEach((e,t)=>{e.style.transform=``}),n&&(n.style.transform=``)}))}async function l(e){try{let t=await fetch(`/api/list-images?folder=${encodeURIComponent(e)}`);return t.ok?await t.json():(console.warn(`Failed to list images for folder: ${e}. Status: ${t.status}`),[])}catch(t){return console.error(`Error fetching images from folder ${e}:`,t),[]}}async function u(e,t){try{let n=`/api/upload?folder=${encodeURIComponent(e)}&filename=${encodeURIComponent(t.name)}`,r=await fetch(n,{method:`POST`,body:t});if(!r.ok)throw Error(`Upload failed with status ${r.status}`);return!0}catch(e){return console.error(`Error uploading file:`,e),!1}}async function d(e,t,n,r=`Upload Campaign Creatives`){let i=document.getElementById(`grid-${e}`);if(!i)return;let a=await l(t);async function o(){if(!a||a.length===0){i.innerHTML=`
                <div class="upload-placeholder-card" id="upload-card-${e}">
                    <div class="upload-placeholder-icon" style="color: var(--color-accent);">+</div>
                    <div class="upload-placeholder-text">${r}</div>
                    <input type="file" id="file-input-${e}" accept="image/*" multiple style="display: none;">
                </div>
            `;let n=document.getElementById(`upload-card-${e}`),s=document.getElementById(`file-input-${e}`);n&&s&&(n.addEventListener(`click`,()=>{s.click()}),s.addEventListener(`change`,async e=>{let r=Array.from(e.target.files);if(r.length!==0){n.style.pointerEvents=`none`,n.querySelector(`.upload-placeholder-text`).textContent=`Uploading...`;for(let e of r)await u(t,e);a=await l(t),o()}}))}else i.innerHTML=a.map((e,t)=>`
                    <div class="masonry-item ${t>=6?`gallery-item-hidden`:``}" data-img-index="${t}">
                        <img src="${e}" alt="Creative Asset" loading="lazy" class="gallery-image">
                    </div>
                `).join(``);n&&n(a)}await o()}var f=[`BRAND COMMUNICATION`,`SOCIAL MEDIA CAMPAIGNS`,`AMAZON A+ CONTENT`,`PRODUCT STORYTELLING`,`ADVERTISING CREATIVES`,`VISUAL BRANDING`],p=[{id:`brand-comm`,num:`01`,category:`Social Media Communication`,title:`Social Campaigns & Creatives`,description:`Social media campaigns, product promotions, awareness creatives, festival campaigns, dealer engagement creatives, and visual communication projects.`,coverImage:``,link:`#brand-comm`},{id:`ecommerce-design`,num:`02`,category:`E-Commerce Design`,title:`Listing Pages & A+ Content`,description:`Amazon Listing Images, Amazon A+ Content, Infographics, Product Storytelling, and Conversion-focused creatives.`,coverImage:``,link:`#ecommerce`},{id:`campaigns`,num:`03`,category:`Brand Campaigns`,title:`Advertising & Launch Graphics`,description:`Large-format advertising campaigns, marketing banners, launch campaigns, and promotional creatives.`,coverImage:``,link:`#campaigns`},{id:`renders`,num:`04`,category:`Product Rendering & Visualization`,title:`3D CGI Renders & Packshots`,description:`Product renders, packaging renders, lifestyle renders, CGI visuals, and commercial product presentations.`,coverImage:``,link:`#renders`}],m=[{date:`APRIL 2026 - PRESENT`,company:`Freelance`,title:`Graphic Designer & Visual Storyteller`,description:`Collaborating with brands and businesses on social media campaigns, brand communication, advertising creatives, Amazon A+ content, e-commerce graphics, and visual storytelling projects.`},{date:`FEBRUARY 2026 - APRIL 2026`,company:`NextZen Digital`,title:`Graphic Designer`,description:`Created social media campaigns, e-commerce creatives, performance marketing graphics, and visual branding materials for growing businesses.`},{date:`MAY 2025 - JANUARY 2026`,company:`Keyword India`,title:`Graphic Designer`,description:`Worked on social media campaigns, advertising creatives, marketing collateral, and brand communication assets for multiple clients and industries.`},{date:`2024 - 2025`,company:`Self-Managed YouTube Channel & Ayush Bhandari`,title:`Content Creator & Content Ideation`,description:`Developed content strategies, managed creative concepts, created thumbnails, explored audience psychology, and built a strong foundation in storytelling and visual communication.`}],h=[{name:`Photoshop`,icon:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="skill-icon"><rect x="3" y="3" width="18" height="18" rx="4" stroke="#31a8ff"></rect><path d="M7 8h3a2 2 0 1 1 0 4H7v4M7 11h3" stroke="#31a8ff"></path><path d="M13 14.2c.3.3.8.5 1.3.5.6 0 1-.3 1-.7 0-.4-.3-.6-.9-.8-.7-.2-1.4-.4-1.4-1.2 0-.7.6-1.3 1.4-1.3.5 0 .9.2 1.2.4" stroke="#31a8ff"></path></svg>`},{name:`Illustrator`,icon:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="skill-icon"><rect x="3" y="3" width="18" height="18" rx="4" stroke="#ff9a00"></rect><path d="M7 15l2.5-6.5L12 15M8 13h3" stroke="#ff9a00"></path><line x1="15" y1="10" x2="15" y2="15" stroke="#ff9a00"></line><circle cx="15" cy="8" r="0.5" fill="#ff9a00" stroke="#ff9a00"></circle></svg>`},{name:`After Effects`,icon:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="skill-icon"><rect x="3" y="3" width="18" height="18" rx="4" stroke="#9999ff"></rect><path d="M6 15l2-5.5L10 15M7 13.5h2" stroke="#9999ff"></path><path d="M13.5 13h2.5c0-.8-.4-1.4-1.2-1.4-.8 0-1.2.6-1.2 1.4zm0 0c0 .8.4 1.4 1.2 1.4.5 0 .9-.3 1.1-.6" stroke="#9999ff"></path></svg>`},{name:`Premiere Pro`,icon:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="skill-icon"><rect x="3" y="3" width="18" height="18" rx="4" stroke="#ea77ff"></rect><path d="M6 8h2.5a1.75 1.75 0 0 1 0 3.5H6v3.5M6 11.5h2.5" stroke="#ea77ff"></path><path d="M13 11v4M13 12c.3-.6.8-1 1.4-1h.6" stroke="#ea77ff"></path></svg>`},{name:`AI Creative Tools`,icon:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="skill-icon"><path d="M12 2v4M12 18v4M4 12h4M18 12h4" stroke="var(--color-accent)"></path><path d="M12 6c0 3 3 6 6 6-3 0-6 3-6 6 0-3-3-6-6-6 3 0 6-3 6-6z" stroke="var(--color-accent)" fill="rgba(255, 107, 0, 0.1)"></path><path d="M19 5c0 1.5 1 2.5 2.5 2.5-1.5 0-2.5 1-2.5 2.5 0-1.5-1-2.5-2.5-2.5 1.5 0 2.5-1 2.5-2.5z" stroke="var(--color-accent)"></path></svg>`},{name:`Brand Communication`,icon:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="skill-icon"><circle cx="12" cy="7" r="3" stroke="var(--color-accent)"></circle><circle cx="6" cy="17" r="3" stroke="var(--color-accent)"></circle><circle cx="18" cy="17" r="3" stroke="var(--color-accent)"></circle><line x1="10.2" y1="9.5" x2="7.8" y2="14.5" stroke="var(--color-text-dark)"></line><line x1="13.8" y1="9.5" x2="16.2" y2="14.5" stroke="var(--color-text-dark)"></line><line x1="9" y1="17" x2="15" y2="17" stroke="var(--color-text-dark)"></line></svg>`},{name:`Amazon A+ Content`,icon:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="skill-icon"><rect x="3" y="3" width="18" height="6" rx="1" stroke="var(--color-accent)"></rect><rect x="3" y="11" width="8" height="10" rx="1" stroke="var(--color-accent)"></rect><rect x="13" y="11" width="8" height="4" rx="1" stroke="var(--color-text-dark)"></rect><rect x="13" y="17" width="8" height="4" rx="1" stroke="var(--color-text-dark)"></rect></svg>`},{name:`Visual Storytelling`,icon:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="skill-icon"><rect x="3" y="4" width="18" height="16" rx="2" stroke="var(--color-accent)"></rect><path d="M8 4v16M16 4v16M3 8h5M16 8h5M3 12h5M16 12h5M3 16h5M16 16h5" stroke="var(--color-text-dark)"></path><polygon points="11,9 15,12 11,15" stroke="var(--color-accent)" fill="rgba(255, 107, 0, 0.1)"></polygon></svg>`}];function g(){let e=p.map(e=>a(e)).join(``),t=m.map(e=>`
        <div class="timeline-item fade-in-section">
            <div class="timeline-meta">
                <span class="timeline-date">${e.date}</span>
                <span class="timeline-company">${e.company}</span>
            </div>
            <h4 class="timeline-title">${e.title}</h4>
            <p class="timeline-desc">${e.description}</p>
        </div>
    `).join(``),n=h.map(e=>`
        <div class="specialization-card">
            <div class="specialization-icon-wrapper">
                ${e.icon}
            </div>
            <span class="specialization-label">${e.name}</span>
        </div>
    `).join(``);return`
    <!-- 1. HERO SECTION -->
    <section class="hero-section" id="home">
        <div class="container hero-grid">
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
                    <a href="#home#selected-work" class="btn btn-primary">
                        <span>View Work</span>
                        <span class="btn-icon">&rarr;</span>
                    </a>
                    <a href="assets/resume/Ujjwal-Maurya-Resume.pdf" download="Ujjwal-Maurya-Resume.pdf" class="btn btn-secondary hero-download-btn">
                        <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="btn-icon-left" style="margin-right: 8px; vertical-align: middle;"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                        <span>Download Resume</span>
                    </a>
                </div>
                
                <!-- Hero Clickable Social Links Row -->
                <div class="hero-social-links" style="display: flex; gap: 16px; align-items: center;">
                    <a href="mailto:ujjwalmaurya781@gmail.com" target="_blank" rel="noopener" class="hero-social-icon-link" aria-label="Email Ujjwal">
                        <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    </a>
                    <a href="https://www.linkedin.com/in/ujjwal-maurya-3a997521a" target="_blank" rel="noopener" class="hero-social-icon-link" aria-label="LinkedIn Profile">
                        <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    </a>
                    <a href="https://www.behance.net/ujjwalmaurya2" target="_blank" rel="noopener" class="hero-social-icon-link" aria-label="Behance Profile">
                        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8.224 8.448c.515 0 .973.076 1.373.228a2.533 2.533 0 0 1 1.002.668c.264.293.46.657.585 1.092.126.435.189.925.189 1.472 0 .548-.066 1.033-.199 1.458-.133.424-.336.782-.609 1.071a2.802 2.802 0 0 1-1.043.682c-.419.162-.924.243-1.516.243H3.067V8.448h5.157zm-1.09 3.033c0-.306-.03-.564-.092-.773a1.298 1.298 0 0 0-.293-.538 1.258 1.258 0 0 0-.52-.338c-.218-.083-.497-.124-.836-.124H5.197v3.527h1.037c.367 0 .66-.039.879-.118.219-.078.394-.2.525-.367.13-.167.222-.375.275-.625.053-.25.079-.533.079-.848c-.001.002-.001.002-.001.002zm1.096-4.526c.394 0 .736.031 1.028.092.292.062.537.159.736.293.199.134.351.314.457.538.106.225.159.508.159.851 0 .285-.038.533-.114.743a1.597 1.597 0 0 1-.36.562 1.936 1.936 0 0 1-.655.421c-.279.112-.647.168-1.106.168H5.197V6.955H8.23zm-.462 2.115c0-.18-.018-.328-.053-.446a.792.792 0 0 0-.171-.302.736.736 0 0 0-.307-.189c-.13-.046-.307-.069-.533-.069H5.197v2.022h1.564c.225 0 .399-.02.52-.059a.784.784 0 0 0 .3-.171c.097-.091.166-.211.205-.36a1.458 1.458 0 0 0 .06-.411v-.016zm12.333-.509h-4.945c.012-.416.082-.767.21-1.053.128-.286.309-.52.544-.702a2.38 2.38 0 0 1 .842-.405c.328-.088.7-.132 1.116-.132.394 0 .738.041 1.032.124.294.083.541.206.742.367.2.161.353.364.456.609.103.245.16.529.171.854.004-.002.032-.062.032-.062zm.315 2.115h1.996a6.388 6.388 0 0 1-.416 1.583 4.549 4.549 0 0 1-.94 1.383c-.413.413-.918.736-1.517.969-.598.232-1.29.349-2.077.349-.817 0-1.529-.12-2.136-.359a4.673 4.673 0 0 1-1.602-1.026 5.093 5.093 0 0 1-1.047-1.637c-.25-.639-.375-1.371-.375-2.196 0-.814.122-1.536.367-2.166a4.896 4.896 0 0 1 1.028-1.633 4.678 4.678 0 0 1 1.583-1.032c.602-.245 1.3-.367 2.094-.367.755 0 1.425.111 2.01.334.585.222 1.074.536 1.468.94.394.404.69.897.888 1.48.199.582.289 1.233.27 1.953h-7.653c0 .356.035.688.106.994.07.307.19.57.359.789.168.219.394.39.675.513.282.123.633.184 1.053.184.533 0 .963-.092 1.29-.276a2.27 2.27 0 0 0 .805-.724c.214-.298.358-.636.432-1.014.07-.384.101-.762.092-1.139zm-.375-7.534h-4.333v1.083h4.333V4.004z"></path></svg>
                    </a>
                    <a href="https://www.instagram.com/krishhhhhmaurya" target="_blank" rel="noopener" class="hero-social-icon-link" aria-label="Instagram Profile">
                        <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                    </a>
                    <a href="https://youtube.com/@buntyyyyyyy" target="_blank" rel="noopener" class="hero-social-icon-link" aria-label="YouTube Channel">
                        <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
                    </a>
                </div>
            </div>
            
            <!-- Floating Portrait Composition -->
            <div class="hero-portrait-wrapper">
                <div class="floating-circle-blur"></div>
                
                <!-- 14 Floating Design Showcase Cards (Behind and around portrait) -->
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
                    <!-- Premium Frame Backdrop (Behind cutout portrait) -->
                    <div class="portrait-frame-backdrop"></div>
                    <div class="portrait-image-container">
                        <img src="assets/ujjwal_portrait.png" alt="Ujjwal Maurya Profile Portrait">
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- 2. MOVING MARQUEE -->
    <section class="marquee-section">
        ${i(f)}
    </section>

    <!-- 3. SELECTED WORK SECTION -->
    <section id="selected-work">
        <div class="container">
            <div class="section-header">
                <div>
                    <span class="section-subtitle">Portfolio</span>
                    <h2 class="section-title">Selected Work</h2>
                </div>
                <div style="font-family: var(--font-heading); color: var(--color-text-dark); font-weight: 500;">
                    04 / PROJECT BUNDLES
                </div>
            </div>
            
            <div class="project-grid">
                ${e}
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
                    ${t}
                </div>

                <!-- Core Tooling & PDF Resume -->
                <div class="skills-container fade-in-section">
                    <h3 class="skills-title">Core Tooling</h3>
                    <p class="about-bio-para" style="font-size: 0.95rem; margin-bottom: var(--space-md); line-height: 1.7;">
                        High proficiency in Adobe Creative Suite, specifically Adobe Photoshop for composite design, Illustrator for vector identity files, and After Effects &amp; Premiere Pro for motion visual campaigns and content ideation.
                    </p>
                    <a href="assets/resume/Ujjwal-Maurya-Resume.pdf" download="Ujjwal-Maurya-Resume.pdf" class="btn btn-secondary hero-download-btn" style="width: 100%; border-radius: 30px;">
                        <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="btn-icon-left" style="margin-right: 8px; vertical-align: middle;"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                        <span>Download Resume PDF</span>
                    </a>
                </div>
            </div>

            <!-- Full-Width Design Specializations Grid -->
            <div class="specializations-container fade-in-section" style="margin-top: var(--space-xl);">
                <h3 class="skills-title" style="margin-bottom: var(--space-lg);">Design Specializations</h3>
                <div class="specializations-grid">
                    ${n}
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
                    <a href="https://www.instagram.com/krishhhhhmaurya" target="_blank" rel="noopener" class="btn btn-secondary cta-btn">
                        <svg class="cta-icon" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                        <span>Instagram</span>
                    </a>
                </div>

                <!-- Footer Social Links row with all 5 -->
                <div class="contact-social-row fade-in-section">
                    <a href="mailto:ujjwalmaurya781@gmail.com" target="_blank" rel="noopener" class="social-link-item">
                        <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                        <span>Email</span>
                    </a>
                    <a href="https://www.linkedin.com/in/ujjwal-maurya-3a997521a" target="_blank" rel="noopener" class="social-link-item">
                        <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                        <span>LinkedIn</span>
                    </a>
                    <a href="https://www.behance.net/ujjwalmaurya2" target="_blank" rel="noopener" class="social-link-item">
                        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8.224 8.448c.515 0 .973.076 1.373.228a2.533 2.533 0 0 1 1.002.668c.264.293.46.657.585 1.092.126.435.189.925.189 1.472 0 .548-.066 1.033-.199 1.458-.133.424-.336.782-.609 1.071a2.802 2.802 0 0 1-1.043.682c-.419.162-.924.243-1.516.243H3.067V8.448h5.157zm-1.09 3.033c0-.306-.03-.564-.092-.773a1.298 1.298 0 0 0-.293-.538 1.258 1.258 0 0 0-.52-.338c-.218-.083-.497-.124-.836-.124H5.197v3.527h1.037c.367 0 .66-.039.879-.118.219-.078.394-.2.525-.367.13-.167.222-.375.275-.625.053-.25.079-.533.079-.848c-.001.002-.001.002-.001.002zm1.096-4.526c.394 0 .736.031 1.028.092.292.062.537.159.736.293.199.134.351.314.457.538.106.225.159.508.159.851 0 .285-.038.533-.114.743a1.597 1.597 0 0 1-.36.562 1.936 1.936 0 0 1-.655.421c-.279.112-.647.168-1.106.168H5.197V6.955H8.23zm-.462 2.115c0-.18-.018-.328-.053-.446a.792.792 0 0 0-.171-.302.736.736 0 0 0-.307-.189c-.13-.046-.307-.069-.533-.069H5.197v2.022h1.564c.225 0 .399-.02.52-.059a.784.784 0 0 0 .3-.171c.097-.091.166-.211.205-.36a1.458 1.458 0 0 0 .06-.411v-.016zm12.333-.509h-4.945c.012-.416.082-.767.21-1.053.128-.286.309-.52.544-.702a2.38 2.38 0 0 1 .842-.405c.328-.088.7-.132 1.116-.132.394 0 .738.041 1.032.124.294.083.541.206.742.367.2.161.353.364.456.609.103.245.16.529.171.854.004-.002.032-.062.032-.062zm.315 2.115h1.996a6.388 6.388 0 0 1-.416 1.583 4.549 4.549 0 0 1-.94 1.383c-.413.413-.918.736-1.517.969-.598.232-1.29.349-2.077.349-.817 0-1.529-.12-2.136-.359a4.673 4.673 0 0 1-1.602-1.026 5.093 5.093 0 0 1-1.047-1.637c-.25-.639-.375-1.371-.375-2.196 0-.814.122-1.536.367-2.166a4.896 4.896 0 0 1 1.028-1.633 4.678 4.678 0 0 1 1.583-1.032c.602-.245 1.3-.367 2.094-.367.755 0 1.425.111 2.01.334.585.222 1.074.536 1.468.94.394.404.69.897.888 1.48.199.582.289 1.233.27 1.953h-7.653c0 .356.035.688.106.994.07.307.19.57.359.789.168.219.394.39.675.513.282.123.633.184 1.053.184.533 0 .963-.092 1.29-.276a2.27 2.27 0 0 0 .805-.724c.214-.298.358-.636.432-1.014.07-.384.101-.762.092-1.139zm-.375-7.534h-4.333v1.083h4.333V4.004z"></path></svg>
                        <span>Behance</span>
                    </a>
                    <a href="https://www.instagram.com/krishhhhhmaurya" target="_blank" rel="noopener" class="social-link-item">
                        <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                        <span>Instagram</span>
                    </a>
                    <a href="https://youtube.com/@buntyyyyyyy" target="_blank" rel="noopener" class="social-link-item">
                        <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
                        <span>YouTube</span>
                    </a>
                </div>
            </div>
        </div>
    </section>
    `}async function _(){for(let[e,t]of Object.entries({"brand-comm":`assets/brand-communication/goldwood-ply/`,"ecommerce-design":`assets/ecommerce/rumaisa/perfume-01/listing/`,campaigns:`assets/campaigns/jewar-organics/`,renders:`assets/product-rendering/`})){let n=document.getElementById(`cover-img-${e}`),r=document.getElementById(`cover-wrapper-${e}`);if(n&&r){let e=await l(t);e&&e.length>0?(n.src=e[0],n.style.display=`block`,r.classList.remove(`no-image`)):(n.style.display=`none`,r.classList.add(`no-image`))}}}var v=[{id:`aagaz-locks`,name:`Aagaz Locks`,industry:`Locks & Security Hardware`,objective:`Created social media campaigns, product promotions, awareness creatives, and dealer engagement creatives for Aagaz Locks.`,approach:`High-impact portrait graphics highlighting secure lock technology, modern finishes, and industrial strength standards.`,folderPath:`assets/brand-communication/aagaz-locks/`,images:[]},{id:`goldwood-ply`,name:`Goldwood Ply`,industry:`Plywood & Home Infrastructure`,objective:`Designed engaging visual campaigns, product showcases, festival designs, and dealer promotions representing premium plywood durability.`,approach:`Warm timber textures, structural overlays, and clean corporate product positioning.`,folderPath:`assets/brand-communication/goldwood-ply/`,images:[]},{id:`madhav-food-products`,name:`Madhav Food Products`,industry:`Consumer Packaged Foods`,objective:`Crafted vibrant consumer-facing food creatives, festival promos, product story layouts, and promotional graphics.`,approach:`Bright organic food hues, appetizing design elements, and high-impact visual messaging.`,folderPath:`assets/brand-communication/madhav-food-products/`,images:[]},{id:`uninox-houseware`,name:`Uninox Houseware`,industry:`Premium Kitchenware & Utensils`,objective:`Produced aesthetic product promotions, festival campaigns, kitchen visual concepts, and social media branding creatives.`,approach:`Sleek metallic reflections, clean layouts, modern kitchen compositions, and product utility highlights.`,folderPath:`assets/brand-communication/uninox-houseware/`,images:[]}];function y(){return`
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
    ${v.map((e,t)=>`
        <section class="brand-detail-section" id="${e.id}" style="padding: var(--space-xl) 8vw; ${t%2==1?`background-color: var(--color-bg-pitch);`:``} border-bottom: 1px solid var(--color-border);">
            <div class="container">
                <!-- Brand Header Section -->
                <div class="brand-detail-header" style="margin-bottom: var(--space-lg);">
                    <span style="font-family: var(--font-heading); color: var(--color-accent); font-weight: 600; font-size: 0.9rem; letter-spacing: 0.25em; text-transform: uppercase;">0${t+1} / SOCIAL MEDIA BRAND</span>
                    <h3 class="brand-name" style="font-size: clamp(2.5rem, 5vw, 3.5rem); font-weight: 900; letter-spacing: -0.02em; margin: 15px 0 25px 0; color: var(--color-text-light); text-transform: uppercase;">${e.name}</h3>
                    
                    <!-- Metadata Info Grid -->
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: var(--space-md); margin-top: var(--space-md); border-top: 1px solid var(--color-border); padding-top: var(--space-md); margin-bottom: var(--space-md);">
                        <div>
                            <h4 style="font-family: var(--font-heading); color: var(--color-text-dark); font-size: 0.75rem; letter-spacing: 0.15em; text-transform: uppercase; margin-bottom: 8px;">Industry</h4>
                            <p style="font-size: 1.1rem; font-weight: 600; color: var(--color-accent);">${e.industry}</p>
                        </div>
                        <div>
                            <h4 style="font-family: var(--font-heading); color: var(--color-text-dark); font-size: 0.75rem; letter-spacing: 0.15em; text-transform: uppercase; margin-bottom: 8px;">Campaign Objective</h4>
                            <p style="font-size: 0.95rem; font-weight: 300; line-height: 1.6; color: var(--color-text-muted);">${e.objective}</p>
                        </div>
                        <div>
                            <h4 style="font-family: var(--font-heading); color: var(--color-text-dark); font-size: 0.75rem; letter-spacing: 0.15em; text-transform: uppercase; margin-bottom: 8px;">Design Approach</h4>
                            <p style="font-size: 0.95rem; font-weight: 300; line-height: 1.6; color: var(--color-text-muted);">${e.approach}</p>
                        </div>
                    </div>
                </div>

                <h4 style="font-family: var(--font-heading); color: var(--color-text-light); font-size: 0.85rem; letter-spacing: 0.2em; text-transform: uppercase; margin-bottom: 24px; font-weight: 600;">Campaign Gallery</h4>
                
                <!-- Masonry Gallery -->
                <div class="masonry-grid" id="grid-${e.id}">
                    <!-- Loaded dynamically -->
                </div>

                <!-- Show More/Less Button Container -->
                <div id="toggle-container-${e.id}" style="display: none; text-align: center; margin-top: var(--space-lg);">
                    <button class="btn btn-secondary toggle-gallery-btn" data-brand="${e.id}" id="toggle-btn-${e.id}">
                        <span>Show More</span>
                    </button>
                </div>
            </div>
        </section>
        `).join(``)}

    <!-- Lightbox Dynamic Overlay Container -->
    <div class="lightbox-overlay" id="lightbox-overlay">
        <button class="lightbox-close" id="lightbox-close" aria-label="Close Lightbox">&times;</button>
        <button class="lightbox-btn lightbox-prev-btn" id="lightbox-prev-btn" aria-label="Previous Image">&lsaquo;</button>
        <div class="lightbox-wrapper">
            <img class="lightbox-image" id="lightbox-image" src="" alt="Lightbox Preview">
        </div>
        <button class="lightbox-btn lightbox-next-btn" id="lightbox-next-btn" aria-label="Next Image">&rsaquo;</button>
    </div>
    `}function b(){let e=document.getElementById(`lightbox-overlay`),t=document.getElementById(`lightbox-image`),n=document.getElementById(`lightbox-close`),r=document.getElementById(`lightbox-prev-btn`),i=document.getElementById(`lightbox-next-btn`);if(!e||!t)return;let a=[],o=0;function s(t,n){let r=v.find(e=>e.id===t);!r||!r.images||r.images.length===0||(a=r.images,o=parseInt(n,10),l(),e.classList.add(`active`),document.body.style.overflow=`hidden`)}function c(){e.classList.remove(`active`),document.body.style.overflow=``,t.src=``}function l(){o<0?o=a.length-1:o>=a.length&&(o=0),t.src=a[o]}v.forEach(e=>{d(e.id,e.folderPath,t=>{e.images=t;let n=document.getElementById(`toggle-container-${e.id}`),r=document.getElementById(`toggle-btn-${e.id}`);n&&r&&(t.length>6?(n.style.display=`block`,r.querySelector(`span`).textContent=`Show More`):n.style.display=`none`);let i=document.getElementById(`grid-${e.id}`);i&&i.querySelectorAll(`.masonry-item`).forEach(t=>{t.addEventListener(`click`,()=>{let n=t.getAttribute(`data-img-index`);s(e.id,n)})})},`Upload Creative`);let t=document.getElementById(`toggle-btn-${e.id}`);t&&t.addEventListener(`click`,()=>{let n=document.getElementById(`grid-${e.id}`);if(!n)return;let r=n.querySelectorAll(`.masonry-item`),i=!1;r.forEach((e,t)=>{t>=6&&(e.classList.toggle(`gallery-item-hidden`),e.classList.contains(`gallery-item-hidden`)||(i=!0))}),t.querySelector(`span`).textContent=i?`Show Less`:`Show More`})}),n.addEventListener(`click`,c),e.addEventListener(`click`,t=>{(t.target===e||t.target.classList.contains(`lightbox-wrapper`))&&c()}),r.addEventListener(`click`,e=>{e.stopPropagation(),o--,l()}),i.addEventListener(`click`,e=>{e.stopPropagation(),o++,l()});function u(t){e.classList.contains(`active`)&&(t.key===`Escape`?c():t.key===`ArrowLeft`?(o--,l()):t.key===`ArrowRight`&&(o++,l()))}window.addEventListener(`keydown`,u);let f=()=>{window.removeEventListener(`keydown`,u),window.removeEventListener(`hashchange`,f)};window.addEventListener(`hashchange`,f)}async function x(e){try{let t=await fetch(`/api/list-subdirs?folder=${encodeURIComponent(e)}`);return t.ok?await t.json():(console.warn(`Failed to list subdirectories for folder: ${e}. Status: ${t.status}`),[])}catch(t){return console.error(`Error fetching subdirs from folder ${e}:`,t),[]}}function S(){return`
    <!-- Case Study Hero -->
    <section class="case-study-hero" style="background-image: linear-gradient(180deg, rgba(10, 10, 10, 0.4) 0%, rgba(10, 10, 10, 0.95) 100%), radial-gradient(circle at center, #1a1a1a 0%, #050505 100%); background-size: cover; background-position: center; min-height: 40vh;">
        <div class="container case-study-title-block">
            <span class="case-study-category">SELECTED E-COMMERCE WORK</span>
            <h1 class="case-study-title">E-Commerce Design</h1>
            <p style="color: var(--color-text-muted); font-size: 1.15rem; max-width: 700px; font-weight: 300; margin-bottom: var(--space-md);">
                Amazon Listing Designs, Amazon A+ Content, infographics, commercial product storytelling layouts, and conversion-focused digital storefront graphics designed by Ujjwal Maurya.
            </p>
            <a href="#home#selected-work" class="btn btn-secondary" style="padding: 0.75rem 1.5rem; font-size: 0.75rem;">
                &larr; Back to Portfolio
            </a>
        </div>
    </section>

    <!-- Dynamic Clients Showcase Container -->
    <div id="ecommerce-brands-root" style="background-color: #050505; min-height: 50vh;">
        <div class="container" style="padding: var(--space-xl) 0; text-align: center; color: var(--color-text-muted);">
            <div class="spinner" style="border: 3px solid rgba(255,107,0,0.1); border-top: 3px solid var(--color-accent); border-radius: 50%; width: 40px; height: 40px; margin: 0 auto 20px auto; animation: spin 1s linear infinite;"></div>
            <p style="font-family: var(--font-heading); font-size: 0.9rem; letter-spacing: 0.1em; text-transform: uppercase;">Scanning portfolio database...</p>
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
    `}async function C(){let e=document.getElementById(`ecommerce-brands-root`);if(!e)return;let t=document.getElementById(`lightbox-overlay`),n=document.getElementById(`lightbox-image`),r=document.getElementById(`lightbox-close`),i=document.getElementById(`lightbox-prev-btn`),a=document.getElementById(`lightbox-next-btn`),o=[],s=0;function c(e){!t||!n||(s=o.indexOf(e),s===-1&&(o=[e],s=0),f(),t.classList.add(`active`),document.body.style.overflow=`hidden`)}function d(){t&&(t.classList.remove(`active`),document.body.style.overflow=``,n.src=``)}function f(){s<0?s=o.length-1:s>=o.length&&(s=0),n.src=o[s]}r&&r.addEventListener(`click`,d),i&&i.addEventListener(`click`,e=>{e.stopPropagation(),s--,f()}),a&&a.addEventListener(`click`,e=>{e.stopPropagation(),s++,f()}),t&&t.addEventListener(`click`,e=>{(e.target===t||e.target.classList.contains(`lightbox-wrapper`))&&d()});function p(e){!t||!t.classList.contains(`active`)||(e.key===`Escape`?d():e.key===`ArrowLeft`?(s--,f()):e.key===`ArrowRight`&&(s++,f()))}window.addEventListener(`keydown`,p);let m=()=>{window.removeEventListener(`keydown`,p),window.removeEventListener(`hashchange`,m)};window.addEventListener(`hashchange`,m);let h={camx:{name:`CAMX`,description:`High-reliability professional camera accessories and electronic equipment styling.`,category:`Camera Accessories`,summary:`Drafted a complete e-commerce product listings and custom brand storytelling blueprint showing high-tolerance engineering designs.`},rumaisa:{name:`RUMAISA`,description:`Exquisite and luxury fragrance bottle packaging, listing imagery, and conversion branding.`,category:`Fragrances & Cosmetics`,summary:`Designed luxury packaging listings and lifestyle infographics focusing on scents profiles, ingredients highlights, and premium bottle designs.`},"petro-luxury":{name:`PETRO LUXURY`,description:`Premium perfume brand showcasing elite aesthetics and lifestyle digital storefront designs.`,category:`Luxury Fragrances`,summary:`Crafted high-fidelity commercial creatives and product infographics representing elite perfumes, luxury lifestyles, and conversion banners.`},amanzi:{name:`AMANZI`,description:`Artisanal scents and premium body fragrances with sophisticated visual storytelling.`,category:`Body Scents & Care`,summary:`Developed visual listings and conversion-centric graphics to capture customer attention and establish premium product positioning.`},leatherific:{name:`LEATHERIFIC`,description:`Genuine leather accessories, tech sleeves, and crafted travel goods storefront visuals.`,category:`Premium Leather Goods`,summary:`Structured e-commerce infographics emphasizing full-grain leather textures, precise stitching craftsmanship, and utility specifications.`},"storage-containers":{name:`STORAGE CONTAINERS`,description:`Smart home organization, kitchen storage, and space-saving utility design systems.`,category:`Home & Kitchen`,summary:`Drafted conversion-centric listings highlighting materials safety, space-saving layouts, modular stacking, and everyday convenience.`}},g=await x(`assets/ecommerce`);(!g||g.length===0)&&(g=Object.keys(h));let _=Object.keys(h).filter(e=>g.includes(e));g.forEach(e=>{_.includes(e)||_.push(e)});let v=``,y={};for(let e=0;e<_.length;e++){let t=_[e],n=h[t]||{name:t.toUpperCase().replace(`-`,` `),description:`Custom brand communication and e-commerce design layout.`,category:`E-Commerce Product`,summary:`Commercial visual presentation, feature listing design, and conversion-focused infographics.`};v+=`
        <section class="brand-detail-section" id="section-${t}" style="padding: var(--space-xl) 8vw; ${e%2==1?`background-color: var(--color-bg-pitch);`:``} border-bottom: 1px solid var(--color-border);">
            <div class="container">
                <!-- Brand Header -->
                <div style="margin-bottom: var(--space-md);">
                    <span style="font-family: var(--font-heading); color: var(--color-accent); font-weight: 600; font-size: 0.9rem; letter-spacing: 0.25em; text-transform: uppercase;">0${e+1} / E-COMMERCE CLIENT</span>
                    <h3 style="font-size: clamp(2.5rem, 5vw, 3.5rem); font-weight: 900; letter-spacing: -0.02em; margin: 15px 0 10px 0; color: var(--color-text-light); text-transform: uppercase;">${n.name}</h3>
                    <p style="font-size: 1.15rem; color: var(--color-text-muted); font-weight: 300; max-width: 800px; line-height: 1.6; margin-bottom: 25px;">${n.description}</p>
                </div>

                <!-- Navigation Tabs -->
                <div class="product-tabs" id="tabs-${t}">
                    <!-- Loaded dynamically -->
                </div>

                <!-- Showcase Panel -->
                <div class="product-showcase-panel" id="showcase-panel-${t}">
                    <!-- Loaded dynamically on tab selection -->
                </div>
            </div>
        </section>
        `}e.innerHTML=v;for(let e of _){let t=await x(`assets/ecommerce/${e}`)||[];t.length===0&&(t=e===`camx`?[`am-01`,`am-02`,`am-03`,`am-04`]:[`product-01`]),y[e]=t;let n=document.getElementById(`tabs-${e}`);if(n){n.innerHTML=t.map((t,n)=>{let r=t.toUpperCase().replace(`-`,` `);return`
                    <button class="product-tab-btn ${n===0?`active`:``}" data-client="${e}" data-product="${t}">
                        ${r}
                    </button>
                `}).join(``);let r=n.querySelectorAll(`.product-tab-btn`);r.forEach(t=>{t.addEventListener(`click`,()=>{r.forEach(e=>e.classList.remove(`active`)),t.classList.add(`active`),b(e,t.getAttribute(`data-product`))})})}t.length>0&&b(e,t[0])}async function b(e,t){let n=document.getElementById(`showcase-panel-${e}`);if(!n)return;n.innerHTML=`
            <div style="text-align: center; padding: 40px; color: var(--color-text-muted);">
                <p style="font-family: var(--font-heading); font-size: 0.8rem; letter-spacing: 0.1em; text-transform: uppercase;">Loading product details...</p>
            </div>
        `;let r=h[e]||{name:e.toUpperCase(),category:`E-Commerce Product`,summary:`Commercial visual presentation, feature listing design, and conversion-focused infographics.`},i=`assets/ecommerce/${e}/${t}/listing/`,a=`assets/ecommerce/${e}/${t}/a-plus/`,s=await l(i),d=await l(a),f=t.toUpperCase().replace(`-`,` `);n.innerHTML=`
            <!-- Product Info Hero Grid -->
            <div class="product-metadata-grid">
                <div>
                    <h4 class="product-meta-title">Product Name</h4>
                    <p class="product-meta-value accent-text">${r.name} - ${f}</p>
                </div>
                <div>
                    <h4 class="product-meta-title">Category &amp; Deliverables</h4>
                    <p class="product-meta-value"><strong>Category:</strong> ${r.category}</p>
                    <p class="product-meta-value" style="margin-top: 5px;"><strong>Deliverables:</strong> Amazon Listing Design, Amazon A+ Content, Infographics, Technical Overlay Blueprint Sheets</p>
                </div>
                <div>
                    <h4 class="product-meta-title">Project Summary</h4>
                    <p class="product-meta-value">${r.summary}</p>
                    <p class="product-meta-value" style="margin-top: 5px;"><strong>Role:</strong> Lead Graphic Designer</p>
                </div>
            </div>

            <!-- Listing Section -->
            <div style="margin-bottom: var(--space-xl);">
                <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 20px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 10px;">
                    <h4 style="font-family: var(--font-heading); color: var(--color-text-light); font-size: 0.9rem; letter-spacing: 0.15em; text-transform: uppercase; margin: 0; font-weight: 700;">01 / Amazon Listing Images</h4>
                    <span style="font-size: 0.8rem; color: var(--color-text-dark); text-transform: uppercase; letter-spacing: 0.05em;">Vertical creatives (1080 &times; 1350)</span>
                </div>
                <div class="masonry-grid" id="listing-grid-${e}-${t}">
                    <!-- Dynamically populated -->
                </div>
            </div>

            <!-- A+ Content Section -->
            <div style="margin-top: var(--space-xl);">
                <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 24px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 10px;">
                    <h4 style="font-family: var(--font-heading); color: var(--color-text-light); font-size: 0.9rem; letter-spacing: 0.15em; text-transform: uppercase; margin: 0; font-weight: 700;">02 / Amazon A+ Content</h4>
                    <span style="font-size: 0.8rem; color: var(--color-text-dark); text-transform: uppercase; letter-spacing: 0.05em;">Brand narratives &amp; modules</span>
                </div>
                <div class="aplus-container" id="aplus-grid-${e}-${t}">
                    <!-- Dynamically populated -->
                </div>
            </div>
        `;let p=document.getElementById(`listing-grid-${e}-${t}`);if(p)if(s&&s.length>0)p.innerHTML=s.map((e,t)=>`
                    <div class="masonry-item" data-img-url="${e}">
                        <img src="${e}" alt="Listing Image ${t+1}" loading="lazy" class="gallery-image">
                    </div>
                `).join(``),p.querySelectorAll(`.masonry-item`).forEach(e=>{e.addEventListener(`click`,()=>{o=[...s,...d],c(e.getAttribute(`data-img-url`))})});else{p.innerHTML=`
                    <div class="upload-placeholder-card" id="upload-listing-${e}-${t}">
                        <div class="upload-placeholder-icon" style="color: var(--color-accent);">+</div>
                        <div class="upload-placeholder-text">Upload Listing Images</div>
                        <input type="file" id="input-listing-${e}-${t}" accept="image/*" multiple style="display: none;">
                    </div>
                `;let n=document.getElementById(`upload-listing-${e}-${t}`),r=document.getElementById(`input-listing-${e}-${t}`);n&&r&&(n.addEventListener(`click`,()=>r.click()),r.addEventListener(`change`,async r=>{let a=Array.from(r.target.files);if(a.length!==0){n.style.pointerEvents=`none`,n.querySelector(`.upload-placeholder-text`).textContent=`Uploading...`;for(let e of a)await u(i,e);b(e,t)}}))}let m=document.getElementById(`aplus-grid-${e}-${t}`);if(m)if(d&&d.length>0)m.innerHTML=d.map((e,t)=>`
                    <div class="aplus-module-card" data-img-url="${e}">
                        <img src="${e}" alt="A+ Module ${t+1}" loading="lazy">
                    </div>
                `).join(``),m.querySelectorAll(`.aplus-module-card`).forEach(e=>{e.addEventListener(`click`,()=>{o=[...s,...d],c(e.getAttribute(`data-img-url`))})});else{m.innerHTML=`
                    <div class="upload-placeholder-card" id="upload-aplus-${e}-${t}" style="aspect-ratio: 97 / 30; min-height: 180px;">
                        <div class="upload-placeholder-icon" style="color: var(--color-accent);">+</div>
                        <div class="upload-placeholder-text">Upload A+ Content Modules</div>
                        <input type="file" id="input-aplus-${e}-${t}" accept="image/*" multiple style="display: none;">
                    </div>
                `;let n=document.getElementById(`upload-aplus-${e}-${t}`),r=document.getElementById(`input-aplus-${e}-${t}`);n&&r&&(n.addEventListener(`click`,()=>r.click()),r.addEventListener(`change`,async r=>{let i=Array.from(r.target.files);if(i.length!==0){n.style.pointerEvents=`none`,n.querySelector(`.upload-placeholder-text`).textContent=`Uploading...`;for(let e of i)await u(a,e);b(e,t)}}))}window.rebindCursor&&window.rebindCursor()}}var w=[{id:`jewar-organics`,name:`Jewar Organics`,industry:`Organic Foods & Agriculture`,objective:`Created advertising banners and promotional creatives for organic food products, focusing on brand awareness, product trust, and customer engagement.`,approach:`Natural visual language, premium organic presentation, clean layouts, and freshness-focused branding.`,folderPath:`assets/campaigns/jewar-organics/`,images:[]},{id:`muscle-smith`,name:`Muscle Smith`,industry:`Fitness & Sports Nutrition`,objective:`Designed high-impact advertising creatives for fitness and nutrition products to improve engagement and campaign performance.`,approach:`Bold typography, energetic compositions, strong product focus, modern fitness branding.`,folderPath:`assets/campaigns/muscle-smith/`,images:[]}];function T(){return`
    <!-- Hero Header -->
    <section class="case-study-hero" style="background-image: linear-gradient(180deg, rgba(10, 10, 10, 0.4) 0%, rgba(10, 10, 10, 0.95) 100%), radial-gradient(circle at center, #1a1a1a 0%, #050505 100%); min-height: 45vh;">
        <div class="container case-study-title-block">
            <span class="case-study-category">LARGE-FORMAT WORK</span>
            <h1 class="case-study-title">Brand Campaigns</h1>
            <p style="color: var(--color-text-muted); font-size: 1.15rem; max-width: 650px; font-weight: 300; margin-bottom: var(--space-md);">
                Advertising posters, exhibition banners, product launch templates, and commercial visual concepts designed for partner brands. Click any asset to preview in full resolution.
            </p>
            <a href="#home#selected-work" class="btn btn-secondary" style="padding: 0.75rem 1.5rem; font-size: 0.75rem;">
                &larr; Back to Portfolio
            </a>
        </div>
    </section>

    <!-- Campaign Sections -->
    ${w.map((e,t)=>`
        <section class="brand-detail-section" id="${e.id}" style="padding: var(--space-xl) 8vw; ${t%2==1?`background-color: var(--color-bg-pitch);`:``} border-bottom: 1px solid var(--color-border);">
            <div class="container">
                <div class="brand-detail-header" style="margin-bottom: var(--space-lg);">
                    <span style="font-family: var(--font-heading); color: var(--color-accent); font-weight: 600; font-size: 0.9rem; letter-spacing: 0.25em; text-transform: uppercase;">0${t+1} / CAMPAIGN</span>
                    <h3 class="brand-name" style="font-size: clamp(2.5rem, 5vw, 3.5rem); font-weight: 900; letter-spacing: -0.02em; margin: 15px 0 25px 0; color: var(--color-text-light); text-transform: uppercase;">${e.name}</h3>
                    
                    <!-- Metadata Info Grid -->
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: var(--space-md); margin-top: var(--space-md); border-top: 1px solid var(--color-border); padding-top: var(--space-md); margin-bottom: var(--space-md);">
                        <div>
                            <h4 style="font-family: var(--font-heading); color: var(--color-text-dark); font-size: 0.75rem; letter-spacing: 0.15em; text-transform: uppercase; margin-bottom: 8px;">Industry</h4>
                            <p style="font-size: 1.1rem; font-weight: 600; color: var(--color-accent);">${e.industry}</p>
                        </div>
                        <div>
                            <h4 style="font-family: var(--font-heading); color: var(--color-text-dark); font-size: 0.75rem; letter-spacing: 0.15em; text-transform: uppercase; margin-bottom: 8px;">Campaign Objective</h4>
                            <p style="font-size: 0.95rem; font-weight: 300; line-height: 1.6; color: var(--color-text-muted);">${e.objective}</p>
                        </div>
                        <div>
                            <h4 style="font-family: var(--font-heading); color: var(--color-text-dark); font-size: 0.75rem; letter-spacing: 0.15em; text-transform: uppercase; margin-bottom: 8px;">Design Approach</h4>
                            <p style="font-size: 0.95rem; font-weight: 300; line-height: 1.6; color: var(--color-text-muted);">${e.approach}</p>
                        </div>
                    </div>
                </div>
                
                <h4 style="font-family: var(--font-heading); color: var(--color-text-light); font-size: 0.85rem; letter-spacing: 0.2em; text-transform: uppercase; margin-bottom: 24px; font-weight: 600;">Campaign Gallery</h4>

                <!-- Masonry Gallery -->
                <div class="masonry-grid" id="grid-${e.id}">
                    <!-- Loaded dynamically -->
                </div>

                <!-- Show More/Less Button Container -->
                <div id="toggle-container-${e.id}" style="display: none; text-align: center; margin-top: var(--space-lg);">
                    <button class="btn btn-secondary toggle-gallery-btn" data-brand="${e.id}" id="toggle-btn-${e.id}">
                        <span>Show More</span>
                    </button>
                </div>
            </div>
        </section>
        `).join(``)}

    <!-- Lightbox Overlay -->
    <div class="lightbox-overlay" id="lightbox-overlay">
        <button class="lightbox-close" id="lightbox-close" aria-label="Close Lightbox">&times;</button>
        <button class="lightbox-btn lightbox-prev-btn" id="lightbox-prev-btn" aria-label="Previous Image">&lsaquo;</button>
        <div class="lightbox-wrapper">
            <img class="lightbox-image" id="lightbox-image" src="" alt="Lightbox Preview">
        </div>
        <button class="lightbox-btn lightbox-next-btn" id="lightbox-next-btn" aria-label="Next Image">&rsaquo;</button>
    </div>
    `}function E(){let e=document.getElementById(`lightbox-overlay`),t=document.getElementById(`lightbox-image`),n=document.getElementById(`lightbox-close`),r=document.getElementById(`lightbox-prev-btn`),i=document.getElementById(`lightbox-next-btn`);if(!e||!t)return;let a=[],o=0;function s(t,n){let r=w.find(e=>e.id===t);!r||!r.images||r.images.length===0||(a=r.images,o=parseInt(n,10),l(),e.classList.add(`active`),document.body.style.overflow=`hidden`)}function c(){e.classList.remove(`active`),document.body.style.overflow=``,t.src=``}function l(){o<0?o=a.length-1:o>=a.length&&(o=0),t.src=a[o]}w.forEach(e=>{d(e.id,e.folderPath,t=>{e.images=t;let n=document.getElementById(`toggle-container-${e.id}`),r=document.getElementById(`toggle-btn-${e.id}`);n&&r&&(t.length>6?(n.style.display=`block`,r.querySelector(`span`).textContent=`Show More`):n.style.display=`none`);let i=document.getElementById(`grid-${e.id}`);i&&i.querySelectorAll(`.masonry-item`).forEach(t=>{t.addEventListener(`click`,()=>{let n=t.getAttribute(`data-img-index`);s(e.id,n)})})},`Upload Campaign Creative`);let t=document.getElementById(`toggle-btn-${e.id}`);t&&t.addEventListener(`click`,()=>{let n=document.getElementById(`grid-${e.id}`);if(!n)return;let r=n.querySelectorAll(`.masonry-item`),i=!1;r.forEach((e,t)=>{t>=6&&(e.classList.toggle(`gallery-item-hidden`),e.classList.contains(`gallery-item-hidden`)||(i=!0))}),t.querySelector(`span`).textContent=i?`Show Less`:`Show More`})}),n.addEventListener(`click`,c),e.addEventListener(`click`,t=>{(t.target===e||t.target.classList.contains(`lightbox-wrapper`))&&c()}),r.addEventListener(`click`,e=>{e.stopPropagation(),o--,l()}),i.addEventListener(`click`,e=>{e.stopPropagation(),o++,l()});function u(t){e.classList.contains(`active`)&&(t.key===`Escape`?c():t.key===`ArrowLeft`?(o--,l()):t.key===`ArrowRight`&&(o++,l()))}window.addEventListener(`keydown`,u);let f=()=>{window.removeEventListener(`keydown`,u),window.removeEventListener(`hashchange`,f)};window.addEventListener(`hashchange`,f)}function D(){return`
    <!-- Hero Header -->
    <section class="case-study-hero" style="background-image: linear-gradient(180deg, rgba(10, 10, 10, 0.4) 0%, rgba(10, 10, 10, 0.95) 100%), radial-gradient(circle at center, #1a1a1a 0%, #050505 100%); min-height: 45vh;">
        <div class="container case-study-title-block">
            <span class="case-study-category">CGI &amp; 3D WORK</span>
            <h1 class="case-study-title">Product Rendering</h1>
            <p style="color: var(--color-text-muted); font-size: 1.15rem; max-width: 650px; font-weight: 300; margin-bottom: var(--space-md);">
                Product renders, packaging renders, lifestyle compositions, CGI visuals, and commercial design presentations. Click any asset to preview in full resolution.
            </p>
            <a href="#home#selected-work" class="btn btn-secondary" style="padding: 0.75rem 1.5rem; font-size: 0.75rem;">
                &larr; Back to Portfolio
            </a>
        </div>
    </section>

    <!-- Main Rendering Showcase -->
    <section class="brand-detail-section" id="rendering-showcase">
        <div class="container">
            <div class="brand-detail-header" style="margin-bottom: var(--space-lg); max-width: 800px;">
                <span style="font-family: var(--font-heading); color: var(--color-accent); font-weight: 600; font-size: 0.85rem; letter-spacing: 0.2em; text-transform: uppercase;">GALLERY Showcase</span>
                <h3 class="brand-name" style="font-size: clamp(2.25rem, 4.5vw, 3.25rem); font-weight: 900; letter-spacing: -0.02em; margin: 10px 0; color: var(--color-text-light); text-transform: uppercase;">3D Renders &amp; CGI</h3>
                <p class="brand-desc" style="font-size: 0.95rem; font-weight: 300; line-height: 1.6; color: var(--color-text-muted);">
                    Packaging visualization, structural details, material detailing, and high-fidelity lifestyle arrangements crafted to enhance product storytelling.
                </p>
            </div>
            
            <!-- Masonry Grid -->
            <div class="masonry-grid" id="grid-renders">
                <!-- Loaded dynamically -->
            </div>

            <!-- Show More/Less Button Container -->
            <div id="toggle-container-renders" style="display: none; text-align: center; margin-top: var(--space-lg);">
                <button class="btn btn-secondary toggle-gallery-btn" data-brand="renders" id="toggle-btn-renders">
                    <span>Show More</span>
                </button>
            </div>
        </div>
    </section>

    <!-- Lightbox Overlay -->
    <div class="lightbox-overlay" id="lightbox-overlay">
        <button class="lightbox-close" id="lightbox-close" aria-label="Close Lightbox">&times;</button>
        <button class="lightbox-btn lightbox-prev-btn" id="lightbox-prev-btn" aria-label="Previous Image">&lsaquo;</button>
        <div class="lightbox-wrapper">
            <img class="lightbox-image" id="lightbox-image" src="" alt="Lightbox Preview">
        </div>
        <button class="lightbox-btn lightbox-next-btn" id="lightbox-next-btn" aria-label="Next Image">&rsaquo;</button>
    </div>
    `}function O(){let e=document.getElementById(`lightbox-overlay`),t=document.getElementById(`lightbox-image`),n=document.getElementById(`lightbox-close`),r=document.getElementById(`lightbox-prev-btn`),i=document.getElementById(`lightbox-next-btn`);if(!e||!t)return;let a=[],o=0;function s(t){a.length!==0&&(o=parseInt(t,10),l(),e.classList.add(`active`),document.body.style.overflow=`hidden`)}function c(){e.classList.remove(`active`),document.body.style.overflow=``,t.src=``}function l(){o<0?o=a.length-1:o>=a.length&&(o=0),t.src=a[o]}d(`renders`,`assets/product-rendering/`,e=>{a=e;let t=document.getElementById(`toggle-container-renders`),n=document.getElementById(`toggle-btn-renders`);t&&n&&(e.length>6?(t.style.display=`block`,n.querySelector(`span`).textContent=`Show More`):t.style.display=`none`);let r=document.getElementById(`grid-renders`);r&&r.querySelectorAll(`.masonry-item`).forEach(e=>{e.addEventListener(`click`,()=>{s(e.getAttribute(`data-img-index`))})})},`Upload Renders`);let u=document.getElementById(`toggle-btn-renders`);u&&u.addEventListener(`click`,()=>{let e=document.getElementById(`grid-renders`);if(!e)return;let t=e.querySelectorAll(`.masonry-item`),n=!1;t.forEach((e,t)=>{t>=6&&(e.classList.toggle(`gallery-item-hidden`),e.classList.contains(`gallery-item-hidden`)||(n=!0))}),u.querySelector(`span`).textContent=n?`Show Less`:`Show More`}),n.addEventListener(`click`,c),e.addEventListener(`click`,t=>{(t.target===e||t.target.classList.contains(`lightbox-wrapper`))&&c()}),r.addEventListener(`click`,e=>{e.stopPropagation(),o--,l()}),i.addEventListener(`click`,e=>{e.stopPropagation(),o++,l()});function f(t){e.classList.contains(`active`)&&(t.key===`Escape`?c():t.key===`ArrowLeft`?(o--,l()):t.key===`ArrowRight`&&(o++,l()))}window.addEventListener(`keydown`,f);let p=()=>{window.removeEventListener(`keydown`,f),window.removeEventListener(`hashchange`,p)};window.addEventListener(`hashchange`,p)}var k={home:g,"brand-comm":y,ecommerce:S,campaigns:T,renders:D};function A(){let e=document.getElementById(`app-root`);e.classList.add(`page-fade`);function t(){let t=(window.location.hash||`#home`).split(`#`).filter(Boolean),n=t[0]||`home`,r=t[1],i=k[n];i?(e.classList.remove(`active`),setTimeout(()=>{if(e.innerHTML=i(),e.classList.add(`active`),o(),n===`home`?(c(),_()):n===`brand-comm`?b():n===`ecommerce`?C():n===`campaigns`?E():n===`renders`&&O(),r){let e=document.getElementById(r);e&&setTimeout(()=>{e.scrollIntoView({behavior:`smooth`})},100)}else window.scrollTo(0,0);j(n,r),window.rebindCursor&&window.rebindCursor()},200)):window.location.hash=`#home`}window.addEventListener(`hashchange`,t),window.addEventListener(`DOMContentLoaded`,t),t()}function j(e,t){document.querySelectorAll(`.nav-link`).forEach(n=>{n.classList.remove(`active`);let r=n.getAttribute(`href`);(t&&r.includes(`#${e}#${t}`)||!t&&r===`#${e}`||!t&&e===`home`&&r===`#home`)&&n.classList.add(`active`)})}document.addEventListener(`DOMContentLoaded`,()=>{t(),r(),A(),s()});