let a = 12;
let b = 30;

if(b > a) {
    // swap the two numbers
    let c = a;
    a = b;
    b = c;
}

while(b != 0) { // this loop will end when b becomes 0
    let rem = a % b;
    a = b;
    b = rem;
}

console.log("The gcd of the two numbers is", a)