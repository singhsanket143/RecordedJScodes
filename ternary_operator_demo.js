let marks = 20;

let result = (marks >= 33) ? "You've passed" : "You've failed";

console.log(result);

console.log("-------------------------------");

// if(marks >= 85) {
//     console.log("A grade performance");
// } else {
//     console.log("Better luck next time")
// }
let print = (marks >= 80) ? "A grade performance" : "Better luck next time" ; 
console.log(print);

// nested ternary operator

let i = 4;

let value = (i >= 0) ? ((i%2 == 1) ? "Positive odd" : "Positive even" ) : "Negative";
console.log(value);