// Frontend Functions for Test for Game 1

// fillBackground('Game_1')
// createRays()
// createCloud()
// createPlant1()
// createInteractionPad1()
// function CheckHit(ray_position){
//     if( ray_position <= mountain_place ){
//         rays_hit++
//     }
// }


// Frontend Functions for Test for Game 2


// let num_of_clouds = 9
// fillBackground('sky')
// createCloudGrid()
// for(i=0;i<num_of_clouds;i++){
//     createCloud_Game_2()
// }

// createShooter2()
// createInteractionPad2()
// function CheckLogic(){
//     if(cloud_hit === true){
//         hit__count++
//     }
// }


// Frontend Functions for Test for Game 3

// let time_limit = 10
// fillBackground('Game_3')
// createBubbles()
// createInteractionPad3()
// function onClickingCo2(){
//     co2_hit++
// }
// function CheckLogic(){
//     if( co2_hit === co2_count ){
//         HappyPlant()
//     }
// }


let Phone
let GamePad
let rays_grid 
let cloud_grid
let plant
let fill_space
let Winner
let InteractionPad

let ray_1_grid
let ray_2_grid
let ray_3_grid
let ray_4_grid



let ray_1_grid_squares
let ray_2_grid_squares
let ray_3_grid_squares
let ray_4_grid_squares

let cloud_grid_squares


let ray_1_MovementId_1
let ray_1_MovementId_2
let ray_2_MovementId_1
let ray_2_MovementId_2
let ray_3_MovementId_1
let ray_3_MovementId_2
let ray_4_MovementId_1
let ray_4_MovementId_2


let rays_hit = 0

let cloud_current_position = 0
let ray_1_current_postion = 4
let ray_2_current_postion = 4
let ray_3_current_postion = 4
let ray_4_current_postion = 5


// Frontend functions Game 1

function fillBackground(bg) {
    Phone = document.createElement('div')
    Phone.classList.add('Phone')
    Phone.classList.add('Phone_'+bg+'_bg')
    GamePad = document.createElement('div')
    GamePad.classList.add('GamePad_'+bg)
    document.body.appendChild(Phone)
    Phone.appendChild(GamePad)
}

function createRays() {
    rays_grid = document.createElement('div')
    rays_grid.classList.add('rays_grid')
    rays_grid.innerHTML +=`
        <div class="ray_grid ray_1_grid"></div>
        <div class="ray_grid ray_2_grid"></div>
        <div class="ray_grid ray_3_grid"></div>
        <div class="ray_grid ray_4_grid"></div>
    `
    GamePad.appendChild(rays_grid)
    

    // Selecting ray grids
    
    ray_1_grid = document.querySelector('.ray_1_grid')
    ray_2_grid = document.querySelector('.ray_2_grid')
    ray_3_grid = document.querySelector('.ray_3_grid')
    ray_4_grid = document.querySelector('.ray_4_grid')

    
    // creating divs inside ray_grids

    for(i=0;i<5;i++){
        let ray_div = document.createElement('div')
        ray_div.classList.add('ray_div')
        ray_1_grid.appendChild(ray_div)
        ray_div = document.createElement('div')
        ray_div.classList.add('ray_div')
        ray_2_grid.appendChild(ray_div)
        ray_div = document.createElement('div')
        ray_div.classList.add('ray_div')
        ray_3_grid.appendChild(ray_div)
        ray_div = document.createElement('div')
        ray_div.classList.add('ray_div')
        ray_4_grid.appendChild(ray_div)
    }

    // extra div inside ray_4_grid

    ray_div = document.createElement('div')
    ray_div.classList.add('ray_div')
    ray_4_grid.appendChild(ray_div)

    ray_1_grid_squares = Array.from(document.querySelectorAll('.ray_1_grid div'))
    ray_2_grid_squares = Array.from(document.querySelectorAll('.ray_2_grid div'))
    ray_3_grid_squares = Array.from(document.querySelectorAll('.ray_3_grid div'))
    ray_4_grid_squares = Array.from(document.querySelectorAll('.ray_4_grid div'))


    
    ray_1_grid_squares[ray_1_current_postion].classList.add('ray_bg')
    ray_1_MovementId_1 = setTimeout(ray_1_move,1000)
    
    ray_2_grid_squares[ray_2_current_postion].classList.add('ray_bg')
    ray_2_MovementId_1 = setTimeout(ray_2_move,1000)
    
    ray_3_grid_squares[ray_3_current_postion].classList.add('ray_bg')
    ray_3_MovementId_1 = setTimeout(ray_3_move,1000)

    ray_4_grid_squares[ray_4_current_postion].classList.add('ray_bg')
    ray_4_MovementId_1 = setTimeout(ray_4_move,1000)

}


function createCloud() {
    cloud_grid = document.createElement('div')
    cloud_grid.classList.add('cloud_grid')
    GamePad.appendChild(cloud_grid)

    
    // creating the divs inside the cloud_grid

    for(i=0;i<4;i++){
        let cloud_div = document.createElement('div')
        cloud_div.classList.add('cloud_div')
        cloud_grid.appendChild(cloud_div)
    }

    
    cloud_grid_squares = Array.from(document.querySelectorAll('.cloud_grid div'))
    
    cloud_grid_squares[cloud_current_position].classList.add('cloud_bg')
}

function createPlant1(){
    plant = document.createElement('div')
    plant.classList.add('plant')
    fill_space = document.createElement('div')
    fill_space.classList.add('fill_space')
    Winner = document.createElement('div')
    Winner.classList.add('Winner')
    Winner.innerHTML = 'Well done!'
    
    GamePad.appendChild(plant)
    GamePad.appendChild(fill_space)
    GamePad.appendChild(Winner)

}

function createInteractionPad1() {
    InteractionPad = document.createElement('div')
    InteractionPad.classList.add('InteractionPad')
    InteractionPad.innerHTML +=`
        <button onclick="Right()" class="buttons right">Right</button>
        <button onclick="Left()" class="buttons left">Left</button>
        <button onclick="window.location.reload()" class="restart">Restart</button>
    `
    Phone.appendChild(InteractionPad)
}

// Game 2 part


let current__shooter__position = 0
let current__bullet__position = 0
let shoot__count = 0
let hit__count = 0

let clouds__grid
let shooter__grid
let InteractionPad__2


let InteractonPad__btns



let clouds__grid__squares

let shooter__grid__squares


// Frontend functions Game 1


function createCloudGrid(){
    clouds__grid = document.createElement('div')
    clouds__grid.classList.add('clouds__grid')

    
    

    GamePad.appendChild(clouds__grid)
}

// for(i=0;i<9;i++){
//     createCloud_Game_2()
// }

function createCloud_Game_2(){
    let cloud__div = document.createElement('div')
    cloud__div.classList.add('cloud__div')
    
    cloud__div.classList.add('cloud__bg')

    clouds__grid.appendChild(cloud__div)
}

function createShooter2(){

    for(i=0;i < 15 - num_of_clouds ;i++){
        let cloud__div = document.createElement('div')
        cloud__div.classList.add('cloud__div')
        clouds__grid.appendChild(cloud__div)
    }
    
    GamePad.appendChild(clouds__grid)

    shooter__grid = document.createElement('div')
    shooter__grid.classList.add('shooter__grid')
    
    for(i=0;i<3;i++){
        let shooter__div = document.createElement('div')
        shooter__div.classList.add('shooter__div')

        shooter__grid.appendChild(shooter__div)
    }

    GamePad.appendChild(shooter__grid)

    

    clouds__grid__squares = Array.from(document.querySelectorAll('.clouds__grid div'))

    shooter__grid__squares = Array.from(document.querySelectorAll('.shooter__grid div'))

    
    shooter__grid__squares[current__shooter__position].classList.add('shooter__bg')

}


function createInteractionPad2() {
    InteractionPad__2 = document.createElement('div')
    InteractionPad__2.classList.add('InteractionPad__2')
    InteractionPad__2.innerHTML +=`
        <button onclick="Move__left()" class="buttons__2 left__btn">Left</button>
        <button onclick="Move__right()" class="buttons__2 right__btn">Right</button>
        <button onclick="Shoot()" class="buttons__2 shoot__btn">Shoot</button>
        <button onclick="window.location.reload()" class="restart__btn">Restart</button>
    `
    Phone.appendChild(InteractionPad__2)

    let GameOver__2 = document.createElement('div')
    GameOver__2.classList.add('GameOver__2')
    Phone.appendChild(GameOver__2)

    let WellDone__2 = document.createElement('div')
    WellDone__2.classList.add('WellDone__2')
    WellDone__2.innerHTML = 'Well Done!'
    Phone.appendChild(WellDone__2)

}

// Game 3 part

let bubbles___grid

let random_places = randomUniqueNum( 43, 30)
let gas_bg = ['co2_bg', 'o2_bg']
let co2_count = 0
let co2_hit = 0

let Start_btn
let Timer


let Time = 0

let buttons___squares

let InteractionPad___3


function createBackground3() {
    Phone = document.createElement('div')
    Phone.classList.add('Phone')
    Phone.classList.add('Phone___bg___3')
    GamePad = document.createElement('div')
    GamePad.classList.add('GamePad___3')
    document.body.appendChild(Phone)
    Phone.appendChild(GamePad)
}

function createBubbles(){
    bubbles___grid = document.createElement('div')
    bubbles___grid.classList.add('bubbles___grid')
        
    // creating the bubbles
    for( i=0; i<42; i++){
        let bubble_button = document.createElement('button')
        bubble_button.classList.add(`${i}_btn`)
        bubble_button.disabled = true
        if( random_places.includes(i)  ){
            if( co2_count < 15 ){
                let temp__1 = Math.floor(Math.random() * 2)
                bubble_button.classList.add(`${gas_bg[temp__1]}`)
                if( temp__1 === 0 ) {
                    co2_count++
                }
            }
            else{
                bubble_button.classList.add(`${gas_bg[1]}`)
            }
        }
        bubble_button.onclick = function () {
            if(bubble_button.classList.contains('co2_bg')){
                onClickingCo2()
                // console.log(co2_hit)
                bubble_button.classList.remove('co2_bg')
                bubble_button.classList.add('co2_active_bg')
                bubble_button.disabled = true
            }
        };
        bubbles___grid.appendChild(bubble_button)

    }

    GamePad.appendChild(bubbles___grid)

    buttons___squares = Array.from(document.querySelectorAll('.bubbles___grid button'))

    for(i=0;i<42;i++){
        if(!random_places.includes(i)){

            buttons___squares[i].style.background = 'transparent'
        }
    }
}

function createInteractionPad3(){
    InteractionPad___3 = document.createElement('div')
    InteractionPad___3.classList.add('InteractionPad___3')

    InteractionPad___3.innerHTML +=`
        <button onclick="Start()" class="Start_btn">Start</button>
        <div class="Timer">Timer</div>
        <button onclick="window.location.reload()" class="restart__btn">Restart</button>
    `

    Phone.appendChild(InteractionPad___3)
    
    Timer = document.querySelector('.Timer')

}

// Backend Functions of Game 1

let mountain_place = 0

function ray_1_move(){
    ray_1_grid_squares[ray_1_current_postion].classList.remove('ray_bg')
    if( ray_1_current_postion <= 0 ){
        if( cloud_current_position === 0 ){
            ray_1_current_postion = 4
            ray_1_grid_squares[ray_1_current_postion].classList.add('ray_bg')
        }
        else{
            CheckHit(ray_1_current_postion)
            check()
            ray_1_current_postion = 4
            ray_1_grid_squares[ray_1_current_postion].classList.add('ray_bg')
        }
    }
    else{
        
        ray_1_current_postion--
        ray_1_grid_squares[ray_1_current_postion].classList.add('ray_bg')
    }

    ray_1_MovementId_2 = setTimeout(ray_1_move, 1000)

}



function ray_2_move(){
    ray_2_grid_squares[ray_2_current_postion].classList.remove('ray_bg')
    if( ray_2_current_postion <= 0 ){
        CheckHit(ray_2_current_postion)
        ray_2_current_postion = 4
        ray_2_grid_squares[ray_2_current_postion].classList.add('ray_bg')
        // rays_hit++
        check()
        // console.log(rays_hit)
    }
    else{
        if( cloud_current_position === 1 &&  ray_2_current_postion === 1 ){
            ray_2_current_postion = 5
            // ray_2_grid_squares[ray_2_current_postion].classList.add('ray_bg')
        }
        ray_2_current_postion--
        ray_2_grid_squares[ray_2_current_postion].classList.add('ray_bg')
    }

    ray_2_MovementId_2 = setTimeout(ray_2_move, 1000)

}


function ray_3_move(){
    ray_3_grid_squares[ray_3_current_postion].classList.remove('ray_bg')
    if( ray_3_current_postion <= 0 ){
        CheckHit(ray_3_current_postion)
        ray_3_current_postion = 4
        ray_3_grid_squares[ray_3_current_postion].classList.add('ray_bg')
        // rays_hit++
        check()
        // console.log(rays_hit)
    }
    else{
        if( cloud_current_position === 2 &&  ray_3_current_postion === 2 ){
            ray_3_current_postion = 5
            // ray_2_grid_squares[ray_2_current_postion].classList.add('ray_bg')
        }
        ray_3_current_postion--
        ray_3_grid_squares[ray_3_current_postion].classList.add('ray_bg')
    }

    ray_3_MovementId_2 = setTimeout(ray_3_move, 1000)

}


function ray_4_move(){
    ray_4_grid_squares[ray_4_current_postion].classList.remove('ray_bg')
    if( ray_4_current_postion <= 0 ){
        CheckHit(ray_4_current_postion)
        ray_4_current_postion = 5
        ray_4_grid_squares[ray_4_current_postion].classList.add('ray_bg')
        // rays_hit++
        check()
        // console.log(rays_hit)
    }
    else{
        if( cloud_current_position === 3 &&  ray_4_current_postion === 3 ){
            ray_4_current_postion = 6
            // ray_2_grid_squares[ray_2_current_postion].classList.add('ray_bg')
        }
        ray_4_current_postion--
        ray_4_grid_squares[ray_4_current_postion].classList.add('ray_bg')
    }

    ray_4_MovementId_2 = setTimeout(ray_4_move, 1000)

}


// Cloud left movement function

function Left() {
    if( cloud_current_position < 3 ){
        cloud_grid_squares[cloud_current_position].classList.remove('cloud_bg')
        cloud_current_position++
        cloud_grid_squares[cloud_current_position].classList.add('cloud_bg')
    }
}

// Cloud right movement function

function Right() {
    if( cloud_current_position > 0 ){
        cloud_grid_squares[cloud_current_position].classList.remove('cloud_bg')
        cloud_current_position--
        cloud_grid_squares[cloud_current_position].classList.add('cloud_bg')
    }
}

// Cloud left movement function

function Left() {
    if( cloud_current_position < 3 ){
        cloud_grid_squares[cloud_current_position].classList.remove('cloud_bg')
        cloud_current_position++
        cloud_grid_squares[cloud_current_position].classList.add('cloud_bg')
    }
}

// Cloud right movement function

function Right() {
    if( cloud_current_position > 0 ){
        cloud_grid_squares[cloud_current_position].classList.remove('cloud_bg')
        cloud_current_position--
        cloud_grid_squares[cloud_current_position].classList.add('cloud_bg')
    }
}

// checking function for win

function check() {
    if( rays_hit % 2 === 0 ) {
        fill_space.classList.add(`fill_space_${rays_hit}`)
    }
    if( rays_hit === 10 ) {
        let Winner = document.querySelector('.Winner')
        Winner.style.display = 'block'
        clearTimeout(ray_1_MovementId_1)
        clearTimeout(ray_1_MovementId_2)
        clearTimeout(ray_2_MovementId_1)
        clearTimeout(ray_2_MovementId_2)
        clearTimeout(ray_3_MovementId_1)
        clearTimeout(ray_3_MovementId_2)
        clearTimeout(ray_4_MovementId_1)
        clearTimeout(ray_4_MovementId_2)
        let rays_grid = document.querySelector('.rays_grid')
        rays_grid.style.display = 'none'
        plant.classList.remove('normal_plant')
        plant.classList.add('happy_plant')
    }
}




// Backend function of Game 2


function Move__left(){
    if( current__shooter__position > 0 ){
        shooter__grid__squares[current__shooter__position].classList.remove('shooter__bg')
        current__shooter__position--
        shooter__grid__squares[current__shooter__position].classList.add('shooter__bg')
    }
}

function Move__right(){
    if( current__shooter__position < 2 ){
        shooter__grid__squares[current__shooter__position].classList.remove('shooter__bg')
        current__shooter__position++
        shooter__grid__squares[current__shooter__position].classList.add('shooter__bg')
    }
}

let cloud_hit

function Shoot(){
    
    if( shoot__count <= num_of_clouds+1 ){
        
        clouds__grid__squares[current__bullet__position].classList.remove('bullet__bg')


        if( current__bullet__position === 0 ){
            current__bullet__position = current__shooter__position + 12
            shoot__count++
            
        }
        else{
            current__bullet__position = current__bullet__position - 3
        }
        
        cloud_hit = clouds__grid__squares[current__bullet__position].classList.contains('cloud__bg')

        if( clouds__grid__squares[current__bullet__position].classList.contains('cloud__bg') ){
            clouds__grid__squares[current__bullet__position].classList.remove('cloud__bg')
            // hit__count++
            CheckLogic()
            if( hit__count === num_of_clouds ){

                clouds__grid__squares[current__bullet__position].classList.remove('bullet__bg')

                console.log("Game Over!")
                let WellDone__2 = document.querySelector('.WellDone__2')

                WellDone__2.style.display = 'block'

                InteractonPad__btns = document.querySelectorAll('.buttons__2')
                
                for( i=0; i<InteractonPad__btns.length; i++){
                    InteractonPad__btns[i].disabled = true
                }

            }
            current__bullet__position = 0
            return
        }

        if( current__bullet__position === 0 || current__bullet__position === 1 || current__bullet__position === 2 ){
            
            clouds__grid__squares[current__bullet__position].classList.add('bullet__bg')
            
            setTimeout(function() {
                
                clouds__grid__squares[current__bullet__position].classList.remove('bullet__bg')
                
                current__bullet__position = 0

            }, 30);
            
            return
        }

        if( shoot__count != 11){
            clouds__grid__squares[current__bullet__position].classList.add('bullet__bg')
        }
        
        let shoot_id_1 = setTimeout( Shoot, 30 )
        
    }
    else{
        Finish__()
    }

}


function Finish__() {

    clouds__grid__squares[current__bullet__position].classList.remove('bullet__bg')

    console.log("Game Over!")
    let GameOver__2 = document.querySelector('.GameOver__2')

    GameOver__2.style.display = 'block'

    InteractonPad__btns = document.querySelectorAll('.buttons__2')
    
    for( i=0; i<InteractonPad__btns.length; i++){
        InteractonPad__btns[i].disabled = true
    }
}

// Backend functions for Game 3

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



function Start(){
    
    Time_id_1 = setTimeout(function() {
        

        if( Time === 0 ){
            // console.log(Time)
            
            Timer.innerHTML = `${10 - Time}`
            
            for(i=0;i<42;i++){

                // console.log(buttons___squares[i])

                if(random_places.includes(i)){
                    // console.log(buttons___squares[i].disabled)
                    buttons___squares[i].disabled = false
                }
            }

        }

        Time++
        // console.log(Time)
        Timer.innerHTML = `${time_limit - Time}`

        if( Time < time_limit ){
            setTimeout(Start, 1000)
        }
        else{

            for(i=0;i<42;i++){

                // console.log(buttons___squares[i])

                if(random_places.includes(i)){
                    // console.log(buttons___squares[i].disabled)
                    buttons___squares[i].disabled = true
                }
            }

            Start_btn = document.querySelector('.Start_btn')
            Start_btn.disabled = true

            // bubbles___grid.style.display = 'none'
            
            if( co2_hit === co2_count ){
                CheckLogic()
            }
            else{
                Time = 0
                // console.log('Game Over!')
                
                bubbles___grid.style.display = 'none'
                let GameOver__2 = document.createElement('div')
                GameOver__2.classList.add('GameOver__2')
                GameOver__2.style.display = 'block'
                Phone.appendChild(GameOver__2)
            }
        }
    }, 1000);
}



function HappyPlant(){
    Time = 0
    // console.log('Winner!')
    bubbles___grid.style.display = 'none'
    Phone.classList.remove('Phone___bg___3')
    Phone.classList.add('Phone___bg___3__happy')
}