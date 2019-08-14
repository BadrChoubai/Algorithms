const productOfArray = (arr) => arr.reduce((a, b) => a * b);

function multiplyallNotMe(arr) {
  let product = productOfArray(arr);
  let result = new Array(arr.length);

  for (let i = 0; i < arr.length; i++) {
    result[i] = (product / arr[i]);
  }

  return result;
};

console.log(multiplyallNotMe([2, 4, 6, 8, 10]));

/*

Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].

Optional: What if you can't use division?

*/