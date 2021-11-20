// fillBackground()
// let units = ['mm', 'cm', 'dm', 'm', 'dam', 'hm', 'km']
// createInputBox()
// createSubmitButton()
// setCat()
// for(i=0;i<units.length;i++){
//     createStep()
// }
// showValue()
// createInteractionPad()
// createRefreshButton()


let Phone = document.createElement('div')
let GamePad = document.createElement('div')
let Input_box = document.createElement('div')
let submit_btn = document.createElement('button')
let step_div = document.createElement('div')
let Value = document.createElement('div')
let InteractionPad = document.createElement('div')
let cat_bg = document.createElement('div')


// let units = ['mm', 'cm', 'dm', 'm', 'dam', 'hm', 'km']



function fillBackground(){
    Phone.classList.add('Phone')
    GamePad.classList.add('GamePad')
    document.body.appendChild(Phone)
    Phone.appendChild(GamePad)
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
    submit_btn.classList.add('submit_btn')
    submit_btn.innerHTML = 'Submit'
    submit_btn.onclick = "submit()"
    GamePad.appendChild(submit_btn)

    step_div.classList.add('step_div')
    
    GamePad.appendChild(step_div)

}


function setCat(){
    cat_bg.classList.add('cat_bg')
    GamePad.appendChild(cat_bg)
}

// for(i=0;i<units.length;i++){
//     createStep()
// }



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
    if( current_cat_top > 190 ){
        current_cat_top -= 20
        current_cat_left -= 110
        cat_bg.style.top = current_cat_top + 'px'
        console.log(cat_bg.style.top)
        cat_bg.style.right = current_cat_left + 'px'
        console.log(cat_bg.style.right)
        cat_bg.style.transform = 'scaleX(1)'
        
    }
    step = Math.abs(( current_cat_top - 310 ) / 20 )
    // console.log('up')

    console.log(current_cat_top)

    for( i=0;i<step;i++){
        temp = temp * 10
    }

    // console.log(measure_in_mm,temp)
    Value.innerHTML = measure_in_mm/temp

    console.log(Value)

    temp = 1

}


function Down(){
    if( current_cat_top < 310 ){
        current_cat_top += 20
        current_cat_left += 110
        cat_bg.style.top = current_cat_top + 'px'
        cat_bg.style.right = current_cat_left + 'px'
        cat_bg.style.transform = 'scaleX(-1)'
    }
    step = Math.abs(( current_cat_top - 310 ) / 20 )
    console.log('down')

    
    for( i=0;i<step;i++){
        temp = temp * 10
    }


    Value.innerHTML = measure_in_mm/temp
    
    temp = 1
}

function submit(){
    
    var e = document.getElementById("units_input");
    unit = e.value;
    // console.log(unit)

    switch(unit) {
        case 'mm':
            e = document.getElementById("input_number");
            measure_in_mm = parseInt(e.value);
            // console.log(measure_in_mm)
            break;
        case 'cm':
            e = document.getElementById("input_number");
            measure_in_mm = (e.value)*10;
            // console.log(measure_in_mm)
            break;
        case 'dm':
            e = document.getElementById("input_number");
            measure_in_mm = (e.value)*100;
            // console.log(measure_in_mm)
            break;
        case 'm':
            e = document.getElementById("input_number");
            measure_in_mm = (e.value)*1000;
            // console.log(measure_in_mm)
            break;
        case 'dam':
            e = document.getElementById("input_number");
            measure_in_mm = (e.value)*10000;
            // console.log(measure_in_mm)
            break;
        case 'hm':
            e = document.getElementById("input_number");
            measure_in_mm = (e.value)*100000;
            // console.log(measure_in_mm)
            break;
        case 'km':
            e = document.getElementById("input_number");
            measure_in_mm = (e.value)*1000000;
            // console.log(measure_in_mm)
            break;
        default:
            // code block
    }
}