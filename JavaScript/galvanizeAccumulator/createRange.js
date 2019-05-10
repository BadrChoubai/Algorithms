function createRange(num, defVal) {
  let range = [];
  for (i = 0; i < num; i++) {
    range[i] = defVal;
  }
  return range;
}