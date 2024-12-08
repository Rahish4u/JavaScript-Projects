// DOM Elements
const input = document.getElementById("input");
const generateBtn = document.getElementById("generate");
const copyBtn = document.getElementById("copy");
const lengthInput = document.getElementById("length");
const uppercaseCheckbox = document.getElementById("uppercase");
const lowercaseCheckbox = document.getElementById("lowercase");
const numbersCheckbox = document.getElementById("numbers");
const symbolsCheckbox = document.getElementById("symbols");

// Character sets
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+[]{}|;:',.<>?/";

// Generate Random Character
const getRandomChar = (charset) => charset[Math.floor(Math.random() * charset.length)];

// Generate Password
const generatePassword = () => {
    const length = parseInt(lengthInput.value, 10);
    const includeUppercase = uppercaseCheckbox.checked;
    const includeLowercase = lowercaseCheckbox.checked;
    const includeNumbers = numbersCheckbox.checked;
    const includeSymbols = symbolsCheckbox.checked;

    // Validate selections
  if (!includeUppercase && !includeLowercase && !includeNumbers && !includeSymbols) {
    alert("Please select at least one character type!");
    return;
  } 

   // Build the character pool
   let charset = "";
   if (includeUppercase) charset += uppercaseChars;
   if (includeLowercase) charset += lowercaseChars;
   if (includeNumbers) charset += numberChars;
   if (includeSymbols) charset += symbolChars;
 
   // Generate the password
   let password = "";
   for (let i = 0; i < length; i++) {
     password += getRandomChar(charset);
   }


 // Display the password
 input.value = password;
};

// Copy Password to Clipboard
const copyToClipboard = () => {
  if (input.value === "") {
    alert("No password to copy! Generate a password first.");
    return;
  }

  navigator.clipboard.writeText(input.value).then(
    () => alert("Password copied to clipboard!"),
    (err) => alert("Failed to copy password: " + err)
  );
};

// Event Listeners
generateBtn.addEventListener("click", generatePassword);
copyBtn.addEventListener("click", copyToClipboard);