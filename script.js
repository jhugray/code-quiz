var quizContainer = document.getElementById("quiz");
var scores = document.getElementById("highscores");

var quizQuestions = [
  {
    question: "What colour is the sky?",
    possibleAnswers: {
      1: "Purple",
      2: "Green", 
      3: "Blue", 
      4: "Red"
    },
    answer: "2"
  },
  {
    question: "What animal goes moo?",
    possibleAnswers: {
      1: "Cow",
      2: "Horse", 
      3: "Dog", 
      4: "Unicorn"
    },
    answer: "1"
  },
  {
    question: "Which of the following is a fruit?",
    possibleAnswers: {
      1: "Diamond",
      2: "Sun", 
      3: "Pear", 
      4: "Broccoli"
    },
      
    answer: "3"
  },
  {
    question: "What colour is grass?",
    possibleAnswers: {
      1: "Purple",
      2: "Green", 
      3: "Blue", 
      4: "Red"
    },
    answer: "2"
  },
  {
    question: "What colour is a stop sign?",
    possibleAnswers: {
      1: "Purple",
      2: "Green", 
      3: "Blue", 
      4: "Red"
    },
    answer: "4"
  },
];

document.getElementById("startBtn").addEventListener("click", startGame);

function startGame() {
  var introContent = document.getElementById("quiz");
  introContent.remove();
}


