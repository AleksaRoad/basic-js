const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  // throw new NotImplementedError('Not implemented');
  let flat_arr = [].concat(matrix).flat(Infinity)
  function count(flat_arr){
    let array = [];
    for(let i = 0; flat_arr.length > i; i++){
      if (flat_arr[i] === '^^'){
        array.push('^^')
      }
    }
    return array.length
  }
  return result = count(flat_arr)
}

module.exports = {
  countCats
};
