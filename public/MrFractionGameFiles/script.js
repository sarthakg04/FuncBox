// const numOfQuestions=2
// function onSubmit() {
//   const result = checkAnswer();
//   if (result === true) {
//     qnum += 1;
//     if (qnum >= questions.length) {
//       gameOver(true);
//     } else {
//       showQuestion(qnum);
//     }
//   } else {
//     gameOver(false);
//   }
// }
// function onStartButtonClick() {
//   startGame();
//   showQuestion(qnum);
// }
// generateQuestions()
// createBackground()
// fillBackground()
// createInteractionPad()

const imageLinks = {
  bg: "https://ik.imagekit.io/funcboxImages/MrFractionGame_assets/background_FD-KL6SdltV.png?updatedAt=1638376295242",
  intpad:
    "https://ik.imagekit.io/funcboxImages/MrFractionGame_assets/intpad_D-shTIx6b.png?updatedAt=1638376295209",
  chocolate:
    "https://ik.imagekit.io/funcboxImages/MrFractionGame_assets/chocolate_BiNxUAEfpQSs.png?updatedAt=1638376295230",
  message:
    "https://ik.imagekit.io/funcboxImages/MrFractionGame_assets/message__UguybL1t1.png?updatedAt=1638376295262",
  won: "https://ik.imagekit.io/funcboxImages/MrFractionGame_assets/won_05lS8hVOnw.png?updatedAt=1638376295261",
  retry:
    "https://ik.imagekit.io/funcboxImages/MrFractionGame_assets/retry_nH9aFDs9pmBX.png?updatedAt=1638376295207",
  retry_btn:
    "https://ik.imagekit.io/funcboxImages/MrFractionGame_assets/retry_btn_vCJMoVN65901.png?updatedAt=1638376295257",
  start_btn:
    "https://ik.imagekit.io/funcboxImages/MrFractionGame_assets/start_btn__oHdYhqqn3.png?updatedAt=1638376295245",
  submit_btn:
    "https://ik.imagekit.io/funcboxImages/MrFractionGame_assets/submit_IyPFCgBtE.png?updatedAt=1638376295252",
};
let qnum = 0;
let questions = [];
let beforestart = true;
let live = false;
let gameend = false;

function createBackground() {
  let container = document.createElement("div");
  container.className = "container";
  container.id = "container";
  document.body.appendChild(container);
}
function fillBackground() {
  let background = document.createElement("div");
  background.className = "background";
  background.id = "background";
  document.getElementById("container").appendChild(background);
  background.innerHTML = `<img class="bg_image" src = ${imageLinks.bg}>`;
}
function createInteractionPad() {
  const int_pad = document.createElement("div");
  int_pad.id = "interaction_pad";
  int_pad.innerHTML = `<img src="${imageLinks.intpad}" class="int_pad_img" style="position:absolute;width:100%;height:100%;z-index:-1;"/>`;
  document.getElementById("container").appendChild(int_pad);
  if (beforestart) {
    let choco = document.createElement("img");
    choco.src = imageLinks.chocolate;
    choco.classList.add("before_start_image");
    int_pad.append(choco);
    let btn = document.createElement("button");
    btn.innerHTML = `<img src="${imageLinks.start_btn}" style="width:100%;"> `;
    btn.id = "start_btn";
    btn.className = "start_btn";
    btn.onclick = () => {
      onStartButtonClick();
    };
    int_pad.appendChild(btn);
  }
}

function generateQuestions() {
  for (let i = 0; i < numOfQuestions; i++) {
    let den = parseInt(Math.random() * 5 + 2);
    let num = parseInt(Math.random() * 6 + 1);
    while (
      num >= den ||
      (questions[i - 1]?.numerator === num &&
        questions[i - 1]?.denominator === den)
    ) {
      den = parseInt(Math.random() * 5 + 2);
      num = parseInt(Math.random() * 6 + 1);
    }
    questions.push({
      numerator: num,
      denominator: den,
    });
  }
}
function removeElementsByClass(className) {
  const elements = document.getElementsByClassName(className);
  while (elements.length > 0) {
    elements[0].parentNode.removeChild(elements[0]);
  }
}
function showQuestion(num) {
  removeElementsByClass("choco_image");
  const msgBox = document.createElement("div");
  msgBox.id = "message_box";
  msgBox.style.backgroundImage = `url(${imageLinks.message})`;
  msgBox.style.width = "60px";
  msgBox.style.height = "50px";
  msgBox.style.position = "absolute";
  msgBox.style.backgroundSize = "cover";
  msgBox.style.backgroundRepeat = "no-repeat";
  msgBox.style.textAlign = "center";
  msgBox.style.top = "60%";
  msgBox.style.right = "10%";
  msgBox.style.paddingTop = "10px";
  msgBox.innerText =
    questions[num].numerator + "/" + questions[num].denominator;
  document.getElementById("container").appendChild(msgBox);
  const intpad = document.getElementById("interaction_pad");
  for (let i = 0; i < questions[num].denominator; i++) {
    const chocolate = document.createElement("img");
    chocolate.src = imageLinks.chocolate;
    chocolate.classList.add("choco_image");
    chocolate.onclick = () => {
      if (chocolate.classList.contains("selected")) {
        chocolate.classList.remove("selected");
      } else {
        chocolate.classList.add("selected");
      }
    };
    intpad.appendChild(chocolate);
  }
}

function startGame() {
  beforestart = false;
  const image = document.getElementsByClassName("before_start_image")[0];
  image.remove();
  document.getElementById("start_btn").remove();
  live = true;
  let btn = document.createElement("button");
  btn.innerHTML = `<img src="${imageLinks.submit_btn}" style="width:100%;"> `;
  btn.id = "submit_btn";
  btn.className = "submit_btn";
  btn.onclick = () => {
    onSubmit();
  };
  document.getElementById("container").appendChild(btn);
}
// function onStartButtonClick() {
//   startGame();
//   showQuestion(qnum);
// }
function checkAnswer() {
  const selected = document.getElementsByClassName("selected");
  if (
    qnum < questions.length &&
    selected.length === questions[qnum].numerator
  ) {
    return true;
  }
  return false;
}
function gameOver(win) {
  if (win) {
    const endScreen = document.createElement("div");
    endScreen.style.width = "100%";
    endScreen.style.height = "100%";
    endScreen.style.position = "absolute";
    endScreen.style.top = "0";
    endScreen.style.left = "0";
    endScreen.innerHTML = `<img src="${imageLinks.won}" class="won_image" style="width:100%;height:100%">`;
    document.body.appendChild(endScreen);
  } else {
    const endScreen = document.createElement("div");
    endScreen.style.width = "100%";
    endScreen.style.height = "100%";
    endScreen.style.position = "absolute";
    endScreen.style.top = "0";
    endScreen.style.left = "0";
    endScreen.innerHTML = `<img src="${imageLinks.retry}" class="won_image" style="width:100%;height:100%">`;
    const retry_btn = document.createElement("button");
    retry_btn.className = "retry_btn";
    retry_btn.innerHTML = `<img src = "${imageLinks.retry_btn}" style="width:100%;">`;
    endScreen.appendChild(retry_btn);
    retry_btn.onclick = () => {
      qnum = 0;

      showQuestion(qnum);
      endScreen.remove();
    };
    document.body.appendChild(endScreen);
  }
}
// function onSubmit() {
//   const result = checkAnswer();
//   if (result === true) {
//     qnum += 1;
//     if (qnum >= questions.length) {
//       gameOver(true);
//     } else {
//       showQuestion(qnum);
//     }
//   } else {
//     gameOver(false);
//   }
// }
