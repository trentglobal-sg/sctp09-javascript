// DATA "CONVERSION"
// the technical jargon is casting (not usually used) or type coercion
// JavaScript differnates between integers and floats, but internally
// just store as generic 'number' data types

// parseInt -> will return an integer from a string
let value = "42.5";
value = parseInt(value);
// => number = parseInt("42.5");
// => number = 42.5;
console.log(value);
console.log(typeof(value));

console.log("parsing float:");
let floatValue = parseFloat("42.5");
console.log(floatValue);
console.log(typeof(floatValue));

console.log("parsing numbers")
let a = Number("1");
console.log("a =", a);
console.log(typeof(a));

let b = Number("1.99");
console.log("b = ", b);
console.log(typeof(b));

// CONVERT NUMBERS INTO STRING
let c = 1 + "";
console.log(typeof (c));
let n = 1.0;
let d = n.toString();
console.log(typeof (d));

