// Assignment Code
var uppercase = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
];
var lowercase = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var special = [
    "~",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "-",
    "_",
    ":",
    ";",
    ".",
    "'",
    "[",
    "]",
    "{",
    "}",
    "?",
];

var generateBtn = document.querySelector("#generate");
var lowerString, upperString, numberString, specialString;

function generatePassword() {
    var passwordLength = parseInt(
        prompt(
            "How many characters would you like your password to be? Please select a number between 8 and 128.",
        ),
    );

    while (true) {
        if (passwordLength < 8) {
            passwordLength = parseInt(
                prompt("Please select a minimum of 8 characters."),
            );
        } else if (passwordLength > 128) {
            passwordLength = parseInt(
                prompt("The maximum number of characters is 128."),
            );
        } else if (Number.isInteger(passwordLength) === false) {
            passwordLength = parseInt(
                prompt("You must select a number between 8 and 128."),
            );
        } else {
            break;
        }
    }

    while (true) {
        var lowerCase = confirm("Would you like to include Lowercase letters?");
        var upperCase = confirm("Would you like to include Uppercase letters?");
        var specialCharac = confirm(
            "Would you like to include Special Characters?",
        );
        var numberCharac = confirm("Would you like to include numbers?");

        if (!lowerCase && !upperCase && !specialCharac && !numberCharac) {
            confirm("One character type must be selected.");
        } else {
            break;
        }
    }

    if (confirm("Would you like to include Lowercase letters?") == true) {
        //lowercase array to be included in the randomization of the password string
        lowerString = lowercase.join("");
    }
    if (confirm("Would you like to include Uppercase letters?") == true) {
        upperString = uppercase.join("");
    }
    if (confirm("Would you like to include Special Characters?") == true) {
        specialString = special.join("");
    }
    if (confirm("Would you like to include numbers?") == true) {
        numberString = numbers.join("");
    }

    //if string is confirmed add to the randomization for password
    let newPassword = "";

    // for (each true of list) add string to list
}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
