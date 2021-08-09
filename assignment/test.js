function totalSales(shirtSales, pantSales, shoeSales) {
    if (typeof shirtSales !== 'number' || shirtSales === 'undefined' || shirtSales === 'null') {
        return 'please enter  valid input';
    } else if (typeof pantSales !== 'number' || pantSales === 'undefined' || pantSales === 'null') {
        return 'please enter  valid input';
    } else if (typeof shoeSales !== 'number' || shoeSales === 'undefined' || shoeSales === 'null') {
        return 'please enter  valid input';
    }
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

const salesCalculation = totalSales(5);
console.log('sales Calculation = ', salesCalculation);
