// 12- LOGICAL OPERATORS
// two famous ones are `and` and `or`

// If I have enough money AND enough leave, then I will go travelling
// If it is raining OR if it is sunny then I will bring an ubmrella

// Just like comparison operators, the result of a logical operator is either true or false
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

// you just associate && with multiply, true as 1 and false as 0

// check if a number is between 0 to 10
let n = 5;

// ORDER OF PRECEDENCE
// 1. variable sub
// 2. brackets
// 3. function calls
// 4. arth operators
// 5. comparison operators
// 6. logical operators
//    - && will happen before ||


console.log(n >= 0 && n <= 10);
// => console.log( 5 >= 0 && 5 <= 10)
// => console.log( true && true)
// => console.log(true);

if (n >= 0 && n <=10) {
    console.log("n is between 0 and 10");
}

// OR logical operator (we can associate || as +)
console.log(true || true); // => true
console.log(false || true); // => true
console.log(true || false); // => true
console.log(false || false); // => false

// MIXING AND/OR TOGETHER
// Example: We go to the beach if it is sunny, and if it is a weekend or a holiday
let isSunny = false;
let isWeekend = true;
let isHoliday = true;

if (isSunny && (isWeekend || isHoliday)) {
    console.log("Go to the beach");
} else {
    console.log("Don't go to the beach");
}

if (isWeekend || (isHoliday && isSunny)) {
      console.log("Go to the beach, take 2");
}