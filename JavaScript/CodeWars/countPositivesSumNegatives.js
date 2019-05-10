const countPositivesSumNegatives = (input) => {
  let result    = [];
  let positives = [];
  let negatives = [];
  
  input.sort((a, b) => a - b).forEach(number => number < 0 ? negatives.push(number) : positives.push(number));

  result[0] = positives.length;
  result[1] = negatives.reduce((a, b) => a + b);

  return result;
  

};

countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]);
countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]);