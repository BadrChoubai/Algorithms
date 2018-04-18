let multiplyNumbers = ([w, x, y], z) => {
    let array = [w, x, y];
    let multiplier = z;
    let arrayToManipulate = array.map(number => number * multiplier);
    return arrayToManipulate;
};

let args = [[1, 2, 3], 3]
console.log(multiplyNumbers(...args));