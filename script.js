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

var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specCharacters = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var numberConfirm
var specialCharConf
var lowerCaseConf
var upperCaseConf
var lengthConf

function generate() { lengthConf = prompt( "Please type out the desired length of your password. Must between 8-128 characters.")
}

if (!lengthConf) {
  alert("You can't leave this empty. Select a password length.")
lengthConf = prompt( "Please type out the desired length of your password. Must between 8-128 characters.")

}else if (lengthConf <= 7 || lengthConf >= 129) {
  alert("The password length must be between 8-128 characters long.")
lengthConf = prompt( "Please type out the desired length of your password. Must between 8-128 characters.")

}else {
  alert("Your desired password will have " + lengthConfirm + " characters.")
}

numberConfirm confirm("Click OK if you would like numbers in your password.")

lowerCaseConf confirm("Click OK if you would like lower case letters in your password.")

upperCaseConf confirm("Click OK if you would like upper case letters in your password.")

specialCharConf confirm ("Click OK if you would like special characters in your password.")




