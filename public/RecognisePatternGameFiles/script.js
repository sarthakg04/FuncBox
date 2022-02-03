//Frontend functions
// createGamepad();
// fillBackground();
//createQuestion();
//getResult();

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

var i = getRandomInt(2, 11);

function getQuestion(){
    var num1 = document.getElementById("num1");
    var num2 = document.getElementById("num2");
    var num4 = document.getElementById("num4");
    var num6 = document.getElementById("num6");

    num1.innerHTML = i;
    num2.innerHTML = i*2;
    num4.innerHTML = i*4;
    num6.innerHTML = i*6;
}

function getAnswer(){
    function checkAns(){
        var num3 = document.getElementById("num3");
        var num5 = document.getElementById("num5");
        var wrongdisp = document.getElementById("wrong_disp");
        var rightdisp = document.getElementById("right_disp");
        var sequence1 = document.getElementById("sequence1");
        var explanation1 = document.getElementById("explanation1");
        var sequence2 = document.getElementById("sequence2");
        var explanation2 = document.getElementById("explanation2");

        if (num3.value == i*3 && num5.value == i*5){
            rightdisp.style.display = "block";
            sequence2.innerHTML = i+", "+i*2+", "+i*3+", "+i*4+", "+i*5+", "+i*6;
            explanation2.innerHTML+= " "+i;
        }
        else{
            wrongdisp.style.display = "block";
            sequence1.innerHTML = i+", "+i*2+", "+i*3+", "+i*4+", "+i*5+", "+i*6;
            explanation1.innerHTML+= " "+i;
        }
    }

    document.getElementById("btn").onclick = checkAns;
}

