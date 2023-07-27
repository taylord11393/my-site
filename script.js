// Preload images
var imageUrls = [
  "firefighter.jpg",
  "event.jpg",
  "silhouette.jpg",
  "work.jpg"
];

function preloadImages() {
  for (var i = 0; i < imageUrls.length; i++) {
    var img = new bannerImage();
    img.src = imageUrls[i];
  }
}

// Rollover effect
function applyRolloverEffect(myImage, newImageUrl) {
  var originalImageUrl = myImage.src;

  myImage.addEventListener("mouseover", function() {
    myImage.src = newImageUrl;
  });

  myImage.addEventListener("mouseout", function() {
    myImage.src = originalImageUrl;
  });
}

// Cycling banner ads
var bannerImage = bannerImage.getElementById("bannerImage");
var bannerImageUrls = [
  "banner1.jpg",
  "banner2.jpg",
  "banner3.jpg",
  "banner4.jpg" ]
var currentImageIndex = 0;

function cycleBannerAds() {
  bannerImage.src = bannerImage[currentImageIndex];

  currentImageIndex++;
  if (currentImageIndex >= bannerImageUrls.length) {
    currentImageIndex = 0;
  }
}

// Attach event listeners to the gallery images
function attachEventListeners() {
  var galleryImages = galleryImages.getElementsByClassName("galleryImage");

  for (var i = 0; i < galleryImages.length; i++) {
    var imageUrl = galleryImages[i].src;
    applyRolloverEffect(galleryImages[i], imageUrl);
  }
}

// Preload images, attach event listeners, and start cycling banner ads when the DOM is ready
bannerImage.addEventListener("DOMContentLoaded", function() {
  preloadImages();
  attachEventListeners();
  bannerImage.setInterval(cycleBannerAds, 3000);
});