function leftPad(str, len, fillChar) {
  let strArr = [...str];
  if (strArr.length > len) return strArr.join('').toString();
  for (let i = 0; i < len; i++) {
    strArr.splice(i, i - len, fillChar);
  }
  return strArr.join('').substring(str.length);
};