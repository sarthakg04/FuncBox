//Fontend Functions
// createGamepad()
// //Either background is cricket or football
// fillBackground("cricket")
// createScore();
// let timeRemaining = 240;
// createQuestionsContainer()
// initializeGameEngine()
// createInteractionPad()
// function checkSelected(number , qType){
//   if(qType == 'even'){
//     if(number%2==0){
//       score+=1;
//
//     }
//     else{
//       score-=1;
//
//     }
//   }
//   else {
//     if(number%2 !=0){
//       score+=1;
//
//     }
//     else{
//       score-=1;
//
//     }
//   }
// }

function createGamepad(){
  let gamePadd = document.createElement('DIV')
  gamePadd.classList.add('GamePad')
  gamePadd.id = 'GamePad'
  document.body.appendChild(gamePadd);
  gamePad = document.getElementById('GamePad')
}
var backImage="cricket";
function createScore(){
  document.getElementsByClassName('GamePad')[0].innerHTML +=`
  <div class="score">
    <h1 id="score">0</h1>
  </div>
  `;
}

function fillBackground(image){
  backImage=image;
  console.log(backImage);
  document.getElementsByClassName('GamePad')[0].style.backgroundImage =  `url(./HitItFiles/assets/${backImage}background.png)`;
  document.getElementsByClassName('GamePad')[0].innerHTML +=`<div id="ball"></div>`;
}

function createQuestionsContainer(){
  document.getElementsByClassName('GamePad')[0].innerHTML +=`
  <div class="game__contianer" id='container'>

  </div>
  `;
}


function createInteractionPad(){
  document.getElementsByClassName('GamePad')[0].innerHTML +=`
  <div class="play__button active" onclick="startGame()" id="playBtn">
    <button type="button" name="button" class="action__btn">Play</button>
  </div>

  <div class="restart__button" id='resBtn'>
    <p id="fscore">Score : 10</p>
    <button type="button" name="button" class="action__btn " onclick="restart()">Restart</button>
  </div>
  `;

}

function initializeGameEngine(){
  document.getElementById('container').innerHTML +=`
  <div class="timer">
    <p id="time">00:00</p>
  </div>

  <div class="question">
    <p id="q"></p>
  </div>

  <div class="options" id="oppo">

  </div>
  `;

}


let time;
let remaining ;
let type
let score = 0;



function startGame(){
  remaining = timeRemaining

  time = setInterval(()=>{
    if(remaining != 0){

      if(remaining < 60){
        document.getElementById('time').classList.add('warning');
      }
      else{
        document.getElementById('time').classList.remove('warning');
      }
      remaining -=1;
      minutes = parseInt(remaining/60);
      seconds = parseInt(remaining%60);
      if(seconds <= 9){
        seconds = '0'+seconds
      }

      document.getElementById('time').innerHTML = minutes +" : "+ seconds;
    }
    else{
      document.getElementById('time').innerHTML = 'END';
      endGame();
    }
  },1000)

  document.getElementById('playBtn').classList.remove('active');
  document.getElementById('container').classList.toggle('active');
  generateQustion();
  ballTextColor();
}

function endGame(){
  document.getElementById('container').classList.remove('active');
  document.getElementById('fscore').innerHTML = 'Score : '+ score;
  document.getElementById('score').innerHTML = 'END';
  document.getElementById('resBtn').classList.add('active');
  // document.getElementById("ball").style.display="none";
  document.getElementById("ball").innerHTML="";
}
function createBalls(){
  document.getElementById("ball").innerHTML=`<div id="ball1"><img src="./HitItFiles/assets/${backImage}ball.png"></div>
  <div id="ball2"><img src="./HitItFiles/assets/${backImage}ball.png"></div>
  <div id="ball3"><img src="./HitItFiles/assets/${backImage}ball.png"></div>`;
}

function ballTextColor(){
  if (backImage=="cricket"){
    document.getElementById("oppo").classList.remove("opption");
  }
  else if(backImage=="football"){
    document.getElementById("oppo").classList.add("opption");
  }
}

function generateQustion(){
  type = Math.floor(Math.random() * (1 - 0 + 1) + 0);
  if(type == 0){
    document.getElementById('q').innerHTML = 'Choose the Even Number'
  }
  else{
    document.getElementById('q').innerHTML = 'Choose the Odd Number'
  }

  let correct = Math.floor(Math.random() * (99 - 0 + 1) + 0);
  let w1 = Math.floor(Math.random() * (99 - 0 + 1) + 0);
  let w2 = Math.floor(Math.random() * (99 - 0 + 1) + 0);
  if (type == 0){
    while(correct%2 != 0){
      correct = Math.floor(Math.random() * (99 - 0 + 1) + 0);
    }

    while(w1%2 == 0){
      w1 = Math.floor(Math.random() * (99 - 0 + 1) + 0)
    }

    while(w2%2 == 0){
      w2 = Math.floor(Math.random() * (99 - 0 + 1) + 0)
    }
  }

  else {
    while(correct%2 == 0){
      correct = Math.floor(Math.random() * (99 - 0 + 1) + 0);
    }

    while(w1%2 != 0){
      w1 = Math.floor(Math.random() * (99 - 0 + 1) + 0)
    }

    while(w2%2 != 0){
      w2 = Math.floor(Math.random() * (99 - 0 + 1) + 0)
    }
  }

  let ops = [correct , w1 , w2 ]
  document.getElementsByClassName('options')[0].innerHTML = '';
  while(ops.length > 0){
    let index = Math.floor(Math.random() * ((ops.length-1) - 0 + 1) + 0)
    document.getElementsByClassName('options')[0].innerHTML += `
    <div class="option" onclick = 'validate(${ops[index]})'>
      <p id="opColor">${ops[index]}</p>
    </div>
    `;

    ops.splice(index,1);
  }
  createBalls()
}


function validate(num){
  let typee = '';
  if(type == 0){
    typee = 'even'
  }
  else{
    typee = 'odd'
  }

  checkSelected(num,typee);
  document.getElementById('score').innerHTML = score
  generateQustion();
}

function restart(){
  score = 0;
  remaining = timeRemaining;
  document.getElementById('score').innerHTML = '0';
  document.getElementById('resBtn').classList.remove('active');
  document.getElementById('time').innerHTML = '00:00';
  clearInterval(time);
  startGame();
}
