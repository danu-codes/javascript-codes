//start of script.js 

function sumPrimes(num) {

    if (num < 2) {
        return 0;
    }
    function isPrime(n) {
        if (n < 2)
            return false;
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0)
                return false;
        }
        return true;
    }

    let sum = 0;
    for (let i = 2; i <= num; i++) {
        if (isPrime(i)) {
            sum += i;
        }
    }
    return sum;
}

console.log(sumPrimes(10));
console.log(sumPrimes(5));
console.log(sumPrimes(2));
console.log(sumPrimes(0));
console.log(sumPrimes(977));

//end of script.js

