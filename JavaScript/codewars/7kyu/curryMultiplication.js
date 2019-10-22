/**
 * @function multiplyElementsInArray
 * @param {Array} input
 * @description
 *  which takes an array of integers as an argument. This function must return another function, which takes a single integer as an argument and returns a new array. 
 */
const multiplyAll = (array) => (number) => {
	return array.map(current => current * number);
}

multiplyAll([1,2,3])(2)
