function square(x) {
    console.log(x*x);
}

function add(a, b = 0) { // function definition
    // we can make any argument as default arg by putting = <value>
    // if the user doesnt pass any value during invocation then default value is picked otherwise not
    console.log("the value of a and b is", a, b)
    return a+b;
}

function fun(a, b = 0, c) {
    console.log(a, b, c);
}

let sum = add(10, 19);
console.log(add(1, 2));
console.log(sum)

let sq = square(10);
console.log("value of sq is", sq);

console.log(add(9));

fun(10);


// benefits of functinos

// - enhance readability
// - makes the program easier as each small task is divided
// - code becomes reusable