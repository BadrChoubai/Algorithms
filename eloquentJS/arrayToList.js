/**
 * 
 * @description - Write a function that takes in an array and outputs a 
 * linked list where the nodes are linked by the value of array[i + 1]
 * 
 * @param {Array} inputArray 
 */
function arrayToList(inputArray) {
    let list = null;

    for (let i = inputArray.length - 1; i >= 0; i--) {
        list = {
            value: inputArray[i],
            next: list,
        };
    };

    return list;
};