const isAnagram = (str1, str2) => {
    if(formatStr(str1) === formatStr(str2)) {
        return true;
    } else {
        return false;
    }
  };
  isAnagram('elbow', 'elbow')
  // Helper Function
  let formatStr = (str) => {
    return str
      .replace(/[^/w]/g, '')
      .toLowerCase()
      .split('')
      .sort()
      .join('')
  };