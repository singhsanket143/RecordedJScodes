function greet1(name) {
    console.log("Hello", name);
}
let greet = function(name) { // anonymous func exp
    console.log("hello", name);
}

let welcome = function hola(name) { // names function expression
    console.log("welcome welcome", name);
}

greet("Sanket");
greet1("Sanket");
welcome("Sanket");