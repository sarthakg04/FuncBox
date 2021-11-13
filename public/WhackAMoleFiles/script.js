// Frontend Functions
// createGamepad();
// fill();
// createScore();
// createGrid();
// createLife();
// createInteractionPad();



let flag =0;
let life = 0
let molesArray = [];
let lastRemoved = -1;
let score = 0, interval;
let gameOver = 0;

function createGamepad(){
  let gamePadd = document.createElement('DIV')
  gamePadd.classList.add('GamePad')
  gamePadd.id = 'GamePad'
  document.body.appendChild(gamePadd);
  gamePad = document.getElementById('GamePad')
}

function fill(){
  document.getElementsByClassName('GamePad')[0].style.backgroundImage =  'url(./WhackAMoleFiles/assets/background.svg)';
}

function createScore(){
  document.getElementsByClassName('GamePad')[0].innerHTML +=`
  <audio src="./WhackAMoleFiles/assets/hit.mpeg" id="sound">

  </audio>
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
      <img class="hammer" src="./WhackAMoleFiles/assets/hammer.svg" alt="">
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


function hit(pos){
  if(gameOver !=1){
  document.getElementById('sound').play();
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
  score +=1;
  document.getElementById('score').innerHTML =  score;
  }
  else {
    document.getElementsByClassName('life__icon')[life].src = './WhackAMoleFiles/assets/brokenHeart.svg';
    life +=1;
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
    document.getElementsByClassName('start')[0].classList.remove('active');
      document.getElementsByClassName('stop')[0].classList.add('active');
    interval = setInterval(()=>{
    let innerFlag = 0;
    if(molesArray.length >=3){
      let pos = molesArray[0];
      molesArray.splice(0,1);
      document.getElementsByClassName('element')[pos].classList.remove('active');
      document.getElementsByClassName('mole')[pos].src = './WhackAMoleFiles/assets/hole.svg';
      lastRemoved = pos;
    }
  while(innerFlag !=1){
    let position = parseInt(Math.random()*9);
    
    if((!molesArray.includes(position)) && position != lastRemoved){
      molesArray.push(position);
      innerFlag = 1;
      document.getElementsByClassName('element')[position].classList.add('active');
      document.getElementsByClassName('mole')[position].src = './WhackAMoleFiles/assets/mole.svg';
    }
  }
  innerFlag = 0;

},600);
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
