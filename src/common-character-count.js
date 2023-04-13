const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  // throw new NotImplementedError('Not implemented');
  // // remove line with error and write your code here
  let result = [];
  for (let i = 0; s1.length > i; i++) {
    if (s2.includes(s1[i])) {
      let rExp = new RegExp(s1[i], "i");
      s2 = s2.replace(rExp, "");
      result.push(s1[i]);
    } else {
      i++;
    }
  }
  return result.length;
}

module.exports = {
  getCommonCharacterCount,
};
