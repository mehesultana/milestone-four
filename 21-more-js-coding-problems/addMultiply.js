//21-5 Use add and multiplication to calculate wood requirements
/*
chair = 3cft
table = 10cft
bed = 50cft

chairWood = 3cft/chair
tableWoodd = 10cft/table
bedWood = 50cft/bed
*/

function woodCalculator(chairQuantity, tableQuantity, bedQuantity) {
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;
    //wood calculation
    const chairWoodQuantity = chairQuantity * perChairWood;
    const tableWoodQuantity = tableQuantity * perTableWood;
    const bedWoodQuantity = bedQuantity * perBedWood;

    //total
    const totalWood = chairWoodQuantity + tableWoodQuantity + bedWoodQuantity;
    return totalWood;
}

const firstCalculation = woodCalculator(1, 4, 2);
console.log('firstCalculation = ', firstCalculation);
const secondCalculation = woodCalculator(5, 3, 2);
console.log('secondCalculation = ', secondCalculation);
