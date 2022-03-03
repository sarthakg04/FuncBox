//Frontend Functions
// createGamepad();
// fillBackground();
//createButtons();
//createDroplets();

function createGamepad(){
    let gamePadd = document.createElement('DIV')
    gamePadd.classList.add('GamePad')
    gamePadd.id = 'GamePad'
    document.body.appendChild(gamePadd);
    gamePad = document.getElementById('GamePad')
}

function fillBackground(){
    document.getElementsByClassName('GamePad')[0].innerHTML +=`
    <img src="./CatchMeIfUCanGameFiles/assets/BG.png" class="bg">
    <img src="./CatchMeIfUCanGameFiles/assets/Cloud.png" class="cloud">
    <img src="./CatchMeIfUCanGameFiles/assets/rain.png" class="rain">
    <img src="./CatchMeIfUCanGameFiles/assets/Umberlla_happy.png" id="umb_hap">
    <img src="./CatchMeIfUCanGameFiles/assets/grass_field.png" class="grass">
    <img src="./CatchMeIfUCanGameFiles/assets/life_heart.png" id="heart1">
    <img src="./CatchMeIfUCanGameFiles/assets/life_heart.png" id="heart2">
    <img src="./CatchMeIfUCanGameFiles/assets/life_heart.png" id="heart3">
    <p class="score">SCORE: </p>
    <p class="goal">GOAL: 40</p>
    `;
}

function createButtons(){
    document.getElementsByClassName('GamePad')[0].innerHTML +=`
    <img src="./CatchMeIfUCanGameFiles/assets/button_left.png" id="button_left" onclick="moveLeft()">
    <img src="./CatchMeIfUCanGameFiles/assets/button_right.png" id="button_right" onclick="moveRight()">
    `;
}

function createDroplets(){
    document.getElementsByClassName('GamePad')[0].innerHTML +=`
    <img src="./CatchMeIfUCanGameFiles/assets/Number_drop+4.png" id="droplet1" class="droplet">
    <img src="./CatchMeIfUCanGameFiles/assets/Number_drop+9.png" id="droplet2" class="droplet">
    `
    getDroplets();
    getDistance();
}

//Left and Right Arrow Functioning
var umb_position = 140;

function moveLeft(){
  var umberella = document.getElementById("umb_hap");
  if(umb_position > 70){
      umb_position = umb_position - 30;
      umberella.style.left = umb_position + 'px';
  }
}

function moveRight(){
   var umberella = document.getElementById("umb_hap");
    if(umb_position < 230){
        umb_position = umb_position + 30;
        umberella.style.left = umb_position + 'px';
    }
}


//Droplets dropping
function getDroplets(){
    var droplet1 = document.getElementById("droplet1");
    var droplet2 = document.getElementById("droplet2");

    setTimeout (function() {
        droplet1.style.display="block";
    },0);

    setTimeout (function() {
        droplet2.style.display="block";
    },2000);
}


//Checking if Umberella and Droplets are Colliding

// var droplets = document.getElementsByClassName("droplet");

function getDistance(){
    function getPositionAtCenter(element) {
        const {top, left, width, height} = element.getBoundingClientRect();
        return {
          x: left + width / 2,
          y: top + height / 2
        };
    }

    function getDistanceBetweenElements(a, b) {
        const aPosition = getPositionAtCenter(a);
        const bPosition = getPositionAtCenter(b);
    
        return Math.hypot(aPosition.x - bPosition.x, aPosition.y - bPosition.y);  
    }

    // const distance = getDistanceBetweenElements(document.getElementById("droplet1"),document.getElementById("umb_hap"));
    // if(distance == 0){
    //     document.getElementById("droplet1").style.display="none";
    // }
    // else{
    //     document.getElementById("droplet1").style.display="block";
    // }

    function calcDistance(i){
        var distance = getDistanceBetweenElements(document.getElementById("droplet"+i),document.getElementById("umb_hap"));
    
        if(distance <= 80){
            document.getElementById("droplet"+i).style.display="none";
            clearInterval(interval);
        }
        // console.log(distance);
    }
    
    // var timesRun = 0;
    // var interval = setInterval(function(){
    //     timesRun += 1;
    //     if(timesRun === 14){
    //         clearInterval(interval);
    //     }
    //     for(var i=1;i<3;i++){
    //         calcDistance(i);
    //     }
    // }, 1000);
}
