const largestOfThree = (x, y, z) => {
    let numberArray = [x, y, z];
    console.log(numberArray);
    findLargest = numberArray.sort((a, b) => a < b);
    console.log(findLargest);
    console.log(findLargest[0]);
    return findLargest[0]
};

largestOfThree(18, 1, 30);


