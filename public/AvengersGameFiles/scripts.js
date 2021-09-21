//Frontend Functions for testing
// createBackground()
// createFinish()
// createGrid()
// createCharacters()
// LokiMovement()
// createInteractionPad()


// Initializing variables
var current_loki_position = 0
var current_ironman_position = 3
var current_fireball_position = 0

// Initializing Objects
var loki_squares
var ironman_squares
var fireball_squares
var Phone = document.createElement('div')

//Frontend Functions

//Creating html elements

//Create Phone div
function createBackground(){
    Phone.classList.add('Phone')
    document.body.appendChild(Phone)
}

//Create GameDisplay div
function createFinish(){
    var GameDisplay = document.createElement('div')
    GameDisplay.classList.add('GameDisplay')
    Phone.appendChild(GameDisplay)
}

//Create box div
function createGrid(){
    var box = document.createElement('div')
    box.classList.add('box')
    box.innerHTML +=`
    <div class="loki"></div>
    <div class="fireball"></div>
    <div class="ironman"></div>
    `
    Phone.appendChild(box)

    //Creating loki boxes
    for(i=0;i<4;i++){
        var loki_box = document.createElement('div')
        // loki_box.classList.add('')
        var loki_grid = document.querySelector('.loki')
        loki_grid.appendChild(loki_box)
    }
    //Creating fireball boxes
    for(i=0;i<20;i++){
        var fireball_box = document.createElement('div')
        // loki_box.classList.add('')
        var fireball_grid = document.querySelector('.fireball')
        fireball_grid.appendChild(fireball_box)
    }

    //Creating ironman boxes
    for(i=0;i<4;i++){
        var ironman_box = document.createElement('div')
        // loki_box.classList.add('')
        var ironman_grid = document.querySelector('.ironman')
        ironman_grid.appendChild(ironman_box)
    }

    //Creating array of the grids of loki,ironman and fireball
    loki_squares = Array.from(document.querySelectorAll('.loki div'))
    ironman_squares = Array.from(document.querySelectorAll('.ironman div'))
    fireball_squares = Array.from(document.querySelectorAll('.fireball div'))
}

function createCharacters(){
    //Initialising positions
    loki_squares[current_loki_position].classList.add('loki_bg')
    ironman_squares[current_ironman_position].classList.add('ironman_bg')

}

function LokiMovement(){
    //Start Loki Movement
    lokiMovementId1 = setTimeout(lokiMove,1000)
}

function createInteractionPad(){
    var InteractionPad = document.createElement('div')
    InteractionPad.classList.add('InteractionPad')
    InteractionPad.innerHTML += `
    <button class="Interaction_Buttons left_btn" onclick="MoveLeft()"></button>
    <button class="Interaction_Buttons right_btn" onclick="MoveRight()"></button>
    <button class="restart_btn"onclick="Restart()"></button>
    `
    Phone.appendChild(InteractionPad)
}

//Backend Functions


//ironman movement functions
function MoveLeft(){
    if( current_ironman_position > 0 ){
        ironman_squares[current_ironman_position].classList.remove('ironman_bg')
        current_ironman_position = current_ironman_position - 1
        ironman_squares[current_ironman_position].classList.add('ironman_bg')
        // console.log(current_ironman_position)
    }
}

function MoveRight(){
    if( current_ironman_position < 3 ){
        ironman_squares[current_ironman_position].classList.remove('ironman_bg')
        current_ironman_position = current_ironman_position + 1
        ironman_squares[current_ironman_position].classList.add('ironman_bg')
        // console.log(current_ironman_position)
    }
}

//loki movement loop

function lokiMove(){
    
    // console.log(current_loki_position)
    shoot()
    loki_squares[current_loki_position].classList.remove('loki_bg')
    fireball_squares[current_loki_position].classList.remove('thunder_bg')
    current_loki_position = (( current_loki_position + 1 ) % 4)
    loki_squares[current_loki_position].classList.add('loki_bg')
    fireball_squares[current_loki_position].classList.add('thunder_bg')

    lokiMovementId2 = setTimeout(lokiMove,1000)
}

// lokiMovement()


//Shoot function
function shoot(){
    
    current_fireball_position = current_loki_position
    // console.log(current_fireball_position)
    function MoveFireball(){
        fireball_squares[current_fireball_position].classList.remove('fireball_bg')
        current_fireball_position += 4
        // console.log(current_fireball_position)
        if( current_fireball_position < 20 ){
            fireball_squares[current_fireball_position].classList.add('fireball_bg')
            fireball_Id2 = setTimeout(MoveFireball,200)
        }
        if( current_fireball_position > 19 ){
            // console.log(current_fireball_position)
            if(( current_fireball_position % 4 ) == current_ironman_position ){
                var GameDisplay = document.querySelector('.GameDisplay')
                GameDisplay.style.display = "block"
                // console.log('Game Over!')
                ironman_squares[current_ironman_position].classList.add('ironman_fireball')
                var Interaction_Buttons = Array.from(document.querySelectorAll('.Interaction_Buttons'))
                for( i=0 ; i<Interaction_Buttons.length; i++ ){
                    Interaction_Buttons[i].disabled = true
                }
                clearInterval(fireball_Id1)
                clearInterval(fireball_Id2)
                clearInterval(lokiMovementId1)
                clearInterval(lokiMovementId2)
            }
        }
    }
    fireball_Id1 = setTimeout(MoveFireball,100)
}

function Restart(){
    clearInterval(fireball_Id1)
    clearInterval(fireball_Id2)
    clearInterval(lokiMovementId1)
    clearInterval(lokiMovementId2)
    window.location.reload()
}

