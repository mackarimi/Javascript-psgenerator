// Criteria:
// Password length must be 8 to 128 characters
// Validation:Inputs must be at least one lowercase letter, one uppercase letter, one numeric digit and one special character.



// Assignment code here
function generatePassword() {

  //uppercase characters
  var uppercaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  //lowercase characters
  var lowercaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  // numbers in password
  var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];


  //special characters
  var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];

  //possible characters

  var possibleCharacters = [];

  window.onload = alert("Welcome to Password Generator, Click ok to begin!");
  console.log("Hello! You have clicked the generate button!");

  // Write password to the #password input
  numberOfCharacters = prompt("How many characters would you like your password to be? Please enter a character between 8 and 128.");
  if (numberOfCharacters < 8 || numberOfCharacters > 128) {
    return "Please choose a valid number of characters.";
  } else if (isNaN(numberOfCharacters)) {
    numberOfCharacters = prompt("Please enter a valid number.");
  }
  else {
    alert("Your password will be " + numberOfCharacters + " characters long.");

  }

  hasUppercase = confirm("Would you like to include uppercase letters?");
  if (hasUppercase) {
    alert("Your password will have uppercase characters.");
  }
  else {
    alert("Your password will NOT include any characters.");
  }
  hasLowercase = confirm("Would you like to include lowercase letters?");
  if (hasLowercase) {
    alert("Your password will have lowercase characters.");
  }
  else {
    alert("Your password will NOT include any characters.");
  }


  hasNumbers = confirm("Would you like to include numbers?");
  if (hasNumbers) {
    alert("Your password will have numbers.");
  }
  else {
    alert("Your password will NOT include any numbers.");
  }

  hasSpecial = confirm("Would you like to include special characters?");
  if (hasSpecial) {
    alert("Your password will include special characters.");
  }
  else {
    alert("Your password will NOT include any characters.");
  }

  if (hasLowercase === false && hasUppercase === false && hasNumbers === false && hasSpecial === false) {
    return "Please select at least one character type.";
  };

  // group characters into concat and push into possibleCharacters array
  if (hasLowercase) {
    possibleCharacters = possibleCharacters.concat(lowercaseCharacters);
  }
  if (hasUppercase) {
    possibleCharacters = possibleCharacters.concat(uppercaseCharacters);
  }
  if (hasNumbers) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
  }
  if (hasSpecial) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
  }

  // pick a random character from the group
  let finalPassword = ""
  for (let i = 0; i < numberOfCharacters; i++) {
    let rng = [Math.floor(Math.random() * possibleCharacters.length)];

    finalPassword = finalPassword + possibleCharacters[rng];
  }
  return finalPassword;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);