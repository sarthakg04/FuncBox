// variables

var number  = Math.floor((Math.random() * 9)+2)

//Intializing the multiple where factor is in range number*(1 to 10)
var multiple = ( number * Math.floor((Math.random() * 10)+1))

//Initializing the other two numbers which are not multiples of the number variable
var waste_number_1 = ( number * Math.floor((Math.random() * 10)+1)) - 1
var waste_number_2 = ( number * Math.floor((Math.random() * 10)+1)) + 1
while(true){
    if( waste_number_2 === waste_number_1 ){
        waste_number_2 = ( number * Math.floor((Math.random() * 10)+1)) + 1
    }
    else{
        break
    }
}

var arr = [multiple,waste_number_1,waste_number_2]


//Intializing the arr elements into jump_boxes
var jump_boxes
var ans_box_index = Math.floor((Math.random() * 3))  //Ans consisting index
var number_span

var k=1


// localStorage.setItem("MonkeyMultipler_Game_Score","0")
var Score = 0
// console.log(Score)

//Initializing objects
var monkey_box
var next_button
var GamePad
var score_text
var phone_div
// var score_text = document.querySelector('.score')

// var GamePad = document.querySelector('.GamePad')

//Frontend Functions


function createScore(){
    //Phone div
    phone_div = document.createElement('div')
    phone_div.classList.add('Phone')
    document.body.appendChild(phone_div)
    //GamePad div
    GamePad = document.createElement('div')
    GamePad.classList.add('GamePad')
    phone_div.appendChild(GamePad)
    score_text = document.createElement('div')
    score_text.classList.add('score')
    score_text.innerHTML = 'Score: ' + `${Score}`
    GamePad.appendChild(score_text)
}


function generateRandomNumber(){
    var multiplt_info = document.createElement('div')
    multiplt_info.classList.add('multiplt_info')
    var span_rndom_number = document.createElement('span') 
    //Initializing the random number
    span_rndom_number.innerHTML = number
    span_rndom_number.classList.add('rand_num')
    multiplt_info.innerHTML = `Jump on the multiples of `
    multiplt_info.appendChild(span_rndom_number)
    GamePad.appendChild(multiplt_info)
}

function createJumpPlaces(){

    jump_boxes_div = document.createElement('div')
    jump_boxes_div.classList.add('jump_boxes')
    jump_boxes_div.innerHTML = `
    <button onclick="Jump_on_1()" class="jump_box jump_box_1"></button>
    <button onclick="Jump_on_2()" class="jump_box jump_box_2"></button>
    <button onclick="Jump_on_3()" class="jump_box jump_box_3"></button>
    `
    GamePad.appendChild(jump_boxes_div)
    jump_boxes = Array.from(document.querySelectorAll('.jump_boxes button'))
    
}

function createMonkey(){
    
    monkey_box = document.createElement('div')
    monkey_box.classList.add('monkey_box')
    //Initializing Monkey position
    monkey_box.classList.add('monkey')
    GamePad.appendChild(monkey_box)

}


function generateMultiples(){
    var number_span = document.createElement('span')
    number_span.innerHTML = `${multiple}`
    number_span.classList.add('span_number')
    jump_boxes[ans_box_index].appendChild(number_span)
    //Initializing the waste numbers into jump_boxes
    for(i=0;i<3;i++){
        if( i == ans_box_index ){
            continue
        }
        var number_span = document.createElement('span')   
        number_span.innerHTML = `${arr[k]}`
        number_span.classList.add('span_number')
        jump_boxes[i].appendChild(number_span)
        k++
    }
}


function createInteractionPad(){
    GamePad.innerHTML += `
    <button onclick="Next()" class="next_button" disabled>Next</button>
    `
    phone_div.innerHTML +=`
    <button onclick="Restart()" class="restart">Restart</button>
    `
    next_button = document.querySelector('.next_button')

}

function createGameOver(){
    
    var Game_Over = document.createElement('div')
    Game_Over.classList.add('Game_Over')
    var GamePad = document.querySelector('.GamePad')
    GamePad.appendChild(Game_Over)
    // console.log(GamePad)
}
//Backend Functions

//Jump functions
function Jump_on_1(){
    next_button.disabled = false
    
    var monkey_position = document.querySelector('.monkey')
    monkey_position.classList.remove('monkey')
    // console.log(jump_boxes[0])
    
    var jump_box_1 = document.querySelector('.jump_box_1')
    jump_box_1.classList.add('monkey')

    for(i=0;i<3;i++){
        jump_boxes[i].disabled = true
    }
    if(ans_box_index != 0){
        next_button.disabled = true
        var Game_Over = document.querySelector('.Game_Over')
        Game_Over.style.display = 'block'
        var score_set = document.querySelector('.score')
        score_set.innerHTML = 'Game Over, Score: ' + `${Score}`
    }
    else{
        Score++
        var score_set = document.querySelector('.score')
        score_set.innerHTML = 'Score: ' + `${Score}`
        // localStorage.setItem("MonkeyMultipler_Game_Score", Score);
    }
}
function Jump_on_2(){
    next_button.disabled = false
    var monkey_position = document.querySelector('.monkey')
    monkey_position.classList.remove('monkey')
    // console.log(jump_boxes[0])
    
    var jump_box_2 = document.querySelector('.jump_box_2')
    jump_box_2.classList.add('monkey')

    for(i=0;i<3;i++){
        jump_boxes[i].disabled = true
    }
    if(ans_box_index != 1){
        next_button.disabled = true
        var Game_Over = document.querySelector('.Game_Over')
        Game_Over.style.display = 'block'
        var score_set = document.querySelector('.score')
        score_set.innerHTML = 'Game Over, Score: ' + `${Score}`

    }
    else{
        Score++
        var score_set = document.querySelector('.score')
        score_set.innerHTML = 'Score: ' + `${Score}`
        // localStorage.setItem("MonkeyMultipler_Game_Score", Score);
    }
}

function Jump_on_3(){
    next_button.disabled = false
    // console.log(ans_box_index)
    var monkey_position = document.querySelector('.monkey')
    monkey_position.classList.remove('monkey')
    // console.log(jump_boxes[0])
    
    var jump_box_3 = document.querySelector('.jump_box_3')
    jump_box_3.classList.add('monkey')
    for(i=0;i<3;i++){
        jump_boxes[i].disabled = true
    }
    if(ans_box_index != 2){
        next_button.disabled = true
        var Game_Over = document.querySelector('.Game_Over')
        Game_Over.style.display = 'block'
        var score_set = document.querySelector('.score')
        score_set.innerHTML = 'Game Over, Score: ' + `${Score}`
    }else{
        Score++
        var score_set = document.querySelector('.score')
        score_set.innerHTML = 'Score: ' + `${Score}`
        // localStorage.setItem("MonkeyMultipler_Game_Score", Score);
    }
}

function Next(){
    
    // localStorage.setItem("MonkeyMultipler_Game_Score", Score);
    window.location.reload()
}

function Restart(){
    Score = 0
    // localStorage.setItem("MonkeyMultipler_Game_Score", Score);
    window.location.reload()
}