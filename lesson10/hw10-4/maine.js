let savedNumber = parseInt(localStorage.getItem('number'));
let lastUpdate = parseInt(localStorage.getItem('lastUpdate'));
let now = Date.now();

if (isNaN(savedNumber)) {
    savedNumber = 100;
    localStorage.setItem('number', savedNumber);
    localStorage.setItem('lastUpdate', now);
} else if (now - lastUpdate > 10000) {
    savedNumber += 10;
    localStorage.setItem('number', savedNumber);
    localStorage.setItem('lastUpdate', now);
}

document.getElementById('targetNumber').innerText = savedNumber + 'грн';
