// 11. COMPARISON OPERATORS

// Operators are symbols that executes functions to data
// Arth. operators: **, % / *, + -

// Comparison operators are another category of operators
// like arth. operators, they work on data, but the result is either true/false
console.log("3 > 5 =", 3 > 5);
console.log("4 <= 4 =", 4 <= 4);
console.log("5 < 10 =", 5 < 10);
console.log("5 >= 11 =", 5 >= 11);

// == is the equal operator
console.log("3 == 3", 3 == 3);

// != is not equal operator (has data conversion)
console.log("4 != 5", 4 != 5);

// careful: == will auto cocerce (in other way; auto-convert the data on
// the left hand side and the right hand side)
console.log("4" == 4);

// if we want compare to the right side and left hand side and
// check if they the same and are of the SAME data type
// we use ===
console.log("4" === 4);

// check not equal with NO data type conversion
console.log("3" !== "3");

// ORDER OF PRECEDENCE FOR COMPARISON OPERATORS
// 1. Variable sub
// 2. ( )
// 3. Function calls
// 4. Arth operators
// 5. Comparison operators
// 6. Assignment

console.log(3 + 4 > 1);
// => console.log(7 > 1)
// => console.log(true)

console.log(4 + 8 > 3 + 2);
// => console.log(12 > 3 + 2);
// => console.log(12 > 5);
// => console.log(true);

console.log(Math.min(2,3) > Math.max(5, 6));
// => console.log(2 > 6);

let x = 7;
// check if x is greater than 2 and lesser thaan 4
console.log(2 < x < 4); // NOT CORRECT WAY!!!
