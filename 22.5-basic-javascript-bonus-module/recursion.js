//22_5-1 Understand recursion is nothing but a simple for loop
// let sum = 0;
// for (let i = 0; i <= 6; i++) {
//     sum = sum + i;
// }
// console.log(sum);

// let sum = 0;
// for (let i = 6; i >= 1; i--) {
//     sum = sum + i;
// }
// console.log(sum);

function sum(i) {
    if (i === 1) {
        return 1;
    }
    return sum(i - 1) + i;
}
console.log(sum(6));
