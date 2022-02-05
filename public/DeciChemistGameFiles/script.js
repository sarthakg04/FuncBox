// FRONTEND FUNCTIONS at /DeciChemistGame
// createGamepad();
// createTopElements();
// fillBackground();
// startGame();
// createStartButton();
// setSelectedColor();
// setSelectedOption();

// Give Minimum of 3 Correct answer to Win

// Variables
let ans = 0;
let color = "";
let userAns = 0;
let selectedColor = "";
let correctAns = 0;

// Generating a Random color
function generateRandomColor() {
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
	console.log("Color = ", color);
}

// Generating a Random Number of 3 digits
function generateRandomNumber() {
	userAns = 0;
	document.getElementById("middle-ans").innerHTML = `0 ml`;
	let a = Math.floor(1 + Math.random() * 9);
	let b = Math.floor(1 + Math.random() * 9);
	let c = Math.floor(1 + Math.random() * 9);
	ans = `${a}.${b}${c}`;
	console.log("Answer = ", parseFloat(ans));
	generateRandomColor();
}

// Starting Game
function startGame() {
	setTimeout(() => {
		fillBackground(
			"https://ik.imagekit.io/funcboxImages/DeciChemistGame/tr:w-500/2.png"
		);
		document.getElementById("bottom-startBtn").style.display = "block";
		const topImgEle = document.getElementsByClassName("top-color-img");
		for (let i = 0; i < topImgEle.length; i++) {
			topImgEle[i].style.visibility = "visible";
		}
	}, 3000);
}

// Starting Game
function createStartButton() {
	document.getElementById("bottom-startBtn").addEventListener("click", () => {
		console.log("Starting Game");
		generateRandomNumber();
		document.getElementById("top-board-timer").style.visibility = "visible";
		document.getElementById("top-board-ques").style.visibility = "visible";
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
		console.log("Restarting Game");
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
		console.log("Correct Answer = ", correctAns);
		if (correctAns >= 3) {
			document.getElementById("top-board-ques").innerHTML = `${correctAns} Correct Answer. You Won!!!`;
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
		pink.style.height = `${userAns * 5}px`;
	} else if (color == "green") {
		green.style.height = `${userAns * 5}px`;
	} else if (color == "red") {
		red.style.height = `${userAns * 5}px`;
	} else if (color == "blue") {
		blue.style.height = `${userAns * 5}px`;
	}
}

// Update the ans after clicking on Option
function updateAns(num) {
	userAns = userAns + num;
	var rounded = Math.round((userAns + Number.EPSILON) * 100) / 100;
	document.getElementById("middle-ans").innerHTML = `${rounded} ml`;
	fillColor();
	console.log("Updated Answer = ", rounded);
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
			console.log("Color Selected = ", ele.alt);
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
			console.log("Option Selected = ", parseFloat(numGenerated));
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
	mainContainer.innerHTML = `
    <div id="top">
      <div id="top-board">
        <div id="top-board-timer">60</div>
        <div id="top-board-ques"></div>
      </div>
      <div id="top-color">
        <div id="top-color-pink">
          <img src="https://ik.imagekit.io/funcboxImages/DeciChemistGame/tr:w-500/pink.png" alt="pink" height="100px"
            class="top-color-img">
        </div>
        <div id="top-color-green">
          <img src="https://ik.imagekit.io/funcboxImages/DeciChemistGame/tr:w-500/green.png" alt="green" height="100px"
            class="top-color-img">
        </div>
        <div id="top-color-red">
          <img src="https://ik.imagekit.io/funcboxImages/DeciChemistGame/tr:w-500/red.png" alt="red" height="100px"
            class="top-color-img">
        </div>
        <div id="top-color-blue">
          <img src="https://ik.imagekit.io/funcboxImages/DeciChemistGame/tr:w-500/blue.png" alt="blue" height="100px"
            class="top-color-img">
        </div>
      </div>
    </div>

    <div id="middle">
      <div id="middle-beaker">
        <div id="middle-beaker-pink"></div>
        <div id="middle-beaker-green"></div>
        <div id="middle-beaker-red"></div>
        <div id="middle-beaker-blue"></div>
      </div>
      <div id="middle-ans">0 ml</div>
    </div>

    <div id="bottom">
      <div class="btn" id="bottom-startBtn">Get Started</div>
      <div class="btn btn-option" id="bottom-optionBtn1">1.0 ml</div>
      <div class="btn btn-option" id="bottom-optionBtn2">0.5 ml</div>
      <div class="btn btn-option" id="bottom-optionBtn3">0.1 ml</div>
      <div class="btn btn-option" id="bottom-optionBtn4">0.01 ml</div>
      <div class="btn" id="bottom-resetBtn">Replay</div>
    </div>
  `;
}

// Fill background
function fillBackground(URL) {
	if (URL == undefined) {
		URL = "https://ik.imagekit.io/funcboxImages/DeciChemistGame/tr:w-500/1.png";
	}
	document.getElementById("GamePad").style.backgroundImage = `url(${URL})`;
}
