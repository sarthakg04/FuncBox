// Frontend Functions
Phone = document.createElement('div')
Phone.classList.add('Phone')
document.body.appendChild(Phone)

let planckArray = randomUniqueNum(33,9)

let currentBirdPosition = 34

function fill() {
    let phone = document.querySelector('.Phone')
    phone.style.backgroundImage = "url('FuncBoxx/AngryBirds/assets/Background.svg')";
}

function createScore() {
    let scoreSpanCreate = document.createElement('span')
    scoreSpanCreate.classList.add('Score')
    scoreSpanCreate.innerHTML =  "Start"
    Phone.appendChild(scoreSpanCreate)
}

function createGamePad() {
    let gamePad = document.createElement('div')
    let Grid = document.createElement('div')
    gamePad.classList.add('GamePad')
    Grid.classList.add('grid')

    Phone.appendChild(gamePad)
    gamePad.appendChild(Grid)
    
    drawGrid()
}

function createPlancks() {
    
    // Forming an array with all the divs inside the grid div
    squares = Array.from(document.querySelectorAll('.grid div'));

    // Creating the bird div and appending it to initial currentBirdPosition
    squares[currentBirdPosition].classList.add('bird-check')
    squares[currentBirdPosition].classList.add('planck-check')
    squares[currentBirdPosition].classList.add('bird_planck')
    SetPlancks()
}

function createElements() {
    SetElements()
}

function createInteractionPad() {
    Phone.innerHTML += `
    <div class="ControlPad">
        <button id="nextButton" class="MovementBtns" onclick="MoveNext()">⬅</button>
        <button id="prevButton" class="MovementBtns" onclick="MovePrev()">➡</button>
        <button class="hitBtn" onclick="Hit()" disabled>Hit</button>
        <button onclick="Restart()">Restart</button>
    </div>
    `
    squares = Array.from(document.querySelectorAll('.grid div'));
    scoreSpan = document.querySelector('.Score')
    MovementBtns = document.querySelectorAll('.MovementBtns')
     
}



// Backend Functions


// Creating the Grid
function drawGrid() {
    const grid = document.querySelector('.grid')
    for( i = 0; i < 35; i++ ) {
        const square = document.createElement('div')
        grid.appendChild(square)
    }
}

// Function to generate random unique numbers
function randomUniqueNum(range, outputCount) {

  let arr = []
  for (let i = 1; i <= range; i++) {
    arr.push(i)
  }

  let result = [];

  for (let i = 1; i <= outputCount; i++) {
    const random = Math.floor(Math.random() * (range - i));
    result.push(arr[random]);
    arr[random] = arr[range - i];
  }

  return result;
}






// Setting plancks at random positions
function SetPlancks() {
    
    for( i=0; i<planckArray.length ; i++ ) {
        // const planck = document.createElement('div')
        // planck.classList.add('planck')
        // squares[planckArray[i]].appendChild(planck)
        squares[planckArray[i]].classList.add('planck-check')
        squares[planckArray[i]].classList.add('planck')
    }
}

// array with elements to get place inside the plancks
function SetElements() {
    let elementArray = randomUniqueNum(9,6)
    for( i=0; i<elementArray.length ; i++ ) {
        if(i<3) {
            squares[planckArray[i]].classList.remove('planck')
            squares[planckArray[i]].classList.add('pig-check')
            squares[planckArray[i]].classList.add('pig_planck')
            
        }
        else{
            squares[planckArray[i]].classList.remove('planck')
            squares[planckArray[i]].classList.add('box-check')
            squares[planckArray[i]].classList.add('box_planck')
        }
    }
}



function MoveNext() {
    let hitBtn = document.querySelector('.hitBtn')
    if( currentBirdPosition > Math.min(...planckArray) ) {
        hitBtn.disabled = true
        let planck_position_check = true;
        squares[currentBirdPosition].classList.remove('bird-check')
        if(squares[currentBirdPosition].classList.contains('pig-check')) {
            squares[currentBirdPosition].classList.remove('bird_pig_planck')
            squares[currentBirdPosition].classList.add('pig_planck')
        }
        if(squares[currentBirdPosition].classList.contains('box-check')) {
            squares[currentBirdPosition].classList.remove('bird_box_planck')
            squares[currentBirdPosition].classList.add('box_planck')
        }
        else{
            squares[currentBirdPosition].classList.remove('bird_planck')
            squares[currentBirdPosition].classList.add('planck')
        }
        
        while(planck_position_check) {
            currentBirdPosition-=1
            if(squares[currentBirdPosition].classList.contains('planck-check')) {
                planck_position_check = false
                squares[currentBirdPosition].classList.add('bird-check')
                // squares[currentBirdPosition].appendChild(bird)
                if(squares[currentBirdPosition].classList.contains('pig-check')) {
                    squares[currentBirdPosition].classList.remove('pig_planck')
                    squares[currentBirdPosition].classList.add('bird_pig_planck')
                }
                if(squares[currentBirdPosition].classList.contains('box-check')) {
                    squares[currentBirdPosition].classList.remove('box_planck')
                    squares[currentBirdPosition].classList.add('bird_box_planck')
                }
                else{
                    
                    squares[currentBirdPosition].classList.remove('planck')
                    squares[currentBirdPosition].classList.add('bird_planck')
                }
                if(squares[currentBirdPosition].classList.contains('pig-check') || squares[currentBirdPosition].classList.contains('box-check')) {
                    if(squares[currentBirdPosition].classList.contains('hitted-check')){
                        hitBtn.disabled = true
                    }
                    else{
                        hitBtn.disabled = false
                    }
                }
            }
        }
    }
}

function MovePrev() {
    let hitBtn = document.querySelector('.hitBtn')
    if( currentBirdPosition <= Math.max(...planckArray) ) {
        hitBtn.disabled = true
        let planck_position_check = true;
        squares[currentBirdPosition].classList.remove('bird-check')
        if(squares[currentBirdPosition].classList.contains('pig-check')) {
            squares[currentBirdPosition].classList.remove('bird_pig_planck')
            squares[currentBirdPosition].classList.add('pig_planck')
        }
        if(squares[currentBirdPosition].classList.contains('box-check')) {
            squares[currentBirdPosition].classList.remove('bird_box_planck')
            squares[currentBirdPosition].classList.add('box_planck')
        }
        else{
            squares[currentBirdPosition].classList.remove('bird_planck')
            squares[currentBirdPosition].classList.add('planck')
        }
        
        while(planck_position_check) {
            currentBirdPosition+=1
            if(squares[currentBirdPosition].classList.contains('planck-check')) {
                planck_position_check = false
                squares[currentBirdPosition].classList.add('bird-check')
                // squares[currentBirdPosition].appendChild(bird)
                if(squares[currentBirdPosition].classList.contains('pig-check')) {
                    squares[currentBirdPosition].classList.remove('pig_planck')
                    squares[currentBirdPosition].classList.add('bird_pig_planck')
                }
                if(squares[currentBirdPosition].classList.contains('box-check')) {
                    squares[currentBirdPosition].classList.remove('box_planck')
                    squares[currentBirdPosition].classList.add('bird_box_planck')
                }
                else{
                    
                    squares[currentBirdPosition].classList.remove('planck')
                    squares[currentBirdPosition].classList.add('bird_planck')
                }
                if(squares[currentBirdPosition].classList.contains('pig-check') || squares[currentBirdPosition].classList.contains('box-check')) {
                    if(squares[currentBirdPosition].classList.contains('hitted-check')){
                        hitBtn.disabled = true
                    }
                    else{
                        hitBtn.disabled = false
                    }
                }
            }
        }
    }
}

let Score = 0
let Finish = 0
let scoreSpan = document.querySelector('.Score')
let MovementBtns = document.querySelectorAll('.MovementBtns')

function Hit() {
    let hitBtn = document.querySelector('.hitBtn')
    if(squares[currentBirdPosition].classList.contains('pig-check')) {
        Score-=1
        scoreSpan.innerHTML = "Score :" + Score
    }
    else {
        Score+=1
        Finish+=1
        if( Finish === 3 ) {
            for(var i = 0; i < MovementBtns.length; i++) {
                MovementBtns[i].disabled = true;
            }
            hitBtn.disabled = true
            if( Score === Finish ) {
                const hitted = document.createElement('div')
                hitted.classList.add('hitted')
                squares[currentBirdPosition].appendChild(hitted)
                squares[currentBirdPosition].classList.add('hitted-check')
                scoreSpan.innerHTML = "Perfect Win : "+ Score+"/"+3
                return 0
            }
            else{
                const hitted = document.createElement('div')
                hitted.classList.add('hitted')
                squares[currentBirdPosition].appendChild(hitted)
                squares[currentBirdPosition].classList.add('hitted-check')
                scoreSpan.innerHTML = "Game Over! Score : "+ Score+"/"+3
                return 0
            }
        }
        else {
            scoreSpan.innerHTML = "Score :" + Score
        }

    }
    const hitted = document.createElement('div')
    hitted.classList.add('hitted')
    squares[currentBirdPosition].appendChild(hitted)
    squares[currentBirdPosition].classList.add('hitted-check')
    hitBtn.disabled = true
}

function Restart() {
    window.location.reload();
}

// Long Press for the buttons

// function addMovementLogic(){

//     let nextButton = document.getElementById('nextButton');
//     let prevButton= document.getElementById('prevButton');


//     nextButton.addEventListener("mousedown",()=>{
//     MoveNext();
//     time = setInterval(()=>{
//         MoveNext();
//     },250)
//     })

//     nextButton.addEventListener("mouseup",()=>{
//     clearInterval(time);
//     })


//     prevButton.addEventListener("mousedown",()=>{
//     MovePrev();
//     time = setInterval(()=>{
//         MovePrev();
//     },250)
//     })

//     prevButton.addEventListener("mouseup",()=>{
//     clearInterval(time);
//     })

// }
