// const reverseString  = (str) => {
//     return str.split('').reverse().join('');
// };

const isPalindrome = (str) => {
    let checkAgainst = str.split('').reverse().join('');
    console.log(str === checkAgainst ? true : false);
};

console.log("racecar");
isPalindrome("racecar");
console.log("joyful");
isPalindrome("joyful");