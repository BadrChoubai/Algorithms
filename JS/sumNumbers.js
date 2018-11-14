let sumNumbers = (...args) => {
    let arrayToDouble = args.reduce((numA = 0, numB = 0) => numA + numB, 0);
    return arrayToDouble;
};

console.log(sumNumbers(1, 2, 3, 4));
