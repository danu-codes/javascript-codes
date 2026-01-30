//start of script.js

function pairElement(str) {
  
  const pairs = {
    "A": "T",
    "T": "A",
    "C": "G",
    "G": "C"
  };

  let result = [];
  for (let char of str) {
    result.push([char, pairs[char]]);
  }
  return result;
}



console.log(pairElement("ATCGA"));
console.log(pairElement("TTGAG"));
console.log(pairElement("CTCTA"));

//end of script.js

