//Frontend Function for testing

//  var number  = randomIntLessThan(10)
//  var multiple = number * randomIntLessThan(10)
// createScore()
// generateRandomNumber()
// createJumpPlaces()
// createMonkey()
// generateMultiples()
// createInteractionPad()
// createGameOver()
// createGameWon()

// function CheckLogic(jump_num){
//     if( (NumberIn(jump_num) % number) === 0 ){
//         Score++
//       if(Score === 10){
//         GameWon()
//         return false
//       }
//     }
//     else{
//         GameOver()
//         return false
//     }
// }


// variables


function randomIntLessThan(max) { // min and max included 
  return Math.floor(Math.random() * (max - 1) + 2)
}

//Intializing the multiple where factor is in range number*(1 to 10)


//Initializing the other two numbers which are not multiples of the number variable

let arr

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

    arr = [multiple,waste_number_1,waste_number_2]
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


function GameComplete(){
    if(Score === 3){
        return true
    }
    else{
        return false
    }
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
    number_span.innerHTML = `${multiple}`;
    number_span.classList.add('span_number')
    jump_boxes[ans_box_index].appendChild(number_span)
    //Initializing the waste numbers into jump_boxes
    for(i=0;i<3;i++){
        if( i == ans_box_index ){
            continue
        }
        var number_span = document.createElement('span')
        number_span.innerHTML = `${arr[k]}`;
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
}

function createGameWon(){
    var Won = document.createElement('div')
    Won.classList.add('Won')
    var GamePad = document.querySelector('.GamePad')
    GamePad.appendChild(Won)
}
//Backend Functions

//Jump functions
function Jump_on_1(){
    
    // console.log(jump_boxes[0].childNodes[0].innerHTML)

    next_button.disabled = false

    var monkey_position = document.querySelector('.monkey')
    monkey_position.classList.remove('monkey')
    // console.log(jump_boxes[0])

    var jump_box_1 = document.querySelector('.jump_box_1')
    jump_box_1.classList.add('monkey')
    var jump_box_1 = document.querySelector('.jump_box_1')
    var jump_box_2 = document.querySelector('.jump_box_2')
    var jump_box_3 = document.querySelector('.jump_box_3')

    jump_box_1.disabled = true
    jump_box_3.disabled = true
    jump_box_3.disabled = true
    let temp = CheckLogic(0)
    if(temp){
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
    var jump_box_1 = document.querySelector('.jump_box_1')
    var jump_box_2 = document.querySelector('.jump_box_2')
    var jump_box_3 = document.querySelector('.jump_box_3')

    jump_box_1.disabled = true
    jump_box_3.disabled = true
    jump_box_3.disabled = true
    let temp = CheckLogic(1)
    if(temp){
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
    var jump_box_1 = document.querySelector('.jump_box_1')
    var jump_box_2 = document.querySelector('.jump_box_2')
    var jump_box_3 = document.querySelector('.jump_box_3')

    jump_box_1.disabled = true
    jump_box_3.disabled = true
    jump_box_3.disabled = true
    let temp = CheckLogic(2)
    if(temp){
        var score_set = document.querySelector('.score')
        score_set.innerHTML = 'Score: ' + `${Score}`
        // localStorage.setItem("MonkeyMultipler_Game_Score", Score);
    }
}

function NumberIn(jump_num){
    return jump_boxes[jump_num].childNodes[0].innerHTML
}

function GameOver(){
    next_button.disabled = true
    var Game_Over = document.querySelector('.Game_Over')
    Game_Over.style.display = 'block'
    var score_set = document.querySelector('.score')
    score_set.innerHTML = 'Game Over, Score: ' + `${Score}`
}

function GameWon(){
    next_button.disabled = true    
    var Won = document.querySelector('.Won')
    Won.style.display = 'block'
    Won.innerHTML = 'Hurray !! <br> You scored 10 points,<br> YOU WON! 🥳🥳'
    var score_set = document.querySelector('.score')
    score_set.innerHTML = 'Perfect Score of 10 ' 
}

function Next(){
    

    number  = Math.floor((Math.random() * 9)+2);
    multiple = ( number * Math.floor((Math.random() * 10)+1));
    waste_number_1 = ( number * Math.floor((Math.random() * 10)+1)) - 1;
    waste_number_2 = ( number * Math.floor((Math.random() * 10)+1)) + 1;
    while(true){
        if( waste_number_2 === waste_number_1 ){
            waste_number_2 = ( number * Math.floor((Math.random() * 10)+1)) + 1
        }
        else{
            break
        }
    }
    arr = [multiple,waste_number_1,waste_number_2];
    ans_box_index = Math.floor((Math.random() * 3));
    k=1
    phone_div = document.getElementsByClassName('Phone')[0];
    phone_div.innerHTML = '';
    GamePad = document.createElement('div')
    GamePad.classList.add('GamePad')
    phone_div.appendChild(GamePad)
    score_text = document.createElement('div')
    score_text.classList.add('score')
    score_text.innerHTML = 'Score: ' + `${Score}`
    GamePad.appendChild(score_text);
    generateRandomNumber()
    createJumpPlaces()
    createMonkey()
    generateMultiples()
    createInteractionPad()
    createGameOver()
    createGameWon()
}

function Restart(){
    Score = 0
    // localStorage.setItem("MonkeyMultipler_Game_Score", Score);
    window.location.reload()
}
