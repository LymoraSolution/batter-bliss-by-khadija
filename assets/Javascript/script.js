let currentCakeSlide = 0;
const cakeSlides = document.querySelectorAll('#cakes-slides .slide');

function moveSlide(direction) {
    // Hide current slide
    cakeSlides[currentCakeSlide].classList.remove('active');

    // Calculate next index
    currentCakeSlide = (currentCakeSlide + direction + cakeSlides.length) % cakeSlides.length;

    // Show new slide
    cakeSlides[currentCakeSlide].classList.add('active');
}

// Optional: Auto-play every 5 seconds
setInterval(() => {
    moveSlide(1);
}, 5000);

// Logic for Treats Slideshow
let currentTreatSlide = 0;
const treatSlides = document.querySelectorAll('#treat-gallery .t-slide');

function changeTreatSlide(direction) {
    // Hide current
    treatSlides[currentTreatSlide].classList.remove('active');

    // Cycle index
    currentTreatSlide = (currentTreatSlide + direction + treatSlides.length) % treatSlides.length;

    // Show new
    treatSlides[currentTreatSlide].classList.add('active');
}

// Separate Auto-play for Treats
setInterval(() => {
    changeTreatSlide(1);
}, 6000); // 6 seconds to offset it from the Cakes slideshow


// Updated indices to include Pizza
let slideIndices = {
    "cakes-slideshow": 1,
    "treats-slideshow": 1,
    "pizza-slideshow": 1
};

// Initialize all
showSlides(1, "cakes-slideshow");
showSlides(1, "treats-slideshow");
showSlides(1, "pizza-slideshow");

function moveSlides(n, slideshowId) {
    showSlides(slideIndices[slideshowId] += n, slideshowId);
}

function showSlides(n, slideshowId) {
    let i;
    const container = document.getElementById(slideshowId);
    if (!container) return;

    const slides = container.getElementsByClassName("slides");

    if (n > slides.length) { slideIndices[slideshowId] = 1; }
    if (n < 1) { slideIndices[slideshowId] = slides.length; }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndices[slideshowId] - 1].style.display = "block";
}

// Auto-play the Pizza gallery every 7 seconds
setInterval(() => moveSlides(1, "pizza-slideshow"), 7000);