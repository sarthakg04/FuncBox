// Frontend Function
let flag=1;
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
  <div class="ball1" id="ball">
  <img class="ballstyle"src="FuncBoxx/BowlingGameFiles/assets/images/ball.png" height="50vh" width="50vw"/>
  </div>
  <div class="buttons" id="controllers">
  <button onclick="control(0)" >Play</button>
  <button onclick="control(1); flag=0">Shoot</button>
  </div>
  `;
  
}
function control(value){
  if (value==0){
  let id = null;
  let elem = document.getElementById('ball');
  const dem = elem.getBoundingClientRect();  
  let post = 0;
  clearInterval(id);
  let i;
  for(i=0;i<3;i++){
  id = setInterval(frame, 50);
  }
  function frame() {
    if (post == 350) {
      clearInterval(id);
      post=0;
    } 
    else if(flag==0){
      clearInterval(id);
      post=0;
    }
    else {
      post++; 
      elem.style.marginLeft = post + "px"; 
    }
  }}
  else{
  let id = null;
  let elem = document.getElementById('ball');
  const dem = elem.getBoundingClientRect();  
  let pos = dem.top | 0;
  clearInterval(id);
  id = setInterval(frame, 2);
  function frame() {
    if (pos == -400) {
      clearInterval(id);  
    } 
    else {
      console.log(pos);
      pos--; 
      elem.style.marginTop = pos + "px"; 
    }
  }
  }
}