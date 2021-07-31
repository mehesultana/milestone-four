// 16-8 Different variable types and use toFixed with parseFloat
//number
var dressPrice = 500;
console.log(typeof dressPrice);

//string
var dressPrice2 = '500';
console.log(typeof dressPrice2);

//boolean
var isSunny = true;
console.log(typeof isSunny);

//undefined
var isRomantic;
console.log(typeof isRomantic);

//object
var today = new Date();
console.log(typeof today);

//special addition
var firstNumber = 0.1;
var secondNumber = 0.2;
var total = firstNumber + secondNumber;
console.log(total);

var firstNumber = 0.1;
var secondNumber = 0.2;
var total = firstNumber + secondNumber;
console.log(total.toFixed(1)); //fixed-point notation

console.log(parseFloat(total.toFixed(1)));
