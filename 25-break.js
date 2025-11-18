// Break allows us to exit from a while or for loop immediately
let x = 0;
while (x < 10) {
    console.log(x);
    if (x==3) {
        break;
    }
    x = x + 1;
}
console.log("After the while loop");