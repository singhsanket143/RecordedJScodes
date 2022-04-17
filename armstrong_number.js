let x = 153;
let temp = x;
let answer = 0;
while(x != 0) {
    let digit = x % 10;
    answer += digit*digit*digit; // this will extract the last digit and add it in the answer sum
    x = parseInt(x / 10);
}

if(answer == temp) {
    console.log("Yes it is an armstrong number");
} else {
    console.log("No it is not an armstrong numbeer");
}
