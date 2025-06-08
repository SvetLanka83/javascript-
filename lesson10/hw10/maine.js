const buttons = document.getElementsByTagName('button');
const button = buttons[0];
button.onclick = function () {
   // document.getElementById('text').remove();
    const div = document.getElementById('text');
        div.style.display = 'none';
};

const form = document.getElementById('ageForm');
const result = document.getElementById('result');

form.onsubmit = function (event) {
    event.preventDefault();
    const age = parseInt(document.getElementById('userAge').value);

    if (isNaN(age)) {
        result.innerText = 'Будь ласка, введіть число.';
    } else if (age < 18) {
        result.innerText = 'Вам менше 18 років.';
    } else {
        result.innerText = 'Вік прийнятний.';
    }
};


const someForm = document.forms.someForm;
const target = document.getElementById('target');
someForm.addEventListener('click', (e) => {
    e.preventDefault();
    const nameValue = someForm.name.value;
    const surnameValue = someForm.surname.value;
    const ageValue = someForm.age.value;
    let obj = {nameValue, surnameValue, ageValue};
    console.log(obj);
    target.innerText = obj.nameValue + ' ' + obj.surnameValue + ' ' + obj.ageValue;
});

let currentNumber = +localStorage.getItem('number');
currentNumber += 1;
localStorage.setItem('number', currentNumber);
document.getElementById('targetNumber').innerText = currentNumber;
