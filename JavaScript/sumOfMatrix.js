const sumOfArrayMatrices = arrays => arrays.reduce((a, b) => a.concat(b), [] ).reduce((a, b) => a + b);

let arrayMatrix = [
    [1, 2, 3],  // 6
    [4, 5, 6],  // 15 
    [7, 8, 9]   // 24
    // the sum of all value in the array should be 45
];

sumOfArrayMatrices(arrayMatrix);