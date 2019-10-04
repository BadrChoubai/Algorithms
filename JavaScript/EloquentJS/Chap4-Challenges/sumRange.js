/**
 * @function range
 * @param {Number} start
 * @param {Number} end
 * @description
 * This is a function that takes two numbers start
 * and end, and outputs an array where array[0] = start
 * and array [array.length - 1] = end 
 */
const range = (start, end, step) => {
  let range = [];

  step = step ? step : 1;
  
  for (let i = start; i <= end; i+=step) {
    range.push(i);
  };

  return range;
};

/**
 * @function sum
 * @param {Array} input
 * @description
 * This is a function that will sum all numbers in a 
 * given Array
 */
const sum = (input) => input.reduce((x, y) => x+y);

let test = sum(range(1, 10));
console.log(test);


