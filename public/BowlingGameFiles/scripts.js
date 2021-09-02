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
  <img class="ballstyle" id="ball" src="FuncBoxx/BowlingGameFiles/assets/images/ball.png" height="50vh" width="50vw">
  `;
}
function control(){
  let id = null;
  const elem = document.getElementById('ball');
  const dem = elem.getBoundingClientRect();  
  let pos = dem.top;
  clearInterval(id);
  id = setInterval(frame, 2);
  function frame() {
    if (pos == 0) {
    } else {
      pos--; 
      elem.style.marginTop = pos + "px"; 
    }
  }
}