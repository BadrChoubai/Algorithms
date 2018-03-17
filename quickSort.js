const quickSort = (array) => {
    if(array.length <= 1) return array;

    let pivot = array[array.length -1];
    let left = [];
    let right = [];

    for(let i = 0; i < array.length-1; i++) {
        if(array[i] < pivot) {
            left.push(array[i])
        }
        else right.push(array[i]);
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
}

console.log(quickSort([1, 4, 6, 7, 3, 7, 9, 10, 63, 50, 90, 40, 1, 4, 7, 2, 6, 5, 2]))