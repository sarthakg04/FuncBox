/*
  createBackground();
  createCustomer();
  createOrder();
  createTable();
  createPlate();
  createTruckle();
  createGiveButton();
  createLives();
  generateNumerator();
  generateDenominator();
  createScoreBoard();
  createGameOver();
*/

// ----------------------Frontend---Functions--------------------------

Phonex = document.createElement("div");
Phonex.classList.add("Phonex");
document.body.appendChild(Phonex);


function createBackground() {
  // console.log("createBackground");
  Phonex.innerHTML += `
      <div class="road">
        <img src="./CheesyGuptaGameFiles/assets/road.png" alt="" height="256px" />
      </div>
      `;
}

function createTable() {
  // console.log("createTable");
  Phonex.innerHTML += `
      <div class="table">
        <img src="./CheesyGuptaGameFiles/assets/table.png" alt="" height="175px" />
      </div>

      <div class="table_leg_1">
        <img src="./CheesyGuptaGameFiles/assets/table_leg.png" alt="" />
      </div>
      <div class="table_leg_2">
        <img src="./CheesyGuptaGameFiles/assets/table_leg.png" alt="" />
      </div>
      <div class="table_leg_3">
        <img src="./CheesyGuptaGameFiles/assets/table_leg.png" alt="" />
      </div>
      <div class="table_leg_4">
        <img src="./CheesyGuptaGameFiles/assets/table_leg.png" alt="" />
      </div>
            `;
}

function createCustomer(){
  // console.log("createCustomer");
  Phonex.innerHTML += `
      <div class="boy">
        <img src="./CheesyGuptaGameFiles/assets/boy.png" alt="" height="175px" />
      </div>
      `;
}


function createPlate(){
  // console.log("plate Creaetd");
  Phonex.innerHTML += `
      <div class="plate">
        <img src="./CheesyGuptaGameFiles/assets/plate.png" alt="" height="155px" />
      </div>
      <div class="slices-grid"></div>
  `;

}

function createTruckle(){
  // console.log("createTruckle");
  Phonex.innerHTML += `
      <div class="full_truckle">
        <img src="./CheesyGuptaGameFiles/assets/full_truckle.png" alt="" height="120px" onclick="addSlice()" />
      </div>
  `;
}

function createGiveButton(){
  // console.log("createGiveButton");
  Phonex.innerHTML += `
      <div class="give_btn" onclick="submit()">
        <img src="./CheesyGuptaGameFiles/assets/give_btn.png" alt="" />
      </div>
  `;
}
 
function createLives(){
  // console.log("createLives");
  Phonex.innerHTML += `
      <div class="lives">
        <img src="./CheesyGuptaGameFiles/assets/lives.png" alt="" />
      </div>

      <div class="life_1 life">
        <img src="./CheesyGuptaGameFiles/assets/life.png" alt="" />
      </div>

      <div class="life_2 life">
        <img src="./CheesyGuptaGameFiles/assets/life.png" alt="" />
      </div>

      <div class="life_3 life">
        <img src="./CheesyGuptaGameFiles/assets/life.png" alt="" />
      </div>
  `;
}

function createOrder(){
  // console.log("createOrder");
  Phonex.innerHTML += `
    <div class="order">
      <img src="./CheesyGuptaGameFiles/assets/order.png" alt="" />
    </div>
    <div class="fraction_line">
        <img src="./CheesyGuptaGameFiles/assets/fraction_line.png" alt="" />
    </div>
    <div class="slice">
        <img src="./CheesyGuptaGameFiles/assets/slice.png" alt="" />
      </div>
    <div class="numerator"></div>
    <div class="denominator"></div>
  `;
}

function createScoreBoard(){
  // console.log("createScoreBoard");
  Phonex.innerHTML += `
    <div class="score">Score: 0</div> 
  `;
}

function createGameOver(){
  // console.log("createGameOver");
    Phonex.innerHTML += `
      <div class="GameOver end">
        <img src="./CheesyGuptaGameFiles/assets/GameOver.png" alt="" />
      </div>

      <div class="GAME_OVER end">
        <img src="./CheesyGuptaGameFiles/assets/GAME_OVER.png" alt="" />
      </div>

      <div class="TryAgain end">
        <img src="./CheesyGuptaGameFiles/assets/TryAgain.png" alt="" onclick="{resetGame()}" />
      </div>

      <div class="TRY_AGAIN end">
        <img src="./CheesyGuptaGameFiles/assets/TRY_AGAIN.png" alt="" onclick="{resetGame()}" />
      </div>

      <div class="OOPS end">
        <img src="./CheesyGuptaGameFiles/assets/OOPS.png" alt="" />
      </div>
      `
}



// -------------------Backend----Functions-------------------------------
var numerator = 0;
var denominator = 0;

function generateNumerator() {
  numerator = Math.floor(Math.random() * 15) + 1;
  document.querySelector(".numerator").innerHTML = numerator;
  var w_nr = numerator.toString().length;
  document.querySelector(".numerator").style.left =
    w_nr === 1 ? 232 + "px" : 224 + "px";
}

function generateDenominator() {  
  denominator = Math.floor(Math.random() * 15) + 1;
  document.querySelector(".denominator").innerHTML = denominator;
  var w_dr = denominator.toString().length;
  document.querySelector(".denominator").style.left =
    w_dr === 1 ? 232 + "px" : 224 + "px";
}



var lifes = 3;
var score = 0;
var index = 0;
function addSlice() {
  var slice = document.createElement("div");
  slice.classList.add("grid-item");
  slice.innerHTML = `<img src="./CheesyGuptaGameFiles/assets/small_slice.png" alt="" width="35px">`;
  document.querySelector(".slices-grid").appendChild(slice);
  index++;
} 

function submit() {
  console.log(index);

  if (index !== numerator) {
    lifes--;
    document.getElementsByClassName("life")[lifes].style.display = "none";
    if (lifes === 0) {
      var x = document.getElementsByClassName("end");
      document.querySelector(".score").style.top = "3px";
      document.querySelector(".score").style.left = "120px";
      document.querySelector(".score").innerHTML = "Your score: " + score;
      for (var i = 0; i < x.length; i++) {
        x[i].style.display = "block";
      }
      return;
    }
  }
  else{
    score++;
    document.querySelector(".score").innerHTML = "Score: " + score;
  }
  document.querySelector(".slices-grid").innerHTML = "";
  index = 0;
  generateNumerator();
  generateDenominator();
}

function resetGame() {
  document.querySelector(".numerator").innerHTML = numerator;
  document.querySelector(".denominator").innerHTML = denominator;
  document.querySelector(".slices-grid").innerHTML = "";
  lifes = 3;
  index = 0;
  document.getElementsByClassName("life")[0].style.display = "block";
  document.getElementsByClassName("life")[1].style.display = "block";
  document.getElementsByClassName("life")[2].style.display = "block";
  var x = document.getElementsByClassName("end");
  for (var i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  score = 0;
  document.querySelector(".score").innerHTML = "Score: " + score;
  document.querySelector(".score").style.top = "245px";
  document.querySelector(".score").style.left = "190px";
  generateNumerator();
  generateDenominator();
}
