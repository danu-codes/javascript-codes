//start of script.js

function repeatStringNumTimes(str, count){
  let output="";
    if(count<=0){
       return "";
    }
    else{
      for(let times=0; times<count; times++){
        output+= str;
      }
      return output;
    }  
}

//const result = repeatStringNumTimes("*", 3);
//const result = repeatStringNumTimes("abc", 3);
//const result = repeatStringNumTimes("abc", 4);
//const result = repeatStringNumTimes("abc", 1);
//const result = repeatStringNumTimes("*", 8);
const result = repeatStringNumTimes("abc", -2);
console.log(result);

//end of script.js 

