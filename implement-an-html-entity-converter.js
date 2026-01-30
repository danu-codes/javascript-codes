//start of script.js 

function convertHTML(str){
  const list={
    "&":"&amp;",
    "<":"&lt;",
    ">":"&gt;",
    '"':"&quot;",
    "'":"&apos;"
  }
  let result="";
  for(let index=0; index<str.length; index++){
    let char=str[index];
    if(list[char]){
      result+=list[char];
    }
    else{
      result+=char;
    }
  }
  return result;
}

console.log(convertHTML("Dolce & Gabbana"));
console.log(convertHTML("Hamburgers < Pizza < Tacos"));
console.log(convertHTML("Sixty > twelve"));
console.log(convertHTML('Stuff in "quotation marks"'));
console.log(convertHTML("<>"));
console.log(convertHTML("abc"));

//end of script.js

