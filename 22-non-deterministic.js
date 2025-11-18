// Sometimes we don't know how many times a loop will run (aka non-deterministic)
// Sometimes the number of the times the loop will run is the answer we are looking for

// Assume we want to do a loan calculator
// Given interest rate and the starting loan amount and how much the person is paying per month
// calculate how many months it will take for the person to repay the loan. (no formula)

// Assume - Loan Amount: 1000, interest rate is 1.5%, $200/month
let loanAmount = 1000;
let repayAmount = 200;
let interestRate = 0.015;
let months = 0;
while (loanAmount >= 0) {
    loanAmount = loanAmount + (loanAmount * interestRate) - repayAmount;
    months = months + 1;
}
console.log("Number of months to pay =", months);