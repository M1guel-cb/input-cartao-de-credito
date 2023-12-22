const card = document.querySelector('#card');
const bandeira = document.querySelectorAll('.bandeira');

const inputNum = document.querySelector('#num');
const inputVal = document.querySelector('#val');
const inputCvv = document.querySelector('#cvv');
const inputName = document.querySelector('#nome');

const cardnum = document.querySelector('#number');
const cardval = document.querySelector('#front > small');
const cardname = document.querySelector('#name');
const cardcvv = document.querySelector('#back p');

card.addEventListener('click', () => {
    card.classList.toggle('flip');
})

inputNum.addEventListener('input', () => {
    card.classList.add('flip');
    cardnum.innerHTML = inputNum.value;
    cardnum.innerHTML == '' ? cardnum.innerHTML = '•••• •••• •••• ••••' : undefined;
    if (inputNum.value[0] == 4) {
        bandeira.forEach((e) => {
            e.src = 'assets/images/visa.png'
        }) 
    } else {
        bandeira.forEach((e) => {
            e.src = 'assets/images/mastercard.png'
        }) 
    }
})

inputVal.addEventListener('input', () => {
    card.classList.add('flip');
    cardval.innerHTML = inputVal.value;
    cardval.innerHTML == '' ? cardval.innerHTML = '••/••' : undefined;
})

inputName.addEventListener('input', () => {
    card.classList.add('flip');
    cardname.innerHTML = inputName.value;
    cardname.innerHTML == '' ? cardname.innerHTML = 'Nome no cartão' : undefined;
})

inputCvv.addEventListener('input', () => {
    card.classList.remove('flip');
    cardcvv.innerHTML = inputCvv.value;
    cardcvv.innerHTML == '' ? cardcvv.innerHTML = '•••' : undefined;
})