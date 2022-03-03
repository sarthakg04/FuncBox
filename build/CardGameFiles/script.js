// Example 
// createGamepad();
// fill('sorry2')
// createContentContianer();
// createContent({content : 'Hello' , font : 'Lato' , size : 32 , color : 'black' , right : 10 , top : 35})

function createGamepad() {
    let gamePadd = document.createElement('DIV')
    gamePadd.classList.add('game__container')
    gamePadd.id = 'game__container'
    document.body.appendChild(gamePadd);
}


function fill(background) {
  document.getElementsByClassName('game__container')[0].style.backgroundImage =  'url(FuncBox/CardGameFiles/assets/'+background+'.svg)';
}

function createContentContianer(){
  document.getElementById('game__container').innerHTML =
  `
  <div class="contentContainer" id="contentContainer">
    <p class="content" id="content"></p>
  </div>
  `;

}

function createContent(data){
  let p = document.getElementById('content');
  let parent = document.getElementById('contentContainer');
  for(let i in data){
    switch (i) {
      case 'content':
        p.innerHTML = data[i];
        break;
      case 'font':
      p.style.fontFamily = data[i];
      break;

      case 'size':
      p.style.fontSize = data[i]+"px";
      break;

      case 'color':
      p.style.color = data[i];
      break;

      case 'left':
      parent.style.left = data[i]+"%";
      break;

      case 'right':
      parent.style.right = data[i]+"%";
      break;

      case 'top':
      parent.style.top = data[i]+"%";
      break;
      default:

    }
  }
}
