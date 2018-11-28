const countVowels = (str) => {
  let VOWELS = ['a', 'e', 'i', 'o', 'u'], count = 0;
  [...str].forEach(letter => VOWELS.forEach(vowel => letter === vowel ? count++ : null ));
  return count;
}

countVowels('this is a vowel')/*?*/;