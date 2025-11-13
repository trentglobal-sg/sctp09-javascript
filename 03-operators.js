// Operators
// - Symbols that represent some functionality and that process data

// Below is the + operator
2 + 2;  

// There are many kind of operators, and one category of them is Arthimetric operators
// + -> plus
// - -> minus
// * -> multiply
// / -> divide

// aside: a function is a command to JavaScript
// the ( ) is to provide context

// console.log will show the result of 2 + 2 to the user
console.log(2 + 2);
// => console.log(4);

// console.log is the name of the function (aka command)
// and within the parenthesis, we have the contextual data
console.log("Hello world");
console.log('Have a nice day!');

// arth. operators
console.log(2 + 2); 
console.log(4 - 2);
console.log(8 * 2);
console.log(8 / 2);
console.log(9 % 3); // mod, or remainder of the divison
console.log(11 % 3);
console.log(10 * 3 % 2);
console.log(2**3);  // 2 to the power 3 or 2x2x2
console.log(2 * 3 ** 2 + 2);
// => console.log(2 * 9 + 2)
// => console.log(18 + 2)
// => console.log(20)
console.log((2*3) ** 2 + 2); // brackets can force operators to go first

// ORDER OF PRECEDENCE
console.log(4 + 2 * 2);
// => console.log(4 + 4)
// => console.log(8)

// in other words:
// 1. **
// 2. * / %
// 3. + -