//18-1 Module Introduction and concept Recap

//variable
var favoriteBook = '4 hour work week';

//array
var bookList = ['positioning', 'hooked', 'start with why', 'shoe dog'];
var shoeDogIndex = bookList.indexOf('shoe dog');
bookList[1] = 'Story Brand';

bookList.push('Small Giants');
bookList.pop();

//conditionals
if (bookList[1] == 'hooked') {
    console.log('I am hooked');
} else {
    console.log('I am not hooked');
}

//Loop
// while loop
var i = 0; // loop variable
while (i < 15) {
    console.log(i);
    console.log('looping looping looping');
    i++;
}

//for loop
for (var i = 0; i < 15; i++) {
    console.log(i);
}
