var quizContainer = document.getElementById("mainContent");
// var scores = document.getElementById("highscores");
var timerEl = document.getElementById("timer");
var score = 0;
var timeLeft= 60;
var currentQuestionNumber = 0;

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
    possibleAnswers: [
      "1. Cow",
      "2. Horse", 
      "3. Dog", 
      "4. Unicorn"
    ],
    answer: "1. Cow"
  },
  {
    question: "Which of the following is a fruit?",
    possibleAnswers: [
      "1. Broccoli",
      "2. Lamp",
      "3. Pear",
      "4. Spaghetti"
    ],

    answer: "3. Pear"
  },
  {
    question: "What colour is grass?",
    possibleAnswers: [
      "1. Purple",
      "2. Green", 
      "3. Blue", 
      "4. Red"
    ],
    answer: "2. Green"
  },
  {
    question: "What colour is a stop sign?",
    possibleAnswers: [
      "1. Purple",
      "2. Green", 
      "3. Blue", 
      "4. Red"
    ],
    answer: "4. Red"
  },
];

function countdown(){
  var timerInterval = setInterval(function() {
   if (timeLeft >1) {
      timerEl.textContent = timeLeft + ' seconds remaining';
      timeLeft --;
    } else if (timeLeft === 1) {
     timerEl.textContent = timeLeft + ' second remaining';
      timeLeft --;
    } else {
      timerEl.textContent = 'You are out of time :(';
      clearInterval(timerInterval);
      quizContainer.innerHTML="";
      scorePage();
    }
  }, 1000);
}

function timePenalty() {
  timerEl.textContent = timeLeft-10;
}

function startGame() {
  var introContent = document.getElementById("intro");
  introContent.remove();
  setGameQuestion();
  countdown();
}

function nextQuestion() {
  quizContainer.innerHTML= "";
  currentQuestionNumber ++;
  if (currentQuestionNumber >= quizQuestions.length) {
    scorePage();
  } else {
    setGameQuestion();
  }
}


function setGameQuestion() {
  var questionEl = document.createElement("h2");
  questionEl.innerHTML = quizQuestions[currentQuestionNumber].question;
  document.getElementById("mainContent").appendChild(questionEl);
  for(var i=0; i < quizQuestions[currentQuestionNumber].possibleAnswers.length; i++) {
    console.log(quizQuestions[currentQuestionNumber].possibleAnswers[i]);
    var possibleAnsEl = document.createElement("button");
    possibleAnsEl.innerHTML = quizQuestions[currentQuestionNumber].possibleAnswers[i];
    document.getElementById("mainContent").appendChild(possibleAnsEl);
  
    if (quizQuestions[currentQuestionNumber].possibleAnswers[i] === quizQuestions[currentQuestionNumber].answer) {
      possibleAnsEl.addEventListener("click", function(event) {
        score += 1;
        event.target.style.backgroundColor = "#4dff4d";
        event.target.textContent += " ✅ ";
        console.log("correct");
        setTimeout(nextQuestion, 3000);
        saveScore();
      });
    }

    else {
      possibleAnsEl.addEventListener("click", function(event) {
        event.target.style.backgroundColor = " #ff8080";
        event.target.textContent += " ❌";
        console.log("wrong");
        timePenalty();
        setTimeout(nextQuestion, 3000);
      });
    }
  }
}

function exitToScores() {
  var exit = confirm("Are you sure you want to exit the quiz?");
  if (exit == true) {
    quizContainer.innerHTML = "";
    scorePage();
  } else {}
}

function scorePage() {
  var highScoreEl= document.createElement("h2");
  document.getElementById("mainContent").appendChild(highScoreEl);
  highScoreEl.innerHTML = "All Done! <br /> <br /> Your final score is: " + score;
}

function saveScore() {
  localStorage.setItem("score", score);
}

document.getElementById("highscores").addEventListener("click", exitToScores);

document.getElementById("startBtn").addEventListener("click", startGame);



// remember prevent default
// remove event lsitener/ prevent multiple clicks??? 
/// countdown time penalty???


// display instructions w/button to start the game
// display the first question, with possible answers, and a link to scores, countdown timer is displayed and started
// take what possible answer they provided, compare it to the actual answer
// change the style of the selected possibel answer depending on whether it is correct, adjust time if false
// save the score (to local storage?)
// display next question, repeat until time is done
// display their final score, provide option to add their intiials to the leader board
// navigate option to leader board with scores saved in local storage
