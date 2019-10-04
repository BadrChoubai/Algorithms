/**
 * @function reverseInPlace
 * @param {Array} input
 * @description
 * Write a function that takes and array as an input
 * and reverse the elements in place
 */
function reverseInPlace(input) {
  for (let i = 0; i < Math.round(input.length / 2); i++) {
    const p = input[i];
    input[i] = input[input.length - 1 - i];
    input[input.length - 1 - i] = p;
  }

  return input;
}

console.log(reverseInPlace([1, 2, 3, 4, 5]));
console.log(reverseInPlace(['a', 'b', 'c', 'd', 'e']));