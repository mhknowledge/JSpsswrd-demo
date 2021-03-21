// Assignment Code
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", function () {
  ps = generatePassword();
  document.getElementById("password").placeholder = ps;
});
//Password Complexity Variables
var checkLength;
var checkLowerCase;
var checkUpperCase;
var checkNumeric;
var checkSpecial;

//Options for password complexity
var num = [1,2,3,4,5,6,7,8,9,0];
var charLow = ["a","b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var charUp =  ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var charSpecial = ["!","@","#","$","%","^","&","*","(",")","-","+","{","}","[","]","/","\\",">","<",";"];

var userOptions;

function generatePassword() {
  //User options/choices for password prompts
  checkLength = window.prompt("How many character will your password contain?  Minimun is 8, Maximum is 128...");
  
  //If user does not input a length
    if(!checkLength){
        window.alert("A password length is required!");
    
  
    }  //If submitted length fails to meet requirement   
    while (checkLength < 8 || checkLength > 128) {
        checkLength = window.prompt("Length does not meet requirements.  Please try again! " + "Min: 8, Max: 128");
    }    
    if (checkLength == 8 || checkLength <= 128) {
        checkLowerCase = window.confirm("Will your password have Lowercase letters?");
        checkUpperCase = window.confirm("Will your password have Capital letters?");
        checkNumeric = window.confirm("Will your password include Numbers?");
        checkSpecial = window.confirm("Will your password have Special Characters?");
      };
      //Confirm conditions for password criteria
if (!checkLowerCase && !checkUpperCase && !checkNumeric && !checkSpecial) {
  userOptions = window.alert("You must set a criteria for your password to satisfy complexity requirements!");
  //generatePassword();
   
}
else if (checkLowerCase && checkUpperCase && checkNumeric && checkSpecial) {
  userOptions = charLow.concat(charUp, num, charSpecial);
}
//coding for passwords with 3 criterias
else if (checkLowerCase && checkUpperCase && checkNumeric){
  userOptions = charLow.concat(charUp, num);

} else if (checkLowerCase && checkUpperCase && checkSpecial){
  userOptions = charLow.concat(charUp, charSpecial);

} else if (checkLowerCase && checkNumeric && checkSpecial){
  userOptions = charLow.concat(num, charSpecial);

} else if (checkUpperCase && checkNumeric && checkSpecial){
  userOptions = charUp.concat(num, charSpecial);
}

//coding for password with 2 criterias
else if (checkLowerCase && checkUpperCase){
  userOptions = charLow.concat(charUp);
} else if (checkLowerCase && checkNumeric){
  userOptions = charLow.concat(num);
} else if (checkLowerCase && checkSpecial){
  userOptions = charLow.concat(charSpecial);
}
else if (checkUpperCase && checkNumeric){
  userOptions = charUp.concat(num);
} else if (checkUpperCase && checkSpecial){
  userOptions = charUp.concat(charSpecial);
}
else if (checkNumeric && checkSpecial){
  userOptions = num.concat(charSpecial);
}
//coding for passwords with 1 criteria
else if (checkLowerCase){
  userOptions = charLow;
} else if (checkUpperCase){
  userOptions = charUp;
} else if (checkNumeric){
  userOptions = num;
} else if (checkSpecial){
  userOptions = charSpecial;
};
// password variable is an array placeholder to store user selected length
var password = [];

//random selection of password's variables
for (var i = 0; i < checkLength; i++) {
    var pickChoices = userOptions[Math.floor(Math.random() * userOptions.length)];
    password.push(pickChoices);
}
//check to see if random selection is working properly, log result/candidate to console
console.log(password);

//convert password array into string for text output
var ps = password.join("");
//test the converted array to string, log result to console
console.log(ps);
writePassword(ps);


return ps;
    }
//Write password to the #password input
function writePassword() {
    
  var password = document.querySelector("#password");

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
