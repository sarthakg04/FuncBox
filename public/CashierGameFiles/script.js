let Item_1_price = 700
let amount_added = 0
let change = 0
let cash_values = [ 100, 50, 200, 500, 20, 10, 5, 2, 1 ]
let item_number = 0
// let items = [
//     'suitcase', 'item_1_bg', 'item_2_bg', 'item_3_bg',
//     'item_4_bg', 'item_5_bg', 'item_6_bg', 'item_7_bg',
//     'item_8_bg', 'item_9_bg', 'item_10_bg', 'item_11_bg',
//     'item_12_bg', 'item_13_bg', 'item_14_bg', 'item_15_bg',
//     'item_16_bg', 'item_17_bg'
// ]

// const item_prices = [ 449, 387, 273, 35, 195, 385, 29, 75, 165, 200, 135, 125, 99, 125, 399, 120, 45, 57 ]



// 


// fillBackground('cash_point')
// let items = [
//     'item_1', 'item_2', 'item_3', 
//     'item_4', 'item_5', 'item_6', 'item_7', 
//     'item_8', 'item_9', 'item_10', 'item_11', 
//     'item_12', 'item_13', 'item_14', 'item_15', 
//     'item_16', 'item_17', 'item_18', 'item_19', 'item_20'
// ]
// let item_prices = [ 449, 387, 273, 35, 195, 385, 29, 75, 165, 200,  135, 125, 99, 125, 399, 120, 45, 57, 88, 100 ]

// let Logic = false
// createGamePad()
// createInteractionPad()
// createItems()
// createGameFinish()
// function CheckLogic(){
//     change = recieved - item_prices[item_number]
//     if( amount_added === change ){
//         Logic = true
//     }
//     else{
//         Logic = false
//     }
//     ImplementLogic()
// }


// 




let Phone = document.createElement('div')
let GamePad = document.createElement('div')
let InteractionPad = document.createElement('div')
let GameOver = document.createElement('div')
let Winner = document.createElement('div')


function fillBackground(bg) {
    Phone.classList.add('Phone')
    Phone.classList.add(bg)
    document.body.appendChild(Phone)
}

function createGamePad() {
    GamePad.classList.add('GamePad')
    GamePad.innerHTML+=`
        <div class="price"></div>
        <div class="item"></div>
        <div class="recieved"></div>
        <div class="money"></div>
        <div class="amount_added">₹0</div>
    `
    Phone.appendChild(GamePad)
}


function createInteractionPad() {
    InteractionPad.classList.add('InteractionPad')
    InteractionPad.innerHTML+=`
        <button onclick="Reset()" class="buttons reset">Reset</button>
        <button onclick="CheckLogic()" class="buttons next">Next</button>
        <button onclick="Refresh()" class="refresh">Refresh</button>
    `
    Phone.appendChild(InteractionPad)
}

let money
let amount_div

let item_div
let item_price_div
let recieved
let recieved_div

function createItems() {
    
    // generating the money btns
    money = document.querySelector('.money')

    amount_div = document.querySelector('.amount_added')

    for( i=0; i<9; i++ ){
        let money_div = document.createElement('button')
        money_div.classList.add('money_div')
        money_div.classList.add(`money_${cash_values[i]}`)
        money_div.onclick = function () {
                let temp = money_div.classList.value
                let temp_value = Number(temp.split(' ')[1].split('_')[1])
                // console.log(temp_value)
                amount_added += temp_value
                amount_div.innerHTML = '₹'+ amount_added
                // console.log(amount_added)
            };
        money.appendChild(money_div)
    }

    // creating first item
    item_div = document.querySelector('.item')
    item_div.classList.add(items[0])

    // setting the price of the first item
    item_price_div = document.querySelector('.price')
    item_price_div.innerHTML = '₹'+item_prices[0]

    // setting the received value
    recieved = generateRandomRecievedCash(item_prices[0])
    recieved_div = document.querySelector('.recieved')
    recieved_div.innerHTML = recieved

}

function createGameFinish() {
    GameOver.classList.add('GameOver')
    Winner.classList.add('Winner')

    
    Phone.appendChild(Winner)
    Phone.appendChild(GameOver)
}

// Backend Functions

function generateRandomRecievedCash( item_cost ) {
    return (item_cost + Math.floor(Math.random() * item_cost) + 1)
}


function ImplementLogic() {
    if( Logic ){

        if(item_number === item_prices.length - 1 )
        {
            Winner.style.display = 'block'
            return
        }
        item_number++
        item_div.className = ''
        item_div.classList.add('item')
        item_div.classList.add(items[item_number])
        recieved = generateRandomRecievedCash(item_prices[item_number])
        
        item_price_div.innerHTML = '₹'+item_prices[item_number]
        recieved_div.innerHTML = recieved

        amount_added = 0
        amount_div.innerHTML = '₹'+ amount_added

    }
    else{
        GameOver.style.display = 'block'
        let interaction_btns = document.querySelectorAll('.buttons')
        // console.log(interaction_btns[0])
        for( i=0; i<interaction_btns.length; i++){
            interaction_btns[i].disabled = true
        }
    }
}

function Reset() {
    amount_added = 0
    amount_div.innerHTML = '₹'+ 0
}

function Refresh() {
    location.reload()
}