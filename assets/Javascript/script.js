// 1. Universal Slideshow Controller
const slideStates = {
    "cakes-slideshow": 0,
    "treats-slideshow": 0,
    "pizza-slideshow": 0
};

function moveSlides(direction, slideshowId, className = "slides") {
    const container = document.getElementById(slideshowId);
    if (!container) return;

    const slides = container.getElementsByClassName(className);
    if (slides.length === 0) return;

    // Hide current slide
    slides[slideStates[slideshowId]].style.display = "none";
    slides[slideStates[slideshowId]].classList.remove('active');

    // Calculate next index using modulo for wrapping
    slideStates[slideshowId] = (slideStates[slideshowId] + direction + slides.length) % slides.length;

    // Show next slide
    slides[slideStates[slideshowId]].style.display = "block";
    slides[slideStates[slideshowId]].classList.add('active');
}

// 2. Initialization and Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all slides to hide others except the first
    Object.keys(slideStates).forEach(id => {
        const container = document.getElementById(id);
        if (container) {
            const slides = container.querySelectorAll('.slides, .slide, .t-slide');
            Array.from(slides).forEach((s, i) => s.style.display = i === 0 ? "block" : "none");
        }
    });

    // Modal Logic
    const modal = document.getElementById("welcome-modal");
    const closeElements = document.querySelectorAll(".close-modal, #explore-btn");

    if (modal) {
        setTimeout(() => modal.style.display = "block", 500);

        closeElements.forEach(el => {
            el.onclick = () => modal.style.display = "none";
        });

        window.onclick = (event) => {
            if (event.target === modal) modal.style.display = "none";
        };
    }

    // 3. Efficient Intervals
    // Using slightly offset times to prevent CPU spikes from simultaneous transitions
    setInterval(() => moveSlides(1, "cakes-slideshow", "slide"), 5000);
    setInterval(() => moveSlides(1, "treats-slideshow", "t-slide"), 6000);
    setInterval(() => moveSlides(1, "pizza-slideshow", "slides"), 7000);
});