/*
Truncate a string (first argument) 
if it is longer than the given maximum string length (second argument). 
Return the truncated string with a ... ending.
*/

const truncateString = (str, num) => str.length > num ? str.slice(0, num > 3 ? num : num) + '...' : str;