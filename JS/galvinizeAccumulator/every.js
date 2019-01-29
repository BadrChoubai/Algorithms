function everyNumberTheSame(array, check) {
  let checked = [];
  let length = array.length;
  array.forEach(number => {
    if (number === check) {
      checked.push(number);
    }
  })
  return checked.length === length;
};