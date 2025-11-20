/*
4. Guessing Game
Use  Math.floor(Math.random() * 100)+1) to generate a random number between 1 to 
100 and store it in a variable named answer. Then, start a while loop which asks
 the user to guess the number. Keep asking until the user guesses the number 
 correctly.

If the user’s guess is larger than answer, tell the user “too large”, 
otherwise tell the user “too small”.
*/

// To understand: Math.floor(Math.random() * 100)+1)
// ORDER OF PRECEDENCE
// 1. Variable sub
// 2. ( )
// 3. Function call

const prompt = require('prompt-sync')();

const answer = Math.ceil(Math.random() * 100) + 1;

// the simplest problem to solve is now can play the game for one round
// playing the game for one round consists of:
// - ask the user for their guess
// - check if it is the same answer: bingo, you go it
// - check if it is lower than answer: too small
// - check if it is higher than answer: too large
// this is an imperative approach vs. declarative approach (CSS)
while (true) {
    let guess = parseInt(prompt("Enter your guess: "));
    if (guess == answer) {
        console.log("Bingo, you got it");
        break;
    } else if (guess < answer) {
        console.log("Too small");
    } else {
        console.log("Too large");
    }
} // end while



// If vs. If/Else/If
// if (guess == answer){
//     console.log("Bingo you got it");
// }
// if (guess < answer) {
//     console.log("Too small");
// } 
// if (guess > answer) {
//     console.log("Too large");
// }
