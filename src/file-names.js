const { NotImplementedError } = require("../extensions/index.js");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const old_name = {};
  const result = [];
  for (const element of names) {
    let new_name = element;
    if (old_name[element]) {
      let count = old_name[element];
      for (let i = 1; ; i++) {
        new_name = `${element}(${i})`;
        if (!old_name[new_name]) {
          count = i;
          break;
        }
      }
      old_name[element] = count + 1;
    }
    old_name[new_name] = 1;
    result.push(new_name);
  }
  return result;
}

module.exports = {
  renameFiles,
};
