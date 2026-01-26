//start of script.js

function largestOfAll(arr){
   let maxArray=[];
   for(let outter=0; outter<arr.length; outter++){
      let max=arr[outter][0];
      for(let inner=0; inner<arr[outter].length; inner++){
        if(arr[outter][inner]>max){
          max=arr[outter][inner];
        }
      }
      maxArray.push(max);
   }
   return maxArray;
}

//const result = largestOfAll([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

//const result = largestOfAll([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

//const result = largestOfAll([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]);

const result = largestOfAll([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]);

console.log(result);

//end of script.js

