// Array of special characters to be included in password
let specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
let numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
let lowerCasedCharacters = [
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

// Array of uppercase characters to be included in password
let upperCasedCharacters = [
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

//

let passwordLength;
let passwordLengthInt;
let passwordLowercase;
let passwordUppercase;
let passwordNumeric;
let passwordSpecial;

// Function to prompt user for password options
function getPasswordOptions(x, lCase, uCase, numeric, special) {
  // Function to check password length limits
  const passwordLengthCheck = (num) => {
    if (num < 8 || num > 128) {
      num = prompt(
        "Password length needs to be at least 8 characters but no more than 128. Try again:"
      );
      return false;
    } else {
      console.log(num);
      return true;
    }
  };

  const passwordMinReq = (req) => {
    if (req) {
      req = prompt(
        "ERROR! At least one group needs to be selected. TRY AGAIN!"
      );
      return false;
    } else {
      console.log(req);
      return true;
    }
  };

  // Loop to check if input is a number and it's length
  while (true) {
    x = prompt(
      "Type a NUMBER for password length - at least 8 characters but no more than 128:"
    );
    passwordLengthInt = parseInt(x);
    if (!isNaN(passwordLengthInt)) {
      if (passwordLengthCheck(passwordLengthInt)) {
        break;
      }
    }
  }

  while (true) {
    // Prompt for other password criteria

    // uCase = confirm("Do you want use: Uppercase?");
    // console.log(uCase);
    // numeric = confirm("Do you want use: Numeric?");
    // console.log(numeric);
    // special = confirm("Do you want use: Special characters ($@%&*, etc)?");
    // console.log(special);

    lCase = confirm("Do you want use: Lowercase?");
    console.log(lCase);

    if (lCase == false) {
      console.log("Error!");
      break;
    }

    // if (passwordMinReq(lCase)) {
    //   break;
    // }
  }
}
getPasswordOptions(
  passwordLength,
  passwordLowercase,
  passwordUppercase,
  passwordNumeric,
  passwordSpecial
);

//

// Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
// console.log(getRandom(upperCasedCharacters));

// Function to generate password with user input
function generatePassword() {
  let generatedPassword = "hello";
  const randomArr = new Array();

  // if (passwordLowercase) {
  //   randomArr.push(lowerCasedCharacters);
  // }

  for (let i = 0; i < this.passwordLengthInt; i++) {
    getRandom(randomArr);
  }
  return generatedPassword;
}

// Get references to the #generate element
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
