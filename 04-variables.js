// 4. Variable
// A variable is a container that can contain data and the data might change

// Ah Kow have 30 apples. If he gives 15 to Susan and half to Ali, how many apples
// does Ah Kow have left
// let x be the number of apples that Ah Kow
// let s be the number of apples that Susan have
// let a be the number of apples that ali have
// s = 15
// a = (x - s) / 2

// ! DATA NOT STORED IN A VARIABLE ARE LOST
let apples = 30;   // 'let' is a keyword to create a new variable
                   // assign 30 to the variable 'apples'
console.log(apples / 2);
// => console.log(30 / 2);

// assign the variable apples to be the current value in apples + 1
apples = apples + 1;
// apples = 30 + 1
// apples = 31

// ORDER OF PRECEDENCE (much larger picture)
// 1. variable subsitution (always happens on the right hand side of =)
// 2. ( )
// 3. arth. operators
//    3a: **
//    3b: / * %
//    3c: + -
// 4. = (assignment)

let salary = 3000;
let takehome = salary * 0.8;
// => let takehome = 3000 * 0.8;
// => let takehome = 2400; 

let m = 3;
let z = 5;
let y = (m*z)+(m+z)**2;
// => let y = (3*5)+(3+5)**2;
// => let y = (15)+(8)**2;
// => let y = 15 + 8 ** 2;
// => let y = 15 + 64;
// => let y = 79;
// => null (no value)
console.log("y=", y);
