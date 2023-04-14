const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  storageChain: [],
  count: "",
  getLength() {
    return this.storageChain.length;
  },
  addLink(value) {
    if (value === undefined) {
      this.storageChain.push("");
      return this;
    }
    this.storageChain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (
      (typeof position === 'number') &&
      position > 0 &&
      position < this.storageChain.length
    ) {
      this.storageChain.splice(position - 1, 1);
      return this;
    } else {
      this.storageChain = [];
      throw new Error("You can't remove incorrect link!");
    }
  },
  reverseChain() {
    this.storageChain.reverse();
    return this;
  },
  finishChain() {
    for (let i = 0; this.storageChain.length > i; i++) {
      this.count = this.storageChain.join('~~');
    }
    this.storageChain = [];
    return this.count;
  },
};

module.exports = {
  chainMaker,
};
