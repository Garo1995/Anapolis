
//  CALCULATION


let addNumber = document.getElementsByClassName('amount-credit')[0];
let range = document.getElementsByClassName("getValue")[0];
let firstPayPrice = document.getElementsByClassName("first-pay-price")[0];
let getInput = document.getElementsByClassName("getInput")[0];
let realEstate = document.getElementsByClassName('real-estate-js')[0]
let dateRange = document.getElementsByClassName('date-range')[0]
let dateRangeValue = document.getElementsByClassName('date-range-value')[0]
let monthlyPayment = document.getElementsByClassName('monthly-payment')[0]
let percents = document.getElementsByClassName('percent__number')




let mainValue = 0

range.addEventListener("input", function () {
    realEstate.innerText = numberWithSpaces(range.value)
    getInput.setAttribute('max', range.value)
    updateMainValue()
    mounthPay()
});


getInput.addEventListener('input', function () {
    firstPayPrice.innerText = numberWithSpaces(getInput.value)
    updateMainValue()
    mounthPay()
})
dateRange.addEventListener('input', function () {
    dateRangeValue.innerText = numberWithSpaces(dateRange.value)
    updateMainValue()
    mounthPay()
})



for (let i = 0; i < percents.length; i++) {
    percents[i].addEventListener('click', function () {
        let dataPercent = percents[i].dataset.percent
        firstPayPrice.innerText = numberWithSpaces(+range.value * +dataPercent / 100)
        getInput.value = +range.value * +dataPercent / 100
        updateMainValue()
        mounthPay()
        for (let j = 0; j < percents.length; j++) {
            percents[j].classList.remove('percent__active')
        }
        percents[i].classList.add('percent__active')
    })
}



function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}
function updateMainValue() {
    mainValue = +range.value - +getInput.value
    addNumber.innerText = numberWithSpaces(mainValue) + ' ₽'
}

function mounthPay() {
    let x = mainValue / (+dateRange.value * 12)
    monthlyPayment.innerHTML = numberWithSpaces(x.toFixed(2)) + ' ₽'
}





$('.basic-program-js').on('click', function () {



    $('.interest-rate').removeClass('state-support-block')
    $('.state-support-none').removeClass('state-support-act')
    $('.family-mortgage-none').removeClass('family-mortgage-act')

})

$('.state-support-js').on('click', function () {
    $('.interest-rate').addClass('state-support-block')
    $('.state-support-none').toggleClass('state-support-act')
    $('.family-mortgage-none').removeClass('family-mortgage-act')

})


$('.calculator__href').on('click', function () {
    $('.calculator__href').removeClass('calculator-link__act');
    $(this).addClass('calculator-link__act');
});

$('.family-mortgage-js').on('click', function () {
    $('.interest-rate').addClass('state-support-block')
    $('.state-support-none').removeClass('state-support-act')
    $('.family-mortgage-none').toggleClass('family-mortgage-act')
})

