// 1. Data Types and variables
let amount = 100;  // integer
let gstPercentage = 0.09; // float

// naming variables (syntax)
// 1. no spaces: for example,  'gst Percentage' is wrong
// 2. you cannot begin with a number 'animal2' => OK, '2animal' => INVALID
// 3. you cannot use the reserved keywords: const and let as examples
// let let = 3 ==> WRONG

// naming variables convention (convention => "soft rules")
// how to name variables that are long
// gstpercentage => not good
// camel case = gstPercentage  (the first alphabet of each word will be in upper case but the first word in lower case)
// snake case = gst_percentage (syntax-wise, correct, but not JavaScript convention)

// operators and the order of precedence
// 1. variable sub (only happens on the right side of = )
// 2. brackets
// 3. function calls
// 4. arth operators: **, / * %, + -
// 5. assignment
 let gstAmount = amount * gstPercentage;

 // for a function to be called (i.e function to be exxecuted)
 console.log("GST amount =", gstAmount);
 console.log("$", amount + gstAmount, " due");
 