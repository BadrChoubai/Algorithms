function doubleLetters(string) {
  let splitMapJoin = string.split('').map(letter => {
    return letter + letter
  }).join('');
  return splitMapJoin;
}