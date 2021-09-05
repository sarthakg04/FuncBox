function createGamepad() {
    let gamePadd = document.createElement('DIV')
    gamePadd.classList.add('GamePad')
    gamePadd.id = 'GamePad'
    document.body.appendChild(gamePadd);
    gamePad = document.getElementById('GamePad')
}
function fill(background) {
  document.getElementsByClassName('GamePad')[0].style.backgroundImage =  'url(FuncBoxx/BowlingGameFiles/assets/backgrounds/Frame.png)';
}
function createInteractionPad(){
  gamePad.innerHTML += `
  <div class="score" id="score">
  Guess
  </div>
  <div class="game">
  <div class="controllers" id="control">
  <button onclick="control(0)" >Submit</button>
  <button onclick="control(1)">Reload</button>
  </div>
  </div>
  `;
  
}