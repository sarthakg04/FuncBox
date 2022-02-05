// FRONTEND FUNCTIONS at /DeciChemistGame
// createGamepad();
// createTopElements();
// createMiddleElements();
// createBottomElements();
// fillBackground();
// startGame();
// createStartButton();
// setSelectedColor();
// setSelectedOption();
//
// function generateRandomNumber() {
// 	let a = Math.floor(1 + Math.random() * 9);
// 	let b = Math.floor(1 + Math.random() * 9);
// 	let c = Math.floor(1 + Math.random() * 9);
// 	ans = `${a}.${b}${c}`;
// 	chooseRandomColor();
// }
//

// Variables
let ans = 0;
let color = "";
let userAns = 0;
let selectedColor = "";
let correctAns = 0;

// Generating a Random color
function chooseRandomColor() {
	userAns = 0;
	document.getElementById("middle-ans").innerHTML = `0 ml`;
	document.getElementById("middle-beaker-pink").style.height = "0";
	document.getElementById("middle-beaker-green").style.height = "0";
	document.getElementById("middle-beaker-red").style.height = "0";
	document.getElementById("middle-beaker-blue").style.height = "0";

	selectedColor = "";
	var colorOptions = ["pink", "green", "red", "blue"];
	var num = Math.floor(Math.random() * 3);
	color = colorOptions[num];
	document.getElementById(
		"top-board-ques"
	).innerHTML = `Add ${ans} ml of ${color} solution`;
	// console.log("Color = ", color);
}

// Starting Game
function startGame() {
	setTimeout(() => {
		fillBackground(
			"https://ik.imagekit.io/funcboxImages/DeciChemistGame/tr:w-500/2.png"
		);
		document.getElementById("bottom-startBtn").style.display = "block";
		document.getElementById("top-board-ques").style.visibility = "visible";
		document.getElementById(
			"top-board-ques"
		).innerHTML = `3 correct answer to Win`;
		const topImgEle = document.getElementsByClassName("top-color-img");
		for (let i = 0; i < topImgEle.length; i++) {
			topImgEle[i].style.visibility = "visible";
		}
	}, 3000);
}

// Starting Game
function createStartButton() {
	document.getElementById("bottom-startBtn").addEventListener("click", () => {
		// console.log("Starting Game");
		generateRandomNumber();
		document.getElementById("top-board-timer").style.visibility = "visible";
		document.getElementById("middle-ans").style.visibility = "visible";
		countDown(60);
		document.getElementById("bottom-startBtn").style.display = "none";
		const bottomOptionEle = document.getElementsByClassName("btn-option");
		for (let i = 0; i < bottomOptionEle.length; i++) {
			bottomOptionEle[i].style.display = "block";
		}
	});
}

// Replay Game
function createResetButton() {
	const bottomOptionEle = document.getElementsByClassName("btn-option");
	for (let i = 0; i < bottomOptionEle.length; i++) {
		bottomOptionEle[i].style.display = "none";
	}
	document.getElementById("bottom-resetBtn").style.display = "block";
	document.getElementById("bottom-resetBtn").addEventListener("click", () => {
		// console.log("Restarting Game");
		document.getElementById("bottom-resetBtn").style.display = "none";
		correctAns = 0;
		generateRandomNumber();
		countDown(60);
		for (let i = 0; i < bottomOptionEle.length; i++) {
			bottomOptionEle[i].style.display = "block";
		}
	});
}

// Timer
function countDown(num) {
	document.getElementById("top-board-timer").innerHTML = num;
	num--;

	if (num < 0) {
		createResetButton();
		// console.log("Correct Answer = ", correctAns);
		if (correctAns >= 3) {
			document.getElementById(
				"top-board-ques"
			).innerHTML = `${correctAns} Correct Answer. You Won!!!`;
		} else {
			document.getElementById(
				"top-board-ques"
			).innerHTML = `Only ${correctAns} Correct Answer. TRY AGAIN!!!`;
		}
	} else {
		setTimeout(() => {
			countDown(num);
		}, 1000);
	}
}

function fillColor() {
	var pink = document.getElementById("middle-beaker-pink");
	var green = document.getElementById("middle-beaker-green");
	var red = document.getElementById("middle-beaker-red");
	var blue = document.getElementById("middle-beaker-blue");

	if (color == "pink") {
		pink.style.height = `${userAns * 7}px`;
	} else if (color == "green") {
		green.style.height = `${userAns * 7}px`;
	} else if (color == "red") {
		red.style.height = `${userAns * 7}px`;
	} else if (color == "blue") {
		blue.style.height = `${userAns * 7}px`;
	}
}

// Update the ans after clicking on Option
function updateAns(num) {
	userAns = userAns + num;
	var rounded = Math.round((userAns + Number.EPSILON) * 100) / 100;
	document.getElementById("middle-ans").innerHTML = `${rounded} ml`;
	fillColor();
	// console.log("Updated Answer = ", rounded);
	if (selectedColor != color) {
		document.getElementById(
			"top-board-ques"
		).innerHTML = `Wrong Color Selected`;
		setTimeout(() => {
			generateRandomNumber();
		}, 1000);
	}
	if (rounded == ans) {
		document.getElementById("top-board-ques").innerHTML = `Correct`;
		correctAns++;
		setTimeout(() => {
			generateRandomNumber();
		}, 1000);
	}
	if (rounded > ans) {
		setTimeout(() => {
			generateRandomNumber();
		}, 1000);
		document.getElementById("top-board-ques").innerHTML = `Wrong Answer`;
	}
}

// Sets the Selected Color
function setSelectedColor() {
	const topImgEle = document.querySelectorAll(".top-color-img");
	topImgEle.forEach((ele) => {
		ele.onclick = () => {
			selectedColor = ele.alt;
			// console.log("Color Selected = ", ele.alt);
		};
	});
}

// Sets the Selected Option
function setSelectedOption() {
	const bottomOptionEle = document.querySelectorAll(".btn-option");
	bottomOptionEle.forEach((ele) => {
		ele.onclick = () => {
			let numb = ele.innerText.match(/\d/g);
			// console.log(numb);
			let numGenerated = `${numb[0]}.${numb[1]}${numb[2]}`;
			// console.log("Option Selected = ", parseFloat(numGenerated));
			updateAns(parseFloat(numGenerated));
		};
	});
}

// Create GamePad
function createGamepad() {
	document.getElementsByTagName("body")[0].innerHTML += `
    <div class="GamePad" id="GamePad">
    </div>
  `;
}

// Create HTML
function createTopElements() {
	const mainContainer = document.getElementById("GamePad");
	var top = document.createElement("div");
	top.id = "top";
	var topBoard = document.createElement("div");
	topBoard.id = "top-board";
	var topBoardTimer = document.createElement("div");
	topBoardTimer.id = "top-board-timer";
	var topBoardQues = document.createElement("div");
	topBoardQues.id = "top-board-ques";
	topBoard.appendChild(topBoardTimer);
	topBoard.appendChild(topBoardQues);
	top.appendChild(topBoard);
	var topColor = document.createElement("div");
	topColor.id = "top-color";
	var topColorPink = document.createElement("div");
	topColorPink.id = "top-color-pink";
	topColorPink.innerHTML = `<img src="https://ik.imagekit.io/funcboxImages/DeciChemistGame/tr:w-500/pink.png" alt="pink" height="100px"
            class="top-color-img">`;
	var topColorGreen = document.createElement("div");
	topColorGreen.id = "top-color-green";
	topColorGreen.innerHTML = `<img src="https://ik.imagekit.io/funcboxImages/DeciChemistGame/tr:w-500/green.png" alt="green" height="100px"
            class="top-color-img">`;
	var topColorRed = document.createElement("div");
	topColorRed.id = "top-color-red";
	topColorRed.innerHTML = `<img src="https://ik.imagekit.io/funcboxImages/DeciChemistGame/tr:w-500/red.png" alt="red" height="100px"
            class="top-color-img">`;
	var topColorBlue = document.createElement("div");
	topColorBlue.id = "top-color-blue";
	topColorBlue.innerHTML = `<img src="https://ik.imagekit.io/funcboxImages/DeciChemistGame/tr:w-500/blue.png" alt="blue" height="100px"
            class="top-color-img">`;
	topColor.appendChild(topColorPink);
	topColor.appendChild(topColorGreen);
	topColor.appendChild(topColorRed);
	topColor.appendChild(topColorBlue);
	top.appendChild(topColor);
	mainContainer.appendChild(top);
}

function createMiddleElements() {
	const mainContainer = document.getElementById("GamePad");
	var middle = document.createElement("div");
	middle.id = "middle";
	var middleBeaker = document.createElement("div");
	middleBeaker.id = "middle-beaker";
	var middleBeakerPink = document.createElement("div");
	middleBeakerPink.id = "middle-beaker-pink";
	var middleBeakerGreen = document.createElement("div");
	middleBeakerGreen.id = "middle-beaker-green";
	var middleBeakerRed = document.createElement("div");
	middleBeakerRed.id = "middle-beaker-red";
	var middleBeakerBlue = document.createElement("div");
	middleBeakerBlue.id = "middle-beaker-blue";
	middleBeaker.appendChild(middleBeakerPink);
	middleBeaker.appendChild(middleBeakerGreen);
	middleBeaker.appendChild(middleBeakerRed);
	middleBeaker.appendChild(middleBeakerBlue);
	var middleAns = document.createElement("div");
	middleAns.id = "middle-ans";
	middleAns.innerText = "0 ml";
	middle.appendChild(middleBeaker);
	middle.appendChild(middleAns);
	mainContainer.appendChild(middle);
}

function createBottomElements() {
	const mainContainer = document.getElementById("GamePad");
	var bottom = document.createElement("div");
	bottom.id = "bottom";
	var bottomStartBtn = document.createElement("div");
	bottomStartBtn.id = "bottom-startBtn";
	bottomStartBtn.classList.add("btn");
	bottomStartBtn.innerText = "Get Started";
	var bottomOptionBtn1 = document.createElement("div");
	bottomOptionBtn1.id = "bottom-optionBtn1";
	bottomOptionBtn1.classList.add("btn");
	bottomOptionBtn1.classList.add("btn-option");
	bottomOptionBtn1.innerText = "1.0 ml";
	var bottomOptionBtn2 = document.createElement("div");
	bottomOptionBtn2.id = "bottom-optionBtn2";
	bottomOptionBtn2.classList.add("btn");
	bottomOptionBtn2.classList.add("btn-option");
	bottomOptionBtn2.innerText = "0.5 ml";
	var bottomOptionBtn3 = document.createElement("div");
	bottomOptionBtn3.id = "bottom-optionBtn3";
	bottomOptionBtn3.classList.add("btn");
	bottomOptionBtn3.classList.add("btn-option");
	bottomOptionBtn3.innerText = "0.1 ml";
	var bottomOptionBtn4 = document.createElement("div");
	bottomOptionBtn4.id = "bottom-optionBtn4";
	bottomOptionBtn4.classList.add("btn");
	bottomOptionBtn4.classList.add("btn-option");
	bottomOptionBtn4.innerText = "0.01 ml";
	var bottomResetBtn = document.createElement("div");
	bottomResetBtn.id = "bottom-resetBtn";
	bottomResetBtn.classList.add("btn");
	bottomResetBtn.innerText = "Replay";
	bottom.appendChild(bottomStartBtn);
	bottom.appendChild(bottomOptionBtn1);
	bottom.appendChild(bottomOptionBtn2);
	bottom.appendChild(bottomOptionBtn3);
	bottom.appendChild(bottomOptionBtn4);
	bottom.appendChild(bottomResetBtn);
	mainContainer.appendChild(bottom);
}

// Fill background
function fillBackground(URL) {
	if (URL == undefined) {
		URL = "https://ik.imagekit.io/funcboxImages/DeciChemistGame/tr:w-500/1.png";
	}
	document.getElementById("GamePad").style.backgroundImage = `url(${URL})`;
}
