const prompt = require('prompt-sync')();

// we are going to calculate GST and the total amount to pay
// we will ask the user for the net bill and GST amount

let billAmount = parseFloat(prompt("Enter the bill amount: "));

// valid range: billAmount > 0
// the user must key in again if the bill amount is invalid
while (billAmount <= 0) {
    console.log("Invalid bill amount. Must be greater than 0");
    billAmount = parseFloat(prompt("Enter the bill amount: "));
}

let gstPercentage= parseFloat(prompt("Enter the GST percentage: "));
while (gstPercentage < 0 || gstPercentage > 100) {
    console.log("Invalid GST amount. Please re-enter: ");
    gstPercentage = parseFloat(prompt("Enter the GST percentage: "));
}


console.log("Bill Amount =", billAmount);
console.log("GST Percentage =", gstPercentage);

let finalBill = billAmount + (gstPercentage/100) * billAmount;
console.log("Final Bill =", finalBill);