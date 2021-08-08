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
