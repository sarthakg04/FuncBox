//Frontend functions
// createGamepad();
// fillBackground();
// var difference = getRandomInt(2, 11);
// createQuestion();
// function checkAns(num3, num5){
//     if (num3 == difference*3 && num5 == difference*5){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
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
    <img src="./RecognisePatternGameFiles/assets/Bg.png" class="bg">
    `;
}

function createQuestion(){
    document.getElementsByClassName('GamePad')[0].innerHTML +=`
    <img src="./RecognisePatternGameFiles/assets/Pinkfield.png" class="pinkf" id="field1">
    <p class="num" id="num1"></p>
    <img src="./RecognisePatternGameFiles/assets/Pinkfield.png" class="pinkf" id="field2">
    <p class="num" id="num2"></p>
    <img src="./RecognisePatternGameFiles/assets/Bluefield.png" class="bluef" id="field3">
    <input type="number" id="num3">
    <img src="./RecognisePatternGameFiles/assets/Pinkfield.png" class="pinkf" id="field4">
    <p class="num" id="num4"></p>
    <img src="./RecognisePatternGameFiles/assets/Bluefield.png" class="bluef" id="field5">
    <input type="number" id="num5">
    <img src="./RecognisePatternGameFiles/assets/Pinkfield.png" class="pinkf" id="field6">
    <p class="num" id="num6"></p>
    `
    getQuestion();
}

function getResult(){
    document.getElementsByClassName('GamePad')[0].innerHTML +=`
    <button id="btn">Check Answer</button>
    <div id="wrong_disp">
        <div id="oops">OOPS!!</div>
        <img src="./RecognisePatternGameFiles/assets/sadrabbit.png" class="wrong_popup">
        <div id="sequence1"></div>
        <div id="explanation1">Multiples of</div>
    </div>

    <div id="right_disp">
        <div id="hurray">HURRAY!!</div>
        <img src="./RecognisePatternGameFiles/assets/happyrabbit.png" class="right_popup">
        <div id="sequence2"></div>
        <div id="explanation2">Multiples of</div>
    </div>
    `
    getAnswer();
}


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
}

function getQuestion(){
    var num1 = document.getElementById("num1");
    var num2 = document.getElementById("num2");
    var num4 = document.getElementById("num4");
    var num6 = document.getElementById("num6");

    num1.innerHTML = difference;
    num2.innerHTML = difference*2;
    num4.innerHTML = difference*4;
    num6.innerHTML = difference*6;
}

function getAnswer(){
    document.getElementById("btn").onclick = loadValues;
}

function loadValues(){
    var a = document.getElementById("num3");
    var b = document.getElementById("num5");
    var num3 = a.value;
    var num5 = b.value;
    var x = checkAns(num3, num5);

    console.log(checkAns());

    if(x){
        rightAns();
    }
    else{
        wrongAns();
    }
}

function rightAns(){
    var rightdisp = document.getElementById("right_disp");
    var sequence2 = document.getElementById("sequence2");
    var explanation2 = document.getElementById("explanation2");

    rightdisp.style.display = "block";
    sequence2.innerHTML = difference+", "+difference*2+", "+difference*3+", "+difference*4+", "+difference*5+", "+difference*6;
    explanation2.innerHTML+= " "+difference;
}

function wrongAns(){
    var wrongdisp = document.getElementById("wrong_disp");
    var sequence1 = document.getElementById("sequence1");
    var explanation1 = document.getElementById("explanation1");

    wrongdisp.style.display = "block";
    sequence1.innerHTML = difference+", "+difference*2+", "+difference*3+", "+difference*4+", "+difference*5+", "+difference*6;
    explanation1.innerHTML+= " "+difference;
}

