let square = (aNum, bNum) => aNum * bNum;
    console.log(square(5, 10));


let roundSquare = (radius) => Math.PI * radius * radius;
   console.log(roundSquare (6));


let squareCilinder = (radius, height) => 2 * Math.PI * radius * height;
 console.log(squareCilinder ( 10, 40) );


let foobar = (array) => {
    for (const item of array) {
        console.log(item);
    }
};


let foobarText = (text) => {
    document.write(`<p>${text}</p>`);
}

foobarText('octen'); // Виведе: octen


let foobarList = (text) =>{
    document.write(`
                  <ul>
                    <li>${text}</li>
                    <li>${text}</li>
                    <li>${text}</li>
                  </ul>`)

}
foobarList(`hello octen`);

let foobarPrim = (arrayOfPrimitivs) => {
    document.write(`<ul>`)


    for (const item of arrayOfPrimitivs) {
        document.write(`<li>${item}</li>`)

    }
    document.write(`</ul>`)

}

foobarPrim([165,88,65,'vjjbk',true]);

let foobarusers = (users) =>{
    for (const user of users) {
        document.write(`<div>${user.id} ${user.name} ${user.age}</div>`)

    }
    return users;
}
console.log(foobarusers([
    {id:1, name: 'kokos', age: 45},
    {id:2, name: 'kokos', age: 45},
    {id:3, name: 'kokos', age: 45},
    {id:4, name: 'kokos', age: 45},
    {id:5, name: 'kokos', age: 45}
]));

let arrayMinValue = (numbers) => {
    let min = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        let number = numbers[i];
        if (number < min) {
            min = number;
        }

    }

    return min;
}

console.log(arrayMinValue([5, 54, 687, -45, 54]));

let sum = (arr) =>{
    let basket = 0;
    for (const item of arr){
        basket = basket + item;
    }
    return basket;
}
console.log(sum([1,2,10]));

let swap = (arr, i1, i2) => {
    if (i1 < arr.length && i2 < arr.length) {
        let temp = arr[i1];
        arr[i1] = arr[i2];
        arr[i2] = temp;
        return arr;
    }
    return -Infinity;
}
console.log(swap([11,22,33,44],0,1));

let exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    let chosenCurrency;
    for (const item of currencyValues) {
        if (item.currency === exchangeCurrency)
            chosenCurrency = item;

    }
    if (chosenCurrency) {
        return sumUAH / chosenCurrency.value;
    }
    return -1;
}
console.log(exchange(10000,[{currency:'USD',value:25}, {currency:'EUR',value:42}],'USD'))

