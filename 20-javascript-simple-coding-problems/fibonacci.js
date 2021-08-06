//20-6 Create a Fibonacci Series using a for loop

/*
[0, 1, 2, 3, 5, 8, 13, 21, 34, 55]
3rd = 2nd + 1st
4th = 3rd + 2nd
nth = (n-1)th + (n-2)th
ith = (i-1)th + (i-2)th
*/
const fibo = [0, 1];
for (let i = 2; i <= 10; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
}
console.log(fibo);

//20-7 Handle unexpected input using simple return

// function FibonacciSeries(num) {
//     const fibo = [0, 1];
//     for (let i = 2; i <= num; i++) {
//         fibo[i] = fibo[i - 1] + fibo[i - 2];
//     }
//     return fibo;
// }

// const fiboSeries = FibonacciSeries(13);
// console.log(fiboSeries);

//

function fibonacciSeries(num) {
    if (typeof num != 'number') {
        return 'please give a number';
    }
    if (num < 2) {
        return 'please enter a positive number greater than 1'; //for negative(-) value
    }
    const fibo = [0, 1];
    for (let i = 2; i <= num; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
}

const fiboSeries = fibonacciSeries(12);
console.log(fiboSeries);
