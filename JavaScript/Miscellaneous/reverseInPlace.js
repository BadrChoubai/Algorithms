function reverseInPlace(array) {
  for(let i = 0; i < Math.round(array.length / 2); i++) {
    const swap = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length-1-i] = swap;
    
    /*
     * Another way to do it that is less readable 
     * [array[i], array[array.length - 1 - i]] = [array[array.length - 1 - i], array[i]]
     **/
  };
  return array;
};
