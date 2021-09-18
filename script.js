var quizContainer = document.getElementById("mainContent");
var timerEl = document.getElementById("timer");
var score = 0;
var timeLeft= 60;
var currentQuestionNumber = 0;
var playerName = "";

// Var holding the quiz content incl questions, possible answers, and the answer
var quizQuestions = [
  {
    question: "What would you typically name the primary HTML document?",
    possibleAnswers: [
      "1. main.html",
      "2. html.html", 
      "3. index.html", 
      "4. html.index"
    ],
    answer: "3. index.html"
  },
  {
    question: "How would you reference the ID of 'abc' in the CSS file?",
    possibleAnswers: [
      "1. #abc",
      "2. ID = 'abc'", 
      "3. .abc", 
      "4. class.abc"
    ],
    answer: "1. #abc"
  },
  {
    question: "What is shortform name for javascript?",
    possibleAnswers: [
      "1. Java",
      "2. JQuery",
      "3. All of the above",
      "4. None of the above"
    ],

    answer: "4. None of the above"
  },
  {
    question: "What does CSS stand for?",
    possibleAnswers: [
      "1. Canadian style selector",
      "2. Cascading style sheets", 
      "3. Coded style sheet", 
      "4. Code syntax stylized"
    ],
    answer: "2. Cascading style sheets"
  },
  {
    question: "What does HTML stand for?",
    possibleAnswers: [
      "1. Holland technical margin layout",
      "2. Hyper toddler mania language", 
      "3. HyperText mozilla layout", 
      "4. HyperText markup language"
    ],
    answer: "4. HyperText markup language"
  },
  {
    question: "Which tag would you use for Javascript in HTML?",
    possibleAnswers: [
      "1. &lt;java&gt;&lt;/java&gt;",
      "2. &lt;script&gt;&lt;/script&gt;", 
      "3. &lt;javascript&gt;&lt;/javascript&gt;", 
      "4. &lt;js&gt;&lt;/js&gt;"
    ],
    answer: "2. &lt;script&gt;&lt;/script&gt;"
  },
  {
    question: "How do you make comments in CSS",
    possibleAnswers: [
      "1. /* comment line */",
      "2. ** comment line **", 
      "3. &lt;!-- comment line -->", 
      "4. // comment line //"
    ],
    answer: "1. /* comment line */"
  },
  {
    question: "What would the output for Math.floor(1.8) be?",
    possibleAnswers: [
      "1. 2",
      "2. null", 
      "3. 1", 
      "4. 1, 8"
    ],
    answer: "3. 1"
  },
  {
    question: "What does DOM stand for?",
    possibleAnswers: [
      "1. Document original markup",
      "2. Detailed organized model", 
      "3. Document object model", 
      "4. None of the above"
    ],
    answer: "3. Document object model"
  },
];

// countdown 

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

//time penalty function to be called when a wrong answer is given

function timePenalty() {
  timeLeft = timeLeft-10;
}

//start game function, to be called when start button is clicked, in order to get rid of main page info and display question
function startGame() {
  var introContent = document.getElementById("intro");
  introContent.remove();
  setGameQuestion();
  countdown();
}

// cycles through the different questions, when they are all done it tskes you to the score page
function nextQuestion() {
  if (timeLeft == 0){
    return;
  }
  quizContainer.innerHTML= "";
  currentQuestionNumber ++;
  if (currentQuestionNumber >= quizQuestions.length) {
    scorePage();
  } else {
    setGameQuestion();
  }
}

// function to display the questions and process the answers given

function setGameQuestion() {
  var questionEl = document.createElement("h2");
  questionEl.innerHTML = quizQuestions[currentQuestionNumber].question;
  document.getElementById("mainContent").appendChild(questionEl);
  for(var i=0; i < quizQuestions[currentQuestionNumber].possibleAnswers.length; i++) {
    console.log(quizQuestions[currentQuestionNumber].possibleAnswers[i]);
    var possibleAnsEl = document.createElement("button");
    possibleAnsEl.setAttribute("class", "btnans");
    possibleAnsEl.innerHTML = quizQuestions[currentQuestionNumber].possibleAnswers[i];
    document.getElementById("mainContent").appendChild(possibleAnsEl);
  
    if (quizQuestions[currentQuestionNumber].possibleAnswers[i] === quizQuestions[currentQuestionNumber].answer) {
      possibleAnsEl.addEventListener("click", function(event) {
        score += 1;
        event.target.style.backgroundColor = "#4dff4d";
        event.target.textContent += " ✅ ";
        console.log("correct");
        disableButtons();
        setTimeout(nextQuestion, 3000);
      });
    }

    else {
      possibleAnsEl.addEventListener("click", function(event) {
        event.target.style.backgroundColor = " #ff8080";
        event.target.textContent += " ❌";
        console.log("wrong");
        disableButtons();
        timePenalty();
        setTimeout(nextQuestion, 3000);
      });
    }
  }
}

// prevents multple clicks once an answer is given
function disableButtons() {
  var possibleAnsBtn = document.querySelectorAll(".btnans");
  for (var i=0; i < possibleAnsBtn.length; i++) {
    possibleAnsBtn[i].disabled = true; 
  };
}

// function to exit to score page at any time
function exitToScores() {
  var exit = confirm("Are you sure you want to exit the quiz?");
  if (exit == true) {
    quizContainer.innerHTML = "";
    scorePage();
  } else {}
}

// score page with function to provide intiials 
function scorePage() {
  var highScoreEl= document.createElement("h2");
  document.getElementById("mainContent").appendChild(highScoreEl);
  highScoreEl.innerHTML = "All Done! <br /> <br /> Your final score is: " + score;
  var playerNameForm = document.createElement("form");
  var playerNameLabel = document.createElement("label");
  var playerNameInput = document.createElement("input");
  playerNameInput.setAttribute("id", "nameInput");
  var playerNameSubmit = document.createElement("input");
  playerNameForm.appendChild(playerNameLabel);
  playerNameForm.appendChild(playerNameInput);
  playerNameForm.appendChild(playerNameSubmit);
  document.getElementById("mainContent").appendChild(playerNameForm);
  playerNameLabel.innerHTML = "Please enter your initials: ";
  playerNameSubmit.setAttribute("type", "submit");
  playerNameSubmit.addEventListener("click", function(event){
      event.preventDefault();
      playerInitials();
    });
  leaderBoard();
}


function playerInitials() { 
  var savedPlayerInfo = JSON.parse(localStorage.getItem("playerInfo")) || [];
  savedPlayerInfo.push({
    initials: document.getElementById("nameInput").value,
    score: score
  })
  savedPlayerInfo.sort(function(a, b){return b.score-a.score});
  localStorage.setItem("playerInfo", JSON.stringify(savedPlayerInfo));
  document.querySelector("form").remove();
  document.querySelector("table").remove();
  document.querySelector("h3").remove();
  leaderBoard();
}



function leaderBoard() {
  var highScoreHeaderEl = document.createElement("h3");
  document.getElementById("mainContent").appendChild(highScoreHeaderEl);
  highScoreHeaderEl.textContent = "Leader Board";
  var leaderBoardTableEl = document.createElement("table");
  var leaderBoardTBodyEl = document.createElement("tbody");
  leaderBoardTableEl.appendChild(leaderBoardTBodyEl);
  document.getElementById("mainContent").appendChild(leaderBoardTableEl);
  var savedPlayerInfo = JSON.parse(localStorage.getItem("playerInfo")) || [];
  for (var i=0; i < savedPlayerInfo.length; i++) {
    leaderBoardTBodyEl.innerHTML += "<tr><td>"+ savedPlayerInfo[i].initials + "</td><td> " + savedPlayerInfo[i].score +"</td></tr>";
  }
}


document.getElementById("highscores").addEventListener("click", exitToScores);

document.getElementById("startBtn").addEventListener("click", startGame);



