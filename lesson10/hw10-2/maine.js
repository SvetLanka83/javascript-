
const input = document.getElementById('xxx');
const resultDiv = document.getElementById('result');
input.oninput = function () {
    resultDiv.innerText = +this.value * 2.2;

};
let sessionsList = JSON.parse(localStorage.getItem('sessionsList')) || [];
localStorage.setItem('sessionsList', JSON.stringify(sessionsList));
function addToLocalStorage(arrayName, objToAdd) {
    const lsItem = localStorage.getItem(arrayName);
    if (!lsItem) {
        throw new Error('there is no such array');
    }

    const array = JSON.parse(lsItem);
    if (typeof objToAdd === 'object') {
        array.push(objToAdd);
    }
    localStorage.setItem(arrayName, JSON.stringify(array));

}

addToLocalStorage('sessionsList', {});


