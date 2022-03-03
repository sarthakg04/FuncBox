//FOntend Functions
// createGamepad();
// fillBackground();
// createQuestionContainer();
// createBaskets();
// createBall();
// createResult();
// function gameSpeed(){
//   speed =1000;
// }
//
// function genFourDigiRandomNumber(){
//
//   //This function would generate a 4 digit random number.
//
//   let number = Math.floor(1000+Math.random()*9000);
//   return number;
// }
//
// function splitNumber(number){
//
//   //We would convert the nummber into array.
//   //Suppose Number is 1234 so this function would return an
//   //array of [1,2,3,4]. So our game enginer would be able
//   //to put those values at required place.
//
//   let splitedNumber = number.toString().split("");
//   return splitedNumber;
// }
//
//
// function restart(){
//   //To Refresh the page, thus restarting the game.
//
//   window.location.reload();
// }
//
// function checkAnswer(pointer , selectedPointer){
//   if(pointer == selectedPointer){
//     return true;
//   }
//   else {
//     return false;
//   }
// }
// function correctAnswer(denom){
//   switch (denom) {
//     case 10:
//       pointer = 2;
//       break;
//     case 100:
//       pointer = 1;
//       break
//     case 1000:
//       pointer = 0;
//       break;
//     default:
//
//   }
// }
//
// gameSpeed();
// startGame();



let denomArray = [1000 ,100 , 10];
let shootArray = ['hitleft' , 'hitcenter' ,  'hitright' ];
let num;
let index;
let ans;
let selectedPointer = 0;
let movePointer;
let speed = 1000;
let pointer =0;


function createGamepad(){
  let gamePadd = document.createElement('DIV')
  gamePadd.classList.add('GamePad')
  gamePadd.id = 'GamePad'
  document.body.appendChild(gamePadd);
  gamePad = document.getElementById('GamePad')
}

function fillBackground(bg){
  if(!bg){
    bg='dartbackground'
  }

  document.getElementsByClassName('GamePad')[0].style.backgroundImage =  'url(./DecimalGameFiles/assets/'+bg+'.png)';
}



function createQuestionContainer(){
  document.getElementsByClassName('GamePad')[0].innerHTML +=`
  <div class="question">
      <h1 id="question"></h1>
  </div>
  `;
}

function createBaskets(basket){
  if(!basket){
    basket = 'basket'
  }
  document.getElementsByClassName('GamePad')[0].innerHTML +=`
  <div class="numbers">
    <div class="number">
      <h1 class="num"></h1>
    </div>
    <div class="basket">
      <div class="indicator"></div>
      <img src="./DecimalGameFiles/assets/${basket}.png" alt="">
    </div>
    <div class="number">
      <h1 class="num"></h1>
    </div>
    <div class="basket">
      <div class="indicator"></div>
      <img src="./DecimalGameFiles/assets/${basket}.png" alt="">
    </div>
    <div class="number">
      <h1 class="num"></h1>
    </div>
    <div class="basket">
      <div class="indicator"></div>
      <img src="./DecimalGameFiles/assets/${basket}.png" alt="">
    </div>
    <div class="number">
      <h1 class="num"></h1>
    </div>
  </div>

  `;
}

function createBall(ball){
  if(!ball){
    ball = 'ball'
  }
  document.getElementsByClassName('GamePad')[0].innerHTML +=`
  <div class="basketball" onclick="shoot()">
    <img src="./DecimalGameFiles/assets/${ball}.png" alt="">
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
  document.getElementsByClassName('indicator')[selectedPointer].classList.add('active');
  movePointer = setInterval(()=>{

    document.getElementsByClassName('indicator')[selectedPointer].classList.remove('active');
    selectedPointer +=1;
    if(selectedPointer > 2){
      selectedPointer = 0 ;
    }
    document.getElementsByClassName('indicator')[selectedPointer].classList.add('active');

  },speed);
  genQuestion();
}





function genQuestion(){
 num = genFourDigiRandomNumber();
 index = Math.floor(Math.random() * 3);

 ans = num/denomArray[index];
 correctAnswer(denomArray[index]);
 document.getElementById('question').innerHTML = num+"/"+denomArray[index];
 fillNumbers();
}

function fillNumbers(){
  let snum = splitNumber(num);
  for(let i =0 ; i<4;i++){
    document.getElementsByClassName('num')[i].innerHTML = snum[i];
  }
}




function shoot(){
  clearInterval(movePointer);
  document.getElementsByClassName('basketball')[0].classList.add(shootArray[selectedPointer]);
  setTimeout(()=>{
    let result = checkAnswer(pointer , selectedPointer);

    showResult(result);
  },1500)

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
