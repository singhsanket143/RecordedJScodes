// Arithmetic operators

let x = 10;
let y = 19;

console.log("x + y = ", x+y);
console.log("x - y = ", x-y);
console.log("x * y = ", x*y);
console.log("x / y = ", x/y);
console.log("x % y = ", x%y);

// assignment operators

let z = 90; // assignment operation
x += 10; // x = x + 10;
console.log(x)
x -= 10; // x = x - 10;
console.log(x);
x *= 4; // x = x * 4
console.log(x);
x /= 3; // x = x / 3
console.log(x);
x %= 2; // x = x % 2
console.log(x);

// relational operators
console.log("is x < y ? ", x < y)
console.log("is x <= y ? ", x <= y)
console.log("is x > y ? ", x > y)
console.log("is x >= y ? ", x >= y)

// logical operators
let m = (x < y);
let n = (x > 0);

console.log("m and n", m && n);
console.log("m or n", m || n);
console.log("not m", !m);
console.log("10 || 0 = ", 10 || 0)

// bitwise operators
console.log("5 bitwise and 6 = ", 5 & 6);
console.log("5 bitwise xor 6 = ", 5 ^ 6);
console.log("5 bitwise or 6 = ", 5 | 6);

// increment and decrement
let a = 9;
console.log("1. ", a++); // postfix
console.log("2. ", a);
console.log("3. ", ++a); // prefix
console.log("4. ", a);
console.log("1. ", a--); // postfix
console.log("2. ", a);
console.log("3. ", --a); // prefix
console.log("4. ", a);
