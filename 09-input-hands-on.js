const prompt = require('prompt-sync')();

// Write a program that asks the user for the length and width of a rectangle
// Calculate and display the perimeter and the area

let length = parseFloat(prompt("Enter the length: "));
let width = parseFloat(prompt("Enter the width: "));

// Alternative:
// length = parseFloat(length);
// width = parseFloat(width);

let area = length * width;
let perimeter = (length + width) * 2;

console.log("Area =", area);
console.log("Perimeter =", perimeter);