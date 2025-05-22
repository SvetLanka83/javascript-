function User (id, name, surname , phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.phone = phone;

}
  const user = new User(1, 'vjfj', 'vjffiufiu', '+54687987864');
  console.log(user);

  let users = [
      new User(2, 'bfxngfx', 'vjlhfkyfuky', '5468787686'),
      new User(1, 'vjfj', 'vjffiufiu', '+54687987864'),
      new User(4, 'gfxshrs', 'dzaeaegt', '+546546546'),
      new User(5, 'zhdzgt', 'ukiyutui', '+54654678'),
      new User(3, 'zgre', 'sgrzgezgd', '+5468798798'),
      new User(6, 'hshtr', 'dfzeare', '+467879795'),
      new User(8, 'dhr', 'aeaqweqre', '+54687987864'),
      new User(9, ',kjgik', 'ffateasht', '+16498798798'),
      new User(7, 'eaetdrh', 'sararea', '+54687987864'),
      new User(10, 'fdyhd', 'ihoyuo', '+54687987864')
  ]
console.log(users);
  const filterUsers = users.filter((user) => user.id %2 === 0);
console.log(filterUsers);
console.log(users.sort((user1, user2) => user1.id - user2.id ));
  

function Client (id, name, surname, email, phone, order) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
}
let clients = [
    new Client(1, 'hghfjh', 'vgfiyfkyf', 'hgchjdsgj@bvh.com', '+478979879', [{title: 'tv', price: 546546}, {title: 'phone', price: 4566}]),
    new Client(2, 'haearf', 'fshts', 'fdfgf@bvh.com', '+47464768', [{title: 'tv', price: 786546}]),
    new Client(3, 'khvfli', 'ugoligli', 'hgch@bvh.com', '+4756468', [{title: 'tv', price: 546546}, {title: 'phone', price: 4566}, {title: 'giutiut', price: 4566}]),
    new Client(4, 'gagte', 'gcjhfj', 'fagr@bvh.com', '+488787', [{title: 'tv', price: 546546}, {title: 'phone', price: 4566}]),
    new Client(5, 'lhg;uog', 'eagre', 'fkyu@bvh.com', '+4511564899', [{title: 'tv', price: 546546}, {title: 'phone', price: 4566}, {title: 'phone', price: 7566}, {title: '68787', price: 566}]),
    new Client(6, 'saga', 'tfjt', 'waqewq@bvh.com', '+468468', [{title: 'tv', price: 546546}, {title: 'phone', price: 4566}]),
    new Client(7, 'jryejy', 'eaegr', 'kjhlku@bvh.com', '+8978797', [{title: 'tv', price: 546546}, {title: 'phone', price: 4566}]),
    new Client(8, 'uyloy', 'aeat', 'jhkj@bvh.com', '+478945646', [{title: 'tv', price: 546546}]),
    new Client(9, 'kljglo', 'dsdshg', 'agea@bvh.com', '+478979879', [{title: 'tv', price: 546546}, {title: 'phone', price: 4566}, {title: 'dtdjhf', price: 41566}]),
    new Client(10, 'hgkj', 'veagrae', 'dahtrs@bvh.com', '+475468', [{title: 'tv', price: 546546}, {title: 'phone', price: 4566}])
];

const sort = clients.sort((a, b) => a.order.length - b.order.length);
console.log(sort);


function Car (mode, producer, year, maxSpeed, engineVolum) {
    this.mode = mode;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineVolum = engineVolum;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    };
    this.info = function () {
        for (const key in this) {
            console.log(key, this[key]);

        }
    };

    this.increaseMaxSpeed = function (speedToAdd) {
    if (speedToAdd > 0) this.maxSpeed = this.maxSpeed + speedToAdd;
    };
    this.changeYear = function (year) {
    if (year > 1815) this.year = year;
    };
    this.addDriver = function (driver) {
    if (driver) this.driver = driver;
    };

};
const car = new Car('hiuh', 'uhiu', 2018, 155, 4);
console.log(car);
car.drive();
car.info();
car.increaseMaxSpeed(100);
car.changeYear(2000);
car.addDriver({});
console.log(car);



class Car1 {
    constructor(mode, producer, year, maxSpeed, engineVolum) {
        this.mode = mode;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineVolum = engineVolum;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    };
    info() {
        for (const key in this) {
            console.log(key, this[key]);

        }
    };

    increaseMaxSpeed(speedToAdd) {
        if (speedToAdd > 0) this.maxSpeed = this.maxSpeed + speedToAdd;
    };
    changeYear(year) {
        if (year > 1815) this.year = year;
    };
    addDriver(driver) {
        if (driver) this.driver = driver;
    }; 
}
const car1 = new Car('hiuh', 'uhiu', 2018, 155, 4);
console.log(car);
car.drive();
car.info();
car.increaseMaxSpeed(100);
car.changeYear(2000);
car.addDriver({});
console.log(car1);


class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}
class Prince {
    constructor(name, age, slipper) {
        this.name = name;
        this.age = age;
        this.slipper = slipper;
    }
}
const cinderellas = [
    new Cinderella('sofy', 18, 34 ),
    new Cinderella('sofy1', 19, 35 ),
    new Cinderella('sofy2', 20, 36 ),
    new Cinderella('sofy3', 21, 37 ),
    new Cinderella('sofy4', 22, 38 ),
    new Cinderella('sofy5', 23, 39 ),
    new Cinderella('sofy6', 24, 40 ),
    new Cinderella('sofy7', 25, 41 ),
    new Cinderella('sofy8', 26, 42 ),
    new Cinderella('sofy9', 27, 43 ),
];
const prince = new Prince('pit', 20, 36);

// for (const cinderella of cinderellas) {
//     if (cinderella.footSize === prince.slipper) {
//          prince.wife = cinderella;
//     }
// }
// console.log(prince.wife);

const cinderellaMain = cinderellas.find(cinderella => cinderella.footSize === prince.slipper );
prince.wife = cinderellaMain;
console.log(cinderellaMain);

Array.prototype.myFilter = function (predicate) {
    const arr = [];
    for (const item of this) {
        if (predicate(item)) {
            arr.push(item);
        }
    }

    return arr;
};

let users1 = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

const result = users1.myFilter((user) => user.status);

console.log(result);


