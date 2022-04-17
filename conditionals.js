// Syntax of if conditional

/*
    if (condition) {
        // some piece of code
    }
*/
/*
    if the condition is evaluated to true, then the block of if is executed
    if the condition is evaluated to false, then the block of if is skipped
*/

let num = 10;

// check if the number is greater than 0
if (num > 0) {
    console.log("Yes the number is greater than zero");
}
console.log("End of the if example");

if(!null) {
    console.log("Inside the if block of null");
}
console.log("---------------------------");
/*
    if (condition) {
        // some piece of code
    } else {
        // some other piece of code
    }
*/
/*
    if the condition is evaluated to true, then the block of if is executed
    if the condition is evaluated to false, then the block of else is executed
*/
console.log("Start");
if(num > 0) {
    console.log("Number is greater than 0");
} else {
    console.log("Number is lesser than 0");
}
console.log("End");

console.log("-----------------------")

/*
    if(condition1) {
        
    } else if(condition2) {

    } else if(condition 3) {

    } else {

    }
*/
console.log("Start evaluating marks");
let marks = 45;
if(marks >= 90) {
    console.log("A grade");
} else if (marks >= 80) {
    console.log("B grade");
} else if(marks >= 70) {
    console.log("C grade");
} else if(marks >= 60) {
    console.log("D grade");
} 

console.log("End evaluating marks")

console.log("--------------------------")
// nested if else

let val = 35;
if(val >= 0) {
    if(val >= 1) {
        console.log("Natural number as well as a whole number");
    } else {
        console.log("Whole Number but not part of natual number");
    }
} else {
    console.log("Negative value")
}

console.log("-------------------");

if(val > 0) 
    console.log("Positive value");
else 
    console.log("Negative value");