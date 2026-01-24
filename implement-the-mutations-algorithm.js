//start of script.js

function mutation(arr){
   const firstElement=arr[0].toLowerCase();
   const secondElement=arr[1].toLowerCase();

   for(let char of secondElement)
   if(!firstElement.includes(char)){
     return false;
   }
   return true;
}

//let array=["hello", "hey"];
//let array=["hello", "Hello"];
//let array=["zyxwvutsrqponmlkjihgfedcba", "qrstu"];
//let array=["Mary", "Army"];
//let array=["Alien", "line"];
//let array=["floor", "for"];
//let array=["hello", "neo"];
//let array=["voodoo", "no"];
//let array=["ate", "date"];
//let array=["Tiger", "Zebra"];
let array=["Noel", "Ole"];


console.log(mutation(array));

//end of script.js

