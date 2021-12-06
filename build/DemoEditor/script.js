//FRONTEND FUNCTIONS
// createGamepad()
// fillBackground('yellow');
// document.getElementById('root').innerText = 'hello';

function createGamepad(){
  let gamePadd = document.createElement('DIV')
  gamePadd.classList.add('GamePad')
  gamePadd.id = 'GamePad'
  document.body.appendChild(gamePadd);
  gamePad = document.getElementById('GamePad')

  document.getElementById('GamePad').innerHTML +=`
    <div id="root"></div>
  `
}

function fillBackground(color){

  if(!color){
    color ='grey'
  }
  document.getElementsByClassName('GamePad')[0].style.background =  color;
}
