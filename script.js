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
  const passwordLengthCheck = (value) => {
    if (value < 8 || value > 128) {
      alert(
        "Password length needs to be at least 8 characters but no more than 128. Try again"
      );
      return false;
    } else {
      return true;
    }
  };

  // Loop untill user provides a valid length
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

// Function asks user which character type should be include in the password
function getpasswordUserOptions() {
  // Loop untill user confirms at least one group
  while (true) {
    // Prompt for character type password criteria
    const lCase = confirm("Do you want use: Lowercase?");
    const uCase = confirm("Do you want use: Uppercase?");
    const numeric = confirm("Do you want use: Numeric?");
    const special = confirm(
      "Do you want use: Special characters ($@%&*, etc)?"
    );

    // Check if at least one group of characters is selected
    if (lCase || uCase || numeric || special) {
      return {
        passwordLCase: lCase,
        passwordUCase: uCase,
        passwordNumeric: numeric,
        passwordSpecial: special,
      };
    } else {
      alert("ERROR! At least one group needs to be selected. TRY AGAIN!");
    }
  }
}

// Function to get a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Function to check which user options were selected to add these values to array
const userOptions = (option, characters, arr, minChar) => {
  if (option == true) {
    minChar.push(getRandom(characters));
    arr.push(characters);
  }
};

// Function to generate password with user input
function generatePassword() {
  let generatedPassword = "";

  const passwordLength = getPasswordLength();
  const passwordUserOptions = getpasswordUserOptions();

  // Creates array which includes all selected/true user options
  const arrOptions = [];
  // Creates random array which includes guaranteed charcter from each selected/true user options
  const guaranteedChar = [];

  // Runs userOption fuction for each character group
  userOptions(
    passwordUserOptions.passwordLCase,
    lowerCasedCharacters,
    arrOptions,
    guaranteedChar
  );
  userOptions(
    passwordUserOptions.passwordUCase,
    upperCasedCharacters,
    arrOptions,
    guaranteedChar
  );
  userOptions(
    passwordUserOptions.passwordNumeric,
    numericCharacters,
    arrOptions,
    guaranteedChar
  );
  userOptions(
    passwordUserOptions.passwordSpecial,
    specialCharacters,
    arrOptions,
    guaranteedChar
  );

  // Method to create a new array with all sub-array elements concatenated into it
  const arrOptionsFlat = arrOptions.flat();
  // Change array to string and remove commas
  const guaranteedCharString = guaranteedChar.join("");

  // Loop to generate password exluding guaranteed characters
  for (let i = 0; i < passwordLength - guaranteedChar.length; i++) {
    generatedPassword = generatedPassword + getRandom(arrOptionsFlat);
  }

  // Adds guaranteed characters at the end
  generatedPassword = generatedPassword + guaranteedCharString;

  // Randomise generated password
  const shuffledPassword = generatedPassword
    .split("")
    .sort(function () {
      return 0.5 - Math.random();
    })
    .join("");

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
