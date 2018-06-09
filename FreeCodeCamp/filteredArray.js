function filteredArray(arr, elem) {
    let newArr = [];
    // change code below this line
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].indexOf(elem) === -1) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
  }
  
  // change code here to test different cases:
  console.log(filteredArray([[1, 2, 3], [1, 2, 3], [1, 2, 3], [4, 5, 6]], 1));