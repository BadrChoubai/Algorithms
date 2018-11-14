function allLongestStrings(inputArray) {
    let maxSize = Math.max(...inputArray.map(x => x.length));
    console.log(maxSize);
    let filteredArray = inputArray.filter(x => x.length === maxSize);
    return filteredArray
}

allLongestStrings(['this', 'is', 'an', 'array', 'of', 'strings']);