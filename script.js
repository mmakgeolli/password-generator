// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// This is the function that creates the password
function generatePassword() {
  var passwordLength = prompt(
    "How many characters do you want the password to be? (Minumum: 8, Maximum: 128)"
  );

  // These are the limits for the password's length, and gives an alert window if the length is not in between these boundaries
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("Please enter a password between 8 and 128 characters in length");
    return "";
  }

  // These variables show what the characters are for each criteria
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numberChars = "0123456789";
  var symbolChars = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

  // As per acceptance criteria, this creates the dialogue boxes that pop up asking if different type of characters want to be included
  var lowercaseIncluded = confirm("Include lowercase characters?");
  var uppercaseIncluded = confirm("Include uppercase characters?");
  var numbersIncluded = confirm("Include numbers?");
  var symbolsIncluded = confirm("Include symbols?");

  // This checks if the user wants to use the criteria or not, if they dont select any, an alert box will pop up
  if (
    !lowercaseIncluded &&
    !uppercaseIncluded &&
    !numbersIncluded &&
    !symbolsIncluded
  ) {
    alert("Please select at least one character type.");
    return "";
  }

  var allowedChar = "";
  if (lowercaseIncluded) {
    allowedChar += lowercaseChars;
  }
  if (uppercaseIncluded) {
    allowedChar += uppercaseChars;
  }
  if (numbersIncluded) {
    allowedChar += numberChars;
  }
  if (symbolsIncluded) {
    allowedChar += symbolChars;
  }

  // This loop generates the password based on the inputs and criteria previously mentioned
  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    password += allowedChar.charAt(
      Math.floor(Math.random() * allowedChar.length)
    );
  }

  return password;
}
