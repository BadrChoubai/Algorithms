/*
Given an array of numbers, determine whether the sum of all of the numbers is odd or even.
*/

let sumArr = (arr) => arr.reduce((a,b) => a + b); 
const oddOrEven = array => sumArr(array) % 2 === 0 ? 'even' : 'odd';
