// Arrays
// - Store multiple values in a single value (each item is seperated by a comma)
// - like a container 
// - no maximum size
// - access an item by its index
let primes = [1, 3, 5, 7, 11, 13];
console.log(primes[4]);
console.log(primes[2]);

// reassign to an index in array
primes[1] = -99;

console.log(primes);

// 1. variable sub
// 2. ( )
// 3. [ ]
// 4. function call
// 5. arth operators
// 6. comparsion operators
// 7. logical operators
// 8. assignment operators
console.log(primes[2] + primes[3])
console.log(primes[Math.min(3,2)+1])
// => console.log(primes[2+1])
// => console.log(primes[3])

// Add new item to the back of an array
primes.push(13);
console.log(primes);

// Remove an item from array at a specific index
let fruits =["apples", "durains", "bananas", "pineapples"];

// use .splice(<start index>, <how many to delete>)
fruits.splice(1, 1);
console.log(fruits);

// Adding new item in the array with splice
let names = ["Peter Barker", "Tony Stare", "Steve Roamer"];
// splice.(<start index>, <how many to delete>, <what to add in>)
names.splice(2, 0, "Batman");
console.log(names);

let food = ["Chicken Rice", "Duck Rice", "Nasi Padang"];
food.splice(1, 0, "Roti Prata", "KFC" );
console.log(food);

// First, arrays can different data types at the same time
let rojak = [42, 3.14, "The quick brown fox", true, [1,2,3]];
console.log(rojak[4][1]);  // nested array access
