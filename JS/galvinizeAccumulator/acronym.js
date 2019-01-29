function acronym(array) {
  let acronymArr = [];
  if (array.length >= 1) {
    array.forEach(element => {
      acronymArr.push(element[0]);
    })
    return acronymArr.join('').toString();
  }
};