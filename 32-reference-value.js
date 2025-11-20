// how primitive data types: store values
let a = 42;
let b = a;
b = b + 1;
console.log(a);

let f = [1,2,3,4,5];
let g = f;
g.push(-99); // add -99 to the back of the array
console.log(f);


let names = ["Alan", "John", "Marcy", "Nelson"];
let n2 = names;
n2[0] = "Ben";
console.log(names);

let n3 = names.slice();
console.log(n3);