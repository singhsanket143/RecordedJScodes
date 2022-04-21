function fun(arr) { // Space O(n)
    let n = arr.length;
    let temp = [];
    for(let i = 0; i < n; i++) {
        temp.push(arr[i]);
    }
    return temp;
}

function fun1(a1, a2) { // Space O(n+m)
    let temp = []; // len a1 -> n, and len a2 -> m
    let i = 0;
    let j = 0;
    while(i < a1.length && j < a2.length) {
        if(a1[i] < a2[j]) {
            temp.push(a1[i]);
            i++;
        } else {
            temp.push(a2[j]);
            j++;
        }
    }
    while(i < a1.length) {
        temp.push(a1[i]);
    }
    while(j < a2.length) {
        temp.push(a2[j]);
    }
    return temp;
}

function fact(n) { // Space O(n)
    if(n == 0) return 1;
    return n*fact(n-1);
}