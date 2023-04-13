const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let array = email.split("");
  let result = [];
  for (let i = array.length; i > 0; i--) {
    if (array[i] === "@") {
      return result.reverse().join("");
    } else {
      result.push(array[i]);
    }
  }
  return result;
}

module.exports = {
  getEmailDomain,
};
