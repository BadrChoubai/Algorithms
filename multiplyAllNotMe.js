const reduceProduct = (arr) => arr.reduce((a, b) => a * b);

function multiplyAllNotMe(numArr) {
  let product = reduceProduct(numArr);

  let result = [];
  numArr.forEach(num => result.push(product / num));
  return result;
}