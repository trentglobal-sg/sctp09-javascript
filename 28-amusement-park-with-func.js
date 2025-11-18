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

function askForAge() {
    let age = null;
    while (true) {
        age = parseInt(prompt("Enter age: "))
        if (age == -99 || (age > 0 && age < 80)) {
            break;
        };
        // the program will only reach the next line if the age is invalid
        console.log("Please enter a valid age");
    } // end of while loop for ensuring valid age range
    return age;
}

let childrenCount = 0;
let adultCount = 0;

// is keep asking for age until it is -99
while (true) {
    let age = askForAge();

    if (age == -99) {
        break;
    }

    // age is not -99 and age is between 1 to 79
    if (age < 18) {
        console.log("Children added");
        childrenCount = childrenCount + 1;
    } else {
        console.log("Adult added");
        adultCount = adultCount + 1;
    }
} // end of while loop for asking of age

console.log("Number of children =", childrenCount);
console.log("Number of adult =", adultCount);
console.log("Total Price =", childrenCount * 6 + adultCount * 10);