function getCodePoints(string) {
  let codePointsArr = [];
  for (let i = 0; i < string.length; i++) {
    codePointsArr.push(string.codePointAt(i));
  }
  return codePointsArr
};
