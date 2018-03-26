const isAnagram = (str1, str2) => {
    console.log(`${str1} and ${str2}`);
    if(formatStr(str1) === formatStr(str2)) {
        return true;
    } else {
        return false;
    }
}

    // Helper Function
let formatStr = (str) => {
    return str
      .replace(/[^/w]/g, '')
      .toLowerCase()
      .split('')
      .sort()
      .join('')
};

console.log(isAnagram('elbow', 'below'));