const largestOfEachSubArray = (arr) => {
  let result = [];
  arr.forEach(array => result.push(array.reduce((a, b) => a > b ? a : b)))
  return result;
}

largestOfEachSubArray([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])/*?*/;