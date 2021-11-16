//Fontend Functions
// createGamepad()
// fill()
// createScore()
// createQuestionsContainer()
// initializeGameEngine()
// createInteractionPad()

function createGamepad(){
  let gamePadd = document.createElement('DIV')
  gamePadd.classList.add('GamePad')
  gamePadd.id = 'GamePad'
  document.body.appendChild(gamePadd);
  gamePad = document.getElementById('GamePad')
}

function createScore(){
  document.getElementsByClassName('GamePad')[0].innerHTML +=`
  <div class="score">
    <h1 id="score">0</h1>
  </div>
  `;
}

function fill(){
  document.getElementsByClassName('GamePad')[0].style.backgroundImage =  'url(./HitItFiles/assets/background.png)';
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
    <button type="button" name="button" class="action__btn" onclick="restart()">Restart</button>
  </div>
  `;
}

function initializeGameEngine(){
  document.getElementById('container').innerHTML +=`
  <div class="timer">
    <p id="time">2:00</p>
  </div>

  <div class="question">
    <p id="q"></p>
  </div>

  <div class="options">

  </div>
  `;
}


let time;
let remaining = 120;
let type
let score = 0;



function startGame(){
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
}

function endGame(){
  document.getElementById('container').classList.remove('active');
  document.getElementById('fscore').innerHTML = 'Score : '+ score;
  document.getElementById('score').innerHTML = 'END';
  document.getElementById('resBtn').classList.add('active');
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
      <p>${ops[index]}</p>
    </div>
    `;

    ops.splice(index,1);
  }

}


function validate(num){
  if(type == 0){
    if(num%2==0){
      score+=1;
      document.getElementById('score').innerHTML = score
    }
    else{
      score-=1;
      document.getElementById('score').innerHTML = score
    }
  }
  else {
    if(num%2 !=0){
      score+=1;
      document.getElementById('score').innerHTML = score
    }
    else{
      score-=1;
      document.getElementById('score').innerHTML = score
    }
  }

  generateQustion();
}

function restart(){
  score = 0;
  remaining = 120;
  document.getElementById('score').innerHTML = '0';
  document.getElementById('resBtn').classList.remove('active');
  document.getElementById('time').innerHTML = '2:00';
  clearInterval(time);
  startGame();
}
