const pageSections = document.querySelectorAll("main > section");
const prefersLessMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!prefersLessMotion && "IntersectionObserver" in window) {
    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    pageSections.forEach((section) => {
        section.classList.add("scroll-reveal");
        sectionObserver.observe(section);
    });
}
