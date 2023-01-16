# Module 5 Challenge: Password Generator

## Overview

An application that an employee can use to generate a random password based on
criteria they’ve selected. This app runs in the browser, and features
dynamically updated HTML and CSS powered by JavaScript code. It has a clean and
polished user interface that is responsive, ensuring that it adapts to multiple
screen sizes.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Requirements](#requirements)
- [Credits](#credits)
- [License](#license)

## Installation

Add JavaScript right before closing `</body>` tag in the html file:

```html
<script src="./index.js"></script>
```

## Usage

Output: https://eamrogowicz.github.io/password-generator/

GitHub source files: https://github.com/EAmrogowicz/password-generator

The following image shows the console application's appearance and
functionality:
![password generator demo](./assets/05-javascript-challenge-demo.png)

The password can include special characters (for more see this
[list of Password Special Characters from the OWASP Foundation](https://www.owasp.org/index.php/Password_special_characters))

## Requirements

Generate a password when the button is clicked:

1. Present a series of prompts for password criteria

- Length of password - user inputs a number
  - At least 8 characters but no more than 128
- Character types - user either confirms or cancels the browser dialog box
  - Lowercase
  - Uppercase
  - Numeric
  - Special characters ($@%&\*, etc)

2. Code validates for each input if at least one character type is selected.

3. Once prompts are answered then the password is generated and written to the
   page.

## Credits

N/A

## License

Please refer to the LICENCE in the repo.
