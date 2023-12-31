// Assignment code here
var optionPassword = [];// all posible options for the variables and values in the password
var upperCasePrompt = ["A", "B", "C", "D", "E", "F", "G", "H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",];
var lowerCasePrompt = ["a", "b", "c", "d", "e", "f", "g", "h", "i","j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numericPrompt = ["1","2","3","4","5","6","7","8","9"];
var specialCharacterPrompt = ["!","@","#","$","%","^","&","*","(",")","_", "+"];


// Get references to the #generate element adds the action of when clicking the generate password button- prompts and alerts will come up
var generateBtn = document.querySelector("#generate");
//prompts to have the employee understand the conditions of generating a password
generateBtn.addEventListener("click", function(){

  var firstAlert = document.querySelector("#generate");
  firstAlert=alert("Please note that to generate this password you will need to select at least one criteria");

  var nextAlert = document.querySelector("generate");
 nextAlert=alert("The password will be required to contain 8 to 128 characters");

var thirdAlert = document.querySelector("generate");
thirdAlert=alert("This password criteria will contain either uppercase, lowercase, numeric values and/or special characters");

var fourthAlert = document.querySelector("generate");
 fourthAlert=alert("If you do not select at least one criteria a password cannot be generated");

});

// prompts for certain criteria in password employee can choose
function getPrompts () {
  optionPassword = [];
  passwordLength=parseInt(prompt("Please enter preferred length of password (8 to 128)"));
 if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
 alert("Value entered is not applicable for password length. Please enter a digit number from 8 to 128.")
 return false;
 }

 if (confirm("The password should include uppercase letters. ex: ABC")){
   optionPassword = optionPassword.concat(upperCasePrompt);
 }
 if (confirm("The password should include lowercase letters. ex:abc")){
   optionPassword = optionPassword.concat(lowerCasePrompt);
 }
 if (confirm("The password should include numeric values. ex:123")){
   optionPassword = optionPassword.concat(numericPrompt);
 }
 if (confirm("The password should include special characters. ex: %&!")){
   optionPassword = optionPassword.concat(specialCharacterPrompt);
 }
 return true;
 }


function writePassword() {
  var promptsWork = getPrompts(); //true or false if we get the prompts

  if (promptsWork === true){
  var passwordTwo = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = passwordTwo;
}
}
//this combines all the variables values that can be put together to form a password
function generatePassword() { // is the function to generate password after at least one criteria was choosen
var password = "";
for (var i = 0; i < passwordLength; i++){
  var differentValues = Math.floor(Math.random()* optionPassword.length);
  password = password + optionPassword[differentValues];
} 
return password;
}
generateBtn.addEventListener("click", writePassword);



