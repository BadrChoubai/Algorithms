function interleave(arr1, arr2) {
  let interleaveArr = [];
  for(let i = 0; i < arguments[0].length; i++) {
    interleaveArr.push(arr1[i], arr2[i]);
  }
  return interleaveArr;
};