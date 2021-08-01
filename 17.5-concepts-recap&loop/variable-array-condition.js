// 17_5-1 Variable array and conditionals revision
var bottleColor = 'yellow';
var waterQuantity = 1;
var isFull = false;

//array
var items = ['bottle', 'mug', 'paper', 'pen'];
items.indexOf('paper');
items.push('watch');
items.push('phone');

items.pop();

//conditionals
if (items.length >= 4) {
    console.log('you have too many stuff on your desk');
} else if (items.length == 4) {
    console.log('you only have one hali items');
} else {
    console.log('wow! you have a clean desk');
}
