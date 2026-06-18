/**
 * Footer Component
 * Renders the editorial-style footer block.
 */
export function renderFooter() {
    return `
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
