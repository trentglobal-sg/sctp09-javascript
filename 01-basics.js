// Do a BMI calculator
// Adding new functionality to the program
const prompt = require('prompt-sync')(); 

console.log("What is your weight?");
let weight = prompt("Weight (kg): ");

console.log("What is your height?");
let height = prompt("Height (kg): ");

let bmi = weight / height ** 2;

console.log("BMI =", bmi);