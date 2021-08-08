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

//3
function deliveryCost(tshirts) {
    const first100Tshirts = 100;
    const second100PlusTshirts = 80;
    const third200PlusTshirts = 50;

    if (tshirts <= 100) {
        const count = tshirts * first100Tshirts;
        return count;
    } else if (tshirts <= 200) {
        const firstTshirts = 100 * first100Tshirts;
        const restTshirts = tshirts - 100;
        const secondTshirts = restTshirts * second100PlusTshirts;
        const totalTshirts = firstTshirts + secondTshirts;
        return totalTshirts;
    } else {
        const firstTshirts = 100 * first100Tshirts;
        const secondTshirts = 100 * second100PlusTshirts;
        const restTshirts = tshirts - 200;
        const restTshirtsDelivery = restTshirts * third200PlusTshirts;
        const totaldeliveryCost = firstTshirts + secondTshirts + restTshirtsDelivery;

        return totaldeliveryCost;
    }
}
const totalCount = deliveryCost(220);
console.log('cost= ', totalCount);
