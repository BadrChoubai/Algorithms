function letterCount(string) {
  let letterArr = [...string];
  return letterArr.reduce((x, y) => {
    if (!x[y]) {
      x[y] = 0;
    }
    x[y]++
    return x;
  }, {})
};