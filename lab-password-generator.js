//start of script.js 

function generatePassword (pswdLen){
   const str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
   let result="";

   for(let count=0; count<pswdLen; count++){
    result+=str.charAt(Math.floor(Math.random()*str.length));
   }
   return result;
}

const password=generatePassword(7);
console.log( `Generated password: ${password}`);

//end of script.js 

