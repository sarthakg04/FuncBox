let flag=1;
let lpos=0;
let temp=50;
function createGamepad() {
    let gamePadd = document.createElement('DIV')
    gamePadd.classList.add('GamePad')
    gamePadd.id = 'GamePad'
    document.body.appendChild(gamePadd);
    gamePad = document.getElementById('GamePad')
}
function fill(background) {
  document.getElementsByClassName('GamePad')[0].style.backgroundImage =  'url(FuncBox/AlienGameFiles/assets/backgrounds/back.png)';
}
function createInteractionPad(){
  gamePad.innerHTML += `
  <div class="game">
  <img  id="alien" src="FuncBox/AlienGameFiles/assets/images/left.svg">
  <div class="controllers" id="control">
  <button id="playButton" onclick="ani()" >Play</button>
  </div>
  </div>
  `;
}
function KeepSayingHello(){
  setInterval(function () {console.log("Hello")}, 3000);
}
function ani1(){
  let i=0;
  let elem = document.getElementById('alien');
  const dem = elem.getBoundingClientRect();  
  for(i=dem.top;i<400;i++){
    elem.style.marginTop = i + "px"; 
    KeepSayingHello();
  }
}
function ani(){
  document.getElementById("playButton").disabled = true;
  let id = null;
  let elem = document.getElementById('alien');
  const dem = elem.getBoundingClientRect();  
  let post = parseInt(dem.top);
  clearInterval(id);
  let i;
  id = setInterval(frame, 500);
    function frame() {
      if (post>350 ) {
        clearInterval(id);
        console.log(lpos);
        result();
      } 
      else {
        post+=10; 
        temp+=10;
        elem.style.marginTop = post + "px";
        if (flag==1){
        document.getElementById("alien").src='FuncBox/AlienGameFiles/assets/images/right.svg';
        document.getElementById("alien").style.height=temp+"px";
        document.getElementById("alien").style.width+=temp+"px";
        flag=0;
      }
      else{
        document.getElementById("alien").src='FuncBox/AlienGameFiles/assets/images/left.svg';
        document.getElementById("alien").style.height=temp+"px";
        document.getElementById("alien").style.width+=temp+"px";
        flag=1;
      }
      }
    }
}