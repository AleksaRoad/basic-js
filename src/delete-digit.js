const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let str = n.toString();
  let array = str.split("");
  let result = [];
  for (let i = 0; array.length > result.length; i++) {
    let num = n.toString();
    let rExp = new RegExp(array[i], "i");
    num = num.replace(rExp, "");
    result.push(Number(num))
    num = n;
  }
  return Math.max.apply(null, result);
}

module.exports = {
  deleteDigit
};
