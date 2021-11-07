// Frontend Functions for testing
// fill()
// createGamePad()
// createDrop()
// createSun()
// generateRays()
// createInteractionPad()


var Phone
var GamePad
var drop_grid
var sun
var rays_list
var temperature
var InteractionPad


// original script var

var current_drop_position = 0

var current_ray1_position = 2
var current_ray2_position = 3
var current_ray3_position = 5
var current_ray4_position = 7


var ray_1_grid
var ray_2_grid
var ray_3_grid
var ray_4_grid

var ray_div

var rays_caught = 0

var temperature

// Frontend Functions

function fill(){
    Phone = document.createElement('div')
    Phone.classList.add('Phone')
    Phone.classList.add('Phone')
    document.body.appendChild(Phone)
}

function createGamePad(){
    GamePad = document.createElement('div')
    GamePad.classList.add('GamePad')
    Phone.appendChild(GamePad)
}

function createDrop(){
    drop_grid = document.createElement('div')
    drop_grid.classList.add('drop_grid')
    GamePad.appendChild(drop_grid)
    drawDropGrid()
}

function createSun(){
    sun = document.createElement('div')
    sun.classList.add('sun')
    GamePad.appendChild(sun)
}

function generateRays(){

    rays_list = document.createElement('div')
    rays_list.classList.add('rays_list')
    rays_list.innerHTML+=`
        <div class="ray_grid ray_1_grid"></div>
        <div class="ray_grid ray_2_grid"></div>
        <div class="ray_grid ray_3_grid"></div>
        <div class="ray_grid ray_4_grid"></div>
    `
    GamePad.appendChild(rays_list)
    rays_grid_fill()

    
    ray_1_MovementId_1 = setTimeout(ray_1_Move,1000)
    ray_2_MovementId_1 = setTimeout(ray_2_Move,1000)
    ray_3_MovementId_1 = setTimeout(ray_3_Move,1000)
    ray_4_MovementId_1 = setTimeout(ray_4_Move,1000)

    temperature = document.createElement('div')
    temperature.classList.add('temperature')
    GamePad.appendChild(temperature)
}

function createInteractionPad(){
    InteractionPad = document.createElement('div')
    InteractionPad.classList.add('InteractionPad')
    InteractionPad.innerHTML+=`
    <button class="top_arrow" onclick="DropUp()"></button>
    <button class="bottom_arrow" onclick="DropDown()"></button>
    <button onclick="window.location.reload()" class='restart_btn'></button>
    `
    Phone.appendChild(InteractionPad)
}

// Backend

function drawDropGrid(){
    // var drop_grid = document.querySelector('.drop_grid')
    for(i=0;i<4;i++){
        drop_grid_div = document.createElement('div')
        drop_grid.appendChild(drop_grid_div)
    }

    drop_grid_squares = Array.from(document.querySelectorAll('.drop_grid div'))
    drop_grid_squares[current_drop_position].classList.add('drop_bg')
}

function rays_grid_fill(){
    // fill ray_1
    ray_1_grid = document.querySelector('.ray_1_grid')
    for(i=0;i<3;i++){
        ray_div = document.createElement('div')
        ray_1_grid.appendChild(ray_div)
    }
    // fill ray_2
    ray_2_grid = document.querySelector('.ray_2_grid')
    for(i=0;i<4;i++){
        ray_div = document.createElement('div')
        ray_2_grid.appendChild(ray_div)
    }
    // fill ray_3
    ray_3_grid = document.querySelector('.ray_3_grid')
    for(i=0;i<6;i++){
        ray_div = document.createElement('div')
        ray_3_grid.appendChild(ray_div)
    }
    // fill ray_4
    ray_4_grid = document.querySelector('.ray_4_grid')
    for(i=0;i<8;i++){
        ray_div = document.createElement('div')
        ray_4_grid.appendChild(ray_div)
    }

    
    ray_1_grid_squares = Array.from(document.querySelectorAll('.ray_1_grid div'))
    ray_2_grid_squares = Array.from(document.querySelectorAll('.ray_2_grid div'))
    ray_3_grid_squares = Array.from(document.querySelectorAll('.ray_3_grid div'))
    ray_4_grid_squares = Array.from(document.querySelectorAll('.ray_4_grid div'))

    ray_1_grid_squares[current_ray1_position].classList.add('ray_bg')
    ray_2_grid_squares[current_ray2_position].classList.add('ray_bg')
    ray_3_grid_squares[current_ray3_position].classList.add('ray_bg')
    ray_4_grid_squares[current_ray4_position].classList.add('ray_bg')
}


// rays movement



function ray_1_Move(){

    ray_1_grid_squares[current_ray1_position].classList.remove('ray_bg')
    if(current_ray1_position>0){
        current_ray1_position = (( current_ray1_position - 1 ) % 3)
    }
    else{
        current_ray1_position = 2
    }
    ray_1_grid_squares[current_ray1_position].classList.add('ray_bg')

    if(current_ray1_position === 0){
        if( current_drop_position === 0 ) {
            rays_caught++
            // temparature = document.querySelector('.temparature')
            checkTemp()
            if(rays_caught === 20){
                return
            }
        }
    }

    ray_1_MovementId_2 = setTimeout(ray_1_Move,1000)
}



function ray_2_Move(){

    ray_2_grid_squares[current_ray2_position].classList.remove('ray_bg')
    if(current_ray2_position>0){
        current_ray2_position = (( current_ray2_position - 1 ) % 4)
    }
    else{
        current_ray2_position = 3
    }
    ray_2_grid_squares[current_ray2_position].classList.add('ray_bg')

    if(current_ray2_position === 0){
        if( current_drop_position === 1 ) {
            rays_caught++
            checkTemp()
            if(rays_caught === 20){
                return
            }
        }
    }

    ray_2_MovementId_2 = setTimeout(ray_2_Move,1000)
}



function ray_3_Move(){

    ray_3_grid_squares[current_ray3_position].classList.remove('ray_bg')
    if(current_ray3_position>0){
        current_ray3_position = (( current_ray3_position - 1 ) % 6)
    }
    else{
        current_ray3_position = 5
    }
    ray_3_grid_squares[current_ray3_position].classList.add('ray_bg')

    if(current_ray3_position === 0){
        if( current_drop_position === 2 ) {
            rays_caught++
            checkTemp()
            if(rays_caught === 20){
                return
            }
        }
    }

    ray_3_MovementId_2 = setTimeout(ray_3_Move,1000)
}



function ray_4_Move(){

    ray_4_grid_squares[current_ray4_position].classList.remove('ray_bg')
    if(current_ray4_position>0){
        current_ray4_position = (( current_ray4_position - 1 ) % 8)
    }
    else{
        current_ray4_position = 7
    }
    ray_4_grid_squares[current_ray4_position].classList.add('ray_bg')
    
    if(current_ray4_position === 0){
        if( current_drop_position === 3 ) {
            rays_caught++
            checkTemp()
            if(rays_caught === 20){
                return
            }
        }
    }

    ray_4_MovementId_2 = setTimeout(ray_4_Move,1000)
}




function checkTemp(){
    temperature = document.querySelector('.temperature')
    
    for(i=2,k=10;i<=20;i=i+2,k=k+10){
        var className = `temp_${k}`
        if(rays_caught === i){
            temperature.classList.add(className)
        }
    }
    if(temperature.classList.contains('temp_100')){
        var sun = document.querySelector('.sun')
        sun.classList.remove('sun')
        sun.classList.add('rain')
        var phone = document.querySelector('.Phone')
        phone.classList.add('Phone_rain_bg')
        var top_btn = document.querySelector('.top_arrow')
        top_btn.disabled = true
        var bottom_btn = document.querySelector('.bottom_arrow')
        bottom_btn.disabled = true
        clearTimeout(ray_1_MovementId_1)
        clearTimeout(ray_1_MovementId_2)
        clearTimeout(ray_2_MovementId_1)
        clearTimeout(ray_2_MovementId_2)
        clearTimeout(ray_3_MovementId_1)
        clearTimeout(ray_3_MovementId_2)
        clearTimeout(ray_4_MovementId_1)
        clearTimeout(ray_4_MovementId_2)
        var rays_list = document.querySelector('.rays_list')
        rays_list.style.display = 'none'
    }
}

// Drop Movement Functions
function DropUp(){
    if(current_drop_position>0){
        drop_grid_squares[current_drop_position].classList.remove('drop_bg')
        current_drop_position--
        drop_grid_squares[current_drop_position].classList.add('drop_bg')
    }
}

function DropDown(){
    if(current_drop_position<3){
        drop_grid_squares[current_drop_position].classList.remove('drop_bg')
        current_drop_position++
        drop_grid_squares[current_drop_position].classList.add('drop_bg')
    }
}