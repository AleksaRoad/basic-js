const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
    if (Array.isArray(arr) === false) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let new_array = [];
  for (let i = 0; arr.length > i; i++) {
    if (arr[i] === "--discard-prev") {
      new_array.pop();
    }
    if (arr[i] === "--discard-next") {
      i++;
      i++;
    }
    if (arr[i] === "--double-prev") {
      new_array.push(new_array[i - 1]);
      i++;
    }
    if (arr[i] === "--double-next") {
      new_array.push(arr[i + 1]);
    } else {
      new_array.push(arr[i]);
    }
  }
  let result = [];
  for (let i = 0; new_array.length > i; i++) {
    if (typeof new_array[i] != "undefined" && new_array[i] != "--double-next" && new_array[i] != "--double-prev" && new_array[i] != "--discard-next" && new_array[i] != "--discard-prev") {
      result.push(new_array[i]);
    }
  }
  return result;
}

module.exports = {
  transform
};
