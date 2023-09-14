document.addEventListener("DOMContentLoaded", function () {
  const slideContainer = document.querySelector(".slide_container");
  const slideIndicators = document.querySelectorAll(".slide_indicator");

  let currentSlide = 1;
  const totalSlides = slideContainer.querySelectorAll(".slide_item").length;

  // Initialize the first slide and indicators
  showSlide(currentSlide);
  updateSlideIndication();

  function updateSlideIndication() {
    // Remove 'active' class from all indicators
    slideIndicators.forEach((indicator) => {
      indicator.classList.remove("active");
    });

    // Add 'active' class to the indicator for the current slide
    slideIndicators[currentSlide - 1].classList.add("active");
  }

  function showSlide(slideNumber) {
    const slides = slideContainer.querySelectorAll(".slide_item");
    slides.forEach((slide, index) => {
      if (index === slideNumber - 1) {
        slide.style.display = "flex";
      } else {
        slide.style.display = "none";
      }
    });
  }

  // Automatically advance to the next slide
  function autoAdvanceSlide() {
    if (currentSlide < totalSlides) {
      currentSlide++;
    } else {
      currentSlide = 1; // Loop back to the first slide
    }

    showSlide(currentSlide);
    updateSlideIndication();
  }

  // Set an interval to auto-advance the slides every X milliseconds
  const interval = 4000;
  setInterval(autoAdvanceSlide, interval);
});
