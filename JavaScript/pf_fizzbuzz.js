/*
 * Purely Functional FizzBuzz solution in JavaScript
 * To ensure that the solution is purely functional here are the constraints
 * 1. No Loops
 * 2. No Ifs, but ternary operator is okay
 * 3. Function is a single return
 * 4. No Side-Effects
 * 5. No Assignments in function
 * 6. No arrays
 * 7. Only functions with 0 or 1 arguments
 */

// Dirty imperative part of program
const arrayFromList = fl => {
  let result = [];

  while (fl !== null) {
    result.push(head(fl));
    fl = tail(fl);
  }
  return result;
};

const listFromArray = arrayLike => {
  let result = null;
  let fl = Array.from(arrayLike).reverse();

  for (let i = 0; i < fl.length; ++i) {
    result = pair(fl[i])(result);
  }
  return result;
};

// Purely Function Part of program
function pair(first) {
  return function(second) {
    return { first, second };
  };
}

let first = pair => pair.first;
let head = first;
let second = pair => pair.second;
let tail = second;

const range = low => high =>
  low > high ? null : pair(low)(range(low + 1)(high));

const fizzBuzz = n =>
  (n % 3 === 0 ? "Fizz" : "") + (n % 5 === 0 ? "Buzz" : "") || n;

const map = fn => fl =>
  fl === null ? null : pair(fn(head(fl)))(map(fn)(tail(fl)));

console.log(arrayFromList(map(fizzBuzz)(range(1)(100))));
