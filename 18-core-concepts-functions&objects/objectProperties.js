//18-6 multiple ways to get and set object property
var computer = {
    price: 34000,
    storage: '256gb',
    color: 'black',
    processor: 'intel i5',
};
console.log(computer);
console.log(computer.price);
console.log(computer.storage);

//
var computerPrice = computer.price;
console.log(computerPrice);

//set a object property value
computer.price = 20000;
console.log(computer);

//different ways to set a value of an object property
var priceProperty = 'price';
computer.price = 22000;
computer['price'] = 23000;
computer[priceProperty] = 19000;

var storageProperty = 'storage';
computer[storageProperty] = '512gb';
computer['storage'] = '1tb';
computer.storage = '5tb';

console.log(computer);
