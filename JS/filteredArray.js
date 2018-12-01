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
