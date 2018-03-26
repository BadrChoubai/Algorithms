const reverseString  = (str) => {
    var originalStr = str;
    console.log(originalStr);
    return str.split('').reverse().join('');
};
console.log(reverseString("hello"));