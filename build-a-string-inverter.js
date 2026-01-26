//start of script.js **

function reverseString (str){
  let reversed="";
   for(let index=str.length-1; index>=0; index--){
     reversed+=str[index];
   }
   return reversed;
}


//const result = reverseString ("hello");
//const result = reverseString ("Howdy");
const result = reverseString ("Greetings from Earth");

console.log(`Reversed String : ${result}`);

//end of script.js

