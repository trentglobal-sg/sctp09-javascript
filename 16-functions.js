// FUNCTIONS
// example of built in-functions: console.log, Math.min, parseInt, parseFloat, Number 
// However we can write custom functions

// For example, we need to calculate BMI very often

// calculateBMI is a function that recieves two parameters: weight and height
function calculateBMI(weight, height){
    let bmi = weight / height **2;
    return bmi;  // the bmi variable is the result of the calculateBMI function
}

// addTwoNumbers is a function that recieves two parameters and returns their sum
function addTwoNumbers(number1, number2) {
    return number1 + number2;
}

let sum = addTwoNumbers(100, 20);
console.log(sum);

// RULES OF WRITING FUNCTIONS
// 1. Name the function and write function <name>()  { }
// 2. What are the parameters of the function
// 3. How to get the results of the function from the parameters
// 4. Return the result

// 1. Write a function name biggerNumber that given two numbers, will return the larger one
function biggestNumber(number1, number2) {
    let largestNumber = null; // null means no-value, or unknown
    if (number1 > number2) {
        largestNumber = number1;
    } else if (number2 >= number1) {
        largestNumber = number2;
    }
    return largestNumber;
}

console.log(biggestNumber(3,10));

// 1. Create a function named `calculateGST`, given the price of an item, and a GST value, 
// calculate the gst amount and return it

// 2. Create a function named `calculatePerimeter`, given the width and height, return the perimeter

// 3. Write a function that calculates the area of a circle.
