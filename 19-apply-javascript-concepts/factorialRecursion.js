//19-8 (advanced) Calculate Factorial in a Recursive function

//n! = n * (n-1)!
function factorial(n) {
    if (n == 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

const myFactorial = factorial(5);
console.log(myFactorial);
