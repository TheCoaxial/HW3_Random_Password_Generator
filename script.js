// Assignment Code
var generateBtn = document.querySelector("#generate");


//Prompt the user for info

var len = prompt("Please choose a password length between 8 and 128 characters.");
if(typeof len !== typeof testInt){
  len = 0;
}

while(len === null){ len = 0;}

while (len < 8 || len > 128){ len = prompt("Please choose a password length between 8 and 128 characters."); }
  
var testInt = 0;

var lowerCase = prompt("Would you like it to contain lowercase letters? yes/no");

var upperCase = prompt("Would you like it to contain uppercase letters? yes/no");

var passNumbers = prompt("Would you like it to contain numbers? yes/no");

var special = prompt("Would you like it to contain special characters? yes/no");


  








// Write password to the #password input
function writePassword() { 
 
    
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  return password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
