//start of script.js

function sumFibs(num) { 
  let prev = 0;
  let current = 1;
  let sumOfFibs = 0; 
    while (current <= num) { 
      if (current % 2 !== 0) { 
        sumOfFibs += current; 
    } 
        let next = prev + current; 
        prev = current; 
        current = next;
  } 
         return sumOfFibs;
}

console.log(sumFibs(1));
console.log(sumFibs(1000));
console.log(sumFibs(4000000));
console.log(sumFibs(4));
console.log(sumFibs(75024));
console.log(sumFibs(75025));

//end of script.js

