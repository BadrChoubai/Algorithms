var binaryToString = function (string) {
  return string
      .replace(/\s+/g, '')
      .match(/.{1,8}/g)
      .join(' ')
      .split(' ')
      .map(function (elem) { return String.fromCharCode(parseInt(elem, 2)); })
      .join('');
};
var string = `01100110`;
console.log(binaryToString(string));
