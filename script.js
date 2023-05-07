var generateBtn = document.querySelector("#generate");
//declaring
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const SpecialChar = "!@#$%^&*?<>+=";

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

function generatePassword() {
    
    //Password length
    var passwordsize = prompt("How long would you like your password to be? choose any number between 8-128 characters.");
    console.log(passwordsize);
    if (passwordsize < 8) {
        alert("Invalid entry! Password length is insufficient! Please try again.")
        return " "
    }
    if (passwordsize > 128) {
        alert("Invalid Entry! Password length is too long! Please try again.")
        return " "
    }

    var checkLowercase = confirm("Would you like to include lowercase alphabets in your new password?");
    var checkUppercase = confirm("Would you like to include uppercase alphabets in your new password?");
    var checkNumbers = confirm("Would you like to include numbers in your new password?");
    var checksymbols = confirm("Would you like to include symbols/special characters in your new password?");

    let passwordText = "";

    for (i = 0; i < passwordsize; i++) {


        if (checkLowercase == true && passwordText.length<passwordsize) {
            passwordText += lowerCase[Math.floor(Math.random() * lowerCase.length)];

        }
        if (checkUppercase == true && passwordText.length<passwordsize) {
            passwordText = passwordText + upperCase[Math.floor(Math.random() * upperCase.length)];
        }

        if (checkNumbers == true && passwordText.length<passwordsize) {
            passwordText += numbers[Math.floor(Math.random() * numbers.length)];
        }
        if (checksymbols == true && passwordText.length<passwordsize) {
            passwordText += SpecialChar[Math.floor(Math.random() * SpecialChar.length)];
        }
    }

    return passwordText

    
}

generateBtn.addEventListener("click", writePassword);
