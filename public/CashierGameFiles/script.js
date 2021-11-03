let Item_1_price = 700
let amount_added = 0
let cash_values = [ 100, 50, 200, 500, 20, 10, 5, 2, 1 ]
let item_number = 0
let items_classnames = [
    'item_bg', 'item_1_bg', 'item_2_bg', 'item_3_bg', 
    'item_4_bg', 'item_5_bg', 'item_6_bg', 'item_7_bg', 
    'item_8_bg', 'item_9_bg', 'item_10_bg', 'item_11_bg', 
    'item_12_bg', 'item_13_bg', 'item_14_bg', 'item_15_bg', 
    'item_16_bg', 'item_17_bg'
]

const item_prices = [ 449, 387, 273, 35, 195, 385, 29, 75, 165, 200, 135, 125, 99, 125, 399, 120, 45, 57 ]



let Phone = document.createElement('div')
let GamePad = document.createElement('div')
let InteractionPad = document.createElement('div')


function fillBackground() {
    Phone.classList.add('Phone')
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
        <button onclick="Next()" class="buttons next">Next</button>
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
    item_div.classList.add('item_bg')

    // setting the price of the first item
    item_price_div = document.querySelector('.price')
    item_price_div.innerHTML = '₹'+item_prices[0]

    // setting the received value
    recieved = generateRandomRecievedCash(item_prices[0])
    recieved_div = document.querySelector('.recieved')
    recieved_div.innerHTML = recieved

}

function generateRandomRecievedCash( item_cost ) {
    return (item_cost + Math.floor(Math.random() * item_cost) + 1)
}


function Next() {
    if( amount_added === ( recieved - item_prices[item_number] )){

        if(item_number === 17 )
        {
            alert('Winner!')
            return
        }
        item_number++
        item_div.className = ''
        item_div.classList.add('item')
        item_div.classList.add(items_classnames[item_number])
        recieved = generateRandomRecievedCash(item_prices[item_number])
        
        item_price_div.innerHTML = '₹'+item_prices[item_number]
        recieved_div.innerHTML = recieved

        amount_added = 0
        amount_div.innerHTML = '₹'+ amount_added

    }
    else{
        alert('Game Over')
        let interaction_btns = document.querySelectorAll('.buttons')
        // console.log(interaction_btns[0])
        for( i=0; i<interaction_btns.length; i++){
            interaction_btns[i].disabled = true
        }
    }
}

function Reset() {
    amount_added = 0
    amount_div.innerHTML = 0
}

function Refresh() {
    location.reload()
}