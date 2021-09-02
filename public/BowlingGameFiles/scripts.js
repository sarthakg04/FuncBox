
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
  document.getElementsByClassName('GamePad')[0].style.backgroundImage =  'url(FuncBoxx/BowlingGameFiles/assets/backgrounds/Frame.png)';
}

function createElement(elementss){
  elements = elementss;
}