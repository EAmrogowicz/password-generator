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

// Function to prompt user for password length
function getPasswordLength() {
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
  // Loop to check if input is a number and it's length
  while (true) {
    const userInput = prompt(
      "Type a NUMBER for password length - at least 8 characters but no more than 128:"
    );
    const passwordLengthInt = parseInt(userInput);
    if (!isNaN(passwordLengthInt)) {
      if (passwordLengthCheck(passwordLengthInt)) {
        return passwordLengthInt;
      }
    }
  }
}

// Function validate for each input to ensure at least one character type is selected
function getpasswordMinReq() {
  while (true) {
    // Prompt for other password criteria
    const lCase = confirm("Do you want use: Lowercase?");
    console.log(lCase);
    const uCase = confirm("Do you want use: Uppercase?");
    console.log(uCase);
    const numeric = confirm("Do you want use: Numeric?");
    console.log(numeric);
    const special = confirm(
      "Do you want use: Special characters ($@%&*, etc)?"
    );
    console.log(special);
    if (lCase || uCase || numeric || special) {
      return {
        passwordLCase: lCase,
        passwordUCase: uCase,
        passwordNumeric: numeric,
        passwordSpecial: special,
      };
    } else {
      confirm("ERROR! At least one group needs to be selected. TRY AGAIN!");
    }
  }
}

// Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

//Function to check which user options were selected to push values to array
const userOptions = (option, value, arr, characters) => {
  if (option == true) {
    characters.push(getRandom(value));
    arr.push(value);
  }
};

let generatedPassword = "";
// Function to generate password with user input
function generatePassword() {
  const passwordLength = getPasswordLength();
  const passwordUserOptions = getpasswordMinReq();

  //Creates random array which includes all selected/true user options
  const arrOptions = [];
  const guarantedChar = [];

  userOptions(
    passwordUserOptions.passwordLCase,
    lowerCasedCharacters,
    arrOptions,
    guarantedChar
  );
  userOptions(
    passwordUserOptions.passwordUCase,
    upperCasedCharacters,
    arrOptions,
    guarantedChar
  );
  userOptions(
    passwordUserOptions.passwordNumeric,
    numericCharacters,
    arrOptions,
    guarantedChar
  );
  userOptions(
    passwordUserOptions.passwordSpecial,
    specialCharacters,
    arrOptions,
    guarantedChar
  );

  // Method creates a new array with all sub-array elements concatenated into it
  const arrOptionsFlat = arrOptions.flat();
  const guarantedCharString = guarantedChar.toString().replace(/,/g, "");

  for (let i = 0; i < passwordLength - guarantedChar.length; i++) {
    generatedPassword = generatedPassword + getRandom(arrOptionsFlat);
  }
  console.log(generatedPassword);
  console.log(guarantedCharString);
  generatedPassword = generatedPassword + guarantedCharString;
  console.log(generatedPassword);

  // Randomise generated password
  const shuffledPassword = generatedPassword
    .split("")
    .sort(function () {
      return 0.5 - Math.random();
    })
    .join("");

  console.log(shuffledPassword);
  return shuffledPassword;
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
