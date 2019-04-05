function rotateRight(array, rotation) {
  let temp = array.splice(0, rotation);
  return array.concat(temp); 
};

console.log(rotateRight([1,2,3,4,5], 5));