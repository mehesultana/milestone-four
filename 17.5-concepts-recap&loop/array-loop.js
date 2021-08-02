// 17_5-5 Recap loop, run a loop for each element of an array

// basic while loop
var i = 1;
while (i <= 7) {
    console.log(i);
    i++;
}
//basic for loop
for (var i = 1; i <= 7; i++) {
    console.log(i);
}

var numbers = [45, 86, 34, 87, 12, 98, 82, 33, 44];
for (var i = 0; i < numbers.length; i++) {
    var element = numbers[i];
    console.log(element);
}

var items = ['bottle', 'mobile', 'charger', 'watch', 'book', 'paper', 'pen'];

for (var i = 0; i < items.length; i++) {
    var item = items[i];
    console.log(item);
}
