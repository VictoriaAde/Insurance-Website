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

// threejs

import * as THREE from "three";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
