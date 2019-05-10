const solution = (number) => {
  let threeOrFive = [];
  for ( let i = 3; i < number; i++ ) {
    i % 3 === 0 || i % 5 === 0 ? threeOrFive.push(i) : i;
  }
  return threeOrFive.reduce((a, b) => a + b);
};