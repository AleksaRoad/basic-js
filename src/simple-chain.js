const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {

  getLength() {},
  addLink(value) {
    if (value === undefined) {
      this.storageChain.push('');
      return this}
    this.storageChain.push(` ${value} `);

    return this;
  },
  removeLink(position) {
    if (Number(position) && position > 0 && position <= this.storageChain.length) {
      this.storageChain.splice(position - 1, 1);
      return this
    } else {
      throw new Error("You can't remove incorrect link!");
    }
  },
  reverseChain() {
    chainMaker.reverse();
  },
  finishChain() {
    throw new Error()
  },
};

module.exports = {
  chainMaker
};
