/*
You are given an odd-length array of integers, in which all of them are the same, except for one single number.
Complete the method which accepts such an array, and returns that single different number.
*/

const countOccurence = (array, n, x) => {
  res = 0;
  for (let i = 0; i < n; i++) {
    if (x === array[i]) {
      res += 1
    }
  };
  return res;
}

const stray = numbers => numbers.filter(number => countOccurence(numbers, numbers.length, number) <= 1)[0];
