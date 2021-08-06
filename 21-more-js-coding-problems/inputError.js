//21-4 Handle unexpected function input parameter error
function add(num1, num2) {
    const sum = num1 + num2;
    return sum;
}

const firstTotal = add(73, 95);
console.log('firstTotal = ', firstTotal);

const secondTotal = add(284, 783);
console.log('secondTotal = ', secondTotal);

//
function multiply(num3, num4) {
    const result = num3 * num4;
    return result;
}
const firstResult = multiply(34, 24);
console.log('firstResult = ', firstResult);
