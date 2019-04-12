function rotateRight(array, rotation) {
  if (rotation === array.length) return array;
  let temp = array.splice(0, rotation - 1);
  return array.concat(temp); 
};