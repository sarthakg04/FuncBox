/*
    createBackground();
*/

var arr = [1,2,3,4,5,6,7,8,9];
Phonex = document.createElement("div");
Phonex.classList.add("Phonex");
document.body.appendChild(Phonex);


function createBackground() {
  // console.log("createBackground");
  Phonex.innerHTML += `
      <div class="Background">
        <img src="./ShootThePrimesGameFiles/assets/Background.png" alt="" width="400px" height="530px" />
      </div>
      `;
}

function createJokers(){
    // console.log("createJokers");
    Phonex.innerHTML += `
        <div class="Jokers">
            <img src="./ShootThePrimesGameFiles/assets/Jokers.png" alt="" width="320px" />
        </div>
        `;
}


function generateBoxes(){
    // console.log("generateBoxes");
    Phonex.innerHTML += `
            <div class="box one">1</div>
            <div class="box two">2</div>
            <div class="box three">3</div>
            <div class="box four">4</div>
            <div class="box five">5</div>
            <div class="box six">6</div>
            <div class="box seven">7</div>
            <div class="box eight">8</div>
            <div class="box nine">9</div>
        `;
}