//FOntend Functions
// createGamepad();
// fill();
// createQuestionContainer();
// createBaskets();
// createBasketBall();
// createResult();
// function gameSpeed(){
//   speed =1000;
// }
// gameSpeed();
// startGame();


let denomArray = [1000 ,100 , 10];
let shootArray = ['hitleft' , 'hitcenter' ,  'hitright' ];
let num;
let index;
let ans;
let pointer = 0;
let movePointer;
let speed = 1000;


function createGamepad(){
  let gamePadd = document.createElement('DIV')
  gamePadd.classList.add('GamePad')
  gamePadd.id = 'GamePad'
  document.body.appendChild(gamePadd);
  gamePad = document.getElementById('GamePad')
}

function fill(){
  document.getElementsByClassName('GamePad')[0].style.backgroundImage =  'url(./DecimalGameFiles/assets/background.png)';
}



function createQuestionContainer(){
  document.getElementsByClassName('GamePad')[0].innerHTML +=`
  <div class="question">
      <h1 id="question"></h1>
  </div>
  `;
}

function createBaskets(){
  document.getElementsByClassName('GamePad')[0].innerHTML +=`
  <div class="numbers">
    <div class="number">
      <h1 class="num"></h1>
    </div>
    <div class="basket">
      <div class="indicator"></div>
      <img src="./DecimalGameFiles/assets/basket.png" alt="">
    </div>
    <div class="number">
      <h1 class="num"></h1>
    </div>
    <div class="basket">
      <div class="indicator"></div>
      <img src="./DecimalGameFiles/assets/basket.png" alt="">
    </div>
    <div class="number">
      <h1 class="num"></h1>
    </div>
    <div class="basket">
      <div class="indicator"></div>
      <img src="./DecimalGameFiles/assets/basket.png" alt="">
    </div>
    <div class="number">
      <h1 class="num"></h1>
    </div>
  </div>
  `;
}

function createBasketBall(){
  document.getElementsByClassName('GamePad')[0].innerHTML +=`
  <div class="basketball" onclick="shoot()">
    <img src="./DecimalGameFiles/assets/ball.png" alt="">
  </div>
  `;
}

function createResult(){
  document.getElementsByClassName('GamePad')[0].innerHTML +=`
  <div class="result">

  </div>
  `;
}


function startGame(){
  document.getElementsByClassName('indicator')[pointer].classList.add('active');
  movePointer = setInterval(()=>{

    document.getElementsByClassName('indicator')[pointer].classList.remove('active');
    pointer +=1;
    if(pointer > 2){
      pointer = 0 ;
    }
    document.getElementsByClassName('indicator')[pointer].classList.add('active');

  },speed);
  genQuestion();
}





function genQuestion(){
 num = Math.floor(1000+Math.random()*9000);
 index = Math.floor(Math.random() * 3);
 ans = num/denomArray[index];
 document.getElementById('question').innerHTML = num+"/"+denomArray[index];
 fillNumbers();
}

function fillNumbers(){
  let snum = num.toString().split("");
  for(let i =0 ; i<4;i++){
    document.getElementsByClassName('num')[i].innerHTML = snum[i];
  }
}




function shoot(){
  clearInterval(movePointer);
  document.getElementsByClassName('basketball')[0].classList.add(shootArray[pointer]);
  setTimeout(()=>{
    if(ans == (num/denomArray[pointer])){
      showResult(true)
    }
    else {
      showResult(false)
    }
  },1500)

}

function restart(){
  window.location.reload();
}

function showResult(result){
  if(result){
    document.getElementsByClassName('result')[0].innerHTML =
    `
    <p>Wow you Did it correctly</p>
    <a href="javascript:void(0)" onclick="restart()">Try a new question!</a>
    `;
  }
  else{
    document.getElementsByClassName('result')[0].innerHTML =
    `
    <p>Oops you Did it Wrong. Correct Ans is : <b>${parseFloat(ans)}</b></p>
    <a href="javascript:void(0)" onclick="restart()">Try a new question!</a>
    `;
  }

  document.getElementsByClassName('result')[0].classList.add('active');
}
