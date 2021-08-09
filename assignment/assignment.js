//22-1 Basic JavaScript Problem Solving assignment

//  problem 1 solve
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

//  problem 2 solve
// (totalSale)
function totalSales(shirtQuantity, pantQuantity, shoeQuantity) {
    if (typeof shirtQuantity !== 'number' || shirtQuantity === 'undefined' || shirtQuantity === 'null' || shirtQuantity < 0) {
        return 'please enter  valid input';
    } else if (typeof pantQuantity !== 'number' || pantQuantity === 'undefined' || pantQuantity === 'null' || pantQuantity < 0) {
        return 'please enter  valid input';
    } else if (typeof shoeQuantity !== 'number' || shoeQuantity === 'undefined' || shoeQuantity === 'null' || shoeQuantity < 0) {
        return 'please enter  valid input';
    }

    const shirtPrice = 100;
    const pantPrice = 200;
    const shoePrice = 500;
    //sell calculation
    const totalShirt = shirtQuantity * shirtPrice;
    const totalPant = pantQuantity * pantPrice;
    const totalShoe = shoeQuantity * shoePrice;

    //total sales
    const total = totalShirt + totalPant + totalShoe;
    return total;
}

const salesCalculation = totalSales(5, 7, 10);
console.log('sales Calculation = ', salesCalculation);

//  problem 3 solve
// (deliveryCost)
function deliveryCost(tshirts) {
    const first100Tshirts = 100;
    const second100PlusTshirts = 80;
    const third200PlusTshirts = 50;

    if (typeof tshirts !== 'number' || tshirts === 'undefined' || tshirts === 'null' || tshirts === '' || tshirts < 0) {
        return 'please enter  valid input';
    }

    if (tshirts <= 100) {
        const count = tshirts * first100Tshirts;
        console.log('first', count);
        return count;
    } else if (tshirts <= 200) {
        const firstTshirts = 100 * first100Tshirts;
        const restTshirts = tshirts - 100;
        const secondTshirts = restTshirts * second100PlusTshirts;
        const totalTshirts = firstTshirts + secondTshirts;
        console.log('second', totalTshirts);
        return totalTshirts;
    } else {
        const firstTshirts = 100 * first100Tshirts;
        const secondTshirts = 100 * second100PlusTshirts;
        const restTshirts = tshirts - 200;
        const restTshirtsDelivery = restTshirts * third200PlusTshirts;
        const totaldeliveryCost = firstTshirts + secondTshirts + restTshirtsDelivery;
        console.log('third', totaldeliveryCost);
        return totaldeliveryCost;
    }
}
const totalCount = deliveryCost(220);
console.log('cost = ', totalCount);

//  problem 4 solve
// (perfectFriend)
const bestFriend = ['trishna', 'tonu', 'salma', 'nur', 'rakib', 'mehe', 'arifa', 'sultana'];

function perfectFriend(friends) {
    if (typeof friends === 'string' || friends === 'undefined' || friends === 'null') {
        return 'Please enter valid value';
    }
    let friendName = friends[0].length;
    let equalFive;

    for (let i = 1; i < friends.length; i++) {
        if (friends[i].length == 5) {
            friendName = friends[i].length;
            equalFive = friends[i];
            break;
        }
    }
    return equalFive;
}

const myFriend = perfectFriend(bestFriend);
console.log('equalFive = ', myFriend);
