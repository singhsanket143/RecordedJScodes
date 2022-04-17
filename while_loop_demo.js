// print the first N natural number
let n = 5;
// for(let i = 1; i <= n; i++) {
//     console.log(i);
// }
let i = 1;
while(i <= n) {
    console.log(i);
    i++;
}
/*
 iter = 1, i = 1, 1 <= 5 -> true, print 1, i = 2
 iter = 2, i = 2, 2 <= 5 -> true, print 2, i = 3
 iter = 3, i = 3, 3 <= 5 -> true, print 3, i = 4
 iter = 4, i = 4, 4 <= 5 -> true, print 4, i = 5
 iter = 5, i = 5, 5 <= 5 -> true, print 5, i = 6
 iter = 5, i = 6, 6 <= 5 -> false, loop terminates
*/

console.log("-------------------------")

let sum_of_natural_numbers = 0;
let k = 1; 
while(k <= n) {
    sum_of_natural_numbers += k;
    k++;
}
console.log(sum_of_natural_numbers);
/*
iter k  sum
1    1  1  
2    2  3
3    3  6
4    4  10
5    5  15
*/
// let j = 11;
// while(j > 10) { // -> infinite loop
//     // some block of code
//     j++;
// }

// while(true) { -> infinite loop
//     // some block of code
// }

console.log("------------------------");
// get sum of first m whole numbers using do while loop
let m = 4, a = 0;
let ans = 0;

do {
    ans += a;
    a++;
} while(a <= n);
console.log(ans);