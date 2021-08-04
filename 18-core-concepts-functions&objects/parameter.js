//18-3 (advanced) Function parameter, function return
function bringSingara(taka) {
    console.log('singara er jonno taka dise ', taka);
    console.log('mama singara den');
}

bringSingara(100);

//

function bringSingara(taka) {
    console.log('singara er jonno taka dise ', taka);
    console.log('mama singara den');
    var singaraPrice = 10;
    var singaraQuantity = taka / singaraPrice;
    return singaraQuantity;
}
var money = 250;
var singara = bringSingara(money);
console.log('ei nen singara ', singara);
