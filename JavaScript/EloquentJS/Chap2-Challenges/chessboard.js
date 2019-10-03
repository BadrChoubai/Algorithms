/**
 * @function chessboard
 * @param {Number} size
 * @description
 * Write a program that creates a string that represents a grid, using newlinecharacters to separate lines. 
 * At each position of the grid there is either a spaceor a "#" character. 
 */
function chessboard(size) {
  let chessboard = "";
  for (let i = 0; i < size; i++) {
    const layer =  i % 2 == 0 ? "# ".repeat(size / 2) : " #".repeat(size / 2); 
    chessboard += `${layer}\n`;   
  }
   
  return chessboard;
};

chessboard(8);