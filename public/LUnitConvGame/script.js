// Frontend functions for testing
// createGamepad();
// fillBackground();
// createIntercationPad();
// createInputBox();
// getResult();


function createGamepad(){
  let gamePadd = document.createElement('DIV')
  gamePadd.classList.add('GamePad')
  gamePadd.id = 'GamePad'
  document.body.appendChild(gamePadd);
  gamePad = document.getElementById('GamePad')
}

function fillBackground(){
  document.getElementsByClassName('GamePad')[0].innerHTML +=`
  <img src="https://ik.imagekit.io/funcboxImages/LUnitConvGame_assets/bg_Mx2j1mBcKSFe.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645648368218" class="bg">
  `;
}

function createIntercationPad(){
  document.getElementsByClassName('GamePad')[0].innerHTML +=`
  <img src="https://ik.imagekit.io/funcboxImages/LUnitConvGame_assets/ellipse_Bu0MOD18T-GWe.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645619194193" class="ellipse">
  <img src="https://ik.imagekit.io/funcboxImages/LUnitConvGame_assets/up_vNWXnIzy1M.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645619194203" class="up" id="up_arrow" onClick="upfunc()">
  <img src="https://ik.imagekit.io/funcboxImages/LUnitConvGame_assets/down_8pHLGhxPBYYA.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645619194198" class="down" id="down_arrow" onClick="downfunc()">
  `;
}

function createInputBox(){
  document.getElementsByClassName('GamePad')[0].innerHTML +=`
  <img src="https://ik.imagekit.io/funcboxImages/LUnitConvGame_assets/inputbox_bwyC3MnFg.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645619194202" class="inputbox">
  <input id="input_number" min="0" value="00.0" class="input_number" type="number" step="0.1">
  <select name="unit" id="input_unit" class="unit_select">
    <option value="hl">hl</option>
    <option value="kl">kl</option>
    <option value="l">l</option>
    <option value="cl">cl</option>
    <option value="ml">ml</option>
  </select>
  `;
}

function getResult(){
  document.getElementsByClassName('GamePad')[0].innerHTML +=`
  <img src="https://ik.imagekit.io/funcboxImages/LUnitConvGame_assets/submitbtn_VXf8tDwNA.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645619194240" class="submit" onclick="submitfnc()">
  <img src="https://ik.imagekit.io/funcboxImages/LUnitConvGame_assets/restart_JjjAuKMY81je.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645636416965" class="restart" onclick="restart()">
  <img src="https://ik.imagekit.io/funcboxImages/LUnitConvGame_assets/pointer_cyXUXRaxN.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645619194205" class="pointer" id="pointer">
  <div class="top_display">
    <p id="final_val">00.0</p>
    <p id="final_unit">hl</p>
  </div>
  `;
}

function pointerPosition(pointer_unit){
  var pointer = document.getElementById('pointer');

  switch (pointer_unit) {
    case "hl":
      pointer.style.left = "100px";
      break;
    case "kl":
      pointer.style.left = "160px";
      break;
    case "l":
      pointer.style.left = "215px";
      break;
    case "cl":
      pointer.style.left = "280px";
      break;
    case "ml":
      pointer.style.left = "330px";
      break;
  }
}

function submitfnc(){
  var num_entered = document.getElementById('input_number').value;
  var unit_entered = document.getElementById('input_unit').value;
  document.getElementById('final_val').innerHTML = num_entered;
  document.getElementById('final_unit').innerHTML = unit_entered;

  pointerPosition(unit_entered);
}

function upfunc(){
  var final_val = document.getElementById('final_val').innerHTML;
  var final_unit = document.getElementById('final_unit').innerHTML;

  switch (final_unit) {
    case "hl":
      var x = final_val/10;
      document.getElementById('final_val').innerHTML = x;
      document.getElementById('final_unit').innerHTML = "kl";
      break;
    case "kl":
      var x = final_val*1000;
      document.getElementById('final_val').innerHTML = x;
      document.getElementById('final_unit').innerHTML = "l";
      break;
    case "l":
      var x = final_val*100;
      document.getElementById('final_val').innerHTML = x;
      document.getElementById('final_unit').innerHTML = "cl";
      break;
    case "cl":
      var x = final_val*10;
      document.getElementById('final_val').innerHTML = x;
      document.getElementById('final_unit').innerHTML = "ml";
      break;
  }

  var y = document.getElementById('final_unit').innerHTML;
  pointerPosition(y);
}

function downfunc(){
  var final_val = document.getElementById('final_val').innerHTML;
  var final_unit = document.getElementById('final_unit').innerHTML;

  switch (final_unit) {
    case "kl":
      var x = final_val*10;
      document.getElementById('final_val').innerHTML = x;
      document.getElementById('final_unit').innerHTML = "hl";
      break;
    case "l":
      var x = final_val/1000;
      document.getElementById('final_val').innerHTML = x;
      document.getElementById('final_unit').innerHTML = "kl";
      break;
    case "cl":
      var x = final_val/100;
      document.getElementById('final_val').innerHTML = x;
      document.getElementById('final_unit').innerHTML = "l";
      break;
    case "ml":
      var x = final_val/10;
      document.getElementById('final_val').innerHTML = x;
      document.getElementById('final_unit').innerHTML = "cl";
      break;
  }

  var y = document.getElementById('final_unit').innerHTML;
  pointerPosition(y);
}

function restart(){
  window.location.reload();
}

