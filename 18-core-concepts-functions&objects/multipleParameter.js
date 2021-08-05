// 18-4 (advanced) Multiple parameter add, multiplication, etc
function addTwoNumber(number1, number2) {
    console.log(number1, number2);
    var total = number1 + number2;
    return total;
}
//add
var firstNumber = 21;
var secondNumber = 69;
var result = addTwoNumber(firstNumber, secondNumber);
console.log('result value: ', result);

//multiplication
function multiplyTwoNumbers(num1, num2) {
    var result = num1 * num2;
    return result;
}

var total = multiplyTwoNumbers(5, 100);
console.log('total after multiplication', total);

//difference
function differenceTwoNumbers(num1, num2) {
    var result = num1 - num2;
    return result;
}

var total = differenceTwoNumbers(50, 20);
console.log('difference ', total);

//
