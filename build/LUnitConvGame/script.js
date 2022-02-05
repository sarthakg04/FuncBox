// Frontend functions for testing
// let units = ['hl', 'kl', 'l', 'cl', 'ml']  // Can delete few but don't alter the order
// fillBackground('store')
// createInputBox()
// createValue()
// for(i=0;i<units.length;i++){
//     createStep(i)
// }
// createInteractionPad()
// createRefresh()
// function StepUp(){
//
//     weight/= 10
//      return weight
// }
// function StepDown(){
//
//     weight*= 10
//      return weight
// }

let Phone;
let GamePad;
let Input_box;
let InteractionPad;

let step_div;
let Value;

let steps;
let e;

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
    <div onclick="window.location.reload()" class="restart">Reset
    <img style="vertical-align:middle" src="./assets/refresh.png" alt="restart"/></div>
    `;
}

// Backend functions

let unit;

let weight = 0;

let current_step;

let unit_each = 0;
let selected;

function createStep(i) {
  let new_step = document.createElement("div");
  new_step.classList.add("step");
  new_step.classList.add(`step_${i}`);
  new_step.innerHTML = units[i];

  // new_step.style.left = i * 30 + "px";
  // new_step.style.top = 282 - i * 69 + "px";

  step_div.appendChild(new_step);
}

function submit() {
  Value = document.querySelector(".Value");

  steps = Array.from(document.querySelectorAll(".step_div div"));

  for (i = 0; i < units.length; i++) {
    steps[i].classList.remove("active_step");
  }

  e = document.getElementById("units_input");
  unit = e.value;

  e = document.getElementById("input_number");
  weight = parseFloat(e.value);

  console.log(weight);

  Value.innerHTML = weight;

  current_step = units.findIndex(checkUnitis);

  steps[current_step].classList.add("active_step");
  result_box = document.createElement("div");
  result_box.classList.add("result_box");
  result_box.innerHTML = " ";
  // var ans = document.getElementById("input_number").value;
  // console.log(ans);
  // result_box.innerHTML += ans;
  var list = document.getElementById("units_input");
  var val = list.options.selectedIndex;
  selected = list.options[val].value;
  // console.log(selected);
  result_box.innerHTML += selected;

  // console.log(result_box.innerHTML);

  Phone.appendChild(result_box);
}

function checkUnitis(unit_each) {
  return unit_each === unit;
}

function Up() {
  result_box.innerHTML = "";
  if (current_step < units.length - 1) {
    steps[current_step].classList.remove("active_step");
    // let flag = 10;
    if (selected != "hl") {
    StepUp();
    }
    console.log(selected);
    // while (flag != 0) {
    if (selected === "ml") {
      result_box.innerHTML = "cl";
      selected = "cl";
    } else if (selected === "cl") {
      result_box.innerHTML = "l";
      selected = "l";
    } else if (selected === "l") {
      result_box.innerHTML = "kl";
      selected = "kl";
    } else if (selected === "kl" || selected === "hl") {
      result_box.innerHTML = "hl";
      selected = "hl";
    }
    // }

    steps[current_step].classList.add("active_step");

    Value.innerHTML = weight;
  }
}

function Down() {
  result_box.innerHTML = "";
    // steps[current_step].classList.remove("active_step");
    if (selected != "ml") {
      StepDown();
    } else {
      // console.log(selected);
    }
    console.log(selected);
    if (selected === "hl") {
      result_box.innerHTML = "kl";
      selected = "kl";
    } else if (selected === "kl") {
      result_box.innerHTML = "l";
      selected = "l";
    } else if (selected === "l") {
      result_box.innerHTML = "cl";
      selected = "cl";
    } else if (selected === "cl" || selected === "ml") {
      result_box.innerHTML = "ml";
      selected = "ml";
    }

    // steps[current_step].classList.add("active_step");

    Value.innerHTML = weight;

}

// Trash code

// function fillBackground(bg) {
//   Phone = document.createElement("div");
//   Phone.classList.add("Phone");
//   Phone.classList.add(bg);

//   document.body.appendChild(Phone);

//   GamePad = document.createElement("div");
//   GamePad.classList.add("GamePad");
//   Phone.appendChild(GamePad);
// }

// let units = ["hl", "kl", "l", "cl", "ml"];
// let val;
// function createInputBox() {
//   Input_box = document.createElement("div");
//   Input_box.classList.add("Input_box");
//   Input_box.innerHTML += `
//     <h3 class="enter_number">Enter a number</h3>
//     <input id="input_number" min="0" value="00.00" class="input_number" type="number" step="0.01">
//     `;
//   let temp_2 = document.createElement("select");
//   temp_2.id = "units_input";
//   for (i = 0; i < units.length; i++) {
//     temp_2.innerHTML += `<option value="${units[i]}">${units[i]}</option>`;
//   }
//   GamePad.innerHTML += `<button onclick="submit()"  id ="show" class="submit_btn">Submit</button>`;

//   Input_box.appendChild(temp_2);
//   GamePad.appendChild(Input_box);
// }
// var selected;
// submit = () => {
//   var list = document.getElementById("units_input");
//   var val = list.options.selectedIndex;
//   selected = list.options[val].value;
//   console.log(selected);
//   result_box = document.createElement("div");
//   result_box.classList.add("result_box");
//   result_box.innerHTML += selected;
//   var ans = document.getElementById("input_number").value;
//   console.log(ans);
//   result_box.innerHTML += ans;
//   GamePad.appendChild(result_box);
// };

// function createResult() {
//   result_box = document.createElement("div");
//   result_box.classList.add("result_box");
//   result_box.innerHTML += selected;
//   GamePad.appendChild(result_box);
// }
