// 7. User Input
// For a program useful, data must come somewhere
// - keyboard
// - forms (text boxes, radio buttons)
// - API (that includes AI)

// For JavaScript programs to accept input (the act of providing data) from keyboard 
// We need a new functionality
// `prompt-sync` is a third party 'extension' (aka packages) for JavaScript
// `require` is there to "enable" the 'extension' (aka import)
// the line below mean: we will enable the `prompt-sync` extension and name it as `prompt`
const prompt = require('prompt-sync')();

// Suppose that one cupcake cost $12.99
// Write a program that asks the user for how many cupcakes and show the total cost
let number = prompt("Enter the number of cupcakes: ");
number = parseInt(number);
console.log("You are buying", number, "cupcakes");

// EXAMPLE: Assume that the user types in 8 and press ENTER
// For prompt: the return value is a string
// let number = prompt("Enter the number of cupcakes: "); 
// => let number = "8"; 
// console.log("You are buying", number, "cupcakes");
// => console.log("You are buying", "8", "cupcakes");
let plasticBagFee = 0.1;
let cupcakeFee = 12.99;

// let totalPrice = (number * 12.99) + 0.1;

let totalPrice = (number * cupcakeFee) + plasticBagFee;


console.log("Total Price =", totalPrice);