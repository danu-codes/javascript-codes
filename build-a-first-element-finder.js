//start of script.js 

function findElement(arr, fun){
    for(let index=0; index<arr.length; index++){
      if(fun(arr[index])){
        return arr[index];
      }
    }
    return undefined;
}

//const result = findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; });

//const result = findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; });

//const result = findElement([1, 2, 3, 4], function(num) { return num > 2; });

//const result = findElement(["hello", "world", "javascript"], function(str) { return str.length > 5; });

//const result = findElement(["cat", "dog", "bird"], function(str) { return str.length > 10; });

//const result = findElement([2, 4, 6, 8], function(num) { return num % 2 === 0; });

const result = findElement([], function(num) { return num > 0; });

console.log(result);

//end of script.js

