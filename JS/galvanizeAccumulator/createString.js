function createString(number, letter) {
  let string = "";
  for (let i = 0; i < number; i++) {
    string += letter;
  }
  return string;
};

console.log(createString(4, "badr"));