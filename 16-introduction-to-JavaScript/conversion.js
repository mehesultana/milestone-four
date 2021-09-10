// 16-7 (advanced) Integer float parseInt parseFloat type conversion

//string add
var firstName = 'Mehe';
var lastName = 'Sultana';
var fullName = firstName + ' ' + lastName; //' ' => empty string for gap
console.log(fullName);

var first = 'Ariana';
var last = 'Grande';
var name = first + ' ' + last;
console.log(name);

//integer
var book = 3;

//float
var price = 85.98;

var onionPrice = '42.77';
var eggPrice = '41.33';
var onionPriceNumber = parseInt(onionPrice);
console.log(onionPriceNumber);

var eggPriceNumber = parseFloat(eggPrice);
console.log(eggPriceNumber);
