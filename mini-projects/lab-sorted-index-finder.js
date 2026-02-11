//start of script.js

function getIndexToIns(arr, num) {
  arr.sort((element1, element2) => element1 - element2);
  let index = arr.findIndex(element => element >= num);

  if (index === -1)
    return arr.length;
  else
    return index;

}

console.log(getIndexToIns([10, 20, 30, 40, 50], 35));
console.log(getIndexToIns([10, 20, 30, 40, 50], 30));
console.log(getIndexToIns([40, 60], 50));
console.log(getIndexToIns([3, 10, 5], 3));
console.log(getIndexToIns([5, 3, 20, 3], 5));
console.log(getIndexToIns([2, 20, 10], 19));
console.log(getIndexToIns([3, 10, 5], 11));
console.log(getIndexToIns([], 5));


//end of script.js

