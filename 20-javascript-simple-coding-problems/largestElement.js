//20-5 Find the largest element of an array
function largestElement(numbers) {
    let largest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element > largest) {
            largest = element;
        }
    }
    return largest;
}

const ages = [87, 34, 53, 24, 95, 74, 36, 67];
const oldest = largestElement(ages);
console.log('oldest', oldest);

//
const oldest2 = largestElement([-22, -7, -43]);
console.log('oldest2', oldest2);

// Task: find the lowest or smallest element of an array
