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
      "url(https://ik.imagekit.io/funcboxImages/MotuPatlu_assets/background_Cd--9nmmIDu.png?updatedAt=1635330378178)";
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
  
  function SpeedOutput() {
    var inputVal1 = document.getElementById("distance").value;
    var inputVal2 = document.getElementById("time").value;
    document.getElementById("speedoutput").innerHTML ='Speed: '+ inputVal1/inputVal2 +' Km/hr';
  }

  