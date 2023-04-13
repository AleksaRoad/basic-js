const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
    const new_matrix = Object.keys(matrix[0]).map((col) =>
    matrix.map((row) => row[col])
  );
  let sum_array = [];
  new_matrix.map(function (el) {
    for (let i = 0; el.length > i; i++) {
      if (el[i] === 0) {
        break;
      } else {
        sum_array.push(el[i]);
      }
    }
  });
  return sum_array.reduce((a, b) => a + b, 0);
}

module.exports = {
  getMatrixElementsSum
};
