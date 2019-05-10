function everyOther(string) {
  let everyOther = [];
  for(let i = 0; i < string.length; i+=2) {
    everyOther.push(string[i]);
  }
  return everyOther.join('');
};