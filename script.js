// Assignment Code
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
	var password = generatePassword();
	var passwordText = document.querySelector('#password');

	passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

function generatePassword() {
//Selected options
var length = document.querySelector('#length').value;
var uppercase = document.querySelector('#uppercase').checked;
var lowercase = document.querySelector('#lowercase').checked;
var numbers = document.querySelector('#numbers').checked;
var symbols = document.querySelector('#symbols').checked;

if (!uppercase && !lowercase && !numbers && !symbols) {
    alert('Please select at least one character type.');
    return;
}

if (length < 8 || length > 128) {
    alert('Password length must be between 8-128 characters.');
    return;
}

// Option sets
var uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
var numberChars = '0123456789';
var symbolChars = '`~!@#$%^&*()_-+={}[]|/:;<>,.?';

var characterPool = '';
if (uppercase) {
	characterPool += uppercaseChars;
}
if (lowercase) {
    characterPool += lowercaseChars;
}
if (numbers) {
    characterPool += numberChars;
}
if (symbols) {
    characterPool += symbolChars;
}

var password = '';
for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * characterPool.length);
    password += characterPool[randomIndex];
}

return password;
}