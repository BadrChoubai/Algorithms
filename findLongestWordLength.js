function findLongestWordLength(str) {
    let inputArray = str.split(' ');
    let maxSize = Math.max(...inputArray.map(x => x.length));
    console.log(maxSize);
    let filteredArray = inputArray.filter(x => x.length === maxSize);
    return filteredArray[0].length
  }

console.log(findLongestWordLength('The quick brown fox jumped over the lazy dog'));