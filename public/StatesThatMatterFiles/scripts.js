// Frontend functions
// createGamepad()
// fillBackground()
// createInteractionPad()

function createGamepad() {
    let container = document.createElement("DIV");
    container.classList.add("container");
    container.id = "container";
    document.body.appendChild(container);
  }
  
  function fillBackground() {
    document.getElementsByClassName("container")[0].style.backgroundImage =
      "url(https://ik.imagekit.io/funcboxImages/StatesofMatter_assets/sombackground_6uUGV8EAI3W.png?updatedAt=1635364137886)";
    console.log("background created");
  }
  
  function createInteractionPad() {
    container.innerHTML += `
      <div class="speed">
      <p id="speedoutput">
      Speed: 
      <p>
      </div>
      <input type="number" id="distance" name="distance" placeholder="Distance (Km)"/>
      <input type="number" id="time" name="time" placeholder="Time (Hr)"/>
      <input type="submit" id="orangeBtn" onClick="SpeedOutput()"/>
      `;
  }