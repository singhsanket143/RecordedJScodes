let a = 16;
let b = 8;

let range = (a < b) ? a : b; // we are calc the minimum umber for setting up the range
let result;

for(let num = 2; num <= range; num++) { // going to each number in the range [2, range]
    if((a % num == 0) && (b % num == 0)) { // checking if both a and b is divisible by num
        // number is our potential candidate
        result = num;
    }
}

console.log(result);

/*
// range = min(16, 8) -> 8,,,, [2-8] 
num = 2, result = 2
num = 3, result = 2
num = 4, resullt = 4
num = 5, result = 4
num = 6, result = 4
num = 7, result = 4
num = 8, result=  8
*/