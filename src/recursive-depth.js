const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let count = 1;
    this.arr = arr;
    for (let i = 0; arr.length > i; i++) {
      if (Array.isArray(arr[i])) {
        let nested_count = this.calculateDepth(arr[i]);
        count = Math.max(count, nested_count + 1);
      }
    }
    return count;
  }
}

module.exports = {
  DepthCalculator,
};
