// Implicit conversion to strings

console.log("3" + 2); // 32
console.log("3" + undefined); // 3undefined
console.log("3" + null); // 3null
console.log("3" + 0); // 30
console.log("3" + true); // 3true
console.log(false + "5"); //false5

console.log("----------------------");
// Implicit conversion to Number
console.log("3" - 2); // 30
console.log("3" - undefined); // NaN
console.log("3" - null); // 3
console.log("3" - 0); // 3
console.log("3" - true); // 2
console.log(false - "5"); //-5
console.log("----------------------");

// non numeric strings to NaN
console.log("sanket" - "singh"); // NaN
console.log("----------------------");

// boolean conversion to number

console.log(10 - true); // 9
console.log(5 - false); // 5
console.log("----------------------");


// Explicit conversion
console.log(Number(true));
console.log(Number(undefined));
console.log(Number(null));
console.log(Boolean(null));
console.log(Boolean(10));
console.log(Boolean(0));