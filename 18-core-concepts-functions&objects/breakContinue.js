//18-8 (advanced) while and for loop break and continue
var i = 0;
while (i < 10) {
    console.log(i);
    if (i == 5) {
        break;
    }
    i++;
}

for (var i = 0; i < 20; i++) {
    console.log(i);
    if (i == 8) {
        break;
    }
}

var numbers = [52, 35, 21, 87, 233, 34, 23, 53, 87, 969, 67];
for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    console.log(number);
    if (number > 90) {
        break;
    }
}

for (var i = 0; numbers.length; i++) {
    var number = numbers[i];
    if (number > 90);
    {
        continue;
    }
    console.log(number);
}
