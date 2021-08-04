//19-2 Unit Convert Inch to Feet, miles to kilometer
var dadiInches = 144;
var feet = dadiInches / 12;
console.log(feet);

var naniInches = 156;
var feet = naniInches / 12;
console.log(feet);

var nanaInches = 168;
var feet = nanaInches / 12;
console.log(feet);

//function
function inchToFeet(inches) {
    var feet = inches / 12;
    return feet;
}

var myinches = 132;
var feet = inchToFeet(myinches);
console.log('myInches in feet', feet);

//mile to kilometer
function mileToKilometer(miles) {
    var km = miles * 1.60934;
    return km;
}
var marathon = mileToKilometer(26.2);
console.log('marathon in km: ', marathon);
