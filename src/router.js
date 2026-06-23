/**
 * Router Component
 * Handles hash changes and dynamic view loading.
 */
import { renderHome, initHome } from '../pages/home.js';
import { renderPortfolioView, initPortfolioView } from '../pages/portfolio-view.js';
import { renderAdmin, initAdmin } from '../pages/admin.js';
import { renderProjectDetail, initProjectDetail } from '../pages/project-detail.js';
import { initScrollObserver, initHeroParallax } from './utils.js';
import { initHeaderScrollSpy } from '../components/header.js';

const routes = {
    'home': renderHome,
    'brand-comm': renderPortfolioView,
    'ecommerce': renderPortfolioView,
    'campaigns': renderPortfolioView,
    'renders': renderPortfolioView,
    'admin': renderAdmin
};

export function initRouter() {
    const appRoot = document.getElementById('app-root');
    
    // Add page transition wrapper class
    appRoot.classList.add('page-fade');

    function handleRouting() {
        const hash = window.location.hash || '#home';
        let route = hash.replace(/^#/, '').split('/')[0] || 'home';
        const subRoute = hash.split('/')[1]; // For project detail routes

        // If hash is just a section ID like #selected-work, keep it as home route but scroll to section
        if (hash.startsWith('#') && !hash.includes('/') && hash !== '#home') {
            const sectionId = hash.substring(1);
            const targetElement = document.getElementById(sectionId);
            if (targetElement) {
                setTimeout(() => {
                    const header = document.getElementById('app-header');
                    const headerHeight = header ? header.offsetHeight : 80;
                    const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }, 100);
                return;
            }
        }

        const isProjectRoute = subRoute && ['brand-comm', 'ecommerce', 'campaigns', 'renders', 'ai-creative'].includes(route);
        const renderPage = isProjectRoute ? renderProjectDetail : (routes[route] || routes['home']);

        if (renderPage) {
            appRoot.classList.remove('active');

            setTimeout(() => {
                appRoot.innerHTML = renderPage(subRoute);
                appRoot.classList.add('active');

                const isHomeRoute = renderPage === renderHome;

                initScrollObserver();
                if (isProjectRoute) {
                    initProjectDetail(subRoute);
                } else if (isHomeRoute) {
                    initHeroParallax();
                    initHome();
                } else if (['brand-comm', 'ecommerce', 'campaigns', 'renders'].includes(route)) {
                    initPortfolioView(route);
                } else if (route === 'admin') {
                    initAdmin();
                }

                // Scroll to top by default, or to specific section if hash exists
                let scrolledToSection = false;
                if (hash.startsWith('#') && hash !== '#home' && !hash.includes('/')) {
                    const secId = hash.substring(1);
                    const target = document.getElementById(secId);
                    if (target) {
                        setTimeout(() => {
                            const header = document.getElementById('app-header');
                            const headerHeight = header ? header.offsetHeight : 80;
                            const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight;
                            window.scrollTo({
                                top: targetPosition,
                                behavior: 'smooth'
                            });
                        }, 150);
                        scrolledToSection = true;
                    }
                }
                
                if (!scrolledToSection) {
                    window.scrollTo(0, 0);
                }

                // Rebind cursor handlers
                if (window.rebindCursor) {
                    window.rebindCursor();
                }
                
                // Cleanup old observers
                if (window._headerObserverCleanup) {
                    window._headerObserverCleanup();
                }

                if (isHomeRoute) {
                    // Initialize Scroll Spy for the home page sections
                    initHeaderScrollSpy();
                } else {
                    // Highlight correct navigation link manually on subpages
                    const navLinks = document.querySelectorAll('.nav-link');
                    navLinks.forEach(link => link.classList.remove('active'));
                    
                    if (isProjectRoute || ['brand-comm', 'ecommerce', 'campaigns', 'renders', 'ai-creative'].includes(route)) {
                        const selectedWorkLink = document.querySelector('.nav-link[data-section="selected-work"]');
                        if (selectedWorkLink) {
                            selectedWorkLink.classList.add('active');
                        }
                    }
                }
            }, 200);
        }
    }

    // Bind event listeners
    window.addEventListener('hashchange', handleRouting);
    window.addEventListener('DOMContentLoaded', handleRouting);
    
    // Initial call
    handleRouting();
}
