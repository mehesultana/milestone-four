// 21_5-2 Simple Problem solving checklist and practice
// 1. conversation (feetToInch)

function feetToInch(feet) {
    if (typeof feet !== 'number' || feet === 'undefined' || feet === 'null') {
        return 'enter a valid number';
    } else if (feet < 0) {
        return 'feet value can not be negative';
    }

    const inch = feet * 12;
    return inch;
}

const inch = feetToInch(-7);
console.log('my feet to inch', inch);

// 2. conversion (centimeterToMeter)

function centimeterToMeter(centimeter) {
    var meter = centimeter / 100;
    return meter;
}

var myMeter = 160;
var meter = centimeterToMeter(myMeter);
console.log('my centimeter to meter', meter);

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
var bestFriend = ['trishna', 'tonu', 'salma', 'nur', 'mehe', 'sultana'];

function smallFriend(friends) {
    var small = friends[0].length;
    var smallest;

    for (var i = 1; i < friends.length; i++) {
        if (friends[i].length < small) {
            small = friends[i].length;
            smallest = friends[i];
        }
    }
    return smallest;
}

var myFriend = smallFriend(bestFriend);
console.log('my friend', myFriend);

//5. will stop the loop if the array has any negative number and returns all the positive number before the negative number
var numbers = [85, 76, 89, 24, 87, 76, -53, 78, 43, -76, 65, -35];
for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    console.log(number);
    if (number < 0) {
        break;
    }
}
