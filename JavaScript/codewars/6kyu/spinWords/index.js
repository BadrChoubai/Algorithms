/**
 * @function spinWords
 * @param {String} sentence
 * @description
 * Write a string of one or more words, and returns the same string,
 * but with all five or more letter words reversed
 */
function spinWords(sentence) {
  let splitSentence = input => input.split(' ');
  let wordArray = splitSentence(sentence);

  return wordArray.map(word => {
    return word.length >= 5 ? word.split('').reverse().join('') : word;
  }).join(' ');

};

let test1 = spinWords("I love JavaScript String manipulation");
let test2 = spinWords("Wandering around wondering what's going on");
let test3 = spinWords("Sleep the day away");

console.log(test1, test2, test3);
