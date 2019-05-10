/*

You are given two arrays and an index.

Use the array methods slice and splice to copy each element of the first array into the second array, in order.

Begin inserting elements at index n of the second array.

Return the resulting array. The input arrays should remain the same after the function runs.

*/

const frankenSplice = (arr1, arr2, n) => {
  let newArr = arr2.slice(0, n);

  let newArr2 = arr2.slice();

  newArr2.splice(0, n)

  let subArray = newArr.concat(arr1).concat(newArr2);

  return subArray;
}

frankenSplice([1, 2, 3], [4, 5, 6], 3)/*?*/;