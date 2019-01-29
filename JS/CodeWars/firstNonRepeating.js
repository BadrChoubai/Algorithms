const firstNonRepeatingLetter = (str) => {
  let index = [];
  let count;
  [...str].forEach((letter, i) => {
    count = 0;
    [...str].forEach((latter) => {
      if (letter === latter) {
        count += 1;
      }
    });
    index.push(count);
  });
  return str[index.indexOf(1)] ? str[index.indexOf(1)] : "";
};

firstNonRepeatingLetter("test"); // e
firstNonRepeatingLetter("supercalifragilisticexpialidocious");// f
firstNonRepeatingLetter("this is the craziest and most annoying code I've written")// z;