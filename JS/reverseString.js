const reverseString = (str) => {
  return str.split('').reverse().join('');
};

// Using Recursion
function reverse(str) {
  if (str.length <= 1) {
    return str;
  }
  return reverse(str.substr(1)) + str[0];
}