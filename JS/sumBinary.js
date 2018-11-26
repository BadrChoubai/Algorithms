function addBinary(a,b) {
  let sum = a + b;
  function binaryConvert(x = sum) {
    var binary = parseInt(x, 10);
    return binary.toString(2);
}

return binaryConvert();
};
