//FRONTEND FUNCTIONS
// createGamepad();
// fillBackground();
// createLogo();
// createComponent();
// function calculateResult(num,clickedBtn) {
//     if (clickedBtn=="even" && num%2==0){
//       return "You are Correct";
//     }
//   else if (clickedBtn=="even" && num%2!=0){
//       return "You are Wrong";
//     }
//   else if (clickedBtn=="odd" && num%2!=0){
//       return "You are Correct";
//     }
//   else if (clickedBtn=="odd" && num%2==0){
//       return "You are Wrong";
//     }
// }

//Styling if the number is Even
function calculateEven() {
    let num = parseInt(document.getElementById('randomNumber').innerHTML);
    let clickedBtn = 'even';
    let status = calculateResult(num, clickedBtn);


    if (status.includes("written")) {
        document.getElementById("result").innerHTML = `<div class="ans">
        <img class="sign" src="assets/error.png">
        <h2>${calculateResult(num, clickedBtn)}</h2>
    </div><h3 class="extraLine">Please Write Function to check either the number is even or odd</h3>`
    }

    else if (status.includes("Correct")) {
        document.getElementById("result").innerHTML = `<div class="ans">
        <img class="sign" src="assets/correct.png">
        <h2>${calculateResult(num, clickedBtn)}</h2>
    </div><h3 class="extraLine">The number ${num} is Even.</h3>`;
        document.getElementById("result").style.color = "green";
    }

    else {
        document.getElementById("result").innerHTML = `<div class="ans">
        <img class="sign" src="assets/remove.png">
        <h2>${calculateResult(num, clickedBtn)}</h2>
    </div><h3>The number ${num} is Odd.</h3>`;
        document.getElementById("result").style.color = "red";

    }
}


//Styling if the number is Odd
function calculateOdd() {
    let num = parseInt(document.getElementById('randomNumber').innerHTML);
    let clickedBtn = 'odd';
    let status = calculateResult(num, clickedBtn);
    console.log(status.includes("Correct"));

    if (status.includes("written")) {
        document.getElementById("result").innerHTML = `<div class="ans">
        <img class="sign" src="assets/error.png">
        <h2>${calculateResult(num, clickedBtn)}</h2>
    </div><h3 class="extraLine">Please Write Function to check either the number is even or odd</h3>`
    }

    else if (status.includes("Correct")) {
        document.getElementById("result").innerHTML = `<div class="ans">
        <img class="sign" src="assets/correct.png">
        <h2>${calculateResult(num, clickedBtn)}</h2>
    </div><h3>The number ${num} is Odd.</h3>`;
        document.getElementById("result").style.color = "green";
    }

    else {
        document.getElementById("result").innerHTML = `<div class="ans">
        <img class="sign" src="assets/remove.png">
        <h2>${calculateResult(num, clickedBtn)}</h2>
    </div><h3>The number ${num} is Even.</h3>`;
        document.getElementById("result").style.color = "red";
    }
}

function calculateResult(num, clickedBtn) {
    return "Function is not written by user";
}


function createGamepad() {
    document.getElementsByTagName('body')[0].innerHTML += `
    <div class="GamePad" id="GamePad">
    </div>`
    console.log(document.getElementById("GamePad"));
}


function fillBackground() {
    document.getElementById("GamePad").style.backgroundImage = "url('assets/background3.jpg')";
    // background = '.';
    // // if (background == undefined) {
    // //     background = 'background.svg'
    // // }

    // document.getElementById('GamePad').style.backgroundImage = `url("./EvenOdd/assets/ + ${background} +.jpeg")`;
}


function createLogo() {
    document.getElementById('GamePad').innerHTML +=
        `
    <div class="logo" id="logo">
        <img src="assets/logo.png" alt="">
    </div>
    `
}


function createComponent() {
    document.getElementById('GamePad').innerHTML += `
    
    <div class="score">
    <span><h2>Number: </h2></span><span><h2 id="randomNumber">${Math.floor(Math.random() * 10000) + 1}</h2></span>
    </div>
    <div id="result"></div>
    <div class="inputs">
        <button type="button" name="button" onclick="calculateEven()">Even</button>
        <button type="button" name="button" onclick="calculateOdd()">Odd</button>
    </div>
  
    `
}






var questionIndex=0;
function createGamepad() {
    document.getElementsByTagName('body')[0].innerHTML += `
    <div class="GamePad" id="GamePad">
    </div>`
    console.log(document.getElementById("GamePad"));
    console.log("Gamepad Created");
}

function fillBackground(){
    document.getElementsByClassName('GamePad')[0].style.backgroundImage =  "url('./BasketballGameFiles/assets/bg2.png')";
    console.log("Backgrouncd created");
}

function addBall(){
    document.getElementsByClassName('GamePad')[0].innerHTML=`<div class="balls" id="allBalls">
    <div id="ball1" class="ball">
        <img src="./BasketballGameFiles/assets/ball.png" >
        <h1 id="option1" onclick="[optionClick(this.id),scoreBoard()]"></h1>
    </div>
    <div id="ball2" class="ball">
        <img src="./BasketballGameFiles/assets/ball.png">
        <h1 id="option2" onclick="[optionClick(this.id),scoreBoard()]"></h1>
    </div>
    <div id="ball3" class="ball">
        <img src="./BasketballGameFiles/assets/ball.png">
        <h1 id="option3" onclick="[optionClick(this.id),scoreBoard()]"></h1>
    </div>
</div>`;   
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

var stat=true;
var optionAns="";
var anns="";


function createScore(){
    console.log("Score",optionAns);
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
}

function createLogic(ans) {
    return "Function is not written by user";
}
let questions=[];
let ans=[];
function setQuestions(){
    questions=Object.keys(ques);
    ans =Object.values(ques)
}


const ques={
    "8+x=16":8,
    "2x-8=6":7,
    "x-10=0":10,
    "4+3x=7":1,
    "2x+5=9":2,
    "4x-4=16":5,
    "9+2x=17":4,
    "6+2x=24":9,
    "3x-6=3":3,
    "3x+5=23":6
}
var score=0;
createGamepad();
fillBackground();
setQuestions();
addBall();
displayQuestion();
showOptions();
createScore();
function optionClick(clickedAns){
    optionAns=document.getElementById(clickedAns).innerText;
    if (optionAns==ans[questionIndex]){
        stat=true;
        score+=10;
        anns=optionAns;
    }
    else{
        stat=false;
    }
    questionIndex++;
    displayQuestion();
    showOptions();
}
