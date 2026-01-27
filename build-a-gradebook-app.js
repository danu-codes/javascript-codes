//start of script.js 

function getAverage (arr){
  let sum=0;
  let avg=0;
  for(let index=0; index<arr.length; index++){
     sum+=arr[index];
  }
  avg=sum/arr.length;
  return avg;
}

function getGrade(score){
  let grade="";
  if(score === 100){
    grade = "A+";
  }
  else if(score >= 90){
    grade= "A";
  }
  else if(score >= 80){
    grade= "B";
  }
  else if(score >= 70){
    grade= "C";
  }
  else if(score >= 60){
    grade= "D";
  }
  else{
    grade= "F";
  }
  return grade;
}

function hasPassingGrade (score){
  let grade = getGrade(score); return grade !== "F";
}

function studentMsg (arr, score){
   if(!hasPassingGrade (score)){
     return`Class average: ${getAverage (arr)}. Your grade: ${getGrade(score)}. You failed the course.`;
   }else{
     return`Class average: ${getAverage (arr)}. Your grade: ${getGrade(score)}. You passed the course.`;
   }
}

console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));

//end of script.js

