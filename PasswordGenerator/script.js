const generateButton = document.getElementById('generate');
const copyButton = document.getElementById('copy');
const passwordInput = document.getElementById('password');

generateButton.addEventListener('click', () => {
    const length = document.getElementById('length').value;
    const includeUppercase = document.getElementById('uppercase').checked;
    const includeLowercase = document.getElementById('lowercase').checked;
    const includeNumbers = document.getElementById('numbers').checked;
    const includeSymbols = document.getElementById('symbols').checked;

    passwordInput.value = generatePassword(length, includeUppercase, includeLowercase, includeNumbers, includeSymbols);
});