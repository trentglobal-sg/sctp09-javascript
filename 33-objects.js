// An object is like a "dictionary"
// - stores key/value pairs
// - associate a key with a valu
// - so an object can used like a "look-up table"
// sg => Singapore, my => Malaysia, in => Indonesia
const prompt = require('prompt-sync')();
let code = prompt("Enter a country code: ");

// an object stores key/value pairs
// <key>:<value>
let countryCode = {
    'sg':'Singapore',
    'my':'Malaysia',
    'in':'Indonesia'
}

// how to get a value by its key
// console.log(countryCode["sg"]);
// console.log(countryCode["in"]);
console.log(countryCode[code]);