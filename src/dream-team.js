const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (Array.isArray(members) === false) {
    return false;
  }
  let array = [];
  members.map((el) => {
    if (typeof el === "string") {
      array.push(el);
    }
  });

  let sort_arr = array.map((el) => el.trim());
  let result = sort_arr
    .sort((a, b) => a.localeCompare(b))
    .map((el) => el[0])
    .join("")
    .toUpperCase();

  return result;
}

module.exports = {
  createDreamTeam,
};
