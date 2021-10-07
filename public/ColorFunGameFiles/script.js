// Functions
// createBackground()
// fillBackground()
// createQuestionCard()
// setQuestions()

let combinations = {
  orange: ["red", "yellow"],
  green: ["blue", "yellow"],
  purple: ["red", "blue"],
  pink: ["red", "white"],
  grey: ["black", "white"],
  brown: ["orange", "black"],
  dark_green: ["green", "black"],
};
let colorHex = {
  orange: "#db842c",
  pink: "#ff99fd",
  grey: "##8c8c8c",
  green: "#62bf63",
  purple: "#9c48f0",
  brown: "#663939",
  dark_green: "#125c10",
};
let flask_images = {
  red: "./ColorFunGameFiles/assets/red_flask.svg",
  blue: "./ColorFunGameFiles/assets/blue_flask.svg",
  black: "./ColorFunGameFiles/assets/black_flask.svg",
  orange: "./ColorFunGameFiles/assets/orange_flask.svg",
  pink: "./ColorFunGameFiles/assets/pink_flask.svg",
  white: "./ColorFunGameFiles/assets/white_flask.svg",
  brown: "./ColorFunGameFiles/assets/brown_flask.svg",
  dark_green: "./ColorFunGameFiles/assets/dark_green_flask.svg",
  grey: "./ColorFunGameFiles/assets/grey_flask.svg",
  yellow: "./ColorFunGameFiles/assets/yellow_flask.svg",
};

let primary_colors = ["red", "blue", "yellow", "white", "black"];
let secondary_colors = [
  "orange",
  "green",
  "purple",
  "pink",
  "grey",
  "brown",
  "dark_green",
];
let colors = [...primary_colors, ...secondary_colors];

let selected = [];
shuffle(secondary_colors);

let currentQnum = 0;
let currentQuestion = secondary_colors[currentQnum];
function createBackground() {
  let container = document.createElement("DIV");
  container.classList.add("container");
  container.id = "container";
  document.body.appendChild(container);
}

function fillBackground() {
  document.getElementsByClassName("container")[0].style.backgroundImage =
    "url(./ColorFunGameFiles/assets/background.svg)";
}

function createQuestionCard() {
  let qcard = document.createElement("div");
  qcard.classList.add("question_card");
  document.getElementById("container").appendChild(qcard);
}

function setQuestions() {
  let qcard = document.getElementsByClassName("question_card")[0];
  qcard.innerHTML = getQuestionHTML(currentQuestion);
}

function shuffle(arr) {
  arr.sort(() => 0.5 - Math.random());
}

function getQuestionHTML(color) {
  let queshtml = `<div class="question">
    ${getFlaskCard(color)}
    <p>Pick two colours from below to make <span style="color:${
      colorHex[color]
    }">${color}</span>!</p>
    ${getOptions(color)}
    </div>`;
  return queshtml;
}
function getFlaskCard(color) {
  let card = `<div class="flask_card ${color}" ><img class="flask_image" src="./ColorFunGameFiles/assets/${color}_flask.svg"></div>`;
  return card;
}

function getCombination(color) {
  return combinations[color];
}
function getOptions(color) {
  let comb = getCombination(color);
  let randColor = "";
  do {
    let rand = Math.floor(Math.random() * colors.length);
    randColor = colors[rand];
  } while (randColor === color || comb.indexOf(randColor) > -1);

  let options = [...comb, randColor];
  options.sort(() => 0.5 - Math.random());
  let optionsdiv = `<div class="options">
    ${options.map(
      (opt) =>
        `<div class="option" onClick="optionClick(this)">${getFlaskCard(
          opt
        )}<div class="circle"></div></div>`
    )}
  </div>`;
  return optionsdiv;
}
function optionClick(e) {
  if (selected.length < 2) {
    let circle = e.getElementsByClassName("circle")[0];
    let flask_card = e.getElementsByClassName("flask_card")[0];
    if (flask_card.classList.contains("active")) {
      circle.classList.remove("filled");
      flask_card.classList.remove("active");
      selected = selected.filter((ele) => ele !== flask_card.classList[1]);
    } else {
      circle.classList.add("filled");
      flask_card.classList.add("active");
      let flask_color = flask_card.classList[1];
      selected.push(flask_color);
    }
    if (selected.length === 2) {
      checkCorrect();
    }
  }
}
function checkCorrect() {
  let correct = false;
  let ans1 = selected[0];
  let ans2 = selected[1];
  if (
    combinations[currentQuestion].includes(ans1) &&
    combinations[currentQuestion].includes(ans2)
  ) {
    correct = true;
    showCorrect();
  } else {
    showWrong();
  }
}
function showCorrect() {
  let options_div = document.getElementsByClassName("options")[0];
  let selected_options = options_div.getElementsByClassName("active");
  selected_options[0].classList.add("correct");
  selected_options[1].classList.add("correct");
  setTimeout(nextQuestion, 1000);
}
function showWrong() {
  let options_div = document.getElementsByClassName("options")[0];
  let selected_options = options_div.getElementsByClassName("active");
  let selected_circles = options_div.getElementsByClassName("filled");
  selected_options[0].classList.add("wrong");
  selected_options[1].classList.add("wrong");
  setTimeout(() => {
    selected = [];
    selected_options[1].classList.remove("wrong");
    selected_options[0].classList.remove("wrong");
    selected_options[1].classList.remove("active");
    selected_options[0].classList.remove("active");
    selected_circles[1].classList.remove("filled");
    selected_circles[0].classList.remove("filled");
  }, 1000);
}
function nextQuestion() {
  if (currentQnum === secondary_colors.length - 1) {
    endGame();
  } else {
    currentQnum++;
    currentQuestion = secondary_colors[currentQnum];
    selected = [];
    setQuestions();
  }
}
function endGame() {
  let endGameCard = createEndGameCard();
  let qcard = document.getElementsByClassName("question_card")[0];
  qcard.replaceWith(endGameCard);
}

function createEndGameCard() {
  let wellDone = document.createElement("div");
  wellDone.classList.add("well_done_card");
  wellDone.innerHTML = `<p>Well Done</p><br/><button onClick="restart()">retry<img src="./ColorFunGameFiles/assets/retry_icon.png"></button>`;
  return wellDone;
}
function restart() {
  currentQnum = 0;
  currentQuestion = secondary_colors[currentQnum];
  selected = [];
  createQuestionCard();
  setQuestions();
}
