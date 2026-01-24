//start of script.js

function findLongestWordLength(sentence){
  let count=0;
  let countOfWords=[];
       for (const char of sentence){
         if(char!==' '){
          count++;
         }
         else{
           countOfWords.push(count);
           count=0;
         }
       }

       countOfWords.push(count);

      let max=countOfWords[0]
      for(let index=0; index<countOfWords.length; index++){
        if(countOfWords[index]>max){
          max=countOfWords[index];
        }
      }

       return max;
}

const value=findLongestWordLength("What if we try a super-long word such as otorhinolaryngology");
console.log("Longest word in the sentence : "+value);

//end of script.js

