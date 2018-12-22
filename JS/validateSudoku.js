const reorganizeData = (data) => {
  let _rows = data;
  let _cols = [];
  let _grid = [];

  // Prefilling the structures with empty array objects
  for (var i = 0; i < 9; i++) {
    _cols.push([]);
    _grid.push([]);
  }
  for (var row = 0; row < 9; row++) {
    for (var col = 0; col < 9; col++) {
      // Save each column in a new row
      _cols[col][row] = data[row][col];
      // Calculate grid identifiers
      gridRow = Math.floor(row / 3);
      gridCol = Math.floor(col / 3);
      gridIndex = gridRow * 3 + gridCol;
      // Save each grid in a new row
      _grid[gridIndex].push(data[row][col]);
    }
  }
};

const validate = (data) => {
  for (var row = 0; row < 9; row++) {
    data[row].sort();
    for (var col = 0; col < 9; col++) {
      var value = data[row][col], next_value = data[row][col + 1];
      // check if value exists and is a valid number
      if (!(value && value > 0 && value < 10)) {
        return false;
      }
      // check if numbers are unique
      if (col !== 8 && value === next_value) {
        return false;
      }
    }
  }
  return true;
};

const isValid = () => (validate(_rows) && validate(_cols) && validate(_grid));

const validateSudoku = (puzzle) => isValid(reorganizeData(puzzle));



let sudokuPuzzle = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]
];

console.log(validateSudoku(sudokuPuzzle));