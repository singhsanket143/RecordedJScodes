function isPrime(x) {
    for(let i = 2; i <= x-1; i++) {
        if(x % i == 0) {
            return false;
        }
    }
    return true;
}

function isPrimeOptimised(x) {
    for(let i = 2; i*i <= x; i++) {
        if(x % i == 0) return false; // this value of i can divide x, hence it is not a prime
    }
    return true; // no value in the range [2, sqrt(x)] can divide x that means x is prime
}

function printPrimes(n) {
    for(let i = 2; i <= n; i++) {
        if(isPrimeOptimised(i)) {
            console.log(i)
        }
    }
}

printPrimes(25)