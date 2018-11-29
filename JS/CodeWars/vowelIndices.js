const vowelIndices = (word, VOWELS = ['a', 'e', 'i', 'o', 'u', 'y'], indices=[]) => {
  [...word.toLowerCase()].forEach((letter, index) => VOWELS.forEach(vowel => letter === vowel ? indices.push(index + 1) : null ));
  return indices;
};

vowelIndices('vowels')/*?*/;
vowelIndices('supercalifragilisticexpialidocious')/*?*/;