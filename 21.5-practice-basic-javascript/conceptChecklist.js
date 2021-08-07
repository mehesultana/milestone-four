//21_5-1 Basic Javascript concept checklist and practice

// 1. write 3 variables (number, string, boolean)
//number
var bookPage = 400;
console.log('bookPage = ', 435);

//string
var bookName = 'Treasure Island';
console.log('book name is', bookName);

//boolean
var isInnocent = true;
console.log(isInnocent);

// 2. 2 variables using (let, const)
const myName = 'Mehe';
console.log(myName);

let number = 35;
console.log(number);

// 3. Simple Math Operations() +, -, *, /, %)
let bookPrice = 530;
let penPrice = 53;
let paperPrice = 245;

let totalPrice = bookPrice + penPrice + paperPrice;
console.log('totalPrice is ', totalPrice);

let priceDifference = bookPrice - paperPrice;
console.log('price difference is ', priceDifference);

let priceMultiplication = bookPrice * penPrice * paperPrice;
console.log('price multiplication = ', priceMultiplication);

let dividing = bookPrice / penPrice;
console.log(dividing);

let remaining = paperPrice % penPrice;
console.log(remaining);

// 4. comparison ()
var myMoney = 50;
var yourMoney = 46;
console.log('myMoney > yourMoney', myMoney > yourMoney);

console.log('myMoney < yourMoney', myMoney < yourMoney);

console.log('myMoney = yourMoney', myMoney == yourMoney);

console.log('myMoney != yourMoney', myMoney != yourMoney);

// 5. two conditions. case-1: fulfill both conditions. case-2: fulfill at least one condition
var hasWifi = true;
var gotPassword = true;

if (hasWifi == true && gotPassword == true) {
    console.log('eibar lafaooo');
} else {
    console.log('muri khaooo!');
}

var wantShopping = true;
var hasMoney = 20000;

if ((wantShopping = true || hasMoney > 25000)) {
    console.log('let`s gooooo');
} else {
    console.log('batasss khaaooo');
}
