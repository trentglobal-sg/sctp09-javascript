

// in an object, the value can any data type
let daysInMonth = {
    "jan":31,
    "feb":28,
    "mar":31,
    "apr":30
}
// when referring to a key, it must always be a string
console.log(daysInMonth["mar"]);

// Add a new key to an object
daysInMonth["may"] = 31;  // adding a new key named `may` and assigning it the value of 31

// Modify an existing value in an object via its key
daysInMonth["feb"] = 29; // change the key `feb` to have 29.

// Delete a key
delete daysInMonth["mar"];

console.log(daysInMonth);

let dutyCalendar = {
    "mon":["John", "Mary"],
    "tue":["David", "Derrick"],
    "wed":["Vincet", "Ah Kow"]
}

const productCatalog = {
    "sku101": {
        "name":"ACME Anvil",
        "price":123,
        "quality":3
    },
    "sku102": {
        "name":"ACME Hammer",
        "price":155,
        "quality":5
    }
}
console.log(productCatalog["sku102"]["price"]);

