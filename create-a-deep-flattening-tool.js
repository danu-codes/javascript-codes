//start of script.js

function steamrollArray(arr) {

    function flatten(input) {
        let result = [];
        for (let item of input) {
            if (Array.isArray(item)) {
                result = result.concat(flatten(item));
            }
            else {
                result.push(item);
            }
        }
        return result;
    }

    return flatten(arr);
}

console.log(steamrollArray([[["a"]], [["b"]]]));
console.log(steamrollArray([1, [2], [3, [[4]]]]));
console.log(steamrollArray([1, [], [3, [[4]]]]));
console.log(steamrollArray([1, {}, [3, [[4]]]]));

//end of script.js

