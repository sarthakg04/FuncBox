//Functions
// createGamepad();
// Result();
// createInput();
// MaxMark();
// InteractionPad();
// getPercentage()

// ------------------------------Frontend Functions---------------------

function createGamepad() {
  let container = document.createElement("DIV");
  container.classList.add("container");
  container.id = "container";
  document.body.appendChild(container);
}

function Result() {
  const gamepad = document.getElementById("container");
  container.innerHTML = `<div id="result">
         <input type="number" id="per" placeholder ="0.0" min ="0.0"/>
    </div>`;
  // document.getElementById("per").value = 0;
}

function createInput() {
  const gamepad = document.getElementById("container");
  gamepad.innerHTML += `<div class="main">
      <div class="upper">
        <div class="upper_input">
          <input type="number" id="mark1" class="mark" min ="0.0"/>
        </div>
        <div class="upper_input">
          <input type="number" id="mark2" class="mark" min ="0.0"/>
        </div>
        <div class="upper_input">
          <input type="number" id="mark3" class="mark" min ="0.0"/>
        </div>
      </div>
      <div class="lower">
        <div class="upper_input">
          <input type="number" id="mark4" class="mark" min ="0.0"/>
        </div>
        <div class="upper_input">
          <input type="number" id="mark5" class="mark" min ="0.0"/>
        </div>
      </div>
    </div>`;
}

function MaxMark() {
  const gamepad = document.getElementById("container");
  gamepad.innerHTML += `<div class="max_mark">
      MAX MARKS: <input type="number" id="maximum_mark" />
    </div>`;
}

function InteractionPad() {
  const gamepad = document.getElementById("container");
  gamepad.innerHTML += `
  <div class="submits">
      <button type="submit" onclick="getPercentage()">calculate</button>
    
      <button type="submit" onclick="window.location.reload()">Refresh</button>
    </div>`;
}
// function createRefresh() {
//   const gamepad = document.getElementById("container");
//   gamepad.innerHTML += `
//     <div onclick="window.location.reload()" class="restart">Reset
//     <img style="vertical-align:middle" src="./assets/refresh.png" alt="restart"/></div>
//     `;
// }

// --------------------Backend Functions ---------------------
// const total_marks;
// const maximum_mark;
// function calculate() {
// percentage = (total_marks / maximum_mark) * 100;
// return percentage;
// }

function getPercentage() {
  const mark1 = parseInt(document.getElementById("mark1").value);
  const mark2 = parseInt(document.getElementById("mark2").value);
  const mark3 = parseInt(document.getElementById("mark3").value);
  const mark4 = parseInt(document.getElementById("mark4").value);
  const mark5 = parseInt(document.getElementById("mark5").value);
  const maximum_mark = parseInt(document.getElementById("maximum_mark").value);
  console.log(mark1);
  console.log(mark2);
  console.log(mark3);
  console.log(mark4);
  console.log(mark5);
  console.log(maximum_mark);

  total_marks = mark1 + mark2 + mark3 + mark4 + mark5;
  total_marks = parseInt(total_marks);
  console.log(total_marks);
  const percentage = (total_marks / maximum_mark) * 100;
  console.log(percentage);
  document.getElementById("per").value = parseFloat(percentage);
}
