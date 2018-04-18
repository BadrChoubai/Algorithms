let sumNumbers = (x, y, z) => {
    array = [x, y, z];
    let arrayToDouble = array.reduce((numA, numB) => numA + numB);
    return arrayToDouble;
};
let args = [3, 2, 2];
console.log(sumNumbers(...args));