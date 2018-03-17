const largestOfThree = (x, y, z) => {
    let numberArray = [];
    numberArray.push(x);
    numberArray.push(y);
    numberArray.push(z);
    findLargest = numberArray.sort((a, b) => {
        return a < b;
    });
    console.log(findLargest[0]);
};

largestOfThree(18, 1, 30);


