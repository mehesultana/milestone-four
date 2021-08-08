//22-1 Basic JavaScript Problem Solving assignment

// 1. conversation (seerToMon)
function seerToMon(seer) {
    if (typeof seer !== 'number' || seer === 'undefined' || seer === 'null') {
        return 'enter a valid number';
    } else if (seer < 0) {
        return 'seer value can not be negative';
    }

    const mon = seer / 40;
    return mon;
}

const mon = seerToMon(160);
console.log('seer to mon = ', mon);

//2.calculation
function totalSales(shirtSales, pantSales, shoeSales) {
    const perShirtPrice = 100;
    const perPantPrice = 200;
    const perShoePrice = 500;
    //sell calculation
    const totalShirtSales = shirtSales * perShirtPrice;
    const totalPantSales = pantSales * perPantPrice;
    const totalShoeSales = shoeSales * perShoePrice;

    //total sales
    const total = totalShirtSales + totalPantSales + totalShoeSales;
    return total;
}

const salesCalculation = totalSales(7, 5, 13);
console.log('sales Calculation = ', salesCalculation);
