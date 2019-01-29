function countVowels(string) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const vowelsInString = [];
  const stringArr = [...string.toLowerCase()];
  for (letter in stringArr) {
    for (vowel in vowels) {
      if (stringArr[letter] === vowels[vowel]) {
        vowelsInString.push(vowels[vowel]);
      }
    }
  }
  return vowelsInString.length;
};