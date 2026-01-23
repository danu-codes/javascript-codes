//start of script.js

const questions = [ { category: "Programming", question: "Which language is primarily used for web development?", choices: ["Python", "JavaScript", "C++"], answer: "JavaScript" }, { category: "Mathematics", question: "What is the square root of 64?", choices: ["6", "8", "10"], answer: "8" }, { category: "Science", question: "What planet is known as the Red Planet?", choices: ["Mars", "Venus", "Jupiter"], answer: "Mars" }, { category: "History", question: "Who was the first President of the United States?", choices: ["George Washington", "Abraham Lincoln", "Thomas Jefferson"], answer: "George Washington" }, { category: "Geography", question: "Which is the largest ocean on Earth?", choices: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean"], answer: "Pacific Ocean" } ];

function getRandomQuestion(arr){
    const index= Math.floor(Math.random()*arr.length);
    return arr[index];
}

function getRandomComputerChoice(arr){
    const index= Math.floor(Math.random()*arr.length);
    return arr[index];
}

function getResults(question, computerChoice){
   if(computerChoice===question.answer){
     return "The computer's choice is correct!";
   }
   else{
     return `The computer's choice is wrong. The correct answer is: ${question.answer}`;
   }
}

const randomQuestion = getRandomQuestion(questions); console.log("Question:", randomQuestion.question); 
console.log("Choices:", randomQuestion.choices); 
const computerChoice = getRandomComputerChoice(randomQuestion.choices); 
console.log("Computer's choice:", computerChoice); 
console.log(getResults(randomQuestion, computerChoice));

//end of script.js

