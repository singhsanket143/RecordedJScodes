function isPrime(x) {
    for(let i = 2; i*i <= x; i++) {
        if(x%i == 0) return false;
    }
    return true;
}

function findPair(A) {
    for(let x = 2; x < A; x++) {
        let p1 = x;
        let p2 = A-x;
        if(isPrime(p1) && isPrime(p2)) {
            console.log(p1, p2);
            return;
        }
    }
    console.log("No pair found");
    return;
}

findPair(17);

// 2, 3, 5, 7, 11, 13