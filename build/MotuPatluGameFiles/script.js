//FrontEnd Function
// createGamepad();
// createInteractionPad();
// fillBackground(samosashop);
// AddChar(motupatlu);
// function CalculateSpeed()
// {
// 	let distance=input('distance');
// 	let time=input('time');
// 	var speed;
// 	speed=distance/time;
// 	print(speed);
// }

let bheemchutki =
  "https://ik.imagekit.io/funcboxImages/MotuPatlu_assets/Group_293_YskAbsU7h1d.png?updatedAt=1637005053639";
let motupatlu =
  "https://ik.imagekit.io/funcboxImages/MotuPatlu_assets/Group_203__1__trS4-5wvbd5.png?updatedAt=1637005043573";
let laddushop =
  "https://ik.imagekit.io/funcboxImages/MotuPatlu_assets/Group_295__3__mCVBtvJAvuE.png?updatedAt=1637005115522";
let samosashop =
  "https://ik.imagekit.io/funcboxImages/MotuPatlu_assets/A4_-_453__1__PePqf5gcG2o.png?updatedAt=1637005899298";

function input(variable1) {
  return document.getElementById("inp" + String(variable1)).value;
}

function createGamepad() {
  let container = document.createElement("DIV");
  container.classList.add("container");
  container.id = "container";
  document.body.appendChild(container);
}

function fillBackground(back) {
  document.getElementsByClassName("container")[0].style.backgroundImage =
    "url(" + back + ")";
  console.log("background added");
}

function createInteractionPad() {
  container.innerHTML += `
      <div id="cartoon">
      </div>
      <div class="speed">
      <p id="speedoutput">
      Speed: 
      <p>
      </div>
      <input type="number" id="inpdistance"  placeholder="Distance (Km)"/>
      <input type="number" id="inptime"  placeholder="Time (Hr)"/>
      <input type="submit" id="button1" onclick="CalculateSpeed()"/>
      `;
}

function AddChar(temp) {
  document.getElementById("cartoon").style.backgroundImage =
    "url(" + temp + ")";
  console.log("character added");
}
function print(variable) {
  document.getElementById("speedoutput").innerHTML = variable + " Km/hr";
}
