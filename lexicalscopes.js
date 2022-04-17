
var teacher = "Sanket";
function fun() {
    var teacher = "Pulkit";
    console.log("hello", teacher);
    function dun() { // scope of dun is fun
        console.log(teacher); // scope of fun
    }
    dun();
}

function gun() {
    student = "tanmay"; // auto global variable
    console.log(student);
}

fun();
gun();
console.log(student);