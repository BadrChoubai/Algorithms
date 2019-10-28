/**
 * @function spinWords
 * @param {String} sentence
 * @description
 * Write a string of one or more words, and returns the same string,
 * but with all five or more letter words reversed
 */
function spinWords(sentence) {
  return sentence.split(' ').map(word => {
    return word.length >= 5 ? word.split('').reverse().join('') : word;
  }).join(' ');
};

spinWords("I love JavaScript String manipulation");
spinWords("Wandering around wondering what's going on");
spinWords("Sleep the day away");