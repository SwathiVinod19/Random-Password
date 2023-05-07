var generateBtn = document.querySelector("#generate");
//declaring
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const SpecialChar = "!@#$%^&*";

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
    
}

generateBtn.addEventListener("click", writePassword);
