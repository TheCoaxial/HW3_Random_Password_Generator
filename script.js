// Assignment Code
var generateBtn = document.querySelector("#generate");


//Prompt the user for info

var len = prompt("Please choose a password length between 8 and 128 characters.");


while(len === null){ len = 0;}

while (len < 8 || len > 128){ len = prompt("Please choose a password length between 8 and 128 characters."); }
  
var testInt = 0;

var lowerCase = prompt("Would you like it to contain lowercase letters? yes/no");

var upperCase = prompt("Would you like it to contain uppercase letters? yes/no");

var passNumbers = prompt("Would you like it to contain numbers? yes/no");

var special = prompt("Would you like it to contain special characters? yes/no");


// Taking care of null

if(lowerCase === null){ lowerCase = "no";}

if(upperCase === null){ upperCase = "no";}

if(passNumbers === null){ passNumbers = "no";}

if(special === null){ special = "no";}

// If the user enters anything other than yes it is assumed no

if(lowerCase.toLocaleLowerCase() !== "yes"){
  lowerCase = "no";
}
if(upperCase.toLocaleLowerCase() !== "yes"){
  upperCase = "no";
}
if(passNumbers.toLocaleLowerCase() !== "yes"){
  passNumbers = "no";
}
if(special.toLocaleLowerCase() !== "yes"){
  special = "no";
}


// If the user enters no or null to all four character types

while(upperCase === null && lowerCase === null && passNumbers === null && special === null ||upperCase === "no" && lowerCase === "no" && passNumbers === "no" && special === "no"){
  alert("At least one character type must be selected.");
  lowerCase = prompt("Would you like it to contain lowecase letters? yes/no");

  upperCase = prompt("Would you like it to contain uppercase letters? yes/no");

  passNumbers = prompt("Would you like it to contain numbers? yes/no");

  special = prompt("Would you like it to contain special characters? yes/no");
}




// Write password to the #password input
function writePassword() { 
  console.log("I ran first");

    charSet = "";

    if(lowerCase.toLocaleLowerCase() === "yes"){
      charSet += "abcdefghijklmnopqrstuvwxyz";
    }
    if(upperCase.toLocaleLowerCase() === "yes"){
      charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if(passNumbers.toLocaleLowerCase() === "yes"){
      charSet += "0123456789";
    }
    if(special.toLocaleLowerCase() === "yes"){
      charSet += "\" !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~"
    }

    var password = '';
    for (var i = 0; i < len; i++) {
      console.log("I Ran Second");
        var randomPoz = Math.floor(Math.random() * charSet.length);
        password += charSet.substring(randomPoz,randomPoz+1);
    }
    
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  return password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);