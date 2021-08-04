//19-1 Module Introduction Apply JS and let, const
//variable
var time = '10;15';
var bookPrice = 150;
var isblackColor = false;

//array
var partners = ['sajid', 'mojid', 'nojid', 'lajit'];
var elementCount = partners.length;
var nojidIndex = partners.indexOf('nojid');
partners.push('kajit');
partners.pop('lajit');

//conditional
if (bookPrice < 120) {
    console.log('I will buy this book');
} else {
    console.log('I need discountttttt');
}

//loop
var i = 0;
while (i < 7) {
    console.log(i);
    i++;
}

for (var i = 1; i <= 10; i++) {
    console.log(i);
}

//function
function multiplyTwonumbers(num1, num2) {
    var result = num1 * num2;
    return result;
}

var total = multiplyTwonumbers(5, 100);
console.log('total after multiplication', total);

//let const
//value of the variable could change
let price = 27;
price = 29;
price = 31;
//value of the variable will not change
const name = 'mehe';
