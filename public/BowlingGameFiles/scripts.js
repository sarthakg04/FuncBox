let flag=1;
let lpos=0;
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
  0/9
  </div>
  <div class="game">
  
  <img  id="ball" src="FuncBoxx/BowlingGameFiles/assets/images/ball.png" class="pin">
  <img id="pin1" src="FuncBoxx/BowlingGameFiles/assets/images/pin.png" class="pin" >
  <img id="pin2" src="FuncBoxx/BowlingGameFiles/assets/images/pin.png" class="pin">
  <img id="pin3" src="FuncBoxx/BowlingGameFiles/assets/images/pin.png" class="pin">
  <img id="pin4" src="FuncBoxx/BowlingGameFiles/assets/images/pin.png" class="pin">
  <img id="pin5" src="FuncBoxx/BowlingGameFiles/assets/images/pin.png" class="pin">
  <img id="pin6" src="FuncBoxx/BowlingGameFiles/assets/images/pin.png" class="pin">
  <img id="pin7" src="FuncBoxx/BowlingGameFiles/assets/images/pin.png" class="pin">
  <img id="pin8" src="FuncBoxx/BowlingGameFiles/assets/images/pin.png" class="pin">
  <img id="pin9" src="FuncBoxx/BowlingGameFiles/assets/images/pin.png" class="pin">
  <div class="controllers" id="control">
  <button onclick="control(0)" >Play</button>
  <button onclick="control(1); flag=0">Shoot</button>
  </div>
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
      lpos=post;
      clearInterval(id);
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
    let post = 400;
    clearInterval(id);
    let i;
    id = setInterval(frame, 5);
    function frame() {
      if (post == 50) {
        clearInterval(id);
        console.log(lpos);
        result();
      } 
      else {
        post--; 
        elem.style.marginTop = post + "px"; 
      }
    }
}}
function result(){
  if (lpos<110 && lpos>=0)
  { 
    document.getElementById("score").innerHTML='3/9';
    document.getElementById('pin1').style.opacity=0;
    document.getElementById('pin2').style.opacity=0;
    document.getElementById('pin3').style.opacity=0;
    console.log('Left 3 pins')
  }
  else if(lpos>=110 && lpos<220)
  {
    document.getElementById("score").innerHTML='9/9 You Won';
    document.getElementById('pin1').style.opacity=0;
    document.getElementById('pin2').style.opacity=0;
    document.getElementById('pin3').style.opacity=0;
    document.getElementById('pin4').style.opacity=0;
    document.getElementById('pin5').style.opacity=0;
    document.getElementById('pin6').style.opacity=0;
    document.getElementById('pin7').style.opacity=0;
    document.getElementById('pin8').style.opacity=0;
    document.getElementById('pin9').style.opacity=0;
    console.log('All pins')
  }
  else
  {
    document.getElementById("score").innerHTML='3/9';
    document.getElementById('pin7').style.opacity=0;
    document.getElementById('pin8').style.opacity=0;
    document.getElementById('pin9').style.opacity=0;
    console.log('Right 3 pins')
  }
}