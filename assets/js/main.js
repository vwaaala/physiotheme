"use strict"; // Enforces strict mode for the entire file

// Core JavaScript for the template
document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS
    AOS.init();
    // Core initialization
    initScrollToTop();
    console.log("Core template scripts initialized.");
});

/**
 * Scroll-to-top functionality.
 * Automatically shows/hides the button based on the scroll position.
 */
function initScrollToTop() {
    const scrollToTopBtn = document.getElementById('scrollToTop');
    if (!scrollToTopBtn) return;

    // Scroll to the top on button click
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Show or hide the button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });

    // Hide button initially
    scrollToTopBtn.style.display = 'none';
}

