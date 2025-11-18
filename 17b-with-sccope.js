// For an amusement park, on weekdays:
// - children cost $8 per head and adults cost $19 per head
// on weekends
// - children costs $20 per head and adults cost $45 per head
//
// write a program, ask the user whether is weekday or weekend, how many children
// how many adult and then calculate the total entry fee.
// If the total entry fee is more than $100, apply a 5% discount fee.

// INPUT:
// - what data types? (do I need to do data conversion)
// - what variable names
const prompt = require('prompt-sync')();

function calculateCost(numOfAdults, numOfChildren, costPerAdult, costPerChildren) {
    // `cost` is a local variable
    let cost = numOfAdults * costPerAdult + numOfChildren * costPerChildren;
    return cost;
}

// define constants
// a const variable cannot be reassigned to
const ADULT_PRICE_ON_WEEKDAY = 19;
const CHILDREN_PRICE_ON_WEEKDAY = 8;

const ADULT_PRICE_ON_WEEKEND = 45;
const CHILDREN_PRICE_ON_WEEKEND = 20;

const DISCOUNT_PERCENTAGE = 0.9;


let adultCount = parseInt(prompt("How many adults? "));
let childrenCount = parseInt(prompt("How many children? "));
// let day = parseInt(prompt("Enter the day of the week (6 is saturday and 7 is sunday: "));

// APPLYING THE ORDER OF PRECEDENCE
// 1. var sub? --> no
// 2. ( ) --> no
// 3. function call
// 4. arth operators --> no
// 5. comparsion --> yes
// 6. logical --> no
// 7. assignment
let isWeekend = prompt("Is it weekend (y/n)? ");
isWeekend = isWeekend == "y" || isWeekend == "Y";
// assuming the user types in 'n':
// let isWeekend = 'n' == 'y';
// let isWeekend = false;

// if a variable is created OUTSIDE OF ANY CURLY BRACES, IT IS --GLOBAL-- VARIABLE (GLOBAL SCOPE)
let cost = 0;
if (isWeekend) {
    cost = calculateCost(adultCount, childrenCount, ADULT_PRICE_ON_WEEKEND, CHILDREN_PRICE_ON_WEEKEND);

} else {
    cost = calculateCost(adultCount, childrenCount, ADULT_PRICE_ON_WEEKDAY, CHILDREN_PRICE_ON_WEEKDAY);
    // regardless of weekend or weekday, calculate and apply the discount
}

// regardless of weekend or weekday, calculate and apply the discount
if (cost > 100) {
    cost = DISCOUNT_PERCENTAGE * cost;
}

console.log("The cost is", cost);
