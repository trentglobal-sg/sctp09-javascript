
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
let count = 1;
while (count < 21) {
    if (count % 3 == 0 && count % 5 != 0) {
        console.log("Fizz");
    } 
    if (count % 5 == 0 && count % 3 != 0) {
        console.log("Buzz")
    }
    if (count % 3  == 0 && count % 5 ==0) {
        console.log("FizzBuzz")
    }
    if (count % 3 != 0 && count % 5 != 0) {
            console.log(count);
    }
    count = count + 1;
}

console.log("---using if/else/if ----");
let count2 = 1;
while (count2 < 21) {
    if (count2 % 3 == 0 && count % 5 == 0) {
        console.log("fizzbuzz");
    } else if (count2 % 5 == 0) {
        console.log("buzz");
    } else if (count2 % 3) {
        console.log("fizz");
    } else {
        console.log(count2);
    }

    count2 = count2 + 1;
  
}
