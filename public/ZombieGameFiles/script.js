//FontendFunctions
// createGamepad();
// createContainer();
// createShooter();
// createInteractionPad();

function createGamepad(){
  let gamePadd = document.createElement('DIV')
  gamePadd.classList.add('GamePad')
  gamePadd.id = 'GamePad'
  document.body.appendChild(gamePadd);
  gamePad = document.getElementById('GamePad')
}


function createContainer(){
  document.getElementsByClassName('GamePad')[0].innerHTML +=`
  <div class="zombie__container" id="zContainer">
  <img src="./ZombieGameFiles/assets/zombieLeft.png" alt="" class="left zombie lleg">
    <img src="./ZombieGameFiles/assets/zombieLeft.png" alt="" class="center zombie lleg">
      <img src="./ZombieGameFiles/assets/zombieLeft.png" alt="" class="right zombie lleg">
  </div>
  `;
}

function createShooter(){
  document.getElementsByClassName('GamePad')[0].innerHTML +=`
  <div class="shooter">
    <img src="./ZombieGameFiles/assets/centerShoot.png" alt="" id="shooter" class="center">
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

// 80px down

function shootLeft(){
  shooterPoisition -=1;
  if(shooterPoisition < 0){
    shooterPoisition = 0;
  }
  document.getElementById('shooter').classList.remove("left");
  document.getElementById('shooter').classList.remove("right");
  document.getElementById('shooter').classList.remove("center");
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
  document.getElementById('shooter').classList.add(posArray[shooterPoisition])

}


let time = 700;

function gameOver(){
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
        f.src= "./ZombieGameFiles/assets/zombieRight.png"
        f.classList.remove('lleg');
      }
      else{
        f.src= "./ZombieGameFiles/assets/zombieLeft.png"
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
  zombieArray[index] = 140;
  zombieSize[index] = 55;
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
