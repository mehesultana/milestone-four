//20-2 Swap variable, swap without temp, destructing

//Swap variable
var first = 5;
var second = 7;
console.log(first, second);
var temp = first;
first = second;
second = temp;
console.log(first, second);

//destructing
var number1 = 4;
var number2 = 10;
[number1, number2] = [number2, number1];
console.log('number1 = ', number1, 'number2 = ', number2);
