function fun(fn) {
    console.log("now ececuting fn");
    fn();
}

// function greet() {
//     console.log("hi");
// }

fun(function greet() {
    console.trace("hi");
});