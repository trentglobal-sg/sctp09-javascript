const prompt = require('prompt-sync')();

// INPUT
let weight = prompt("Enter your weight: ");
let height = prompt("Enter your height: ");

// PROCESSING
let bmi = weight / height ** 2;

console.log("Your BMI is", bmi);

if (bmi < 18.5) {
    console.log("You are underweight");
}

if (bmi >= 18.5 && bmi < 25) {
    console.log("You are normal weight")
}

if (bmi >= 25 && bmi < 30) {
    console.log("You are overweight");
}

if (bmi >= 30) {
    console.log("You are obese");
}

