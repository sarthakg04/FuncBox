//Frontend Functions
// createGamepad();
// fillBackground();
// createInputs();
// createResult();
// createInteractionPad();
// function calculateCircleArea(radius){
//   let area = 3.14*radius*radius
//   return (area);
// }

// function calculateSquareArea(side){
//   let area = side*side;
//   return area;
// }

// function calculateTriangleArea(base,height){
//   let area = 0.5*base*height;
//   return area;
// }

// function calculateTrapeziumArea(base1 , base2 , height){
//   let area = ((base1+base2)/2)*height;
//   return area;
// }





let position = 0;
let backgrounds = ['circle' , 'square' , 'trapezium' , 'triangle'];

function createGamepad(){
  let gamePadd = document.createElement('DIV')
  gamePadd.classList.add('GamePad')
  gamePadd.id = 'GamePad'
  document.body.appendChild(gamePadd);
  gamePad = document.getElementById('GamePad')
}

function fillBackground(){
  document.getElementsByClassName('GamePad')[0].style.backgroundImage =  'url(./AreaGameFiles/assets/'+backgrounds[position]+'.png)';
}


function createInputs(){
  document.getElementsByClassName('GamePad')[0].innerHTML +=`
  <div class="inputs__container">
    <div class="inputs__container__inner" id="inputs">

    </div>
  </div>
  `
  fillInputs();
}


function createResult(){
    document.getElementsByClassName('GamePad')[0].innerHTML +=`
    <div class="result">
      <h1 id="result">0</h1>
    </div>
    `;
}

function createInteractionPad(){
    document.getElementsByClassName('GamePad')[0].innerHTML +=`
    <div class="leftArrow" onclick="changeLeft()">
      <img src="./AreaGameFiles/assets/leftArrow.png" alt="">
    </div>

    <div class="rightArrow" onclick="changeRight()">
      <img src="./AreaGameFiles/assets/rightArrow.png" alt="">
    </div>
    `;
}



function fillInputs(){
  switch (position) {
    case 0:
      document.getElementById('inputs').innerHTML =`
      <input type="number" min=0 min=0 name="raidus" value="" placeholder="r = " id="circle_radius" oninput="calcArea('circle')">
      `;
      break;
      case 1:
      document.getElementById('inputs').innerHTML =`
      <input type="number" min=0 min=0 name="side" value="" placeholder="s = " id="square__side" oninput="calcArea('square')">
      `;
      break;

      case 2:
      document.getElementById('inputs').innerHTML =`
      <input type="number" min=0 min=0 name="a" value="" placeholder="a = " id="trapezium__a" oninput="calcArea('trapezium')">
      <input type="number" min=0 min=0 name="b" value="" placeholder="b = " id="trapezium__b" oninput="calcArea('trapezium')">
      <input type="number" min=0 min=0 name="h" value="" placeholder="h = " id="trapezium__h" oninput="calcArea('trapezium')">
      `;
      break;
      case 3:
      document.getElementById('inputs').innerHTML =`
      <input type="number" min=0 min=0 name="base" value="" placeholder="b = " id="triangle__base" oninput="calcArea('triangle')">
        <input type="number" min=0 min=0 name="height" value="" placeholder="h = " id="triangle__height" oninput="calcArea('triangle')">
      `;
      break;
    default:

  }
}

function calcArea(object){
  let result=0;
  switch (object) {
    case 'circle':
      let r = parseFloat(document.getElementById('circle_radius').value);

      if(r && r>0){
        result = calculateCircleArea(r);
        result = Math.floor(result*1000)/1000;

      }
      break;

      case 'square':
      let s = parseFloat(document.getElementById('square__side').value);
      if(s && s>0){
        result = calculateSquareArea(s);
        result = Math.floor(result*1000)/1000;
      }
      break;

      case 'trapezium':
      let tA = parseFloat(document.getElementById('trapezium__a').value);
      let tB = parseFloat(document.getElementById('trapezium__b').value);
      let tH = parseFloat(document.getElementById('trapezium__h').value);
      if(tA && tB && tH && tA > 0 && tB > 0 && tH > 0){
        result = calculateTrapeziumArea(tA,tB,tH);
        result = Math.floor(result*1000)/1000;
      }
      break

      case 'triangle':
      let b = parseFloat(document.getElementById('triangle__base').value);
      let h = parseFloat(document.getElementById('triangle__height').value);
      if(b && h && b>0 && h>0){
        result = calculateTriangleArea(b,h);
        result = Math.floor(result*1000)/1000;
      }

  }
  document.getElementById('result').innerHTML = result
}



function changeRight(){
  position +=1;
  if(position==backgrounds.length){
    position = 0;
  }
  fillBackground();
  fillInputs();
  clearArea();
}

function changeLeft(){
  position -=1;
  if(position<0){
    position = backgrounds.length - 1;
  }
  fillBackground();
  fillInputs();
  clearArea();
}

function clearArea(){
  document.getElementById('result').innerHTML = '0';
}
