//FontendFunctions
// createGamepad();
// fillBackground('backgroundYellow');
// createScore();
// createContainer('doczombie');
// createShooter('laser');
// createInteractionPad();
// function rotateShooter(direction , shooter){
//   switch (direction) {
//     case 'left':
//       shooter.style.transform = 'rotate(-30deg)'
//       break;
//     case 'center':
//       shooter.style.transform = 'rotate(0deg)'
//       break;
//     case 'right':
//       shooter.style.transform = 'rotate(30deg)'
//       break;
//   }
// }


function createGamepad(){
  let gamePadd = document.createElement('DIV')
  gamePadd.classList.add('GamePad')
  gamePadd.id = 'GamePad'
  document.body.appendChild(gamePadd);
  gamePad = document.getElementById('GamePad')
}

function fillBackground(background){
  if(!background){
    background='backgroundOrange'
  }
  document.getElementsByClassName('GamePad')[0].style.backgroundImage =  'url(./ZombieGameFiles/assets/'+background+'.png)';
}


function createScore(){
  document.getElementsByClassName('GamePad')[0].innerHTML +=`
  <div class="score">
  <h3>Score : <span id="score"> 0</span> </h3>
  </div>`;

}

function createContainer(zombie){
  gZombieTheme = zombie
  document.getElementsByClassName('GamePad')[0].innerHTML +=`
  <audio src="./ZombieGameFiles/assets/laser.mpeg" id="sound">

  </audio>
  <div class="zombie__container" id="zContainer">
  <img src="./ZombieGameFiles/assets/${zombie}Left.png" alt="" class="left zombie lleg">
    <img src="./ZombieGameFiles/assets/${zombie}Left.png" alt="" class="center zombie lleg">
      <img src="./ZombieGameFiles/assets/${zombie}Left.png" alt="" class="right zombie lleg">
  </div>
  `;
}

function createShooter(shooter){
  document.getElementsByClassName('GamePad')[0].innerHTML +=`
  <div class="shooter">
    <img src="./ZombieGameFiles/assets/${shooter}centerShoot.png" alt="" id="shooter" class="center">
  </div>
  `;
}

function createInteractionPad(){
  document.getElementsByClassName('GamePad')[0].innerHTML +=`
  <div class="controllers">
    <img src="./ZombieGameFiles/assets/left.png" alt="" onclick="shootLeft()">
    <img src="./ZombieGameFiles/assets/shoot.png" alt="" class="shootBtn" onClick="shootCenter()">
    <img src="./ZombieGameFiles/assets/right.png" alt="" onclick="shootRight()">
  </div>

  <div class="gameOver" id="over">
    <img src="./ZombieGameFiles/assets/restart.png" alt="" class="restart" onclick="restart()">
    <img src="./ZombieGameFiles/assets/quit.png" alt="">
  </div>
  `;
}

let shooterPoisition = 1;
let posArray = ['left' , 'center' , 'right']

let zombieArray = [0 , 0 , 0];
let zombieSize = [55, 55 ,55];

let totalzombie = 0
let score = 0;
let gZombieTheme;
// 80px down

function shootLeft(){
  shooterPoisition -=1;
  if(shooterPoisition < 0){
    shooterPoisition = 0;
  }
  document.getElementById('shooter').classList.remove("left");
  document.getElementById('shooter').classList.remove("right");
  document.getElementById('shooter').classList.remove("center");
  rotateShooter(posArray[shooterPoisition] ,document.getElementById('shooter'));
  document.getElementById('shooter').classList.add(posArray[shooterPoisition])

}

function shootRight(){
  shooterPoisition +=1;
  if(shooterPoisition > 2){
    shooterPoisition = 2;
  }
  document.getElementById('shooter').classList.remove("left");
  document.getElementById('shooter').classList.remove("right");
  document.getElementById('shooter').classList.remove("center");
  rotateShooter(posArray[shooterPoisition] ,document.getElementById('shooter'));
  document.getElementById('shooter').classList.add(posArray[shooterPoisition])

}


let time = 700;

function gameOver(){
  score = 0;
  clearInterval(gen);
  document.getElementById('over').classList.add('active');
}

function moveZombie(){
  console.log(zombieArray);
  for(let i = 0; i<3; i++){


    if(zombieArray[i] !=0){
      zombieArray[i] +=15;
      zombieSize[i]  +=5;
      document.getElementsByClassName('zombie')[i].style.top = zombieArray[i] + "px";
      document.getElementsByClassName('zombie')[i].style.width = zombieSize[i] + "px";
      document.getElementsByClassName('zombie')[i].style.opacity =1;

      let f  = document.getElementsByClassName('zombie')[i];
      if(f.classList.contains('lleg')){
        f.src= `./ZombieGameFiles/assets/${gZombieTheme}Right.png`
        f.classList.remove('lleg');
      }
      else{
        f.src= `./ZombieGameFiles/assets/${gZombieTheme}Left.png`
        f.classList.add('lleg');
      }
      if(zombieArray[i] >= 235){
        gameOver();
      }
    }
  }
}

function generateZombie(){

  let index = Math.floor(Math.random() * 3);
  while(zombieArray[index] != 0){
    index = Math.floor(Math.random() * 3);
  }

  let classs;
  switch (index) {
    case 0:
      classs = 'left'
      break;
    case 1:
        classs = 'center'
        break;
    case 2:
          classs = 'right'
          break;
    default:

  }


  zombieArray[index] = 155;
  document.getElementsByClassName('zombie')[index].style.top = zombieArray[index] + "px";
  document.getElementsByClassName('zombie')[index].style.opacity =1;
}

function shootCenter(){
  let index;
  let shooter = document.getElementById('shooter');
  if(shooter.classList.contains('left')){
    index =0;
  }
  else if (shooter.classList.contains('center')) {
    index = 1;
  }
  else{
    index = 2;
  }
  document.getElementsByClassName('zombie')[index].style.opacity =0;
  document.getElementById('sound').play();
  zombieArray[index] = 140;
  zombieSize[index] = 55;
  score +=10;
  document.getElementById('score').innerHTML = score;
}


let gen = setInterval(()=>{

  if(totalzombie < 3){
    generateZombie();
    totalzombie+=1;

  }
  moveZombie();

},900);


function restart(){
  window.location.reload();
}
