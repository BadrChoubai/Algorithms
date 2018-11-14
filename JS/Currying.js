const sumThree = (x) => {
  return (y) => {
    return (z) => {
      return x + y + z;
    }
  }
};

console.log(sumThree(1)(2)(3));
