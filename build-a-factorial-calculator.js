//start of script.js 

let num=3;

function factorialCalculator(num){
   let result=1;
   for(let count=num; count>0; count--){
     result = result*count;
   }
   return result;
}

const factorial = factorialCalculator(num);
const resultMsg = `Factorial of ${num} is ${factorial}`;
console.log(resultMsg);

//end of script.js

