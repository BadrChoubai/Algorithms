function runInOrder(funcArr, intervalArr) {
  for (let i in funcArr) {
    let j = 0;
    setTimeout(() => {
      console.log(funcArr[i]());
    }, intervalArr[j]);
    j++
  }
};

const sayHi = () => "Hi";
const sayBye = () => "Bye";
const sayHowdy = () => "Howdy";

runInOrder([sayHi, sayBye, sayHowdy], [3000, 6000, 2000]);
/* should log: 'hi' (after 300 ms) 'bye' (600 ms after 'hi') 'howdy' (200 ms after 'bye') */

