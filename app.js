var initialPrice = document.querySelector('#initial-price-input');
var quantity = document.querySelector('#quantity-input');
var currentPrice = document.querySelector('#current-price-input');
var checkBtn = document.querySelector('#check-btn')
var outputMsg = document.querySelector('#output-msg')


function submitHandler() {

    var ip = Number(initialPrice.value)
    var qty = Number(quantity.value)
    var cp = Number(currentPrice.value)

    //if any field is empty
    if (initialPrice.value === "" || quantity.value === "" || currentPrice.value === "") {
        outputMsg.style.color = "gray"

        outputMsg.innerText = `Enter all the fields!!!!!!`
    } else {
        calculateProfitAndLoss(ip, qty, cp)
    }
}

function calculateProfitAndLoss(initial, quantity, current) {
    var profit = (current - initial) * quantity
    var profitPercentage = (profit / (initial * quantity)) * 100;

    var loss = (initial - current) * quantity
    var lossPercentage = (loss / (initial * quantity)) * 100;

    showMsg(current, initial, profit, loss, profitPercentage, lossPercentage)
}

function showMsg(current, initial, profit, loss, profitPercentage, lossPercentage) {

    if (current > initial) {
        //profit
        outputMsg.style.color = "green"

        outputMsg.innerText = `Yay!! Your Profit is ${profit} and profit Percentage is ${profitPercentage.toFixed(1)}%`

    } else if (initial > current) {
        //loss
        outputMsg.style.color = "red"
        outputMsg.innerText = `Oops!! Your Loss is ${loss} and loss Percentage is ${lossPercentage.toFixed(1)}%`

    } else {
        outputMsg.style.color = "black"

        outputMsg.innerText = `No Profit No Loss you are fine`
    }
}


checkBtn.addEventListener("click", submitHandler)