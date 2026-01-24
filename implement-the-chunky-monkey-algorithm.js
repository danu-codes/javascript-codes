//start of script.js

function chunkArrayInGroups(arr, size){
  let numArray=[];
  for(let index=0; index<arr.length; index+=size){
    numArray.push(arr.slice(index, index+size));
  }
  return numArray;
}

//const result = chunkArrayInGroups(["a", "b", "c", "d"], 2);
//const result = chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3);
//const result = chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2);
//const result = chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4);
//const result = chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4);
//const result = chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4);
const result = chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2);

console.log("Final Result : ", result);




//end of script.js

