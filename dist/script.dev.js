"use strict";

// On page load function to preload all images
window.onload = function () {
  var images = document.getElementsByClassName('gallery-image');

  for (var i = 0; i < images.length; i++) {
    var image = new Image();
    image.src = images[i].src;
  }
}; // Modularized function to cycle the homepage banner


function cycleBanner() {
  var bannerImages = ['banner1.jpg', 'banner2.jpg', 'banner3.jpg'];
  var currentImageIndex = 0;
  var bannerElement = document.getElementById('homepage-banner');
  setInterval(function () {
    bannerElement.src = bannerImages[currentImageIndex];
    currentImageIndex = (currentImageIndex + 1) % bannerImages.length;
  }, 3000);
} // Modularized rollover function for gallery images


function imageRollover(imageElement) {
  var imageSrc = imageElement.src;
  var rolloverSrc = imageElement.dataset.rollover;
  imageElement.addEventListener('mouseover', function () {
    imageElement.src = rolloverSrc;
  });
  imageElement.addEventListener('mouseout', function () {
    imageElement.src = imageSrc;
  });
} // Call the functions on appropriate elements


cycleBanner();
var galleryImages = document.getElementsByClassName('gallery-image');

for (var i = 0; i < galleryImages.length; i++) {
  imageRollover(galleryImages[i]);
}