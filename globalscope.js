let myname = "Sanket"; // global
function greet(name) {
    console.log("hello", name);
}

let age = 24; // global

function square(x) {
    return x*x;
}

function fun() {
    x = "hello"; // not in the global scope
    console.log(x);
}
fun();
console.log(x);
x = 9;

for(let i = 0; i < 10; i++) {
    console.log(i);
}

console.log(i);
