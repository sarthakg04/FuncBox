
//Frontend Functions
// const options = [{
//     weather: 'sunny',
//     correct: 'sunglass'
//   },
//   {
//     weather : 'rainy',
//     correct : 'umbrella'
//   }
// ]
//
// createGamepad();
// fillBackground();
// createBear();
// createOptions();
// createInteractionPad();

let index;

function createGamepad(){
  let gamePadd = document.createElement('DIV')
  gamePadd.classList.add('GamePad')
  gamePadd.id = 'GamePad'
  document.body.appendChild(gamePadd);
  gamePad = document.getElementById('GamePad')
}

function fillBackground(background){
  if(!background){
    background='backgroundOrange'
  }
  document.getElementsByClassName('GamePad')[0].style.backgroundImage =  'url(./ZombieGameFiles/./WeatherGameFiles/assets/'+background+'.png)';
}

function createBear(){
  document.getElementsByClassName('GamePad')[0].innerHTML +=`
  <div class="bear__container">
    <img src="./WeatherGameFiles/assets/bear.png" alt="">
  </div>`;
}

function createOptions(){
  document.getElementsByClassName('GamePad')[0].innerHTML +=`
  <div class="options">
    <div class="option" onclick="verify('sunglass')">
      <img src="./WeatherGameFiles/assets/sunglass.png" alt="">
    </div>
    <div class="option" onclick="verify('umbrella')">
      <img src="./WeatherGameFiles/assets/umbrella.png" alt="">
    </div>
  </div>`;
}

function createInteractionPad(){
  document.getElementsByClassName('GamePad')[0].innerHTML +=`
  <div class="result" id="result">

  </div>

  <div class="retry" id="retry">
    <img src="./WeatherGameFiles/assets/retry.png" alt="" onclick="restart()">
  </div>
  `;
  generateWeather();
}

function generateWeather(){
  index = Math.floor(Math.random()*2);
  console.log(index);
  let weather = options[index].weather;
  document.querySelector('.GamePad').style.backgroundImage = 'url(./WeatherGameFiles/assets/'+weather+'.png)'
}


function result(result){
  document.getElementById('result').classList.add('active');
  document.getElementById('retry').classList.add('active');
  if(!result){
    document.getElementById('result').innerHTML =`
    <div class="wrong__heading">
      <h1>Oops!</h1>
      <p>You picked the wrong object</p>
    </div>
    <div class="answers" id='answers'>
      <p>For ${options[0].weather}  pick ->   <img src="./WeatherGameFiles/assets/${options[0].correct}.png" alt=""> </p>
      <p>For ${options[1].weather}  pick ->   <img src="./WeatherGameFiles/assets/${options[1].correct}.png" alt=""> </p>
    </div>
    `;
  }
  else{
    document.getElementById('result').innerHTML =`
    <img src="./WeatherGameFiles/assets/correct.png" alt="" class="correct">
    <div class="correct__heading">
      <h1>Well Done</h1>
    </div>
    `;
  }
}



function restart(){
  window.location.reload();
}


function verify(option){
  if(option == options[index].correct){
    result(true);
  }
  else{
    result(false);
  }
}
