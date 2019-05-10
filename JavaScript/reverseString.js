const functionalReverse = (str) => {
  return str.split('').reverse().join('');
};

// Using Recursion
function recursiveReverse(str) {
  if (str.length <= 1) {
    return str;
  }
  return reverse(str.substr(1)) + str[0];
}

const forLoopReverse = (str) => {
  let result = [];
  let strLength = str.length;
  for(let i = strLength - 1; i >= 0; i--) {
    result.push(str[i]);
  };
  return result.join('');
};

const forLoopSwapVar = (str) => {
  let swap
  let result = str.split("")
  for (i = 0; i < (result.length - 1) / 2; i++) {
      swap = result[i]
      console.log(result[result.length - 1 - i])
      result[i] = result[result.length - 1 - i]
      result[result.length - 1 - i] = swap
  }
  return result.join("")
};

