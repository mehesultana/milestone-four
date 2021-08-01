// 17-8 (Advanced) Multi stage condition and nested conditions
var danishPrice = 50;
var butterBreadPrice = 25;
var toastBiscuitPrice = 10;
var myBudget = 20;
var packedWell = false;

if (danishPrice < myBudget) {
    console.log('Danish kheye danish jaboooooooo');
} else if (butterBreadPrice < myBudget) {
    console.log('butterbon diye cha khaboooo');
} else if (toastBiscuitPrice < myBudget) {
    console.log('toast diye cha khaboooo');
} else {
    console.log('batash diye cha khabo karon amr tk nai');
}

//
if (danishPrice < myBudget) {
    if (packedWell == true) {
        console.log('danish khaboooo');
    } else {
        console.log('nah khabo naaaa');
    }
}
