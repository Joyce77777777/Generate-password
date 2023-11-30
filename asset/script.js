// Assignment Code
var generateBtn = document.querySelector("#generate");

// Function to prompt the user for password criteria
function getPasswordOptions() {
  var length = parseInt(prompt("Enter the length of the password (8-128):"), 10);
  var hasLowercase = confirm("Include lowercase letters?");
  var hasUppercase = confirm("Include uppercase letters?");
  var hasNumbers = confirm("Include numbers?");
  var hasSpecialChars = confirm("Include special characters?");
 
  // Validation
  if (isNaN(length) || length < 8 || length > 128) {
    alert("Password length must be a number between 8 and 128.");
    return null;
  }
  if (!hasLowercase && !hasUppercase && !hasNumbers && !hasSpecialChars) {
    alert("At least one character type must be selected.");
    return null;
  }

  return {
    length: length,
    hasLowercase: hasLowercase,
    hasUppercase: hasUppercase,
    hasNumbers: hasNumbers,
    hasSpecialChars: hasSpecialChars
  };
}


// Function to generate a password
function generatePassword() {
  var options = getPasswordOptions();
  if (options === null) {
    return;
  }
  
  var possibleChars = "";
  if (options.hasLowercase) possibleChars += "abcdefghijklmnopqrstuvwxyz";
  if (options.hasUppercase) possibleChars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (options.hasNumbers) possibleChars += "0123456789";
  if (options.hasSpecialChars) possibleChars += "!@#$%^&*()_+";

  var password = "";
  for (var i = 0; i < options.length; i++) {
    var index = Math.floor(Math.random() * possibleChars.length);
    password += possibleChars[index];
  }
  
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Logs window object
console.log(window);

// Logs reference to the document in the window object
console.log(window.document);



