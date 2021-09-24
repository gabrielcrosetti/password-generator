// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generate();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
specCharacters = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
space = []

var numberConfirm
var specialCharConf
var lowerCaseConf
var upperCaseConf
var lengthConf

var choices;

var toUpper = function (x) {
return x.toUpperCase()
}

alphabet2 = alphabet.map(toUpper)


function generate() {
  lengthConf = prompt( "Please type out the desired length of your password. Must between 8-128 characters.")
}

if (!lengthConf) {
  alert("You can't leave this empty. Select a password length.")
lengthConf = prompt( "Please type out the desired length of your password. Must between 8-128 characters.")

}else if (lengthConf <= 7 || lengthConf >= 129) {
  alert("The password length must be between 8-128 characters long.")
lengthConf = prompt( "Please type out the desired length of your password. Must between 8-128 characters.")

}else {
  alert("Your desired password will have " + lengthConf + " characters.")
  numberConfirm =confirm("Click OK if you would like numbers in your password.")

lowerCaseConf =confirm("Click OK if you would like lower case letters in your password.")

upperCaseConf =confirm("Click OK if you would like upper case letters in your password.")

specialCharConf =confirm ("Click OK if you would like special characters in your password.")




}if (numberConfirm === false && lowerCaseConf === false && upperCaseConf === false && specialCharConf === false){
  alert("You must confirm at least one of the options.")

}

else if (specialCharConf && numberConfirm && upperCaseConf && lowerCaseConf) {

  choices = specCharacters.concat(numbers, alphabet, alphabet2);
}

else if (specialCharConf && numberConfirm && upperCaseConf) {
  choices = specCharacters.concat(numbers, alphabet2);

}
else if (specialCharConf && numberConfirm && lowerCaseConf) {
  choices = specCharacters.concat(numbers, alphabet)
}

else if (confirmCharacter && lowerCaseConf && upperCaseConf) {
  choices = specCharacters.concat(alphabet, alphabet2);
}

else if (numberConfirm && lowerCaseConf && upperCaseConf) {
    choices = specCharacters.concat(alphabet, alphabet2);
}

else if (specialCharConf && numberConfirm) {
  choices = specCharacters.concat(numbers);
}

else if (specialCharConf && lowerCaseConf) {
  choices = specCharacters.concat(alphabet);

}
else if (specialCharConf && upperCaseConf) {
  choices = specCharacters.concat(alphabet2);
}
else if (lowerCaseConf && numberConfirm) {
  choices = alphabet.concat(numbers);
}
else if (lowerCaseConf && upperCaseConf) {
  choices = alphabet.concat(alphabet2);
}
else if (numberConfirm && upperCaseConf) {
  choices = numbers.concat(alphabet2)
}
else if (specialCharConf) {
  choices = specCharacters;
}
else if (numberConfirm) {
  choices = numbers;
}
else if (lowerCaseConf) {
  choices = alphabet;
}
else if (upperCaseConf) {
  choices = space.concat(alphabet2);
};

var password = []









