function findLongestWordLength(str) {
    let inputArray = str.split(' ');
    let maxSize = Math.max(...inputArray.map(x => x.length));
    let filteredArray = inputArray.filter(x => x.length === maxSize);
    return `Word: ${filteredArray[0]} Length: ${filteredArray[0].length}`;
  }

console.log(findLongestWordLength('The quick brown fox jumped over the lazy dog'));