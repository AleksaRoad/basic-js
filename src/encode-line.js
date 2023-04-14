const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str === ''){
    return ''
  };
  let count = 0;
  let word = "";
  let result = "";
  const array = str.split("");
  for (let i = 0; array.length > i; i++) {
    if (i > 0 && array[i] != array[i - 1]) {
      result += `${count}${word}`;
      count = 0;
    }
    count += 1;
    word = array[i];
  }
  result += `${count}${word}`;
  result = result.replace(/1/gi, '')
  return result;
}

module.exports = {
  encodeLine
};
