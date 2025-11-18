// Roller Coaster Entry
// Ask the user to enter the age of all the visitors one by one
// Make sure age is greater than 0 and is lesser than 80
// For adult,  age greater or equal to 18, and are charged $10
// For children, each are charged $6
// If the user enters -99, then stop asking and show the final charge 
//
// SAMPLE OUTPUT
// Enter the age: 5
// Enter the age: -6
// Invalid age. Try again
// Enter the age: 42
// Enter the age: -99
// 1 adult
// 1 children
// Total: $16

const prompt = require('prompt-sync')();

let adultCount = 0;  // accumulator
let childrenCount = 0; //accumulator
let age = parseInt(prompt("Please enter age: "));
while (age != -99) {

    // detect invalid age and -99
    // 1. (age <= 0 || age >= 80) && age != -99
    // 2. (age < 0 && age != -99) || age >= 80
    while ((age < 0 || age >= 80) && age != -99) {
        console.log("Invalid age");
        age = parseInt(prompt("Please enter age: "));
    }

    if (age < 18) {
        childrenCount = childrenCount + 1;
    } else {
        adultCount = adultCount + 1;
    }

    age = parseInt(prompt("Please enter age: "));
}
console.log("Number of children =", childrenCount);
console.log("Number of adult =", adultCount);
console.log("Total = $", childrenCount * 6 + adultCount * 10);
