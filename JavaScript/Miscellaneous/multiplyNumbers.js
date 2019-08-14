let multiplyNumbers = ([w, x, y], z) => {
  let array = [w, x, y];
  let multiplier = z;
  let arrayToManipulate = array.map(number => number * multiplier);
  return arrayToManipulate;
};
