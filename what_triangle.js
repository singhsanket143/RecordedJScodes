let a = 10, b = 33, c = 30;

if((a == b) && (b == c)) {
    console.log("Equilateral");
} else if((a == b) || (b == c) || (a == c)) {
    console.log("Isosceles");
} else {
    console.log("Scalene");
}