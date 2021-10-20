//Frontend Functions for testing
// createGamepad()
// fill()
// createElement(['goodrocks','badrocks','wasterocks1','wasterocks2'])
// createScore()
// createGrid()
// createRover("rover")
// draw()
// createInteractionPad()
// createRestartButton()


// Frontend Functions

let gamePad,elements, squares , goodrocks = 0 , badrocks = 0 , currentRoverPosition = 35;
let roverDiv , roverImg = 'rover', Score = 0 , time;
var goodrocksScanned = 0;


function createGamepad() {
    let gamePadd = document.createElement('DIV')
    gamePadd.classList.add('GamePad')
    gamePadd.id = 'GamePad'
    document.body.appendChild(gamePadd);
    gamePad = document.getElementById('GamePad')
    // return gamePad;

}

function fill(background) {
  document.getElementsByClassName('GamePad')[0].style.backgroundImage =  'url(./MissionMarsFiles/assets/backgrounds/Frame.png)';
}

function createElement(elementss){
  elements = elementss;
}


function createScore(){
  gamePad.innerHTML +=`
  <div class="score">
    <div class="score-div">
    <img src="FuncBox/MissionMarsFiles/assets/star.svg" alt="">
    <h3 id="score" >Start</h3>
  </div>
  </div>
  `;
}



function createGrid(){
  gamePad.innerHTML += `<div class="grid"></div>`;
}

function createRover(roverr){
  roverImg = roverr
}


function draw() {

  const grid = document.querySelector('.grid');

  for( i = 0; i < 36; i++ ) {
    const square = document.createElement('div')
    grid.appendChild(square)
  }

  let rockArray = randomUniqueNum(34,10)
  squares = Array.from(document.querySelectorAll('.grid div'));
  for( i = 0 ; i < rockArray.length ; i++ ) {
    if(i < 4) {
      squares[rockArray[i]].classList.add(elements[0])
      squares[rockArray[i]].classList.add('rocks')
      goodrocks++
    }
    else if ( i >= 4 && i < 7) {
      squares[rockArray[i]].classList.add(elements[1])
      squares[rockArray[i]].classList.add('rocks')
      badrocks++
    }
    else {
      squares[rockArray[i]].classList.add(elements[Math.floor(Math.random() * 2) + 2])
    }
  }
  roverDiv = document.createElement("div")
  roverDiv.classList.add(roverImg)

  squares[currentRoverPosition].appendChild(roverDiv);


}

function createInteractionPad(){
  gamePad.innerHTML += `
  <div class="controller-container" id='cc'>
    <div class="arrow-keys">
      <img class="movementButton" src='./MissionMarsFiles/assets/buttons/up.svg' id="upButton"></img>
      <div class="left-right">
      <img class="movementButton" src='./MissionMarsFiles/assets/buttons/left.svg' id="leftButton"></img>
      <img src="./MissionMarsFiles/assets/buttons/middle.svg" alt="" class="middle">
      <img class="movementButton" src='./MissionMarsFiles/assets/buttons/right.svg' id="rightButton"></img>
      </div>
      <img class="movementButton" src='./MissionMarsFiles/assets/buttons/down.svg' id="downButton"></img>
    </div>
    <button class="Scan" onclick="ScanObject()" disabled>Scan</button>
  </div>
  `;

  ScanButton = document.querySelector('.Scan');
  addMovementLogic();

  scoreDisplay = document.getElementById('score');
  squares = Array.from(document.querySelectorAll('.grid div'));
  roverDiv = document.createElement("div")
  roverDiv.classList.add(roverImg)
  squares[currentRoverPosition].innerHTML = '';
  squares[currentRoverPosition].appendChild(roverDiv);

}

function createRestartButton(){
  cc = document.getElementById('GamePad');
  restartBtn = document.createElement('img');
  restartBtn.src = "./MissionMarsFiles/assets/buttons/restart.svg";
  restartBtn.classList.add('restartBtn');

  restartBtn.addEventListener("click", function(event){
    event.preventDefault()
    refreshPage();
  });

  document.body.appendChild(restartBtn);
}

//
// Backend Functions
//
//

function refreshPage(){
  window.location.reload();
}

function randomUniqueNum(range, outputCount) {

  let arr = []
  for (let i = 1; i <= range; i++) {
    arr.push(i)
  }

  let result = [];

  for (let i = 1; i <= outputCount; i++) {
    const random = Math.floor(Math.random() * (range - i));
    result.push(arr[random]);
    arr[random] = arr[range - i];
  }

  return result;
}


function MoveUp() {
    if( currentRoverPosition > 5 ) {
        currentRoverPosition = currentRoverPosition - 6

        roverDiv.classList.add('rover')
        document.querySelectorAll('.grid div')[currentRoverPosition].appendChild(roverDiv)

        if( squares[currentRoverPosition].classList.contains('rocks') && !squares[currentRoverPosition].classList.contains('scanned') ) {
            ScanButton.disabled = false
              ScanButton.classList.add('active')
        }
        else {
            ScanButton.disabled = true
            ScanButton.classList.remove('active')
        }
    }
    else{
    //   alert("Up Error");
    }
}

//
function MoveDown() {


    if( currentRoverPosition < 30 ) {

        currentRoverPosition = currentRoverPosition + 6

        roverDiv.classList.add('rover')

        squares[currentRoverPosition].appendChild(roverDiv)

        if( squares[currentRoverPosition].classList.contains('rocks') && !squares[currentRoverPosition].classList.contains('scanned') ) {
            ScanButton.disabled = false
            ScanButton.classList.add('active')
        }
        else {
            ScanButton.disabled = true
              ScanButton.classList.remove('active')
        }
    }
    else{
    //   alert("Down Error");
    }
}

function MoveLeft() {
    if( currentRoverPosition > 0 ) {

      currentRoverPosition = currentRoverPosition - 1

      roverDiv.classList.add('rover')

      squares[currentRoverPosition].appendChild(roverDiv)

      if( squares[currentRoverPosition].classList.contains('rocks') && !squares[currentRoverPosition].classList.contains('scanned') ) {
          ScanButton.disabled = false
          ScanButton.classList.add('active')
      }
      else {
          ScanButton.disabled = true
          ScanButton.classList.remove('active')
      }
    }
    else{
      // alert("Left Error");
    }
}

function MoveRight() {
    if( currentRoverPosition < 35 ) {

      currentRoverPosition = currentRoverPosition + 1

      roverDiv.classList.add('rover')

      squares[currentRoverPosition].appendChild(roverDiv)

      if( squares[currentRoverPosition].classList.contains('rocks') && !squares[currentRoverPosition].classList.contains('scanned') ) {
          ScanButton.disabled = false
          ScanButton.classList.add('active')
      }
      else {
          ScanButton.disabled = true
          ScanButton.classList.remove('active')
      }
    }
    else{
      // alert("Right Error");
    }
}


//

//
function ScanObject() {
    let squares = document.querySelectorAll('.grid div');
    let scoreDisplay = document.getElementById('score');

    document.querySelectorAll('.grid div')[currentRoverPosition].classList.add('scanning')
    // upButton.disabled = true;
    // downButton.disabled = true;
    // leftButton.disabled = true;
    // rightButton.disabled = true;
    ScanButton.disabled = true
    ScanButton.classList.remove('active')
    document.getElementById('cc').classList.toggle('active')
    setTimeout(()=>{
    document.querySelectorAll('.grid div')[currentRoverPosition].classList.remove('scanning')
    if( document.querySelectorAll('.grid div')[currentRoverPosition].classList.contains('goodrocks') ){ 
      document.querySelectorAll('.grid div')[currentRoverPosition].classList.add('goodscan')
    }
    else{
      document.querySelectorAll('.grid div')[currentRoverPosition].classList.add('badscan')
    }
    document.querySelectorAll('.grid div')[currentRoverPosition].classList.add('scanned')
      document.getElementById('cc').classList.toggle('active')
    // upButton.disabled = false;
    // downButton.disabled = false;
    // leftButton.disabled = false;
    // rightButton.disabled = false;
    // Score++;
    if( squares[currentRoverPosition].classList.contains('goodrocks') ) {
      Score++;
      goodrocksScanned++;
    }
    else if ( squares[currentRoverPosition].classList.contains('badrocks') ) {
      Score--;
    }
    ScanButton.disabled = true
    ScanButton.classList.remove('active')
    scoreDisplay.innerHTML = 'Score: '+ Score
    if(goodrocksScanned == goodrocks ) {
        if( Score == goodrocks ) {
          scoreDisplay.innerHTML = 'Perfect Win! Score: '+ Score + '/' + goodrocks
          document.getElementById('cc').classList.toggle('active')
        }
        else {
          scoreDisplay.innerHTML = 'Game Over! Score: '+ Score + '/' + goodrocks
          document.getElementById('cc').classList.toggle('active')
        }
        ScanButton.disabled = true
        ScanButton.classList.remove('active')
    }
  },3000)

}


//
//
// //Calling Movement function
//
//
function addMovementLogic(){

let upButton= document.getElementById('upButton');
let downButton= document.getElementById('downButton');
let leftButton= document.getElementById('leftButton');
let rightButton = document.getElementById('rightButton');


upButton.addEventListener("mousedown",()=>{
  MoveUp();
  time = setInterval(()=>{
    MoveUp();
  },250)
})

upButton.addEventListener("mouseup",()=>{
  clearInterval(time);
})


downButton.addEventListener("mousedown",()=>{
  MoveDown();
  time = setInterval(()=>{
    MoveDown();
  },250)
})

downButton.addEventListener("mouseup",()=>{
  clearInterval(time);
})

leftButton.addEventListener("mousedown",()=>{
  MoveLeft();
  time = setInterval(()=>{
    MoveLeft();
  },250)
})

leftButton.addEventListener("mouseup",()=>{
  clearInterval(time);
})

rightButton.addEventListener("mousedown",()=>{
  MoveRight();
  time = setInterval(()=>{
    MoveRight();
  },250)
})

rightButton.addEventListener("mouseup",()=>{
  clearInterval(time);
})
}
