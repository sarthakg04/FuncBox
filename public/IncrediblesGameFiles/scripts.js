//Frontend Functions for testing
// createBackground()
// createGrid()
// createCharacters()
// EdnaMovement()
// createInteractionPad()
// createFinish()

var current_edna_position = 0
var current_basketball_position = 3
var current_incredible_position = 0
var shooted = false

// Initializing Objects
var edna_squares
var incredible_squares
var basketball_squares
var Phone = document.createElement('div')


// Frontend Functions

// Create Phone div
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



//Create GamePad div
function createGrid(){
    var GamePad = document.createElement('div')
    GamePad.classList.add('Gamepad')
    GamePad.innerHTML +=`
    <div class="Edna"></div>
    <div class="basketball"></div>
    <div class="mrIncredible"></div>
    `
    Phone.appendChild(GamePad)

    //Creating edna boxes
    for(i=0;i<4;i++){
        var edna_box = document.createElement('div')
        // loki_box.classList.add('')
        var edna_grid = document.querySelector('.Edna')
        edna_grid.appendChild(edna_box)
    }
    //Creating basketball boxes
    for(i=0;i<20;i++){
        var basketball_box = document.createElement('div')
        var basketball_grid = document.querySelector('.basketball')
        basketball_grid.appendChild(basketball_box)
    }

    //Creating incredible boxes
    for(i=0;i<4;i++){
        var incredible_box = document.createElement('div')
        // loki_box.classList.add('')
        var incredible_grid = document.querySelector('.mrIncredible')
        incredible_grid.appendChild(incredible_box)
    }

    //Creating array of the grids of loki,ironman and fireball
    edna_squares = Array.from(document.querySelectorAll('.Edna div'))
    basketball_squares = Array.from(document.querySelectorAll('.basketball div'))
    incredible_squares = Array.from(document.querySelectorAll('.mrIncredible div'))
}

function createCharacters(){
    //Initialising positions
    edna_squares[current_edna_position].classList.add('Edna_bg')
    incredible_squares[current_incredible_position].classList.add('Incredible_bg')

}

function EdnaMovement(){
    //Start Edna Movement
    ednaMovementId1 = setTimeout(ednaMove,1000)
}

function createInteractionPad(){
    var InteractionPad = document.createElement('div')
    InteractionPad.classList.add('InteractionPad')
    InteractionPad.innerHTML += `
    <button class="Interaction_Buttons left_btn" onclick="MoveLeft()"></button>
    <button class="Interaction_Buttons right_btn" onclick="MoveRight()"></button>
    <button class="restart_btn" onclick="Restart()"></button>
    <button class="Interaction_Buttons shoot_btn" onclick="shoot()">🔥</button>
    `
    Phone.appendChild(InteractionPad)
}


// Backend Functions



// Edna movement function
function ednaMove(){
    
    // console.log(current_edna_position)
    edna_squares[current_edna_position].classList.remove('Edna_bg')
    // basketball_squares[current_edna_position].classList.remove('thunder_bg')
    current_edna_position = (( current_edna_position + 1 ) % 4)
    edna_squares[current_edna_position].classList.add('Edna_bg')
    // basketball_squares[current_edna_position].classList.add('thunder_bg')

    ednaMovementId2 = setTimeout(ednaMove,1000)
}

//incredibles movement functions
function MoveLeft(){
    if( current_incredible_position > 0 ){
        incredible_squares[current_incredible_position].classList.remove('Incredible_bg')
        current_incredible_position = current_incredible_position - 1
        incredible_squares[current_incredible_position].classList.add('Incredible_bg')
        // console.log(current_incredible_position)
    }
}

function MoveRight(){
    if( current_incredible_position < 3 ){
        incredible_squares[current_incredible_position].classList.remove('Incredible_bg')
        current_incredible_position = current_incredible_position + 1
        incredible_squares[current_incredible_position].classList.add('Incredible_bg')
        // console.log(current_incredible_position)
    }
}

//Shoot function
function shoot(){
    if(!shooted){
        shooted = true
        var shoot_btn = document.querySelector('.shoot_btn')
        shoot_btn.disabled = true
        current_basketball_position = current_incredible_position + 20 // start div of the basketball
    
        basketball_Id1 = setTimeout(Movebasketball,100)
        // console.log(current_basketball_position)
        function Movebasketball(){
            if( basketball_squares[current_basketball_position] ){
                basketball_squares[current_basketball_position].classList.remove('Basketball_bg')
            }
            // basketball_squares[current_basketball_position].classList.remove('Basketball_bg')
            current_basketball_position -= 4
            // console.log(current_basketball_position)
            if( current_basketball_position > 3 ){
                basketball_squares[current_basketball_position].classList.add('Basketball_bg')
                basketball_Id2 = setTimeout(Movebasketball,200)
            }
            if( current_basketball_position < 4 ){
                
                basketball_squares[current_basketball_position].classList.add('Basketball_bg')
                // console.log(current_basketball_position)
                if(( current_basketball_position % 4 ) == current_edna_position ){
                    basketball_squares[current_basketball_position].classList.remove('Basketball_bg')
                    var GameDisplay = document.querySelector('.GameDisplay')
                    GameDisplay.style.display = "block"
                    shoot_btn.disabled = false
                    // console.log('Game Over!')
                    edna_squares[current_edna_position].classList.add('edna_basketball')
                    var Interaction_Buttons = Array.from(document.querySelectorAll('.Interaction_Buttons'))
                    for( i=0 ; i<Interaction_Buttons.length; i++ ){
                        Interaction_Buttons[i].disabled = true
                    }
                    
                    clearInterval(basketball_Id1)
                    clearInterval(basketball_Id2)
                    clearInterval(ednaMovementId1)
                    clearInterval(ednaMovementId2)
                    return
                }
                
                setTimeout(function(){ basketball_squares[current_basketball_position].classList.remove('Basketball_bg') }, 100);
                shooted = false
                shoot_btn.disabled = false
            }
        }
    }
}


function Restart(){
    clearInterval(basketball_Id1)
    clearInterval(basketball_Id2)
    clearInterval(ednaMovementId1)
    clearInterval(ednaMovementId2)
    window.location.reload()
}
