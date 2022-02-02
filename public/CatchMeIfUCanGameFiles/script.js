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
    <img src="./CatchMeIfUCanGameFiles/assets/button_left.png" id="button_left">
    <img src="./CatchMeIfUCanGameFiles/assets/button_right.png" id="button_right">
    `
    getButtons();
}

function createDroplets(){
    document.getElementsByClassName('GamePad')[0].innerHTML +=`
    <img src="./CatchMeIfUCanGameFiles/assets/Number_drop+4.png" id="droplet1" class="droplet">
    <img src="./CatchMeIfUCanGameFiles/assets/Number_drop+9.png" id="droplet2" class="droplet">
    `
    getDroplets();
}


//Left and Right Arrow Functioning
var umb_position = 140;

function getButtons(){
    var btnleft = document.getElementById("button_left");
    var btnright = document.getElementById("button_right");
    var umberella = document.getElementById("umb_hap");

    const moveLeft = function(){
        if(umb_position > 70){
            umb_position = umb_position - 30;
            umberella.style.left = umb_position + 'px';
        }
    }
    
    const moveRight = function(){
        if(umb_position < 230){
            umb_position = umb_position + 30;
            umberella.style.left = umb_position + 'px';
        }
    }
    
    btnleft.onclick = moveLeft;
    btnright.onclick = moveRight;
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

var droplets = document.getElementsByClassName("droplet");

// droplet1.bind("EnterFrame", function () {
//     if (umberella.x < droplet1.x + droplet1.w &&
//         umberella.x + umberella.w > droplet1.x &&
//         umberella.y < droplet1.y + droplet1.h &&
//         umberella.h + umberella.y > droplet1.y) {
//         // collision detected!
//         this.style.display = "none";
//     }
//     else {
//         // no collision
//         this.style.display = "block";
//     }
// });


