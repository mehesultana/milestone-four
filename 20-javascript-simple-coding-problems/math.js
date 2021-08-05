//20-1 Module Introduction, Math and Random number
//absolute value of a number
const myNumber = -5;
const output = Math.abs(myNumber);
console.log('output = ', output);

//Returns the smallest integer greater than or equal to its numeric argument.

const myNumber2 = 6.04565;
const output2 = Math.ceil(myNumber2);
console.log('output2 = ', output2);

const myNumber3 = 35.000001;
const output3 = Math.ceil(myNumber3);
console.log('output3 = ', output3);

//Returns the greatest integer less than or equal to its numeric argument.

const myNumber4 = 73.7331;
const output4 = Math.floor(myNumber4);
console.log('output4 = ', output4);

//Returns a supplied numeric expression rounded to the nearest integer.
const myNumber5 = 85.69;
const output5 = Math.round(myNumber5);
console.log('output5 = ', output5);

const myNumber6 = 47.247;
const output6 = Math.round(myNumber6);
console.log('output6 = ', output6);

//Returns a random number between 0 and 1.
const myNumber7 = 25.546;
const output7 = Math.random(myNumber7);
console.log('output7 = ', output7);

//
const output8 = Math.random() * 6;
const rounded = Math.floor(output8);
console.log('output8 = ', rounded);

//for loop
for (let i = 0; i <= 20; i++) {
    const output9 = Math.random();
    const rounded = Math.round(output9);
    console.log('outout9 = ', rounded);
}
