/**
 * Header Component
 * Renders sticky navigation header and handles mobile responsive menu drawer.
 */
export function renderHeader() {
    return `
    <div class="nav-container">
        <div class="logo">
            <a href="#home" aria-label="Ujjwal Maurya Home">
                <svg viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg" class="brand-logo-svg" style="height: 36px; width: auto; display: block;">
                    <!-- Combined interlocked U and M geometric monogram -->
                    <!-- U shape (White, slightly outer) -->
                    <path d="M12 10V24C12 28.42 15.58 32 20 32C24.42 32 28 28.42 28 24V10" stroke="white" stroke-width="3.5" stroke-linecap="round"/>
                    <!-- M shape (Orange, overlaying inside right side of U, creating a dynamic lettermark) -->
                    <path d="M28 32V18L35 25L42 18V32" stroke="var(--color-accent)" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <!-- Sleek designer accent dot -->
                    <circle cx="49" cy="32" r="2.5" fill="var(--color-accent)"/>
                </svg>
            </a>
        </div>
        
        <button class="mobile-toggle" id="mobile-toggle" aria-label="Toggle Navigation">
            <span></span>
            <span></span>
            <span></span>
        </button>

        <ul class="nav-menu" id="nav-menu">
            <li><a href="#home" class="nav-link active" data-section="home">HOME</a></li>
            <li><a href="#selected-work" class="nav-link" data-section="selected-work">SELECTED WORK</a></li>
            <li><a href="#about" class="nav-link" data-section="about">ABOUT</a></li>
            <li><a href="#resume" class="nav-link" data-section="resume">RESUME</a></li>
            <li><a href="#contact" class="nav-link" data-section="contact">CONTACT</a></li>
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
        link.addEventListener('click', (e) => {
            mobileToggle.classList.remove('open');
            navMenu.classList.remove('open');

            // Smooth scroll to section
            const href = link.getAttribute('href');
            if (href && href.startsWith('#')) {
                const sectionId = href.substring(1);
                const targetElement = document.getElementById(sectionId);
                if (targetElement) {
                    e.preventDefault();
                    const headerHeight = header.offsetHeight || 80;
                    const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Run Scroll Spy initially
    initHeaderScrollSpy();
}

export function initHeaderScrollSpy() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Disconnect old observer/listeners if they exist
    if (window._headerObserver) {
        window._headerObserver.disconnect();
    }
    if (window._headerScrollHandler) {
        window.removeEventListener('scroll', window._headerScrollHandler);
    }

    // Scroll Spy with Intersection Observer
    const observerOptions = {
        root: null,
        rootMargin: '-50% 0px -50% 0px',
        threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        // Only run observer logic if we are NOT at the absolute bottom to prevent conflict
        const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50;
        if (isAtBottom) return;

        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.id;
                const activeLink = document.querySelector(`.nav-link[data-section="${sectionId}"]`);
                const activeDot = document.querySelector(`.nav-dot[data-section="${sectionId}"]`);
                
                if (activeLink) {
                    navLinks.forEach(link => link.classList.remove('active'));
                    activeLink.classList.add('active');
                }
                if (activeDot) {
                    const navDots = document.querySelectorAll('.nav-dot');
                    navDots.forEach(dot => dot.classList.remove('active'));
                    activeDot.classList.add('active');
                }
            }
        });
    }, observerOptions);

    // Observe all major sections
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => sectionObserver.observe(section));

    // Scroll boundary handler for bottom of page
    const handleScrollBoundary = () => {
        const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50;
        if (isAtBottom) {
            const contactLink = document.querySelector('.nav-link[data-section="contact"]');
            const contactDot = document.querySelector('.nav-dot[data-section="contact"]');
            if (contactLink && !contactLink.classList.contains('active')) {
                navLinks.forEach(link => link.classList.remove('active'));
                contactLink.classList.add('active');
            }
            if (contactDot && !contactDot.classList.contains('active')) {
                const navDots = document.querySelectorAll('.nav-dot');
                navDots.forEach(dot => dot.classList.remove('active'));
                contactDot.classList.add('active');
            }
        }
    };

    window.addEventListener('scroll', handleScrollBoundary);
    window._headerScrollHandler = handleScrollBoundary;

    // Cleanup on route change
    window._headerObserver = sectionObserver;
    window._headerObserverCleanup = () => {
        sectionObserver.disconnect();
        window.removeEventListener('scroll', window._headerScrollHandler);
        window._headerScrollHandler = null;
    };
}
