const prompt = require('prompt-sync')();

let todos = []; // create an empty array
// let todos = Array();

while (true) {
    let newTodo = prompt("Enter a todo (or enter q to end):");
    if (newTodo == 'q') {
        break;
    }
    todos.push(newTodo);

}
console.log(todos);
