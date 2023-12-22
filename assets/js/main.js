const card = document.querySelector('#card');

const inputNum = document.querySelector('#num');
const inputVal = document.querySelector('#val');
const inputCvv = document.querySelector('#cvv');
const inputName = document.querySelector('#nome');

const cardnum = document.querySelector('#number');
const cardval = document.querySelector('#front > small');
const cardname = document.querySelector('#name');

card.addEventListener('click', () => {
    card.classList.toggle('flip');
})

inputNum.addEventListener('input', () => {
    cardnum.innerHTML = inputNum.value;
})

inputVal.addEventListener('input', () => {
    cardval.innerHTML = inputVal.value;
})

inputName.addEventListener('input', () => {
    cardname.innerHTML = inputName.value;
})