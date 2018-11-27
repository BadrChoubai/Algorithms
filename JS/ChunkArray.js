const chunkArray = (array, len) => {
    const chunkedArray = [];
    let i = 0;

    while(i < array.length) {
        chunkedArray.push(array.slice(i, i + len));
        i += len;
    }
    return chunkedArray;
};