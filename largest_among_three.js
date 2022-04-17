let a = 120, b = 245, c = -90;

if((a >= b) && (a >= c)) {
    // this check is gonna compare a with both b and c and detect if a is the largest or not
    console.log("a is the largest element with a value", a);
} else if((b >= a) && (b >= c)) {
    // this check is gonna compare b with both a and c and detect if b is the largest or not
    console.log("b is the largest element with a value", b);
} else {
    console.log("c is the largest element with a value", c);
}