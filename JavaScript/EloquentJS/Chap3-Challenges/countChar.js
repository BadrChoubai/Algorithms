/**
 * @function countChar
 * @param {String} input
 * @param {String} searchChar
 * @description
 * Write a function that counts how many of a given 
 * character are in the given input string
 * Case Sensitive
 */
function countChar(input, searchChar) {
  let count = 0;

  input = input
    .replace(/[^\w\s]|_/g, "") // is anything that's not a digit, letter, whitespace
    .replace(/\s+/g, "");
  
  for (let i = 0; i <= input.length; i++) {
    if(input[i] == searchChar) {
      count++;
    }
  }

  return count;
};

console.log(countChar("Bob's Burgers are the best burgers", "r"));
console.log(countChar("badr Choubai", "b"));