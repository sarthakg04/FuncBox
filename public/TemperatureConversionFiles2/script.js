//FRONTEND FUNCTION
// createGamepad();
// fillBackground();
// createUnit();
// createInputBox();
// createButton();
// function convertTemp(){
//   var inputData=getData();
//   if (selectedOption=="celsius"){
//     fahrenheit=((inputData * 1.8) + 32);
//     kelvin=inputData+372;
//     showCelsiusResult();
//   }
//   else if(selectedOption=="fahrenheit"){
//     celsius=((inputData - 32) * 5 / 9);
//     kelvin=(celsius)+273;
//     showFahrenheitResult()
    
//   }
//   else if(selectedOption=="kelvin"){
//     celsius=inputData-273;
//     fahrenheit=(celsius * 9 / 5 + 32);
//     showKelvinResult()
//   }
// }



function createGamepad() {
  document.getElementsByTagName('body')[0].innerHTML += `
  <div class="GamePad" id="GamePad">
  </div>`
  console.log(document.getElementById("GamePad"));
  console.log("Gamepad Created");
}

function fillBackground(){
  document.getElementsByClassName('GamePad')[0].style.backgroundImage =  "url('./TemperatureConversionFiles2/assets/celsius.png')";
  console.log("Backgrouncd created");
}

function createUnit(){
  document.getElementsByClassName('GamePad')[0].innerHTML=`<div class="unit">
  <img src="./TemperatureConversionFiles2/assets/saying.png" >
  <div class="content">
      <h2>Hey, this is</h2>
      <h2 id="mainUnit"><select id="selectId" onchange="newp(this.value)">
          <option value="celsius">Celsius</option>
          <option value="fahrenheit" >Fahrenheit</option>
          <option value="kelvin">Kelvin</option>
      </select></h2>
  </div>
</div>`
}
function createInputBox(){
  document.getElementsByClassName('GamePad')[0].innerHTML+=`<div class="inputValue">
  <h4>Enter Value</h4>
  <input type="number" id="data">
</div>`;
}
function createButton(){
  document.getElementsByClassName('GamePad')[0].innerHTML+=`<div class="btn">
  <button id="btn1" onclick="convertTemp()">Submit</button>
</div>`
}
var selectedOption="celsius";
function newp(){
  selectedOption=document.getElementById("selectId").value;
  if (selectedOption=="celsius"){
    document.getElementsByClassName('GamePad')[0].style.backgroundImage =  "url('./TemperatureConversionFiles2/assets/celsius.png')";
    document.getElementById("btn1").style.backgroundColor="#FFAC4A";
  }
  else if(selectedOption=="fahrenheit"){
    document.getElementsByClassName('GamePad')[0].style.backgroundImage =  "url('./TemperatureConversionFiles2/assets/fahrenheit.png')";
    document.getElementById("btn1").style.backgroundColor="#1F5F57";
  }
  else if(selectedOption=="kelvin"){
    document.getElementsByClassName('GamePad')[0].style.backgroundImage =  "url('./TemperatureConversionFiles2/assets/kelvin.png')";
    document.getElementById("btn1").style.backgroundColor="#E1828E";
  }
}
var celsius;
var fahrenheit;
var kelvin;

function showCelsiusResult(){
  document.getElementsByClassName('GamePad')[0].style.backgroundImage =  "url('./TemperatureConversionFiles2/assets/celRes.png'"
  document.getElementsByClassName('GamePad')[0].innerHTML=`<h3 class="ansUpper">${fahrenheit.toFixed(2)} F</h3>`;
  document.getElementsByClassName('GamePad')[0].innerHTML+=`<h3 class="ansLower">${kelvin} K</h3>`;
}
function showFahrenheitResult(){
  console.log("Faaaaarrrr");
  document.getElementsByClassName('GamePad')[0].style.backgroundImage =  "url('./TemperatureConversionFiles2/assets/farRes.png'"
  document.getElementsByClassName('GamePad')[0].innerHTML=`<h3 class="ansUpper">${celsius.toFixed(2)} F</h3>`;
  document.getElementsByClassName('GamePad')[0].innerHTML+=`<h3 class="ansLower">${kelvin.toFixed(2)} K</h3>`;
}
function showKelvinResult(){
  document.getElementsByClassName('GamePad')[0].style.backgroundImage =  "url('./TemperatureConversionFiles2/assets/kelRes.png'"
    document.getElementsByClassName('GamePad')[0].innerHTML=`<h3 class="ansUpper">${celsius} F</h3>`;
    document.getElementsByClassName('GamePad')[0].innerHTML+=`<h3 class="ansLower">${fahrenheit.toFixed(2)} K</h3>`;
}
function getData(){
  return (parseInt(document.getElementById("data").value));
}



createGamepad();
fillBackground();
createUnit();
createInputBox();
createButton();
function convertTemp(){
  var inputData=getData();
  if (selectedOption=="celsius"){
    fahrenheit=((inputData * 1.8) + 32);
    kelvin=inputData+372;
    showCelsiusResult();
  }
  else if(selectedOption=="fahrenheit"){
    celsius=((inputData - 32) * 5 / 9);
    kelvin=(celsius)+273;
    showFahrenheitResult()
    
  }
  else if(selectedOption=="kelvin"){
    celsius=inputData-273;
    fahrenheit=(celsius * 9 / 5 + 32);
    showKelvinResult()
  }
}
