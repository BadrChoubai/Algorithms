
/*
you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.
The input to the function will be an array of three distinct numbers
*/

const sortArray = inputArray => inputArray.slice().sort((a, b) => a - b);

const gimme = (inputArray) => {
  const sorted = sortArray(inputArray);
  for (let i in sorted) {
    if (inputArray[i] === sorted[1]) {
      return inputArray.indexOf(sorted[1]);
    }
  }
};

gimme([5, 10, 14])/*?*/;