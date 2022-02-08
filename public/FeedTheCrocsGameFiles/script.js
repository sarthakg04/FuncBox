// FRONTEND FUNCTIONS at /FeedTheCrocsGame
// createGamepad();
// crocImage();
// createTopElements();
// createMiddleElements();
// createBottomElements();
// createOptions();
// countDown(60);
// startGame();
// createResetButton();

// function getNextCroc() {
// 	if (timeRemaining > 0) {
// 		nextQuestionNumber = generateNextQuestionNumber();
// 		currentQuestionAnswer = gameQuestions[nextQuestionNumber];
// 		crocImage(currentQuestionAnswer.background);
// 	}
// }

// function checkCorrectAnswer() {
// 	if (userAns == currentQuestionAnswer.answer) {
// 		score = score + 10;
// 	} else {
// 		score = score - 5;
// 	}
// 	updateScore();
// }

// Variables
const gameQuestions = [
	{
		id: "0",
		background:
			"https://ik.imagekit.io/funcboxImages/FeedTheCrocsGame/tr:w-500/background-0_o9TaE0PUk.png",
		angle:
			"https://ik.imagekit.io/funcboxImages/FeedTheCrocsGame/tr:w-500/angle-1.png",
		answer: "-",
	},
	{
		id: "1",
		background:
			"https://ik.imagekit.io/funcboxImages/FeedTheCrocsGame/tr:w-500/background-1_1Galn7dgFRS.png",
		angle:
			"https://ik.imagekit.io/funcboxImages/FeedTheCrocsGame/tr:w-500/angle-1.png",
		answer: "0",
	},
	{
		id: "2",
		background:
			"https://ik.imagekit.io/funcboxImages/FeedTheCrocsGame/tr:w-500/background-2_skyMrjs4j.png",
		angle:
			"https://ik.imagekit.io/funcboxImages/FeedTheCrocsGame/tr:w-500/angle-2.png",
		answer: "10",
	},
	{
		id: "3",
		background:
			"https://ik.imagekit.io/funcboxImages/FeedTheCrocsGame/tr:w-500/background-3_MxCN1wRA7.png",
		angle:
			"https://ik.imagekit.io/funcboxImages/FeedTheCrocsGame/tr:w-500/angle-3.png",
		answer: "20",
	},
	{
		id: "4",
		background:
			"https://ik.imagekit.io/funcboxImages/FeedTheCrocsGame/tr:w-500/background-4_NbwTn7bgAos.png",
		angle:
			"https://ik.imagekit.io/funcboxImages/FeedTheCrocsGame/tr:w-500/angle-4.png",
		answer: "35",
	},
	{
		id: "5",
		background:
			"https://ik.imagekit.io/funcboxImages/FeedTheCrocsGame/tr:w-500/background-5_MNQRIgJ14.png",
		angle:
			"https://ik.imagekit.io/funcboxImages/FeedTheCrocsGame/tr:w-500/angle-5.png",
		answer: "45",
	},
	{
		id: "6",
		background:
			"https://ik.imagekit.io/funcboxImages/FeedTheCrocsGame/tr:w-500/background-6_20XmgkHzpyQ.png",
		angle:
			"https://ik.imagekit.io/funcboxImages/FeedTheCrocsGame/tr:w-500/angle-6.png",
		answer: "60",
	},
	{
		id: "7",
		background:
			"https://ik.imagekit.io/funcboxImages/FeedTheCrocsGame/tr:w-500/background-7_kRWhFo06n.png",
		angle:
			"https://ik.imagekit.io/funcboxImages/FeedTheCrocsGame/tr:w-500/angle-7.png",
		answer: "90",
	},
];

let currentQuestionAnswer = gameQuestions[1];
let userAns = 0;
let score = 0;
let nextQuestionNumber = 1;
let timeRemaining = 60;

// Starting Game
function startGame() {
	crocImage(
		"https://ik.imagekit.io/funcboxImages/FeedTheCrocsGame/tr:w-500/background-0_o9TaE0PUk.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643784746614"
	);
	nextQuestionNumber = generateNextQuestionNumber();
	setTimeout(() => {
		score = 0;
		userAns = 0;
		document.getElementById("top-timer").style.visibility = "visible";
		document.getElementById("top-score").style.visibility = "visible";
		document.getElementById("bottom").style.visibility = "visible";
		document.getElementById("top-score").innerText = `Score: ${score}`;
		// console.log(nextQuestionNumber);
		currentQuestionAnswer = gameQuestions[nextQuestionNumber];
		crocImage(currentQuestionAnswer.background);
	}, 2000);
}

// Generating a Random Number from 2 to 7
function generateNextQuestionNumber() {
	return Math.floor(1 + Math.random() * 6);
}

// Checking for the Win/Lose
function updateScore() {
	// console.log("Game Answer = ", currentQuestionAnswer.answer);
	if (userAns == currentQuestionAnswer.answer) {
		document.getElementById("top-angle").style.visibility = "visible";
		document.getElementById(
			"top-angle"
		).style.backgroundImage = `url(${currentQuestionAnswer.angle})`;
	}
	document.getElementById("top-score").innerText = `Score: ${score}`;
	// console.log("Score = ", score);
	// console.log("Game Answer = ", currentQuestionAnswer.answer);

	setTimeout(() => {
		document.getElementById("top-angle").style.visibility = "hidden";
		document.getElementById("bottom").style.visibility = "visible";
		getNextCroc();
	}, 1500);
}

function createOptions() {
	const bottomCircle = document.querySelectorAll(".bottom-circle");
	// Setting onClick on each Circle at the Bottom bar
	bottomCircle.forEach((ele) => {
		ele.onclick = () => {
			// console.log(ele.innerText);
			userAns = ele.innerText;
			document.getElementById("bottom").style.visibility = "hidden";
			checkCorrectAnswer();
			// console.log("User Answer = ", userAns);
		};
	});
}

// Function for Timer
function countDown(num) {
	timeRemaining = num;
	// const d = new Date();
	document.getElementById("top-timer").innerHTML = num;
	num--;

	if (num < 0) {
		document.getElementById("top-timer").style.visibility = "hidden";
		document.getElementById("top-score").style.visibility = "hidden";
		document.getElementById("bottom").style.visibility = "hidden";
		if (score >= 75) {
			document.getElementById("score-win").innerText = `Score: ${score}`;
			document.getElementById("game-win").style.display = "block";
			crocImage(
				"https://ik.imagekit.io/funcboxImages/FeedTheCrocsGame/tr:w-500/background-9_XmdT5dwhDCG.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643784751429"
			);
		} else {
			document.getElementById("score-lose").innerText = `Score: ${score}`;
			document.getElementById("game-lose").style.display = "block";
			crocImage(
				"https://ik.imagekit.io/funcboxImages/FeedTheCrocsGame/tr:w-500/background-8_yUB92MNtZN.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643784751161"
			);
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
function crocImage(URL) {
	if (URL == undefined) {
		URL =
			"https://ik.imagekit.io/funcboxImages/FeedTheCrocsGame/tr:w-500/background-0_o9TaE0PUk.png";
	}
	document.getElementById("GamePad").style.backgroundImage = `url(${URL})`;
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
    <div class="bottom-circle" id="circle-1"><span class="bottom-circle-data">0</span></div>
    <div class="bottom-circle" id="circle-2"><span class="bottom-circle-data">5</span></div>
    <div class="bottom-circle" id="circle-3"><span class="bottom-circle-data">10</span></div>
    <div class="bottom-circle" id="circle-4"><span class="bottom-circle-data">20</span></div>
    <div class="bottom-circle" id="circle-5"><span class="bottom-circle-data">35</span></div>
    <div class="bottom-circle" id="circle-6"><span class="bottom-circle-data">45</span></div>
    <div class="bottom-circle" id="circle-7"><span class="bottom-circle-data">60</span></div>
    <div class="bottom-circle" id="circle-8"><span class="bottom-circle-data">90</span></div>
  `;

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
