// Revise: what is a valid variable name
// 1. No keywords
// 2. No funny characters and spaces except _
// 3. Cannot begin with numbers
// (Convention): we use camelCase

// If an object key is a valid variable name, we can use the dot notation to access it
let studentRecord = {
    "firstName":"Ah Kow",
    "lastName": "Tan",
    "email address":"ahkow@gmail.com",
    age: 32
}

console.log(studentRecord["firstName"]);  // use [] access
// but if the key is named as a proper variable, we can use the dot notation
console.log(studentRecord.firstName);
console.log(studentRecord["email address"]);