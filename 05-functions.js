// 5. functions
// functions are prepackaged instructions to JavaScript

// Purpose: is to display data in the terminal
// is a library function - it's available in JavaScript by default
console.log("Hello world");

// Purpose: Math.min
// Functions can have a result (in another words, a function can simplify to a data value)
// For Math.min, the result will be the smallest of the parameters
// the result of a function is its return value
// or we can Math.min will return the smallest number
console.log(Math.min(2, 3));
// => console.log(2)

console.log(Math.min(4,1,6));
// we can the result of Math.min(4,1,6) is 1 == LAYMAN
// or using the jargon we say: the return value of Math.min(4,1,6) is 1
//                             Math.min(4,1,6) returns 1
// instead of "use a function" or "execute a function", we say "call a function"
// I can say: call Math.min with 4, 1, 6 as parameters and it will return 1
//            call Math.min and pass 4, 1 6 and it will return 1

console.log(Math.max(4,1,2));

// Math.floor will round down to the nearest integer (chop off the decimal point)
console.log(Math.floor(3.5));

// ORDER OF PRECEDENCE
// 1. variable sub
// 2. ( ) 
// 3. function execution (aka function calls)
// 4. arth operators
// 5. assignment

// TWO IMPORTANT RULES FOR EXECUTING A FUNCTIONS (aka CALLING FUNCTIONS)
// 1. all the parameters must be DATA VALUUES before the function can be executed
console.log(Math.min(4*2, 5+2));
// => console.log(Math.min(8, 7));
// => console.log(7);

console.log(Math.min(Math.max(2,3), Math.min(3,5)));
// => console.log(Math.min(3,3))
// => console.log(3)

// can be broken down into
let a = Math.max(2,3);
let b = Math.min(3,5);
console.log(Math.min(a,b));

