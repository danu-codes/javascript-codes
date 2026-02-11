//start of script.js

function smallestCommons(arr) {
    let [min, max] = arr.sort((a, b) => a - b);

    let range = [];
    for (let i = min; i <= max; i++) {
        range.push(i);
    }

    function gcd(a, b) {
        return b === 0 ? a : gcd(b, a % b);
    }

    function lcm(a, b) {
        return (a * b) / gcd(a, b);
    }
    return range.reduce((multiple, current) => lcm(multiple, current));

}

console.log(smallestCommons([1, 5]));
console.log(smallestCommons([5, 1]));
console.log(smallestCommons([2, 10]));
console.log(smallestCommons([1, 13]));
console.log(smallestCommons([23, 18]));

//end of script.js

