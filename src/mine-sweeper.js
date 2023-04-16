const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let new_arr = [];
  for (let row = 0, height = matrix.length - 1; row <= height; row++) {
    new_arr.push([]);
    for (let col = 0, width = matrix[row].length - 1; col <= width; col++) {
      new_arr[row].push(
        (row > 0 && col > 0 && matrix[row - 1][col - 1]) +
          (row > 0 && matrix[row - 1][col]) +
          (row > 0 && col < width && matrix[row - 1][col + 1]) +
          (col > 0 && matrix[row][col - 1]) +
          (col < width && matrix[row][col + 1]) +
          (row < height && col > 0 && matrix[row + 1][col - 1]) +
          (row < height && matrix[row + 1][col]) +
          (row < height && col < width && matrix[row + 1][col + 1])
      );
    }
  }
  return new_arr;
}

module.exports = {
  minesweeper,
};
