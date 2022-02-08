//FRONTEND CODE
// const ques={
//     "8+x=16":8,
//     "2x-8=6":7,
//     "x-10=0":10,
//     "4+3x=7":1,
//     "2x+5=9":2,
//     "4x-4=16":5,
//     "9+2x=17":4,
//     "6+2x=24":9,
//     "3x-6=3":3,
//     "3x+5=23":6
// }
// var score=0;
// createGamepad();
// fillBackground();
// setQuestions();
// addBall();
// displayQuestion();
// showOptions();
// createScore();
// function optionClick(){
//     if (clickedOption==correctAnsewr){
//         score+=10;
//         getCorrectAnswer();
//     }
//     else{
//         getWrongAnswer();
//     }
//     setAnotherQuestion();
// }

var questionIndex=0;
function createGamepad() {
    document.getElementsByTagName('body')[0].innerHTML += `
    <div class="GamePad" id="GamePad">
    </div>`

}

function fillBackground(){
    document.getElementsByClassName('GamePad')[0].style.backgroundImage =  "url('./BasketballGameFiles/assets/bg2.png')";
}

function addBall(){
    document.getElementsByClassName('GamePad')[0].innerHTML=`<div class="balls" id="allBalls">
    <div id="ball1" class="ball">
        <img src="./BasketballGameFiles/assets/ball.png" >
        <h1 id="option1" onclick="[getClickedAnswer(this.id),optionClick(this.id),scoreBoard()]"></h1>
    </div>
    <div id="ball2" class="ball">
        <img src="./BasketballGameFiles/assets/ball.png">
        <h1 id="option2" onclick="[getClickedAnswer(this.id),optionClick(this.id),scoreBoard()]"></h1>
    </div>
    <div id="ball3" class="ball">
        <img src="./BasketballGameFiles/assets/ball.png">
        <h1 id="option3" onclick="[getClickedAnswer(this.id),optionClick(this.id),scoreBoard()]"></h1>
    </div>
    </div>`;   
    document.getElementsByClassName('GamePad')[0].innerHTML+=`<div id="rest2">
    <img src="./BasketballGameFiles/assets/restart.png" onclick="restart()">`;

    
}

function displayQuestion(){
    document.getElementsByClassName('GamePad')[0].innerHTML+=`<div id="questionDisp"><h1></h1></div>`;
    document.getElementById('questionDisp').innerHTML=`<h1>${questions[questionIndex]}</h1>`;
    
}

function showOptions(){
    var randomNumberOne=Math.floor((Math.random() * 100) + 1);
    var randomNumberTwo=Math.floor((Math.random() * 100) + 1);
    var options=[ans[questionIndex],randomNumberOne,randomNumberTwo]
    var shuffledOptions = options.sort((a, b) => 0.5 - Math.random());
    document.getElementById("option1").innerText=`${shuffledOptions[0]}`
    document.getElementById("option2").innerText=`${shuffledOptions[1]}`
    document.getElementById("option3").innerText=`${shuffledOptions[2]}`  
}
function restart(){
    questionIndex=0;
    score=0;
    fillBackground();
    setQuestions();
    addBall();
    displayQuestion();
    showOptions();
    createScore();
}

var stat=true;
var optionAns="";
var anns="";


function createScore(){
    // if(questions.length+1==questionIndex)
    document.getElementsByClassName('GamePad')[0].innerHTML+=`<div id="scoreDisplay"></div>`;
    document.getElementsByClassName('GamePad')[0].innerHTML+=`<div id="answerBall">
    <img src="./BasketballGameFiles/assets/ball.png">
    <h1 id="answerBallData"></h1>
</div>`;
    document.getElementById("scoreDisplay").style.display="none";
    document.getElementById("answerBall").style.display="none";
}
function scoreBoard(){
    setTimeout(nextQuestion,2000);
    document.getElementById("allBalls").style.display="none";
    document.getElementById("scoreDisplay").style.display="flex";
    if(stat){
        document.getElementById('scoreDisplay').innerHTML=`<h3>Score: ${score}</h3><h1>Correct Answer</h1>`;
        document.getElementById("answerBall").style.display="flex";
        document.getElementById("answerBallData").innerText=`${anns}`;
    }
    else{
        document.getElementById('scoreDisplay').innerHTML=`<h3>Score: ${score}</h3><h1>Wrong Answer</h1>`;
    }
}
function nextQuestion(){
    document.getElementById("scoreDisplay").style.display="none";
    document.getElementById("answerBall").style.display="none";
    document.getElementById("allBalls").style.display="flex";
    if(questions.length==questionIndex){
        document.getElementsByClassName('GamePad')[0].style.backgroundImage =  "url('./BasketballGameFiles/assets/Gameover.png')";
        document.getElementsByClassName('GamePad')[0].innerHTML=`<div class="gameOver">
        <h1>Game Over</h1>
        <h2>Your Score</h2>
        <h3>${score}</h3>
        
    </div>`
    document.getElementsByClassName('GamePad')[0].innerHTML+=`<div id="rest2">
    <img src="./BasketballGameFiles/assets/restart.png" onclick="restart()">
</div>`;
    }
}

let questions=[];
let ans=[];
function setQuestions(){
    questions=Object.keys(ques);
    ans =Object.values(ques)
}
var clickedOption="";
var correctAnsewr="";
function getClickedAnswer(clickedId){
    clickedOption=document.getElementById(clickedId).innerText;
    correctAnsewr=ans[questionIndex];
}
function getCorrectAnswer(){
    stat=true;
    anns=clickedOption;
}
function getWrongAnswer(){
    stat=false;
}
function setAnotherQuestion(){
    questionIndex++;
    displayQuestion();
    showOptions();
}




// const ques={
//     "8+x=16":8,
//     "2x-8=6":7,
//     "x-10=0":10,
//     "4+3x=7":1,
//     "2x+5=9":2,
//     "4x-4=16":5,
//     "9+2x=17":4,
//     "6+2x=24":9,
//     "3x-6=3":3,
//     "3x+5=23":6
// }
// var score=0;
// createGamepad();
// fillBackground();
// setQuestions();
// addBall();
// displayQuestion();
// showOptions();
// createScore();
// function optionClick(){
//     if (clickedOption==correctAnsewr){
//         score+=10;
//         getCorrectAnswer();
//     }
//     else{
//         getWrongAnswer();
//     }
//     setAnotherQuestion();
// }