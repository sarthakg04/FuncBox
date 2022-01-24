// Frontend functions for testing
// let units = ['micro g', 'mg', 'g', 'kg', 'tonne']  // Can delete few but don't alter the order
// fillBackground('store')
// createInputBox()
// createValue()
// for(i=0;i<units.length;i++){
//     createStep(i)
// }
// createInteractionPad()
// createRefresh()
// function StepDown(){
//     current_step--
//     weight *= 10
// }
// function StepUp(){
//     current_step++
//     weight /= 10
// }

let Phone;
let GamePad;
let Input_box;
let InteractionPad;

let step_div;
let Value;

let steps;

function fillBackground(bg) {
  Phone = document.createElement("div");
  Phone.classList.add("Phone");
  Phone.classList.add(bg);

  document.body.appendChild(Phone);

  GamePad = document.createElement("div");
  GamePad.classList.add("GamePad");
  Phone.appendChild(GamePad);
}

function createInputBox() {
  Input_box = document.createElement("div");
  Input_box.classList.add("Input_box");
  Input_box.innerHTML += `
    <h3 class="enter_number">Enter a number</h3>
    <input id="input_number" min="0" value="00.00" class="input_number" type="number" step="0.01">
    `;

  let temp_2 = document.createElement("select");
  temp_2.id = "units_input";

  Input_box.appendChild(temp_2);

  for (i = 0; i < units.length; i++) {
    temp_2.innerHTML += `<option value="${units[i]}">${units[i]}</option>`;
  }

  GamePad.appendChild(Input_box);
  GamePad.innerHTML += `<button onclick="submit()" class="submit_btn">Submit</button>`;
}

function createValue() {
  GamePad.innerHTML += `
    <div class="step_div"></div>
    <h2 class="Value">00.00</h2>
    `;
  step_div = document.querySelector(".step_div");
  Value = document.querySelector(".Value");
}

function createInteractionPad() {
  InteractionPad = document.createElement("div");
  InteractionPad.classList.add("InteractionPad");
  InteractionPad.innerHTML += `
    <button onclick="Up()" class="up"></button><br>
    <button onclick="Down()" class="down"></button>
    `;
  Phone.appendChild(InteractionPad);
}

function createRefresh() {
  Phone.innerHTML += `
    <div onclick="window.location.reload()" class="restart">Reset <img style="vertical-align:middle" src="./assets/refresh.png" alt="restart"></div>
    `;
}

// Backend functions

let unit;

let weight = 0;

let current_step;

let unit_each = 0;

function createStep(i) {
  let new_step = document.createElement("div");
  new_step.classList.add("step");
  new_step.classList.add(`step_${i}`);
  new_step.innerHTML = units[i];

  // new_step.style.left = (i*55)+'px'
  new_step.style.top = 282 - i * 69 + "px";

  step_div.appendChild(new_step);
}

function submit() {
  Value = document.querySelector(".Value");

  steps = Array.from(document.querySelectorAll(".step_div div"));

  for (i = 0; i < units.length; i++) {
    steps[i].classList.remove("active_step");
  }

  var e = document.getElementById("units_input");
  unit = e.value;

  e = document.getElementById("input_number");
  weight = parseFloat(e.value);

  console.log(weight);

  Value.innerHTML = weight;

  current_step = units.findIndex(checkUnitis);

  steps[current_step].classList.add("active_step");
}

function checkUnitis(unit_each) {
  return unit_each === unit;
}

function Up() {
  if (current_step < units.length - 1) {
    steps[current_step].classList.remove("active_step");

    StepUp();

    steps[current_step].classList.add("active_step");

    Value.innerHTML = weight;
  }
}

function Down() {
  if (current_step > 0) {
    steps[current_step].classList.remove("active_step");

    StepDown();

    steps[current_step].classList.add("active_step");

    Value.innerHTML = weight;
  }
}
