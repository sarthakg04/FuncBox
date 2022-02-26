//Frontend Fucntions
// createGamepad();
// createHeading();
// createScore();
// fillBackground();
// let garbage = [
//   {name : 'apple' , type : 'bio'} ,
//   {name : 'banana' , type : 'bio'},
//   {name : 'can' , type : 'non'},
//   {name : 'coke' , type : 'non'},
//   {name : 'egg' , type : 'bio'},
//   {name : 'fish' , type : 'bio'},
//   {name : 'plastic' , type : 'non'},
//   {name : 'melon' , type : 'bio'},
//   {name  : 'tv' , type : 'non'},
//   {name  : 'coconut' , type : 'bio'},
//   {name  : 'chicken' , type : 'bio'},
//   {name  : 'noodles' , type : 'bio'},
//   {name  : 'pen' , type : 'non'},
//   {name  : 'sword' , type : 'non'},
//   {name  : 'bottle' , type : 'non'},
// ]
//
// function verifyGarbage(item){
//   for(let i =0;i<garbage.length;i++){
//     if(garbage[i].name == item){
//       if(garbage[i].type == 'non'){
//         score +=10;
//         return true;
//       }
//       else{
//         score -=5;
//         return false;
//       }
//     }
//   }
// }
// createDustbin();
// fillGarbage();
// creatPopUp();

function createGamepad(){
  let gamePadd = document.createElement('DIV')
  gamePadd.classList.add('GamePad')
  gamePadd.id = 'GamePad'
  document.body.appendChild(gamePadd);
  gamePad = document.getElementById('GamePad')
}

function createHeading(){
  document.getElementsByClassName('GamePad')[0].innerHTML +=`
  <div class="heading">
    <p>Please remove the non-biodegradable waste from the soil</p>
  </div>
  `;
}

function createScore(){
  document.getElementsByClassName('GamePad')[0].innerHTML +=`
  <div class="score">
    <img src="./RecycleItFiles/assets/score.png" alt="">
    <p id = 'score'>0</p>
  </div>
  `;
}

function fillBackground(){
  document.getElementsByClassName('GamePad')[0].style.backgroundImage =  'url(./RecycleItFiles/assets/background.png)';
}

function createDustbin(){
  document.getElementsByClassName('GamePad')[0].innerHTML +=`
  <div class="dustbin">
    <img src="./RecycleItFiles/assets/dustbin.png" alt="">
  </div>
  `;
}

function fillGarbage(){
  let garbage2 = [...garbage]
  document.getElementsByClassName('GamePad')[0].innerHTML +=`
    <div class="garbage__container">
    </div>
  `;
  
  for (let i = 0; i < 9; i++) {
    let index = Math.floor(Math.random() * (garbage.length - 1 - 0 + 1) + 0);
			document.getElementsByClassName("garbage__container")[0].innerHTML += `
    <div class="garbage">
    <img src="./RecycleItFiles/assets/${garbage[index].name}.png" alt="" class="gImg ${garbage[index].type} ${garbage[index].name}" onclick="checkGarbage()">
    </div>
    `;
    garbage.splice(index , 1);
  }

  garbage = [...garbage2];
  console.log(garbage);
  addEvent();
}

function creatPopUp(){
  document.getElementsByClassName('GamePad')[0].innerHTML +=`
  <div class="wrong__container">
    <h1>WRONG!!!!!</h1>

    <h3>Please Check the Item which you Choose!!</h3>

    <a href="javascript:void(0)" onclick="showError()">Close</a>
  </div>

  <div class="right__container">
    <h1>Well Done!!!!!</h1>

    <h3>You Removed Everything!!!!</h3>

    <a href="javascript:void(0)" onclick="restart()">Restart</a>
  </div>
  `;
}

let score = 0;
let non = 0;
function restart(){
  window.location.reload();
}


function addEvent(){

let images = document.getElementsByClassName('gImg');

for(i=0 ;i<images.length ; i++){

    images[i].addEventListener('click', (e)=>{
      console.log('yes');
    checkGarbage( e.target)
  })
}

}
function updateScore(){
  document.getElementById('score').innerHTML = score;
}


function checkGarbage(){
  img = this.event.target;
  let classes = img.classList
  let res = verifyGarbage(classes[classes.length-1])
  if(res){

    img.classList.add('drop');
    setTimeout(()=>{
      img.style.zIndex = '-1';
    },600)


    updateScore();

    non +=1;
    let totalNon=0;
    garbage.forEach((item, i) => {
      if(item.type == 'non'){
        totalNon+=1;
      }
    });

    if(non == totalNon){
      showWinner();
    }
  }

  else{
    updateScore();
    showError();
  }
}

function showError(){
  document.getElementsByClassName('wrong__container')[0].classList.toggle('active')
}

function showWinner(){
  document.getElementsByClassName('right__container')[0].classList.toggle('active')
}
