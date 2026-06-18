/**
 * Header Component
 * Renders sticky navigation header and handles mobile responsive menu drawer.
 */
export function renderHeader() {
    return `
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
    `;
}

export function initHeader() {
    const header = document.getElementById('app-header');
    header.innerHTML = renderHeader();

    const mobileToggle = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Sticky Scroll Effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    mobileToggle.addEventListener('click', () => {
        mobileToggle.classList.toggle('open');
        navMenu.classList.toggle('open');
    });

    // Close Menu on Link Click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileToggle.classList.remove('open');
            navMenu.classList.remove('open');

            // Handle active state
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });
}
