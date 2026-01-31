//start of script.js 

function sumAll(arr) {
  const min = Math.min(arr[0], arr[1]);
  const max = Math.max(arr[0], arr[1]);
  let sum = 0;

  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
}

console.log("Sum : "+sumAll([1, 4]));
console.log("Sum : "+sumAll([4, 1]));
console.log("Sum : "+sumAll([5, 10]));
console.log("Sum : "+sumAll([10, 5]));



//end of script.js

