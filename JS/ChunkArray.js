const chunkArray = (array, len) => {
    const chunkedArray = [];
    let i = 0;

    while(i < array.length) {
        chunkedArray.push(array.slice(i, i + len));
        i += len;
    }
    return chunkedArray;
};
console.log(
    chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2)
)

