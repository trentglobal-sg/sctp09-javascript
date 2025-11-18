// REPETITION
// Doing something over and over again

// A while loop allows us to repeat lines of code in a block
let count = 0;
while (count < 10 ) {
    console.log("I will remember to bring my homework");
    count = count + 1;
}

let num2 = 1;
while (num2 < 6) {
    console.log(num2);
    num2 = num2 + 1;
}
console.log("Finished");

let num3 = 10;
while (num3 >= 0) {
    console.log(num3);
    num3 = num3 - 1;
}

let num4 = 2;
while (num4 < 11) {
    if (num4 % 2 == 0) {
          console.log(num4);
    }
}

let num5 = 2;
while (num5 < 11) {
    console.log(num5);
    num5 = num5 + 2;
}

let num6 = 1;
while (num6 < 7) {
    if (num6 % 2 == 0) {
        console.log(-1 * num6);
    } else {
        console.log(num6);
    }
}

/**
 * "Write a program that prints the numbers from 1 to 100.
 *  But for multiples of three print “Fizz” instead of the number and 
 *  for the multiples of five print “Buzz”. 
 *  For numbers which are multiples of both three and five print “FizzBuzz”."
 * 1
 * 2
 * Fizz
 * 4
 * Buzz
 * Fizz
 * 7
 * 8
 * Fizz
 * Buzz
 * 11
 * Fizz
 * 13
 * 14
 * FizzBuzz
 */