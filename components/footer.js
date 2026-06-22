/**
 * Footer Component
 * Renders the editorial-style footer block.
 */
export function renderFooter() {
    const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';

    return `
    <div class="footer-container">
        <div class="footer-left-col">
            <h3 class="footer-brand-name">Ujjwal Maurya</h3>
            <p class="footer-brand-title" style="margin-bottom: 24px;">Brand Designer &amp; Visual Storyteller</p>
            <h4 class="footer-col-header" style="margin-bottom: 12px;">Available for:</h4>
            <ul class="footer-services-list">
                <li>Branding</li>
                <li>Social Media</li>
                <li>Amazon Content</li>
                <li>AI Creative Production</li>
            </ul>
        </div>
        
        <div class="footer-mid-col">
            <h4 class="footer-col-header">Connect</h4>
            <div class="footer-social-links-vertical">
                <a href="mailto:ujjwalmaurya781@gmail.com" target="_blank" rel="noopener" class="footer-link">Email</a>
                <a href="https://www.linkedin.com/in/ujjwal-maurya-3a997521a" target="_blank" rel="noopener" class="footer-link">LinkedIn</a>
                <a href="https://www.behance.net/ujjwalmaurya2" target="_blank" rel="noopener" class="footer-link">Behance</a>
                <a href="https://www.instagram.com/krishhhhhmaurya" target="_blank" rel="noopener" class="footer-link">Instagram</a>
            </div>
        </div>
        
        <div class="footer-right-col">
            <p class="footer-copyright" style="margin-top: 0;">&copy; 2026</p>
            <div class="footer-scroll-top-wrapper" style="margin-top: var(--space-md);">
                <button class="back-to-top" id="back-to-top">Back to Top &uarr;</button>
            </div>
        </div>
    </div>
    ${isLocalhost ? `
    <!-- Floating Admin Access (Development Only) -->
    <a href="#admin" id="dev-admin-floating-btn" style="position: fixed; bottom: 30px; right: 30px; z-index: 9999; background: #000; border: 1px solid var(--color-accent); width: 44px; height: 44px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: var(--color-accent); text-decoration: none; box-shadow: 0 4px 15px rgba(255, 107, 0, 0.25); transition: all 0.3s;" title="Designer Mode (Local Dev Only)">
        <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
    </a>
    <style>
        #dev-admin-floating-btn:hover {
            background: var(--color-accent) !important;
            color: #fff !important;
            box-shadow: 0 6px 20px rgba(255, 107, 0, 0.4) !important;
            transform: scale(1.08) !important;
        }
    </style>
    ` : ''}
    `;
}

export function initFooter() {
    const footer = document.getElementById('app-footer');
    footer.innerHTML = renderFooter();

    const backToTopBtn = document.getElementById('back-to-top');
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}
