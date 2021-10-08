// Frontend functions
// createGamepad()
// fillBackground()
// createInteractionPad()


function createBackground() {
    let container = document.createElement("DIV");
    container.classList.add("container");
    container.id = "container";
    document.body.appendChild(container);
}

function fillBackground() {
  document.getElementsByClassName("container")[0].style.backgroundImage =
    "url(https://ik.imagekit.io/funcboxImages/TemperatureConversions_assets/celsius_jQ8DLWgS6.png?updatedAt=1633682943711)";
    console.log('background created')
}



  function createInteractionPad(){
    container.innerHTML += `
    <div class="celsiusInput">
    <input type="number" id="celsius" name="celsius">
    <button id="orangeBtn" onClick="celsiusOutput()">
    Submit
    </button>
    </div>
    `;
  }


  function celsiusOutput()
  {
      var inputVal = document.getElementById("celsius").value;

      document.getElementById("orangeBtn").style.visibility = "hidden";
      document.getElementById("celsius").style.visibility = "hidden";
      document.getElementsByClassName("container")[0].style.backgroundImage =
      "url(https://ik.imagekit.io/funcboxImages/TemperatureConversions_assets/firstSplit_86Z67GiIFfh.png?updatedAt=1633682946097)";
      container.innerHTML = `
        <div>
           <p id="CtoF"> 0 </p>
           <p id="CtoK"> 0 </p>
           <button id="pinkNext" onClick=fahrenheitInput()> Next </button>
        </div>
     `
     document.getElementById("CtoF").innerHTML=Math.round((inputVal*1.8)+32) + "°F";
     document.getElementById("CtoK").innerHTML=Math.round(parseInt(inputVal) +273.15)+ "K";

  }

  function fahrenheitInput()
  {
    document.getElementsByClassName("container")[0].style.backgroundImage =
    "url(https://ik.imagekit.io/funcboxImages/TemperatureConversions_assets/fahrenheit_Gvip4p9DhuR.png?updatedAt=1633682944599)";
    container.innerHTML = `
    <div class="fahrenheitInput">
    <input type="number" id="fahrenheit" name="fahrenheit">
    <button id="greenBtn" onClick="fahrenheitOutput()">
    Submit
    </button>
    </div>
    `;
  }

  function fahrenheitOutput()
  {
    var inputVal = document.getElementById("fahrenheit").value;

    document.getElementById("greenBtn").style.visibility = "hidden";
    document.getElementById("fahrenheit").style.visibility = "hidden";
    document.getElementsByClassName("container")[0].style.backgroundImage =
    "url(https://ik.imagekit.io/funcboxImages/TemperatureConversions_assets/secondSplit_qL9fcvwSV.png?updatedAt=1633682947090)";
    container.innerHTML = `
      <div>
         <p id="FtoC"> 0 </p>
         <p id="FtoK"> 0 </p>
         <button id="pinkNext" onClick=kelvinInput()> Next </button>
      </div>
   `
   document.getElementById("FtoC").innerHTML=Math.round((inputVal-32)/1.8) + "°C";
   document.getElementById("FtoK").innerHTML=Math.round(((parseInt(inputVal)-32)/1.8)+273.15)+ "K";
  }


  function kelvinInput()
  {
    document.getElementsByClassName("container")[0].style.backgroundImage =
    "url(https://ik.imagekit.io/funcboxImages/TemperatureConversions_assets/kelvin_nox2GCaZtp.png?updatedAt=1633682945276)";
    container.innerHTML = `
    <div class="kelvinInput">
    <input type="number" id="kelvin" name="kelvin">
    <button id="pinkBtn" onClick="kelvinOutput()">
    Submit
    </button>
    </div>
    `;
  }

  function kelvinOutput()
  {
    var inputVal = document.getElementById("kelvin").value;

    document.getElementById("pinkBtn").style.visibility = "hidden";
    document.getElementById("kelvin").style.visibility = "hidden";
    document.getElementsByClassName("container")[0].style.backgroundImage =
    "url(https://ik.imagekit.io/funcboxImages/TemperatureConversions_assets/thirdSplit_kBFYIXwVzKY.png?updatedAt=1633682947739)";
    container.innerHTML = `
      <div>
        <p id="KtoF"> 0 </p>
         <p id="KtoC"> 0 </p>
         <button id="orangeNext" onClick = celsiusInput()> Retry </button>
      </div>
   `
   document.getElementById("KtoF").innerHTML=Math.round(((parseInt(inputVal)-273.15)*1.8)+32) + "°F";
   document.getElementById("KtoC").innerHTML=Math.round(parseInt(inputVal)-273.15)+ "C";
  }

  
    function celsiusInput(){
      document.getElementsByClassName("container")[0].style.backgroundImage =
      "url(https://ik.imagekit.io/funcboxImages/TemperatureConversions_assets/celsius_jQ8DLWgS6.png?updatedAt=1633682943711)";
      container.innerHTML = `
      <div class="celsiusInput">
      <input type="number" id="celsius" name="celsius">
      <button id="orangeBtn" onClick="celsiusOutput()">
      Submit
      </button>
      </div>
      `;
    }

