const largestOfThree = (x, y, z) => {
    let numberArray = [x, y, z];
    findLargest = numberArray.sort((a, b) => a < b);
    return findLargest[0]
};

largestOfThree(18, 1, 30);


