const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let new_array = [];
  let position = [];
  let result = [];
  for (let i = 0; arr.length > i; i++) {
    if (arr[i] === -1) {
      position.push(i);
    } else {
      new_array.push(arr[i]);
    }
  }
  new_array.sort((a, b) => a - b);
  for (let i = 0; arr.length > result.length; i++) {
    console.log(i);
    if (position.includes(i)) {
      result.push(-1);
    } else {
      result.push(new_array[0]);
      new_array = new_array.splice(1, Infinity);
    }
  }
  return result
}

module.exports = {
  sortByHeight,
};
