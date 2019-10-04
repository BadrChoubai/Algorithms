/**
 * @function arrayToLinkedList
 * @param {Array} input
 * @description
 * Write a function that takes an array and returns
 * a singley linked list
 */
function arrayToLinkedList(input) {
  let list = null;

  for(let i = input.length - 1; i >= 0; i--) {
    list = {
      value: input[i],
      next: list,
    };
  };

  return list;
}

arrayToLinkedList([1,2,3,4]);
arrayToLinkedList(['a','b','c','d']);
