const isIsogram = str => !/(\w).*\1/i.test(str);
const findIsogram = (wordArray) => wordArray.filter(word => isIsogram(word));

let wordArray = ["Dermatoglyphics", "supercalifragilisticexpialidocious", "isogram"];
findIsogram(wordArray);
