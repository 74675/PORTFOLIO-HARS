document.addEventListener('DOMContentLoaded', () => {
    // Implement an Intersection Observer for performant scroll animations
    // This avoids heavy scroll-event listeners that degrade mobile performance
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-visible');
                // Cease observation once animated to conserve memory
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Apply observer to all project cards
    const elementsToAnimate = document.querySelectorAll('.project-card');
    elementsToAnimate.forEach(el => observer.observe(el));
});

