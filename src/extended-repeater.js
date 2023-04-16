const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let result = "";
  if (typeof options.additionSeparator === "undefined") {
    options.additionSeparator = "|";
  }
  if (typeof options.separator === "undefined") {
    options.separator = "+";
  }
  if (typeof options.additionRepeatTimes === "undefined") {
    options.additionRepeatTimes = 1;
  }
  if (typeof options.repeatTimes === "undefined") {
    options.repeatTimes = 1;
  }
  if (typeof options.addition === "undefined") {
    options.addition = "";
    options.additionRepeatTimes = 0;
  }
  if (typeof options.addition != "undefined") {
    options.addition = String(options.addition);
  }

  let addition_str = (options.addition + options.additionSeparator).repeat(
    options.additionRepeatTimes
  );
  addition_str = addition_str.substring(
    0,
    addition_str.length - options.additionSeparator.length
  );
  for (let i = 0; options.repeatTimes > i; i++) {
    result = result + str + addition_str + options.separator;
  }

  result = result.substring(0, result.length - options.separator.length);
  return result;
}

module.exports = {
  repeater,
};
