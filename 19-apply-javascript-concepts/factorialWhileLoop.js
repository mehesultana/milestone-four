//19-7 Factorial using a while loop or a decrementing loop
// function 1
function getFactorial(number) {
    let factorial = 1;
    let i = 1;
    while (i <= number) {
        factorial = factorial * i;
        console.log('myFactorial', factorial, 'i value', i);
        i++;
    }
    return factorial;
}

const myFactorial = getFactorial(6);
console.log(myFactorial);

//function 2
function getFactorial1(number) {
    let factorial = 1;
    let i = number;
    while (i >= 1) {
        factorial = factorial * i;
        console.log('i =', i, 'factorial = ', factorial);
        i--;
    }
    return factorial;
}

const myFactorial2 = getFactorial1(8);
console.log('factorial2', myFactorial2);

// for loop reverse

function getFactorial2(number) {
    let factorial = 1;
    for (let i = number; i >= 1; i--) {
        factorial = factorial * i;
        console.log('i =', i, 'factorial = ', factorial);
    }
    return factorial;
}

const myFactorial3 = getFactorial2(9);
console.log(myFactorial3);

//
function getFactorial3(number) {
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial = factorial * i;
        console.log('i =', i, 'factorial = ', factorial);
    }
    return factorial;
}

const myFactorial4 = getFactorial3(5);
console.log(myFactorial4);
