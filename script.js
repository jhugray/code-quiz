var quizContainer = document.getElementById("mainContent");
var scores = document.getElementById("highscores");

var quizQuestions = [
  {
    question: "What colour is the sky?",
    possibleAnswers: [
      "1. Purple",
      "2. Green", 
      "3. Blue", 
      "4. Red"
    ],
    answer: "3. Blue"
  },
  {
    question: "What animal goes moo?",
    possibleAnswers: {
      1: "Cow",
      2: "Horse", 
      3: "Dog", 
      4: "Unicorn"
    },
    answer: 1
  },
  {
    question: "Which of the following is a fruit?",
    possibleAnswers: {
      1: "Diamond",
      2: "Sun", 
      3: "Pear", 
      4: "Broccoli"
    },
      
    answer: 3
  },
  {
    question: "What colour is grass?",
    possibleAnswers: {
      1: "Purple",
      2: "Green", 
      3: "Blue", 
      4: "Red"
    },
    answer: 2
  },
  {
    question: "What colour is a stop sign?",
    possibleAnswers: {
      1: "Purple",
      2: "Green", 
      3: "Blue", 
      4: "Red"
    },
    answer: 4
  },
];


document.getElementById("startBtn").addEventListener("click", startGame);

function startGame() {
  var introContent = document.getElementById("intro");
  introContent.remove();
  playGame();
}

function playGame() {
  var score = 0
  var questionEl = document.createElement("h2");
  questionEl.innerHTML = quizQuestions[0].question;
  document.getElementById("mainContent").appendChild(questionEl);
  for(var i=0; i < quizQuestions[0].possibleAnswers.length; i++) {
    var possibleAnsEl = document.createElement("button");
    possibleAnsEl.innerHTML = quizQuestions[0].possibleAnswers[i];
    document.getElementById("mainContent").appendChild(possibleAnsEl);

  
  // if (userAnswer === quizQuestions[i].answer) {
  //   score += 1;
  // }
  // else {
  
  //   }

  };
}





// remember prevent default


// display instructions w/button to start the game
// display the first question, with possible answers, and a link to scores, countdown timer is displayed and started
// take what possible answer they provided, compare it to the actual answer
// change the style of the selected possibel answer depending on whether it is correct, adjust time if false
// save the score (to local storage?)
// display next question, repeat until time is done
// display their final score, provide option to add their intiials to the leader board
// navigate option to leader board with scores saved in local storage

