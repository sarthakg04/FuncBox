//Frontend functions
//createGamepad();
//fillBackground();
//createQuestion();
//createOptions();
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
    <img src="./SeizeHerGameFiles/assets/ceiling 1.png" class="ceiling">
    <img src="./SeizeHerGameFiles/assets/wall 1.png" class="wall">
    <img src="./SeizeHerGameFiles/assets/Piller 1.png" class="pillar">
    <img src="./SeizeHerGameFiles/assets/heart 2.png" id="heart1">
    <img src="./SeizeHerGameFiles/assets/heart 2.png" id="heart2">
    <img src="./SeizeHerGameFiles/assets/heart 2.png" id="heart3">
    <img src="./SeizeHerGameFiles/assets/femal 1.png" class="female">
    <img src="./SeizeHerGameFiles/assets/jail 1.png" class="jail">
    <img src="./SeizeHerGameFiles/assets/floor 1.png" class="floor">
    <img src="./SeizeHerGameFiles/assets/sad ceaser 1.png" class="sad_ceaser">
    `;
}

function createQuestion(){
    document.getElementsByClassName('GamePad')[0].innerHTML +=`
    <div class="question">
    <div id="num1" class="qtext"></div>
    <span class="qtext">&nbsp,&nbsp</span>
    <div id="num2" class="qtext"></div>
    </div>
    `
    getQuestion();
}

function createOptions(){
    document.getElementsByClassName('GamePad')[0].innerHTML +=`
    <div class="option1">
        <div id="opt1" class="atext" ></div>
    </div>
    <div class="option2">
        <div id="opt2" class="atext"></div>
    </div>
    <div class="option3">
        <div id="opt3" class="atext"></div>
    </div>
    <div class="option4">
        <div id="opt4" class="atext"></div>
    </div>
    `
    getOptions();
}

function getResult(){
    document.getElementsByClassName('GamePad')[0].innerHTML +=`
    <div id="wrongAns">
        <img src="./SeizeHerGameFiles/assets/blure 1.png" class="wrong">
        <p class="lost_text">YOU LOST</p>
        <a><img src="./SeizeHerGameFiles/assets/Retry_button.png" class="retry_wrong" onclick="restart()"></a>
    </div>
    <div id="rightAns">
        <img src="./SeizeHerGameFiles/assets/blure 1.png" class="right">
        <p class="won_text">YOU WON</p>
        <a><img src="./SeizeHerGameFiles/assets/Retry_button.png" class="retry_right" onclick="restart()"></a>
    </div>
    `
    getAnswer();
}


const numbers = new Map([
    [1, "I"],
    [2, "II"],
    [3, "III"],
    [4, "IV"],
    [5, "V"],
    [6, "VI"],
    [7, "VII"],
    [8, "VIII"],
    [9, "IX"],
    [10, "X"],
    [11, "XI"],
    [12, "XII"],
    [13, "XIII"],
    [14, "XIV"],
    [15, "XV"],
    [16, "XVI"],
    [17, "XVII"],
    [18, "XVIII"],
    [19, "XIX"],
    [20, "XX"],
    [21, "XXI"],
    [22, "XXII"],
    [23, "XXIII"],
    [24, "XXIV"],
    [25, "XXV"]
]);

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function getQuestion(){
    var a = getRandomInt(1,26);
    var b = getRandomInt(1,26);
    document.getElementById("num1").innerHTML = a;
    document.getElementById("num2").innerHTML = b;
}

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
    while (currentIndex != 0) {  
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;  
        [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }  
    return array;
}

function getOptions(){
    console.log(numbers);
    var m = document.getElementById("num1").innerHTML;
    var n = document.getElementById("num2").innerHTML;

    // console.log(m);
    // console.log(n);

    optionsArray = [
        [numbers.get(document.getElementById("num1").innerHTML), numbers.get(n)],
        [numbers.get(getRandomInt(1, 26)), numbers.get(getRandomInt(1, 26))],
        [numbers.get(getRandomInt(1, 26)), numbers.get(getRandomInt(1, 26))],
        [numbers.get(getRandomInt(1, 26)), numbers.get(getRandomInt(1, 26))]
    ]
    
    shuffle(optionsArray);

    console.log(optionsArray);

    document.getElementById("opt1").innerHTML = optionsArray[0];
    document.getElementById("opt2").innerHTML = optionsArray[1];
    document.getElementById("opt3").innerHTML = optionsArray[2];
    document.getElementById("opt4").innerHTML = optionsArray[3];
}


var i = 0;

function getAnswer(){

    function checkAns() {
        var y = this.innerHTML;
        var sa = y.split(',');
        var submitted1 = sa[0];
        var submitted2 = sa[1];
        var wrongdisp = document.getElementById("wrongAns");
        var rightdisp = document.getElementById("rightAns");
        var m = document.getElementById("num1").innerHTML;
        var n = document.getElementById("num2").innerHTML;
    
        if(submitted1 == numbers.get(m) && submitted2 == numbers.get(n)){
            rightdisp.style.display = "block";
            // document.getElementById("game_page").style.pointerEvents = "none";
        }
        else{
            i++;
            if(i == 1){
                document.getElementById("heart1").src = "./SeizeHerGameFiles/assets/bro_heart.png";
            }
            else if(i == 2){
                document.getElementById("heart2").src = "./SeizeHerGameFiles/assets/bro_heart.png";
            }
            else if(i == 3){
                document.getElementById("heart3").src = "./SeizeHerGameFiles/assets/bro_heart.png";
                wrongdisp.style.display = "block";
                // document.getElementById("game_page").style.pointerEvents = "none";
            }
        }
    }

    document.getElementById('opt1').onclick = checkAns;
    document.getElementById('opt2').onclick = checkAns;
    document.getElementById('opt3').onclick = checkAns;
    document.getElementById('opt4').onclick = checkAns;
}

function restart(){
    window.location.reload();
}