// 17-3 Array index, get and set by index, indexOf

// set index
var books = ['hablu', 'gablu', 'bablu', 'alu', 'potol'];
var babluIndex = books.indexOf('bablu');
console.log(babluIndex);

var numbers = [73, 53, 81, 92, 45];
var index = numbers.indexOf(53);
console.log(index);

console.log(numbers);
numbers[1] = 64; //replace
numbers[4] = 35; //replace
console.log(numbers);

//get index
var secondIndex = books[2];
console.log(secondIndex);

var secondIndex = books[4];
console.log(secondIndex);

var secondIndex = books[0];
console.log(secondIndex);

var secondIndex = books[9]; //undefined
console.log(secondIndex);
