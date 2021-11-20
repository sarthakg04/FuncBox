// Frontend Functions
// createGamepad();
// fill('background2');
// createScore();
// hammer = 'hammer2';
// createGrid();
// createLife();
// mole = 'mole2';
// createInteractionPad();
// function setSpeed(){
//   speed = 600;
// }
//
// function setAwardPenalty(){
//   award =4;
//   penalty = 1;
// }
//
// setSpeed()
// setAwardPenalty();
//
// function checkHit(hit){
//   //This function is called by our game engine whenever you hit or miss.
//
//   //hit is a local variable.
//   //Local variable are those variables whose lifeline is within that Function
//
//   //hit is a boolean type variable. A boolen is a variable whose value can be
//   //either true or false
//
//   if(hit == true){
//     score+=award
//   }
//   else{
//     score -= penalty
//   }
// }




let flag =0;
let life = 0
let molesArray = [];
let lastRemoved = -1;
let score = 0, interval;
let gameOver = 1;
let speed = 600;
let award =4,penalty=1;
let mole = 'mole1' ;
let hammer = 'hammer1';

function createGamepad(){
  let gamePadd = document.createElement('DIV')
  gamePadd.classList.add('GamePad')
  gamePadd.id = 'GamePad'
  document.body.appendChild(gamePadd);
  gamePad = document.getElementById('GamePad')
}

function fill(background){
  if(!background){
    background = 'background1'
  }
  document.getElementsByClassName('GamePad')[0].style.backgroundImage =  'url(./WhackAMoleFiles/assets/'+background+'.png)';
}

function createScore(){
  document.getElementsByClassName('GamePad')[0].innerHTML +=`
  <audio src="./WhackAMoleFiles/assets/hit.mpeg" id="sound"></audio>
  <audio src="./WhackAMoleFiles/assets/miss.mpeg" id="soundMiss"></audio>
  <div class="score">
    <h3>Score</h3>
    <h3 id="score">0</h3>
  </div>
  `;
}

function createGrid(){
  document.getElementsByClassName('GamePad')[0].innerHTML += `<div class="grid"></div>`;
  let grid = document.getElementsByClassName('grid')[0];
  for(let i = 0; i<9 ; i++){
    grid.innerHTML += `
    <div class="element"  onclick="hit(${i})">
      <img class="mole" src="./WhackAMoleFiles/assets/hole.svg" alt="">
      <img class="hammer" src="./WhackAMoleFiles/assets/${hammer}.png" alt="">
    </div>
    `;
  }
}

function createLife(){
  document.getElementsByClassName('GamePad')[0].innerHTML +=`
  <div class="lifes">
    <div class="life">
      <img class="life__icon" src="./WhackAMoleFiles/assets/heart.svg" alt="">
    </div>
    <div class="life">
      <img class="life__icon" src="./WhackAMoleFiles/assets/heart.svg" alt="">
    </div>
    <div class="life">
      <img class="life__icon" src="./WhackAMoleFiles/assets/heart.svg" alt="">
    </div>
  </div>
  `;
}

function createInteractionPad(){
  document.getElementsByClassName('GamePad')[0].innerHTML +=`
  <div class="restart" onclick="restart()">
    <h3>Try Again!</h3>
  </div>

  <div class="start active" onclick="start()">
    <p>Start</p>
  </div>

  <div class="stop" onclick="restart()">
    <p>Restart</p>
  </div>
  `;
}





function resultHit(){

}

function hit(pos){
  if(gameOver !=1){
  if(flag != 1){
  flag = 1;
  let element = document.getElementsByClassName('element')[pos];
  element.classList.add('hit');
  if(molesArray.indexOf(pos) != -1){
  lastRemoved = pos;
  document.getElementsByClassName('element')[pos].classList.remove('active');
  document.getElementsByClassName('mole')[pos].src = './WhackAMoleFiles/assets/hole.svg';
  let index = molesArray.indexOf(pos);
  molesArray.splice(index,1);
  document.getElementById('sound').play();
  checkHit(true);
  document.getElementById('score').innerHTML =  score;
  }
  else {
    document.getElementsByClassName('life__icon')[life].src = './WhackAMoleFiles/assets/brokenHeart.svg';
    life +=1;
    document.getElementById('soundMiss').play();
    if(life == 3){
      clearInterval(interval);
      gameOver = 1;
      document.getElementsByClassName('restart')[0].classList.add('active');
    }
  }
  setTimeout(()=>{
    element.classList.remove('hit');
    flag = 0;
  },300);
}
}
}



function start(){
    gameOver =0;
    document.getElementsByClassName('start')[0].classList.remove('active');
      document.getElementsByClassName('stop')[0].classList.add('active');
    interval = setInterval(()=>{
    let innerFlag = 0;
    if(molesArray.length >=3){
      let pos = molesArray[0];
      molesArray.splice(0,1);

      lastRemoved = pos;
      checkHit(false);
      document.getElementById('score').innerHTML =  score;
      if(score < -19){
        clearInterval(interval);
        gameOver = 1;
        document.getElementsByClassName('restart')[0].classList.add('active');
      }
      document.getElementsByClassName('element')[pos].classList.remove('active');
      document.getElementsByClassName('mole')[pos].src = './WhackAMoleFiles/assets/hole.svg';
    }
  while(innerFlag !=1){
    let position = parseInt(Math.random()*9);

    if((!molesArray.includes(position)) && position != lastRemoved){
      molesArray.push(position);
      innerFlag = 1;
      document.getElementsByClassName('element')[position].classList.add('active');
      document.getElementsByClassName('mole')[position].src = './WhackAMoleFiles/assets/'+mole+'.png';
    }
  }
  innerFlag = 0;

},speed);
}



function restart(){
  clearInterval(interval);
  document.getElementsByClassName('restart')[0].classList.remove('active');
  molesArray.forEach((pos, i) => {
    document.getElementsByClassName('element')[pos].classList.remove('active');
    document.getElementsByClassName('mole')[pos].src = './WhackAMoleFiles/assets/hole.svg';
  });
  molesArray = [];
  gameOver = 0;
  score = 0;
  document.getElementById('score').innerHTML = score;
  while(life!=0){
    life -=1;
    document.getElementsByClassName('life__icon')[life].src = './WhackAMoleFiles/assets/heart.svg';
  }
  start();
}
