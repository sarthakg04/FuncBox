/*
let flag=1;
let lpos=0;
createGamepad()
fillBackground()
createInteractionPad()

function result() {
  if (lpos < 110 && lpos >= 0) {
    leftHit();
  } else if (lpos >= 110 && lpos < 220) {
    centrehit();
  } else {
    rightHit();
  }
}
*/

function createGamepad() {
  let gamePadd = document.createElement("DIV");
  gamePadd.classList.add("GamePad");
  gamePadd.id = "GamePad";
  document.body.appendChild(gamePadd);
  gamePad = document.getElementById("GamePad");
}

function fillBackground() {
  document.getElementsByClassName("GamePad")[0].style.backgroundImage =
    "url(./BowlingGameFiles/assets/backgrounds/Frame.png)";
}

function Restart() {
  window.location.reload();
}

function createInteractionPad() {
  gamePad.innerHTML += `
  <div class="score" id="score">
  0/9
  </div>
  <div class="game">

  <img  id="ball" src="./BowlingGameFiles/assets/images/ball.png" class="pin" />
  <img id="pin1" src="./BowlingGameFiles/assets/images/pin.png" class="pin"  />
  <img id="pin2" src="./BowlingGameFiles/assets/images/pin.png" class="pin" />
  <img id="pin3" src="./BowlingGameFiles/assets/images/pin.png" class="pin" />
  <img id="pin4" src="./BowlingGameFiles/assets/images/pin.png" class="pin" /> 
  <img id="pin5" src="./BowlingGameFiles/assets/images/pin.png" class="pin" />
  <img id="pin6" src="./BowlingGameFiles/assets/images/pin.png" class="pin" />
  <img id="pin7" src="./BowlingGameFiles/assets/images/pin.png" class="pin" />
  <img id="pin8" src="./BowlingGameFiles/assets/images/pin.png" class="pin" />
  <img id="pin9" src="./BowlingGameFiles/assets/images/pin.png" class="pin" />
  <div class="controllers" id="control">
  <button id="playButton" onclick="control(0)" >Play</button>
  <button id="restartButton" onclick="control(1); flag=0">Shoot</button>
  <button id="playAgainButton" onClick="Restart()">Play Again</button>
  </div>
  </div>
  `;
}
function control(value) {
  if (value === 0) {
    document.getElementById("playButton").disabled = true;
    let id = null;
    let elem = document.getElementById("ball");
    const dem = elem.getBoundingClientRect();
    let post = 0;
    clearInterval(id);
    let i;
    for (i = 0; i < 3; i++) {
      id = setInterval(frame, 50);
    }
    function frame() {
      if (post === 350) {
        clearInterval(id);
        post = 0;
      } else if (flag === 0) {
        lpos = post;
        clearInterval(id);
      } else {
        post++;
        elem.style.marginLeft = post + "px";
      }
    }
  } else {
    document.getElementById("restartButton").disabled = true;
    let id = null;
    let elem = document.getElementById("ball");
    const dem = elem.getBoundingClientRect();
    let post = 400;
    clearInterval(id);
    let i;
    id = setInterval(frame, 5);
    function frame() {
      if (post === 50) {
        clearInterval(id);
        console.log(lpos);
        result();
      } else {
        post--;
        elem.style.marginTop = post + "px";
      }
    }
  }
}

function leftHit() {
  document.getElementById("score").innerHTML = "3/9";
  document.getElementById("pin1").style.opacity = 0;
  document.getElementById("pin2").style.opacity = 0;
  document.getElementById("pin3").style.opacity = 0;
  // console.log("Left 3 pins");
}

function centrehit() {
  document.getElementById("score").innerHTML = "9/9 You Won";
  document.getElementById("pin1").style.opacity = 0;
  document.getElementById("pin2").style.opacity = 0;
  document.getElementById("pin3").style.opacity = 0;
  document.getElementById("pin4").style.opacity = 0;
  document.getElementById("pin5").style.opacity = 0;
  document.getElementById("pin6").style.opacity = 0;
  document.getElementById("pin7").style.opacity = 0;
  document.getElementById("pin8").style.opacity = 0;
  document.getElementById("pin9").style.opacity = 0;
  // console.log("All pins");
}

function rightHit() {
  document.getElementById("score").innerHTML = "3/9";
  document.getElementById("pin7").style.opacity = 0;
  document.getElementById("pin8").style.opacity = 0;
  document.getElementById("pin9").style.opacity = 0;
  // console.log("Right 3 pins");
}


