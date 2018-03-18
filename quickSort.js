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

console.log(quickSort([1, 7.4, 6, 7, 1.3, 7, 9, 10.2, 63, 50, 9.6, 40.4, 1, 4, 7.2, 2, 6, 5.5, 2.1]))