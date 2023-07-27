function validateForm() {
    let userName = document.getElementById("userName").value;
    let password = document.getElementById("password").value;
    let passwordVerify = document.getElementById("passwordVerify").value;
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let phoneNumber = document.getElementById("phoneNumber").value;
   
  
    let valid = true;
  
    if (!/^[A-Za-z0-9]{6,}$/.test(userName)) {
      document.getElementById("userNameWarning").innerHTML = "Username must contain only letters and numbers with a minimum of 6 characters.";
      valid = false;
    } else {
      document.getElementById("userNameWarning").innerHTML = "";
    }
    
    if (password.length < 8) {
      document.getElementById("passwordWarning").innerHTML = "Password must be at least 8 characters.";
      valid = false;
    } else {
      document.getElementById("passwordWarning").innerHTML = "";
    }
  
    if (passwordVerify.length < 8 || passwordVerify !== password) {
      document.getElementById("passwordVerifyWarning").innerHTML = "Passwords do not match.";
      valid = false;
    } else {
      document.getElementById("passwordVerifyWarning").innerHTML = "";
    }
  
    if (!/^[A-Za-z]+$/.test(firstName)) {
      document.getElementById("firstNameWarning").innerHTML = "First name must be a text string.";
      valid = false;
    } else {
      document.getElementById("firstNameWarning").innerHTML = "";
    }
  
    if (!/^[A-Za-z]+$/.test(lastName)) {
      document.getElementById("lastNameWarning").innerHTML = "Last name must be a text string.";
      valid = false;
    } else {
      document.getElementById("lastNameWarning").innerHTML = "";
    }
  
   if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      document.getElementById("emailWarning").innerHTML = "Email must be a valid email address.";
      valid = false;
    } else {
      document.getElementById("emailWarning").innerHTML = "";
    }
  
    if (!/^\(\d{3}\) \d{3}-\d{4}$/.test(phoneNumber)) {
      document.getElementById("phoneNumberWarning").innerHTML = "Phone number must use (xxx) xxx-xxxx format.";
      valid = false;
    } else {
      document.getElementById("phoneNumberWarning").innerHTML = "";
    }
  
  
  
     
      document.cookie = "userName=" + userName + ";";
      document.cookie = "firstName=" + firstName + ";";
      document.cookie = "lastName=" + lastName + ";";
      document.cookie = "password=" + password + ";";
      document.cookie = "passwordVerify=" + passwordVerify + ";";
      document.cookie = "email=" + email + ";";
      document.cookie = "phoneNumber=" + phoneNumber + ";";
      
      
         return valid;
    
  }
     
  
    validateFormFromCookie();
    
    function getElementById(name) {
      name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
      var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
      var results = regex.exec(location.search);
      var value = results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
      
      //Set the cookie with the same name and value
      document.cookie = name + "=" + value + ";";}