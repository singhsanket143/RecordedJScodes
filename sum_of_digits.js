let x = 12345;
let answer = 0;
while(x != 0) {
    answer += x % 10; // this will extract the last digit and add it in the answer sum
    x = parseInt(x / 10);
}

console.log(answer);

/*
x = 12345 
iter x      rem     answer  updated_x
1   12345   5       5       1234
2   1234    4       9       123
3   123     3       12      12
4   12      2       14      1
5   1       1       15      0
6   0 -> loop ends

*/