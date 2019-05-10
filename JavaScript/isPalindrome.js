const isPalindrome = (str) => {
    let checkAgainst = str.split('').reverse().join('');
    return str === checkAgainst ? true : false;
};