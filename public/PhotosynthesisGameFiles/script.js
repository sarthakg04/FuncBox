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

// Frontend functions

function createBackground1() {
    Phone = document.createElement('div')
    Phone.classList.add('Phone')
    GamePad = document.createElement('div')    
    GamePad.classList.add('GamePad')
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



























// Backend Functions


function ray_1_move(){
    ray_1_grid_squares[ray_1_current_postion].classList.remove('ray_bg')
    if( ray_1_current_postion <= 0 ){
        if( cloud_current_position === 0 ){
            ray_1_current_postion = 4
            ray_1_grid_squares[ray_1_current_postion].classList.add('ray_bg')
        }
        else{
            rays_hit++
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
        ray_2_current_postion = 4
        ray_2_grid_squares[ray_2_current_postion].classList.add('ray_bg')
        rays_hit++
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
        ray_3_current_postion = 4
        ray_3_grid_squares[ray_3_current_postion].classList.add('ray_bg')
        rays_hit++
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
        ray_4_current_postion = 5
        ray_4_grid_squares[ray_4_current_postion].classList.add('ray_bg')
        rays_hit++
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
        console.log('1')
        clearTimeout(ray_1_MovementId_2)
        console.log('2')
        clearTimeout(ray_2_MovementId_1)
        clearTimeout(ray_2_MovementId_2)
        clearTimeout(ray_3_MovementId_1)
        clearTimeout(ray_3_MovementId_2)
        clearTimeout(ray_4_MovementId_1)
        clearTimeout(ray_4_MovementId_2)
        let rays_grid = document.querySelector('.rays_grid')
        rays_grid.style.display = 'none'
        plant_div.classList.remove('normal_plant')
        plant_div.classList.add('happy_plant')
    }
}