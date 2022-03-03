/* 
let position =0;

let stages = ['egg' , 'catterPiller' , 'cacoon'  , 'butterfly']
let stages2 = stages
let placement = []

createGamepad();
fill();
createStagesContainer();
createStages();
createInteractionPad();

function createStages(){
  let done = []
  let flag = 0;
  while(flag < 4){
    let index = Math.floor(Math.random() * ((stages2.length -1) - 0 + 1) + 0);
    if(!done.includes(index)){
      createStage(index, flag);
      flag +=1
    }
    done.push(index)
  }
}

*/



function createGamepad(){
  let gamePadd = document.createElement('DIV')
  gamePadd.classList.add('GamePad')
  gamePadd.id = 'GamePad'
  document.body.appendChild(gamePadd);
  gamePad = document.getElementById('GamePad')
}

function fill(){
  document.getElementsByClassName('GamePad')[0].style.backgroundImage =  'url(./LifeCycleOfButterflyFiles/assets/background.png)';
}


function createStagesContainer(){
  document.getElementsByClassName('GamePad')[0].innerHTML +=`
  <div class="stages__container">
    <img src="./LifeCycleOfButterflyFiles/assets/orange.png" class="right active" alt="" onclick="active(2)">
    <img src="./LifeCycleOfButterflyFiles/assets/orange.png" class="bottom" alt="" onclick="active(3)">
        <img src="./LifeCycleOfButterflyFiles/assets/orange.png" class="left " alt="" onclick="active(1)">
        <img src="./LifeCycleOfButterflyFiles/assets/orange.png" class="top" alt="" onclick="active(0)">
  </div>
  <div class="stages">

  </div>
  `;
}

function createStage(index, flag){
  document.getElementsByClassName('stages')[0].innerHTML +=`
      <div class="stage">
        <img src="./LifeCycleOfButterflyFiles/assets/${stages2[index]}.png" alt="" onclick="placePosition(${index} , ${flag})">
      </div>
      `;
}


// A frontend function

// function createStages(){
//   let done = []
//   let flag = 0;
//   while(flag < 4){
//     let index = Math.floor(Math.random() * ((stages2.length -1) - 0 + 1) + 0);
//     if(!done.includes(index)){
//       createStage(index, flag);
//       flag +=1
//     }
//     done.push(index)
//   }
// }

function createInteractionPad(){
  document.getElementsByClassName('GamePad')[0].innerHTML +=`
  <div class="submit">
    <a href="javascript:void(0)" onclick="submit()">Submit</a>
    <a href="javascript:void(0)" onclick="restart()">Restart</a>
  </div>

  <div class="result">
    <p id="content"></p>

    <a href="javascript:void(0)" onclick="closeModal()">Close</a>
  </div>
  `;
}

function calculateIndex(index){
  index +=1;
  if(index > 3){
    index = 0
  }
  return index
}




function placePosition(n , flag){
  placement.push(n);
  document.getElementsByTagName('img')[position].src = `./LifeCycleOfButterflyFiles/assets/${stages[n]}.png`;
  document.getElementsByTagName('img')[position].classList.remove('active');
  document.getElementsByClassName('stage')[flag].style.display = 'none'
  position = calculateIndex(position);
  document.getElementsByTagName('img')[position].classList.add('active')
}



function submit(){

  if(placement[0] === 0  && placement[1] === 1 && placement[2] === 2 && placement[3] === 3){
    document.getElementById('content').innerHTML = "Wow, You did it Correctly!"
  }
  else {
    document.getElementById('content').innerHTML = "Ops, Something is Wrong. Please Try again!"
  }

  document.getElementsByClassName('result')[0].classList.add('active');
}


function closeModal(){
  document.getElementsByClassName('result')[0].classList.remove('active');
}


function restart(){
  window.location.reload();
}
