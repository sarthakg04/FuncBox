//Functions
// createGamepad();
// createResult();
// createInput();
// getMaxMark();
// function getPercentage(a,b,c,d,e, max) {
//   var total = a + b + c + d + e;
//   var total_marks = parseInt(total);
//   const percentage = (total_marks / max) * 100;
//   displayPercentage(percentage);
// }
// getInteractionPad();

function createGamepad() {
  let container = document.createElement("DIV");
  container.classList.add("container");
  container.id = "container";
  document.body.appendChild(container);
}

function createResult() {
  const gamepad = document.getElementById("container");
  container.innerHTML = `<div id="result">
         <input type="number" id="per" placeholder ="0.0" min ="0.0"/>
    </div>`;
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

function getMaxMark() {
  const gamepad = document.getElementById("container");
  gamepad.innerHTML += `<div class="max_mark">
      MAX MARKS: <input type="number" id="maximum_mark" />
    </div>`;
}

function getInteractionPad() {
  const gamepad = document.getElementById("container");
  gamepad.innerHTML += `
  <div class="submits">
      <button type="submit" onclick="getValues()">calculate</button>
    
      <button type="submit" onclick="window.location.reload()">Refresh</button>
    </div>`;
}

function displayPercentage(x){
  document.getElementById("per").value = parseFloat(x);
}


function getValues(){
  const mark1 = parseInt(document.getElementById("mark1").value);
  const mark2 = parseInt(document.getElementById("mark2").value);
  const mark3 = parseInt(document.getElementById("mark3").value);
  const mark4 = parseInt(document.getElementById("mark4").value);
  const mark5 = parseInt(document.getElementById("mark5").value);
  const max_mark = parseInt(document.getElementById("maximum_mark").value);

  getPercentage(mark1, mark2, mark3, mark4, mark5, max_mark);

}
