const prompt = require('prompt-sync')();

// Branching: for the computer to skip lines of code depending on a condition
let cupcakeCost = 12.99;
let numberOfCakes = parseInt(prompt("Enter number of cupcakes: "));

if (numberOfCakes > 0) {
    let totalPrice = numberOfCakes * cupcakeCost;
    console.log("Amount due =", totalPrice);
} else {
    console.log('Sorry not a valid amount of cupcakes');
}

console.log("Thank you for you patronage");