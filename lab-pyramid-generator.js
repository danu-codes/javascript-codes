//start of script.js

function pyramid (str, num, bool){
  let result = "\n";
  if(!bool){
  for (let i = 1; i <= num; i++) { 
      let spaces = " ".repeat(num - i); 
      let pattern = str.repeat(2 * i - 1); 
      result += spaces + pattern + "\n"; }
  }
  else{
    for (let i = num; i >= 1; i--) { 
      let spaces = " ".repeat(num - i); 
      let pattern = str.repeat(2 * i - 1); 
      result += spaces + pattern + "\n"; }
  }
  return result;
}

console.log(pyramid("o", 4, false));
console.log(pyramid("p", 5, true));

//end of script.js

