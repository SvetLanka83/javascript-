let arr = [18,-2,'cat','106',true,false,{name:'vasya'},[123],undefined,null,NaN];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);

let book1={title: 'A',pageCount: 100,genre: 'AA'};
let book2={title: 'B',pageCount: 200,genre: 'BB'};
let book3={title: 'C',pageCount: 300,genre: 'CC'};
console.log(book1);
console.log(book2);
console.log(book3);

let book4={title: 'qwe', pageCount: 1500, genre: 'geag', authors:[
        {name: 'olga',age: '25'},
        {name: 'petya',age: '38'}]
};
console.log(book4);
let book5={title: 'uyf', pageCount: 1000, genre: 'td', authors:[
        {name: 'irina',age: '22'},
        {name: 'oleg',age: '40'}]
};
console.log(book5);
let book6={title: 'dzjh', pageCount: 1500, genre: 'fsht', authors:[
        {name: 'vitya',age: '35'},
        {name: 'vova',age: '28'}]
};
console.log(book6);

let users=[
    {name: 'kfkuy', username: 'jhfku', password: '5464'},
    {name: 'yjfku', username: 'jyfku', password: '546489'},
    {name: 'ktudku', username: 'tydy', password: '149'},
    {name: 'ytly', username: 'luigki', password: '148489'},
    {name: 'djy', username: 'kyfkuy', password: '54644'},
    {name: 'dzht', username: 'kyfku', password: '164987'},
    {name: 'tfju', username: 'jmfu', password: '5486'},
    {name: 'tdjy', username: 'fjtyuf', password: '548'},
    {name: 'uuktdj', username: 'jytdy', password: '1498'},
    {name: 'fuj', username: 'tjfy', password: '51949'}
]
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);

let temp=[
    {day: 'Monday',morningTemp:15,dayTemp: 20, nightTemp:17},
    {day: 'Tuesday',morningTemp:16,dayTemp: 22, nightTemp:17},
    {day: 'Wednesday',morningTemp:15,dayTemp: 21, nightTemp:17},
    {day: 'Thursday',morningTemp:15,dayTemp: 20, nightTemp:16},
    {day: 'Friday',morningTemp:14,dayTemp: 19, nightTemp:16},
    {day: 'Saturday',morningTemp:15,dayTemp: 20, nightTemp:17},
    {day: 'Sunday',morningTemp:16,dayTemp: 21, nightTemp:17},
]
console.log(temp);

let x= +prompt('enter number 1 0 -3');
if (x!==0){
    console.log('right');
}else {
    console.log('wrong');
}


let time= 36;
if (time >= 0 && time < 15){
    console.log('1');
} else if (time >= 15 && time < 30){
    console.log('2');
} else if (time >= 30 && time < 45){
    console.log('3');
}else if (time >= 45 && time < 60){
    console.log('4');
}


let day = 19;
if (day >= 1 && day <= 10){
    console.log('1');
} else if (day > 10 && day <= 20){
    console.log('2');
} else if (day > 20 && day <= 31){
    console.log('3');
}

let dayNumber = prompt("Введи номер дня тижня (1-7):");

switch (dayNumber) {
    case "1":
        console.log("Monday");
        console.log("Monday");
        console.log("Monday");
        break;
    case "2":
        console.log("Tuesday");
        console.log("Tuesday");
        console.log("Tuesday");
        break;
    case "3":
        console.log("Wednesday");
        console.log("Wednesday");
        console.log("Wednesday");
        break;
    case "4":
        console.log("Thursday");
        console.log("Thursday");
        console.log("Thursday");
        break;
    case "5":
        console.log("Friday");
        console.log("Friday");
        console.log("Friday");
        break;
    case "6":
        console.log("Saturday");
        console.log("Saturday");
        console.log("Saturday");
        break;
    case "7":
        console.log("Sunday");
        console.log("Sunday");
        console.log("Sunday");
        break;
    default:
        console.log("Неправильний номер дня.");
}

let number = prompt("Введи число");
let a = 2;
let b = 7;
if (a > b) {
    console.log(a);}
else if (a < b) {
    console.log(b);
}else if (a === b) {
    console.log('===');
}

let jnum= prompt("Введіть 0");
let j = 0;
if (!j) {
    j = "default";
}
console.log(j);


let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log('Супер');
}

if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log('Супер');
}

if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log('Супер');
}

if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log('Супер');
}

if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log('Супер');
}

if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log('Супер');
}
