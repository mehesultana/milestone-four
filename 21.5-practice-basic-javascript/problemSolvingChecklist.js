// 21_5-2 Simple Problem solving checklist and practice
// 1. conversation (feetToInch)
var feetToInch = 14;
var inch = feetToInch * 12;
console.log(inch);

// 2. conversion (centimeterToMeter)
var centimeterToMeter = 160;
var meter = centimeterToMeter / 100;
console.log(meter);

// 3. calculation

function bookCalculator(bookQuantity1, bookQuantity2, bookQuantity3) {
    const perBookPage1 = 100;
    const perBookPage2 = 200;
    const perBookPage3 = 300;
    //wood calculation
    const bookPageQuantity1 = bookQuantity1 * perBookPage1;
    const bookPageQuantity2 = bookQuantity2 * perBookPage2;
    const bookPageQuantity3 = bookQuantity3 * perBookPage3;

    //total
    const totalWood = bookPageQuantity1 + bookPageQuantity2 + bookPageQuantity3;
    return totalWood;
}

const pageCalculation = bookCalculator(5, 7, 10);
console.log('page Calculation = ', pageCalculation);

//4. friends
var bestFriend = ['trishna', 'tonu', 'salma', 'nur', 'sultana'];
var smallest = bestFriend[0];

for (var i = 1; i < bestFriend.length; i++) {
    if (bestFriend[i] < smallest) {
        smallest = bestFriend[i];
    }
}

console.log(smallest);

//5. will stop the loop if the array has any negative number and returns all the positive number before the negative number
var numbers = [85, 76, 89, 24, 87, 76, -53, 78, 43, -76, 65, -35];
for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    console.log(number);
    if (number < 0) {
        break;
    }
}
