function createString(number, letter) {
  let string = [];
  for (let i = 0; i < number; i++) {
    string.push(letter)
  }
  return string.join('');
};