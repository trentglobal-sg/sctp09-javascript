const prompt = require('prompt-sync')();

// DATA MODELLING: CREATE THE MOCK DATA
let todolist = [
    {
        "id": Math.floor(Math.random() * 9999) + 1,
        "name": "Walk the dog",
        "urgency": 5,
        "dateDue": "21/11/2025",
        "done": false
    },
    {
        "id": Math.floor(Math.random() * 9999) + 1,
        "name": "Clean the bathroom",
        "urgency": 1,
        "dateDue": "22/11/2025",
        "done": false
    },
    {
        "id": Math.floor(Math.random() * 9999) + 1,
        "name": "Buy birthday present",
        "urgency": 5,
        "dateDue": "22/11/2025",
        "done": true
    }
]

// the first parameter: array of todos we want to display
function showTodos(todolist) {
    // iterating through an array
    // we go through an array, take out one item at a time, and do something to it
    for (let i = 0; i < todolist.length; i++) {
        let todo = todolist[i];
        console.log("ID:", todo.id, "Name:", todo.name, ", Urgency:", todo.urgency, 
            ", Date Due:", todo.dateDue, ", Done", todo.done);
    }

}

function addNewTodo(todolist) {
    console.log();
    console.log("Add a new todo");
    let name = prompt("Enter the name for the new todo: ");
    let urgency = parseInt(prompt("Enter the urgency for the new todo: "));
    let dateDue = prompt("Enter the date due (DD/MM/YY): ");

    // in a real application, the id will be provided by the database
    // for our mock application, we will use a random number between 1 to 9999
    let id = Math.floor(Math.random() * 9999) + 1;

    let newTodo = {
        "id": id,
        "name": name,
        "urgency": urgency,
        "dateDue": dateDue,
        "done": false,
    }

    todolist.push(newTodo);
}

function markAsDone(todolist) {
    console.log();
    console.log("Mark Task As Done");
    showTodos(todolist);
    console.log();
    let wantedID  = parseInt(prompt("Select the ID of the task that you want to be marked as done: "));

    // linear search
    let wantedTodo = null;
    for (let i = 0; i < todolist.length; i++) {
        let todo = todolist[i];
        if (todo.id == wantedID) {
            wantedTodo = todo;
            break;
        }
    }
   
    wantedTodo.done = true;

}

// addNewTodo(todolist);
markAsDone(todolist);
showTodos(todolist);