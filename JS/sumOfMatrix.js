const sumOfArrayMatrices = (arrays) => {
    let flattenedArray = arrays.reduce(
        (a, b) => a.concat(b), 
        []
    );
    return flattenedArray.reduce((a, b) => a + b, 0);
};

let arrayMatrix = [
    [1, 2, 3],  // 6
    [4, 5, 6],  // 15 
    [7, 8, 9]   // 24
    // the sum of all value in the array should be 45
];

console.log(sumOfArrayMatrices(arrayMatrix));
