let a = 1, b = 4, c = 5;

if((a + b > c) && (b + c > a) && (a + c > b)) { // True && false && True -> false
    console.log("Yes, it is a valid triangle");
} else {
    console.log("No, not a valid triangle");
}


// (1 + 4 > 5) -> false
// (4 + 5 > 1) -> true
// (1 + 5 > 4) -> true
// false && true && true -> false