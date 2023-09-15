document.addEventListener("DOMContentLoaded", function () {
  const slideItems = document.querySelectorAll(".slide_item"); // Get all slide items
  const totalSlides = slideItems.length;
  let currentSlide = 0;
  const slideWidth = 100;

  // Initialize the first slide and indicators
  updateSlideIndication();

  function updateSlideIndication() {
    // Calculate the transform value for the current slide to come from the right
    const transformValue = -(currentSlide * slideWidth) + "%";

    // Apply the transform to all slide items
    slideItems.forEach((slideItem, index) => {
      slideItem.style.transform = `translateX(${transformValue})`;

      // Add 'enter' class to the current slide for animation
      if (index === currentSlide) {
        slideItem.classList.add("enter");
      } else {
        slideItem.classList.remove("enter");
      }
    });

    // Update slide indicators
    const slideIndicators = document.querySelectorAll(".slide_indicator");
    slideIndicators.forEach((indicator, index) => {
      if (index === currentSlide) {
        indicator.classList.add("active");
      } else {
        indicator.classList.remove("active");
      }
    });
  }

  // Function to enter the next slide
  function enterNextSlide() {
    // Remove 'enter' class from the current slide
    slideItems[currentSlide].classList.remove("enter");

    // Move to the next slide
    const previousSlide = currentSlide; // Store the previous slide index

    if (currentSlide < totalSlides - 1) {
      currentSlide++;
    } else {
      currentSlide = 0; // Reset to the first slide
    }

    // Update indicators and show the next slide
    updateSlideIndication();

    // Add 'enter' class to the new current slide for animation
    slideItems[currentSlide].classList.add("enter");

    // Apply a transition only when moving forward (left to right)
    slideItems[currentSlide].style.transition = "transform 1s ease-in-out";

    // Remove the transition from the previous slide
    slideItems[previousSlide].style.transition = "none";
  }

  // Set an interval to enter the next slide after a certain delay
  const interval = 5000;
  setInterval(enterNextSlide, interval);
});

// Tab
document.addEventListener("DOMContentLoaded", function () {
  // Initially show the first tab
  document.getElementById("tab1").classList.add("active");

  // Get all tab buttons
  const tabButtons = document.querySelectorAll(".tab_btn");

  // Add click event listeners to each tab button
  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Get the data-tab attribute value (e.g., "1", "2", etc.)
      const tabNumber = button.getAttribute("data-tab");

      // Hide all tabs
      const tabs = document.querySelectorAll(".tab");
      tabs.forEach((tab) => {
        tab.classList.remove("active");
      });

      // Show the selected tab based on the data-tab value
      const selectedTab = document.getElementById(`tab${tabNumber}`);
      selectedTab.classList.add("active");
    });
  });
});

// // threejs

// import * as THREE from "three";

// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// );

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);
