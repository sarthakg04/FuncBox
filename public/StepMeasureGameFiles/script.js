// let units = ['mm', 'cm', 'dm', 'm', 'dam', 'hm', 'km'] // Donot alter this array
// let animal = 'dog' or 'cat'
// fillBackground('hills')
// createInputBox()
// createSubmitButton()
// setDog() or setCat()
// for(i=0;i<units.length;i++){
//     createStep()
// }
// showValue()
// createInteractionPad()
// createRefreshButton()
// function StepUp(){
//     value_entered /= 10
//     return value_entered
// }
// function StepDown(){
//     value_entered *= 10
//     return value_entered
// }


var character


let Phone = document.createElement('div')
let GamePad = document.createElement('div')
let Input_box = document.createElement('div')
let submit_btn = document.createElement('button')
let step_div = document.createElement('div')
let Value = document.createElement('div')
let InteractionPad = document.createElement('div')
let cat_bg = document.createElement('div')





function fillBackground(bg_name){
    bg_name = bg_name || 'none'
    Phone.classList.add('Phone')
    Phone.classList.add(bg_name)
    GamePad.classList.add('GamePad')
    document.body.appendChild(Phone)
    Phone.appendChild(GamePad)
    character = animal + '_bg'
}

function createInputBox(){
    Input_box.classList.add('Input_box')
    Input_box.innerHTML +=`
    <h3 class="enter_number">Enter a number</h3>
    <input id="input_number" min="0" value="00.00" class="input_number" type="number" step="0.01">
    `


    let temp_2 = document.createElement('select')
    temp_2.id = 'units_input'

    Input_box.appendChild(temp_2)

    for(i=0;i<units.length;i++){
        temp_2.innerHTML += `<option value="${units[i]}">${units[i]}</option>`
    }

    
    
    GamePad.appendChild(Input_box)
}

function createSubmitButton(){

    GamePad.innerHTML +=`
    <button onclick="submit()" class="submit_btn">Submit</button>
    `

    submit_btn = document.querySelector('.submit_btn')

    step_div.classList.add('step_div')
    
    GamePad.appendChild(step_div)

}



function setCat(){
    cat_bg.classList.add('cat_bg')
    GamePad.appendChild(cat_bg)
}

function setDog(){
    cat_bg.classList.add('dog_bg')
    GamePad.appendChild(cat_bg)
}

function showValue(){
    Value.classList.add('Value')
    Value.innerHTML = '00.00'

    GamePad.appendChild(Value)
}

function createInteractionPad(){
    InteractionPad.classList.add('InteractionPad')
    InteractionPad.innerHTML +=`
    <button onclick="Up()" class="up"></button><br>
    <button onclick="Down()" class="down"></button>
    `
    Phone.appendChild(InteractionPad)
}

function createRefreshButton(){
    Phone.innerHTML +=`
    <div onclick="window.location.reload()" class="restart">Reset <img class="refresh_image" alt="restart"></div>
    `
}


// Backen Functions

let unit

let current_cat_top = 310
let current_cat_left = 330

let measure_in_mm = 0

let step = 0

let temp = 1


function createStep(){

    let new_step = document.createElement('div')
    new_step.classList.add('step')
    new_step.classList.add(`step_${i}`)
    new_step.innerHTML = units[i]
    
    new_step.style.left = (i*55)+'px'
    new_step.style.top = (120 - (i*20))+'px'

    step_div.appendChild(new_step)

}



function Up(){
    let cat = document.querySelector('.'+character)
    
    // console.log(units.length, (( 7 - units.length)*20)+310)
    // 190

    if( current_cat_top > ((7-(units.length))*20)+190 ){
        current_cat_top -= 20
        current_cat_left -= 110
        cat.style.top = current_cat_top + 'px'
        // console.log(cat_bg.style.top)
        cat.style.right = current_cat_left + 'px'
        // console.log(cat_bg.style.right)
        cat.style.transform = 'scaleX(1)'
        
        let value_div = document.querySelector('.Value')

        
        let temp = StepUp()
        // console.log(temp.countDecimals())

        if(temp.countDecimals() >= 5){
            value_div.innerHTML = StepUp().toFixed(15)
        }
        else{
            value_div.innerHTML = StepUp()
        }
        
    }
    // step = Math.abs(( current_cat_top - 310 ) / 20 )


    // for( i=0;i<step;i++){
    //     temp = temp * 10
    // }


    // console.log(measure_in_mm,temp)
    // let step_value = measure_in_mm/temp

    

    // temp = 1

}



function Down(){
    
    let cat = document.querySelector('.'+character)
    
    // console.log(cat_bg)
    // 310
    if( current_cat_top < 310 ){
        current_cat_top += 20
        current_cat_left += 110
        cat.style.top = current_cat_top + 'px'
        cat.style.right = current_cat_left + 'px'
        cat.style.transform = 'scaleX(-1)'

        let value_div = document.querySelector('.Value')

        let temp = StepDown()
        // console.log(temp.countDecimals())

        if(temp.countDecimals() >= 5){
            value_div.innerHTML = StepDown().toFixed(15)
        }
        else{
            value_div.innerHTML = StepDown()
        }
        

    }
    // step = Math.abs(( current_cat_top - 310 ) / 20 )

    
    // for( i=0;i<step;i++){
    //     temp = temp * 10
    // }

    // let value_div = document.querySelector('.Value')

    // // console.log(measure_in_mm,temp)
    // value_div.innerHTML = measure_in_mm/temp
    
    // temp = 1
}


Number.prototype.countDecimals = function () {

    if (Math.floor(this.valueOf()) === this.valueOf()) return 0;

    var str = this.toString();
    if (str.indexOf(".") !== -1 && str.indexOf("-") !== -1) {
        return str.split("-")[1] || 0;
    } else if (str.indexOf(".") !== -1) {
        return str.split(".")[1].length || 0;
    }
    return str.split("-")[1] || 0;
}

function submit(){
    
    var e = document.getElementById("units_input");
    unit = e.value;

    e = document.getElementById("input_number");

    value_entered = e.value

    // console.log(value_entered)

    Convert()

}

let value_entered


function Convert(){
    let value_div = document.querySelector('.Value')
    let cat = document.querySelector('.'+character)
    switch(unit) {
        case 'mm':
            current_cat_top = 310
            current_cat_left = 330
            cat.style.top = current_cat_top + 'px'
            cat.style.right = current_cat_left + 'px'
            measure_in_mm = value_entered;
            value_div.innerHTML = value_entered
            break;
        case 'cm':
            current_cat_top = 290
            current_cat_left = 220
            cat.style.top = current_cat_top + 'px'
            cat.style.right = current_cat_left + 'px'
            measure_in_mm = value_entered * 10;
            value_div.innerHTML = value_entered
            break;
        case 'dm':
            current_cat_top = 270
            current_cat_left = 110
            cat.style.top = current_cat_top + 'px'
            cat.style.right = current_cat_left + 'px'
            measure_in_mm = value_entered * 100;
            value_div.innerHTML = value_entered
            break;
        case 'm':
            current_cat_top = 250
            current_cat_left = 0
            cat.style.top = current_cat_top + 'px'
            cat.style.right = current_cat_left + 'px'
            measure_in_mm = value_entered * 1000;
            value_div.innerHTML = value_entered
            break;
        case 'dam':
            current_cat_top = 230
            current_cat_left = -110
            cat.style.top = current_cat_top + 'px'
            cat.style.right = current_cat_left + 'px'
            measure_in_mm = value_entered * 10000;
            value_div.innerHTML = value_entered
            break;
        case 'hm':
            current_cat_top = 210
            current_cat_left = -220
            cat.style.top = current_cat_top + 'px'
            cat.style.right = current_cat_left + 'px'
            measure_in_mm = value_entered * 100000;
            value_div.innerHTML = value_entered
            break;
        case 'km':
            current_cat_top = 190
            current_cat_left = -330
            cat.style.top = current_cat_top + 'px'
            cat.style.right = current_cat_left + 'px'
            measure_in_mm = value_entered * 1000000;
            value_div.innerHTML = value_entered
            break;
        default:
            // kids wish
    }
}