var question = document.getElementById("question");
var answerChoices = Array.from(document.getElementsByClassName("optiontext"));
var timeCounter = document.getElementById("timecounter");
var scoreCounter = document.getElementById("scorecounter");
var result = document.getElementById("result");

var scoreValue = 0;
var currentQuestion = {};
var acceptAnswers = false;
var questionsRemaining = [];

var correctPoints = 5;
var totalQuestions = 6;

var timeValue = 30;
var time = setInterval(myTimer, 1000);

function myTimer() {
    timeCounter.innerHTML = timeValue + " sec left";
    timeValue--;
    if (timeValue == -1) {
        clearInterval(time);
        alert("Sorry You ran out of Time!! :(");
        return window.location.assign("highscores.html");
    }
}

var listOfQuestions = [
    {
      question: "Inside which HTML element do we put the JavaScript??",
      option1: "<script>",
      option2: "<javascript>",
      option3: "<js>",
      option4: "<scripting>",
      answer: 1
    },
    {
      question:"What is the correct syntax for referring to an external script called 'xxx.js'?",
      option1: "<script href='xxx.js'>",
      option2: "<script name='xxx.js'>",
      option3: "<script src='xxx.js'>",
      option4: "<script file='xxx.js'>",
      answer: 3
    },
    {
      question: " How do you write 'Hello World' in an alert box?",
      option1: "msgBox('Hello World');",
      option2: "alertBox('Hello World');",
      option3: "msg('Hello World');",
      option4: "alert('Hello World');",
      answer: 4
    },
    {
      question: "Inside which HTML element do we put the JavaScript??",
      option1: "<script>",
      option2: "<javascript>",
      option3: "<js>",
      option4: "<scripting>",
      answer: 1
    },
    {
      question:"What is the correct syntax for referring to an external script called 'xxx.js'?",
      option1: "<script href='xxx.js'>",
      option2: "<script name='xxx.js'>",
      option3: "<script src='xxx.js'>",
      option4: "<script file='xxx.js'>",
      answer: 3
    },
    {
      question: " How do you write 'Hello World' in an alert box?",
      option1: "msgBox('Hello World');",
      option2: "alertBox('Hello World');",
      option3: "msg('Hello World');",
      option4: "alert('Hello World');",
      answer: 4
    }
];

function beginQuiz(){
    scoreValue = 0;
    questionsRemaining = [...listOfQuestions];
    console.log(questionsRemaining);
    nextQuestion();
} 

function nextQuestion(){
    if (questionsRemaining.length === 0)
    return window.location.assign("highscores.html");
    localStorage.setItem("recentScore", scoreValue);
    var questionNumber = Math.floor(Math.random()* questionsRemaining.length);
    currentQuestion = questionsRemaining[questionNumber];
    // console.log(currentQuestion);
    question.innerText = currentQuestion.question;

    answerChoices.forEach(answer => {
        var num = answer.dataset["number"];
        answer.innerText = currentQuestion["option" + num];
    })
    questionsRemaining.splice(questionNumber, 1);
    acceptAnswers = true;
};

answerChoices.forEach(answer => {
    answer.addEventListener("click", function(event){
        if(!acceptAnswers) return;

        acceptAnswers = false;
        var selection = event.target;
        var myAnswer = selection.dataset["number"];

        var yourChoice;
        if(myAnswer == currentQuestion.answer){
            yourChoice = "Correct"
            result.style.display = "block";
            result.innerText = ("You are " + yourChoice);
            setTimeout(function(){
            result.style.display = "none";
            },500);
        }else{
            yourChoice = "Incorrect"
            result.style.display = "block";
            result.innerText = ("You are " + yourChoice);
            setTimeout(function(){
            result.style.display = "none";
            },500);
        }
        if(yourChoice === 'Correct'){
            myScore(correctPoints);
        };

        nextQuestion();
    })
})

function myScore(number){
    scoreValue += number;
    scoreCounter.innerText = ("Score: " + scoreValue);
};

beginQuiz();
