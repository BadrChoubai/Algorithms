/**
 * @function fizzBuzz
 * @description
 * For each multiple of 3, print "Fizz" instead of the number. 
 * For each multiple of 5, print "Buzz" instead of the number. 
 * For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number.
 * For numbers which fit none of the conditions, print the number.
 */
function fizzBuzz() {
  for (let i = 0; i <= 100; i++) {
    if(i % 15 == 0) {
      console.log("FizzBuzz");
    } else if (i % 5 == 0) {
      console.log("Buzz");
    } else if (i % 3 == 0) {
      console.log("Fizz");
    } else {
      console.log(i);
    }
  }
}
