/**
 * @function printTriangle
 * @param {String} symbol 
 * @param {Number} height
 * @description 
 * Write a loop that makes a triangle 
 */

function printTriangle(symbol, height) {  
  for (let i = 0; i <= height; i++) {
    const layer = symbol.repeat(i);
    console.log(layer);
  }
};

printTriangle('#', 7);

