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
function formValidation() {
  //VARIABLES SET FOR EACH
  var uid = document.registration.userName;
  var passid = document.registration.password;
  var conpassid = document.registration.passwordVerify;
  var fname = document.registration.firstName;
  var lname = document.registration.lastName;
  var uemail = document.registration.email;
  var phn = document.registration.phno.value;
  if (userid_validation(uid)) {
  if (passid_validation(passid)) {
  if (checkpass(passid, conpassid)) {
  if (allLetter(fname)) {
  if (allLetter(lname)) {
  if (ValidateEmail(uemail)) {
  if (phonenumber(phn)) {
  document.forms["registration"].submit();
  setCookie("uid", uid.value, 1);
  setCookie("passid", passid.value, 1);
  setCookie("fname", fname.value, 1);
  setCookie("lname", lname.value, 1);
  setCookie("uemail", uemail.value, 1);
  setCookie("phn", phn, 1);
  }
  }
  }
  }
  }
  }
  }
  return false;
  }
  function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=taylord11393/my-site/confirm.php";
  }
  function userid_validation(uid)//CHECKING FOR USER ID VALIDATION
  {
  var uid_len = uid.value.length;
  var letterNumber = /^[0-9a-zA-Z]+$/;//VAR FOR ENSURING CORRECT CHARACTERS
  if (uid_len == 0)//ENSURING NOT EMPTY
  {
  alert("User Id cannot be empty");//ALERT IF USERiD IS EMPTY
  uid.focus();
  return false;
  }
  else if (uid.value.match(letterNumber)) {
  return true;
  }
  else {
  alert("User Id should be alphanumeric");
  uid.focus();
  return false;
  }
  }
  function passid_validation(passid)//PASSWORD VALIDATION for 8 characters
  {
  var passid_len = passid.value.length;//CHECKING FOR PASSWORD LENGTH
  if (passid_len == 0) {
  alert("Password cannot be empty");
  passid.focus();
  return false;
  }
  else if (passid_len < 8)//AT LEAST 8 CHARACTERS
  {
  alert("Password length must be at least 8 characters.");
  passid.focus();
  return false;
  }
  else
  return true;
  }
  function checkpass(passid, conpassid)//VERIFY PASSWORDS MATCH
  {
  if (passid.value == conpassid.value)//COMPARE PASSWORDS
  {
  return true;
  }
  else {
  alert("Confirm passwords, they do not match");//ALERT IF THEY DO NOT MATCH
  conpassid.focus();
  return false;
  }
  }
  function allLetter(fname)//validate first name for correct characters
  {
  var letters = /^[A-Za-z]+$/;
  
   if (fname.value.match(letters)) {
  return true;
  }
  else {
  alert(" First Name or last name has to be letters and it can not be blank");
  fname.focus();
  return false;
  }
  }
  function ValidateEmail(uemail)//validate email to be correct format
  {
  var mailformat = /..*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;//right format
  if (uemail.value.match(mailformat)) {
  return true;
  }
  else {
  alert("You have entered an invalid email address!");//alert if email is invalid
  uemail.focus();
  return false;
  }
  }
  function phonenumber(phn) {//validate phone number to be in xxx xxx xxxx format
  var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;//format for phone number
  if (phn.match(phoneno)) {
  return true;
  }
  else {
  alert("Please enter the phone number with digits in this form: XXX XXX XXXX");
  return false;
  }
  }