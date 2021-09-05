function createGamepad() {
    let gamePadd = document.createElement('DIV')
    gamePadd.classList.add('GamePad')
    gamePadd.id = 'GamePad'
    document.body.appendChild(gamePadd);
    gamePad = document.getElementById('GamePad')
}
function fill(background) {
  document.getElementsByClassName('GamePad')[0].style.backgroundImage =  'url(FuncBoxx/ClockGameFiles/assets/backgrounds/kids1.png)';
}
function createInteractionPad(){
  gamePad.innerHTML += `
  <div class="score" id="score">
  Guess
  </div>
  <div class="game">
  <img class="clock" src="FuncBoxx/ClockGameFiles/assets/images/2_45_PM.png" height="350vh" width="270vw">
  <div class="inputfield">
  10:00 AM
  </div>
  <div class="controllers" id="control">
  <button class="submitbutton" onclick="control(0)" >Submit</button>
  <button class="reloadbutton" onclick="control(1)">Reload</button>
  </div>
  </div>
  `;
}