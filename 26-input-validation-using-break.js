// ask the user for a positive number
// keep asking until the user enters a positive number
const prompt = require('prompt-sync')();
let number = 0;
while (true) {
    number = parseInt(prompt("Enter a positive number: "));

    // we want positive numbers only, so check for positive number
    if (number > 0) {
        break;
    }
}
console.log("number =", number);