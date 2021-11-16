// FronteEnd functions

// createGamepad();
// fill();
// createDispenser();
// createDustbins();
// createInteractionPad();


function fill(){
  document.getElementsByClassName('GamePad')[0].style.backgroundImage =  'url(./TrashGameFiles/assets/background.png)';
}

function createGamepad(){
  let gamePadd = document.createElement('DIV')
  gamePadd.classList.add('GamePad')
  gamePadd.id = 'GamePad'
  document.body.appendChild(gamePadd);
  gamePad = document.getElementById('GamePad')
}

function createDispenser(){
  document.getElementsByClassName('GamePad')[0].innerHTML +=`
  <div class="dispenser center">
    <img src="./TrashGameFiles/assets/dispenser.png" alt="">
  </div>
  `;
}

function createDustbins(){
  document.getElementsByClassName('GamePad')[0].innerHTML +=`
  <div class="dustbins">
    <div class="dustbin">
      <img src="./TrashGameFiles/assets/greenbin.png" alt="">
      <p> Biodegradable waste </p>
    </div>
    <div class="dustbin">
      <img src="./TrashGameFiles/assets/bluebin.png" alt="">
      <p> Non-Biodegradable waste </p>
    </div>
    <div class="dustbin">
      <img src="./TrashGameFiles/assets/yellowbin.png" alt="">
      <p> Recycleable waste </p>
    </div>

  </div>
  `;
}

function createInteractionPad(){
  document.getElementsByClassName('GamePad')[0].innerHTML +=`
  <div class="interactionPad">
    <div class="lifes">
      <div class="life">
        <img class="lyf" src="./TrashGameFiles/assets/heart.png" alt="">
      </div>
      <div class="life">
        <img class="lyf" src="./TrashGameFiles/assets/heart.png" alt="">
      </div>
      <div class="life">
        <img class="lyf" src="./TrashGameFiles/assets/heart.png" alt="">
      </div>
    </div>
    <div class="buttons">
      <div class="left__shift">
        <a href="javascript:void(0)" onclick="shiftLeft()"> < </a>
      </div>
      <div class="drop">
        <a href="javascript:void(0)"onclick="drop()"> Drop </a>
      </div>
      <div class="right__shift">
        <a href="javascript:void(0)" onclick="shiftRight()"> > </a>
      </div>
    </div>
  </div>
  `;
  genGarbage();
}


let positions = ['left' , 'center' , 'right'];
let currentPos = 1;
let garbage = [
  {
  name : 'banana',
  correct : 0,
  },
  {
    name : 'milkbottle',
    correct : 2
  },
  {
    name : 'bottle',
    correct : 1
  },
  {
    name : 'straw',
    correct : 2
  }
]

let index;
let heart = 0;
function genGarbage(){
  index = Math.floor(Math.random() * ((garbage.length - 1) - 0 + 1) + 0);
  document.getElementsByClassName('GamePad')[0].innerHTML +=`
  <div class="garbage ready ${positions[currentPos]}">
    <img src="./TrashGameFiles/assets/${garbage[index].name}.png" alt="" class="${garbage[index].name}">
  </div>
  `;
}

function shiftRight(){
  document.getElementsByClassName('dispenser')[0].classList.remove(positions[currentPos]);
  document.getElementsByClassName('ready')[0].classList.remove(positions[currentPos]);

  currentPos +=1;
  if(currentPos > 2){
    currentPos = 0;
  }

  document.getElementsByClassName('dispenser')[0].classList.add(positions[currentPos]);
  document.getElementsByClassName('ready')[0].classList.add(positions[currentPos]);
}

function shiftLeft(){
  document.getElementsByClassName('dispenser')[0].classList.remove(positions[currentPos]);
  document.getElementsByClassName('ready')[0].classList.remove(positions[currentPos]);

  currentPos -=1;
  if(currentPos < 0){
    currentPos = 2;
  }

  document.getElementsByClassName('dispenser')[0].classList.add(positions[currentPos]);
  document.getElementsByClassName('ready')[0].classList.add(positions[currentPos]);
}

function drop(){
  document.getElementsByClassName('ready')[0].classList.add('drop');
  document.getElementsByClassName('ready')[0].classList.remove('ready');

  setTimeout(()=>{
    if(garbage[index].correct != currentPos){
      document.getElementsByClassName('lyf')[heart].src='./TrashGameFiles/assets/brokenHeart.png';
      heart +=1;
      if(heart == 3){
        gameOver();
        return;
      }
    }
    garbage.splice(index ,1);
    if(garbage.length == 0){
      gameOver();
    }
    else{
      genGarbage();
    }
  },1000);


}



function gameOver(){
  document.getElementsByClassName('GamePad')[0].innerHTML = ``;
  if(heart == 0){
    document.getElementsByClassName('GamePad')[0].innerHTML = `
    <div class="gameOver">
      <p id="message">Well Done!</p>
      <img src="./TrashGameFiles/assets/retry.png" alt="" onclick="restart()">
    </div>
    `;
  }
  else{
    document.getElementsByClassName('GamePad')[0].innerHTML = `
    <div class="gameOver">
      <p id="message">Game Over</p>
      <img src="./TrashGameFiles/assets/retry.png" alt="" onclick="restart()">
    </div>
    `;
  }
}

function restart(){
  window.location.reload();
}
