// Frontend Function
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
function createInteractionPad(){
  gamePad.innerHTML += `
  <img id="ball" src="FuncBoxx/BowlingGameFiles/assets/images/ball.png" height="55vh" width="55vw">
  `;
}
