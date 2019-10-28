/**
 * @function removeStringSpaces
 * @param {String} input 
 * @description
 * Write a function that takes a string and removes any spaces
 */
function removeStringSpaces(input) {
  return input.split(' ').join('');
};

removeStringSpaces("this is a sentence");

