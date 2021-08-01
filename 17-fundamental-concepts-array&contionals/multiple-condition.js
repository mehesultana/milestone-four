//17-7 Handle multiple conditions, and or
var gotJob = true;
var moneySaved = 250000;
var hasFlat = false;
var hasHouse = true;
//
if (gotJob == true) {
    console.log('colo biye kore jibon tej pata banai');
} else {
    console.log('tor kopale biye nai!');
}
//
if (gotJob == true && moneySaved > 200000) {
    console.log('colo biye kore jibon tej pata banai');
} else {
    console.log('tor kopale biye nai!');
}
//and
if (gotJob == true && moneySaved > 200000 && hasFlat == true) {
    console.log('colo biye kore jibon tej pata banai');
} else {
    console.log('tor kopale biye nai!');
}
//or
if (gotJob == true || moneySaved > 200000) {
    console.log('colo biye kore jibon tej pata banai');
} else {
    console.log('tor kopale biye nai!');
}

//and or
if ((gotJob == true && moneySaved > 200000) || hasHouse == true) {
    console.log('colo biye kore jibon tej pata banai');
} else {
    console.log('tor kopale biye nai!');
}
