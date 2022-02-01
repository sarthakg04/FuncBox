// FRONTEND FUNCTIONS at /FeedTheCrocsGame
// createGamepad();
// fillBackground(0);
// createTopElements();
// createMiddleElements();
// createBottomElements();
// createOptions();
// countDown(60);
// startGame();
// createResetButton();

// Variables
const gamePlay = [
	{ id: "0", background: "background-0", angle: "angle-1", answer: "" },
	{ id: "1", background: "background-1", angle: "angle-1", answer: "0" },
	{ id: "2", background: "background-2", angle: "angle-2", answer: "10" },
	{ id: "3", background: "background-3", angle: "angle-3", answer: "20" },
	{ id: "4", background: "background-4", angle: "angle-4", answer: "35" },
	{ id: "5", background: "background-5", angle: "angle-5", answer: "45" },
	{ id: "6", background: "background-6", angle: "angle-6", answer: "60" },
	{ id: "7", background: "background-7", angle: "angle-7", answer: "90" },
];

let gameAns = gamePlay[1];
let userAns = 0;
let score = 0;
let randomNumber = 1;
let time = 60;

// Create HTML
function createTopElements() {
	const mainContainer = document.getElementById("GamePad");
	let top = document.createElement("div");
	top.classList.add("top");
	let topTimer = document.createElement("div");
	topTimer.id = "top-timer";
	topTimer.classList.add("top-timer");
	topTimer.innerText = "60";
	let topScore = document.createElement("div");
	topScore.id = "top-score";
	topScore.classList.add("top-score");
	let topAngle = document.createElement("div");
	topAngle.id = "top-angle";
	top.appendChild(topTimer);
	top.appendChild(topScore);
	top.appendChild(topAngle);
	// console.log(top);
	mainContainer.appendChild(top);
}

function createMiddleElements() {
	const mainContainer = document.getElementById("GamePad");
	let middle = document.createElement("div");
	middle.classList.add("game-over");
	let gameLose = document.createElement("div");
	gameLose.id = "game-lose";
	let scoreLose = document.createElement("div");
	scoreLose.id = "score-lose";
	let resetBtn = document.createElement("button");
	resetBtn.id = "restart-btn";
	resetBtn.innerText = "Try Again";
	gameLose.appendChild(scoreLose);
	gameLose.appendChild(resetBtn);
	middle.appendChild(gameLose);
	let gameWin = document.createElement("div");
	gameWin.id = "game-win";
	let scoreWin = document.createElement("div");
	scoreWin.id = "score-win";
	let congratsDiv = document.createElement("div");
	congratsDiv.innerText = "Congratulations";
	let winSatisfied = document.createElement("div");
	winSatisfied.id = "game-win-satisfied";
	winSatisfied.innerText = "You have satisfied the croc!!";
	gameWin.appendChild(scoreWin);
	gameWin.appendChild(congratsDiv);
	gameWin.appendChild(winSatisfied);
	middle.appendChild(gameWin);
	// console.log(middle);
	mainContainer.appendChild(middle);
}

function createBottomElements() {
	const mainContainer = document.getElementById("GamePad");
	let bottom = document.createElement("div");
	bottom.classList.add("bottom");
	bottom.id = "bottom";
	bottom.innerHTML = `
    <div class="bottom-red"></div>
    <div class="bottom-circle" id="circle-1"><span class="bottom-circle-data">0</span></div>
    <div class="bottom-circle" id="circle-2"><span class="bottom-circle-data">5</span></div>
    <div class="bottom-circle" id="circle-3"><span class="bottom-circle-data">10</span></div>
    <div class="bottom-circle" id="circle-4"><span class="bottom-circle-data">20</span></div>
    <div class="bottom-circle" id="circle-5"><span class="bottom-circle-data">35</span></div>
    <div class="bottom-circle" id="circle-6"><span class="bottom-circle-data">45</span></div>
    <div class="bottom-circle" id="circle-7"><span class="bottom-circle-data">60</span></div>
    <div class="bottom-circle" id="circle-8"><span class="bottom-circle-data">90</span></div>
  `;
	// let bottomRed = document.createElement("div");
	// bottomRed.classList.add("bottom-red");
	// bottom.appendChild(bottomRed);
	// let bottomCircle1 = document.createElement("div");
	// bottomCircle1.classList.add("bottom-circle");
	// bottomCircle1.id = "circle1";
	// let bottomCircleData1 = document.createElement("span");
	// bottomCircleData1.classList.add("bottom-circle-data");
	// bottomCircleData1.innerText = "0";
	// bottomCircle1.appendChild(bottomCircleData1);
	// bottom.appendChild(bottomCircle1);
	// console.log(bottom);
	mainContainer.appendChild(bottom);
}

// Starting Game
function startGame() {
	setTimeout(() => {
		document.getElementById("top-timer").style.visibility = "visible";
		document.getElementById("top-score").style.visibility = "visible";
		document.getElementById("bottom").style.visibility = "visible";
		fillBackground(1);
		score = 0;
		gameAns = gamePlay[1];
		userAns = 0;
		randomNumber = 1;
	}, 2000);
}

// Generating a Random Number from 2 to 7
function generateRandomNumber() {
	return Math.floor(2 + Math.random() * 6);
}

// Checking for the Win/Lose
function checkCorrectAngle() {
	// console.log("Game Answer = ", gameAns.answer);
	if (userAns == gameAns.answer) {
		score = score + 10;
		document.getElementById("top-score").innerText = `Score: ${score}`;
		document.getElementById("top-angle").style.visibility = "visible";
		document.getElementById("top-angle").style.backgroundImage =
			"url(./FeedTheCrocsGameFiles/assets/angle-" + randomNumber + ".png)";
	} else {
		score = score - 5;
		document.getElementById("top-score").innerText = `Score: ${score}`;
	}
	console.log("Score = ", score);
	console.log("Game Answer = ", gameAns.answer);

	setTimeout(() => {
		document.getElementById("top-angle").style.visibility = "hidden";
		newFood();
	}, 3000);
}

// Generating a new Question
function newFood() {
	if (time > 0) {
		randomNumber = generateRandomNumber();
		gameAns = gamePlay[randomNumber];
		fillBackground(randomNumber);
	}
}

function createOptions() {
	const bottomCircle = document.querySelectorAll(".bottom-circle");
	// Setting onClick on each Circle at the Bottom bar
	bottomCircle.forEach((ele) => {
		ele.onclick = () => {
			// console.log(ele.innerText);
			userAns = ele.innerText;
			checkCorrectAngle();
			console.log("User Answer = ", userAns);
		};
	});
}

// Function for Timer
function countDown(num) {
	time = num;
	// const d = new Date();
	document.getElementById("top-timer").innerHTML = num;
	num--;

	if (num < 50) {
		document.getElementById("top-timer").style.visibility = "hidden";
		document.getElementById("top-score").style.visibility = "hidden";
		document.getElementById("bottom").style.visibility = "hidden";
		if (score >= 75) {
			document.getElementById("score-win").innerText = `Score: ${score}`;
			document.getElementById("game-win").style.display = "block";
			fillBackground(9);
		} else {
			document.getElementById("score-lose").innerText = `Score: ${score}`;
			document.getElementById("game-lose").style.display = "block";
			fillBackground(8);
		}
	} else {
		setTimeout(() => {
			countDown(num);
		}, 1000);
	}
}

// Function to create GamePad
function createGamepad() {
	document.getElementsByTagName("body")[0].innerHTML += `
    <div class="GamePad" id="GamePad">
    </div>
  `;
}

// Function to Fill background
function fillBackground(num) {
	if (num == undefined) {
		num = "0";
	}

	document.getElementById("GamePad").style.backgroundImage =
		"url(./FeedTheCrocsGameFiles/assets/background-" + num + ".png)";
}

// Restart the Game Button
function createResetButton() {
	document.getElementById("restart-btn").addEventListener("click", () => {
		document.getElementById("game-lose").style.display = "none";
		startGame();
		setTimeout(() => {
			countDown(60);
		}, 3000);
	});
}
