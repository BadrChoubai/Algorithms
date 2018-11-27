const isPalindrome = (str) => {
    let checkAgainst = str.split('').reverse().join('');
    console.log(str === checkAgainst ? true : false);
};