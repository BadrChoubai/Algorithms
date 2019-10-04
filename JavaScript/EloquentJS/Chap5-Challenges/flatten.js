const { reverseInPlace } = require('../Chap4-Challenges/reverseArray');

/**
 * @function flatten
 * @param {Array} input
 * @description
 * A function that flattens an array of arrays
 */
function flatten(input) {
  let flattenedArray = [];

  for (let i = 0; i < input.length; i++) {
    const [...array] = input[i];
    flattenedArray.push(...array);
  }

  return flattenedArray;
};

flatten([[1,2], [3,4], [5,6], [7,8], [9, 10]]);

/**
 * @function deepFlatten
 * @param {Array} input
 * @description
 * Similar to flatten() but will handle deeply nested arrays
 * This is an example from MDN that uses a stack
 */
function deepFlatten(input) {
  const stack = [...input];
  const res = [];

  while(stack.length) {
    // pop the value from the stack;
    const next = stack.pop();
    if (Array.isArray(next)) {
      // push back array items, won't modify original input
      stack.push(...next);
    } else {
      res.push(next);
    }
  }

  // reverse to restore input order
  return reverseInPlace(res);
}

console.log(deepFlatten([1, [2,3], [4, [5, 6]], [7, [8, [9, [10]]]]]));
