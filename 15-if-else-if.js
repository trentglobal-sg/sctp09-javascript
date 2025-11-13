// IF/ELSE-IF
// In if-else-if, the first IF that is true will execute
// And all the other if will be ignored

const prompt = require('prompt-sync')();

let weight = prompt("Enter weight: ");
let height = prompt("Enter height: ");

let bmi = weight / height ** 2;
console.log("BMi = ", bmi);

// Make sure that we go in order
if (bmi < 18.5) {
    console.log("You are normal weight");
} else if (bmi < 25) {
    console.log("You are underweight");
} else if (bmi < 30) {
    console.log("You are overweight");
} else {
    console.log("You are obese");
}

if (bmi > 30) {
    console.log("You are obese");
} else if (bmi > 25) {
    console.log("You are overweight")
} else if (bmi > 18.5) {
    console.log("You are normal weight")
} else {
    console.log("You are underweight");
}
