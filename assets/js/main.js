const card = document.querySelector('#card');
const submit = document.querySelector('#sub');
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
    isFull();
})

inputVal.addEventListener('input', () => {
    card.classList.add('flip');
    cardval.innerHTML = inputVal.value;
    cardval.innerHTML == '' ? cardval.innerHTML = '••/••' : undefined;
    isFull();
})

inputName.addEventListener('input', () => {
    card.classList.add('flip');
    cardname.innerHTML = inputName.value;
    cardname.innerHTML == '' ? cardname.innerHTML = 'Nome no cartão' : undefined;
    isFull();
})

inputCvv.addEventListener('input', () => {
    card.classList.remove('flip');
    cardcvv.innerHTML = inputCvv.value;
    cardcvv.innerHTML == '' ? cardcvv.innerHTML = '•••' : undefined;
    isFull();
})

submit.addEventListener("click", (e) => {
    e.preventDefault()
})

function isFull() {
    if (inputCvv.value.length == 3 && inputNum.value.length == (4*4+3) && inputVal.value.length == 5 && inputName.value) {
        submit.style.display = 'block';
    }
}