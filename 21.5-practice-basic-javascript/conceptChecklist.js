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

// 6. if-else

//7. while loop to display 7 to 19 all numbers. only display odd numbers including 7 to 19
let num = 7;

while (num <= 19) {
    console.log(num);
    num = num + 2;
}

// 8. declare an array. number of elements. update or change 4th position element. add or remove elements. check whether a specific value exists in the array

var marks = [67, 89, 95, 46, 93, 65, 39, 60, 84, 54];
console.log('number of elements ', marks.length);
var marks2 = marks.slice(4, 4);
console.log(marks2);

// 9. use any for loop to display every elements of an array
var items = ['book', 'computer', 'phone', 'light', 'bottle', 'chair'];

for (var i = 0; i < items.length; i++) {
    var item = items[i];
    console.log(item);
}

// 10. you have an array of numbers. display only the numbers bigger than 80

var prices = [86, 76, 36, 56, 68, 89, 102, 80, 85, 43, 64];

function biggerElements(prices) {
    return prices.filter((biggerElements) => biggerElements > 80);
}

console.log('bigger Elements = ', biggerElements(prices));

// 11. write a function that takes three numbers and returns the multiplication of the three numbers
function multiply(num1, num2, num3) {
    const result = num1 * num2 * num3;
    return result;
}
const multiplyResult = multiply(34, 24, 53);
console.log('multiply Result = ', multiplyResult);

// 12. declare an object and change any property of that object.
var book = {
    page: 292,
    price: 600,
    bookName: 'Treasure Island',
    authorName: 'Robert Louis Stevenson',
    genre: 'Adventure fiction',
};

book.price = 300;
console.log(book);
