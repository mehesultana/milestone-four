//20-3 Find max of two values, find max of three values

//Find max of two values
const business = 450;
const minister = 350;
if (business > minister) {
    console.log('Business person er pola is bigger');
} else {
    console.log('minister er pola is bigger');
}

//Find max of three values

const alu = 450;
const potol = 350;
const fulkopi = 600;
if (alu > potol && alu > fulkopi) {
    console.log('alu is bigger');
} else if (potol > alu && potol > fulkopi) {
    console.log('potol is bigger');
} else {
    console.log('fulkopi is bigger');
}

//max
const vaiya = 500;
const ami = 300;
const rakib = 100;
var max = Math.max(vaiya, ami, rakib);
console.log('largest is ', max);

//
function findLargest(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}
const largest = findLargest(578, 367);
console.log('largest is = ', largest);

// Task 1: create a function that takes three numbers as input parameter and returns you the largest number of the three

// Task 2: Write a function to find the smallest of three numbers.
