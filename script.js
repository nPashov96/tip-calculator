const billInput = document.getElementById("bill-size");
const tips = document.querySelectorAll(".btn")
const customTip = document.getElementById("custom");
const peopleInput = document.getElementById("people-count");
const tipPerPerson = document.getElementById("tip-person");
const totalPerson = document.getElementById("total-person");
const resetBtn = document.getElementById("reset-btn");
const zero = document.getElementById('zero');


billInput.addEventListener("input", billInputFunc);
peopleInput.addEventListener("input", peopleInputFunc);
tips.forEach(function (val) {
    val.addEventListener('click', handleClick);
});
resetBtn.addEventListener('click', reset);
customTip.addEventListener('input', customInput);

let billValue = 0.0;
let peopleValue = 1;
let tipValue = 0.15; 

function billInputFunc() {
    billValue = parseFloat(billInput.value);
    calculateTip();
}

function peopleInputFunc() {
    peopleValue = parseFloat(peopleInput.value)
    if (peopleInput.value <= 0 ) {
        zero.style.display = 'block';
        peopleInput.style.outline = "solid 2px #E17457";
    } else {
        zero.style.display = 'none';
        peopleInput.style.outline = "none";
    }
    calculateTip();
};

function handleClick(event) {
    tips.forEach(function (btn) {
        btn.classList.remove("active-tip");
        if (event.target.innerHTML === btn.innerHTML) {
            btn.classList.add("active-tip");
            tipValue = parseFloat(btn.innerHTML) / 100;
        }
    })
    customTip.value = '';
    calculateTip();
}

function customInput() {
    if (customTip.value > 0 ) {
        tipValue = parseFloat(customTip.value) / 100;
    }
    calculateTip();
}


function calculateTip() {
    if (peopleValue >= 1) {
        let tipAmount = (billValue * tipValue) / peopleValue;
        let total = (billValue / peopleValue) + tipAmount;
        tipPerPerson.innerHTML = "$" + tipAmount.toFixed(2);
        totalPerson.innerHTML = "$" + total.toFixed(2);
    } 
};



function reset() {
    billInput.value = '';
    peopleInput.value = '';
    customTip.value = '';
    tipPerPerson.innerHTML = '$0.00';
    totalPerson.innerHTML = '$0.00';
    peopleInput.style.border = 'hidden'
    zero.style.display = 'none'
    peopleInput.style.outline = "none";
}