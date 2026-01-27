//start of script.js

function bouncer(arr){
  let result=[];
  for(let index=0; index<arr.length; index++){
    if(arr[index] === false || arr[index] === null ||arr[index] === 0 || arr[index] === "" || arr[index] === undefined || Number.isNaN(arr[index]))
      continue;
    
    else
      result.push(arr[index]);
    }
    return result;
}

console.log(bouncer([7, "ate", "", false, 9]));
console.log(bouncer(["a", "b", "c"]));
console.log(bouncer([false, null, 0, NaN, undefined, ""]));
console.log(bouncer([null, NaN, 1, 2, undefined]));
console.log(bouncer([]));


//end of script.js

