const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  arr_EN = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  constructor(value) {
    if ((value = true)) {
      this.value = value;
    }
  }

  encrypt(message, key) {
    console.log(message, key);
    let arrayIndexMassage = [];
    let arrayIndexKey = [];
    let arrayResidue = [];
    let abcArray = [];
    let arrayResult = [];
    if (typeof message === "undefined" || typeof key === "undefined") {
      throw Error("Incorrect arguments!");
    }
    let upperMessage = message.toUpperCase().split("");
    let upperKey = key.toUpperCase();

    for (let i = 0; upperMessage.length > i; i++) {
      arrayIndexMassage.push(
        this.arr_EN.findIndex((el) => el === upperMessage[i])
      );
    }
    let encryptMasageArray = arrayIndexMassage.filter((el) => el != -1);
    let strKey = upperKey
      .repeat(encryptMasageArray.length)
      .substring(0, encryptMasageArray.length);
    let arrayKey = strKey.split("");
    for (let i = 0; arrayKey.length > i; i++) {
      arrayIndexKey.push(this.arr_EN.findIndex((el) => el === arrayKey[i]));
    }
    for (let i = 0; encryptMasageArray.length > i; i++) {
      arrayResidue.push((encryptMasageArray[i] + arrayIndexKey[i]) % 26);
    }
    for (let i = 0; arrayResidue.length > i; i++) {
      abcArray.push(this.arr_EN[arrayResidue[i]]);
    }
    for (let i = 0; arrayResult.length < arrayIndexMassage.length; i++) {
      if (arrayIndexMassage[i] === -1) {
        arrayResult.push(upperMessage[i]);
        abcArray.splice(i, 0, "");
      } else {
        arrayResult.push(abcArray[i]);
      }
    }
    return this.value ? arrayResult.join("") : arrayResult.reverse().join("");
  }
  decrypt(message, key) {
    console.log(message, key);
    if (typeof message === "undefined" || typeof key === "undefined") {
      throw Error("Incorrect arguments!");
    }
    let arrayIndexMassage = [];
    let arrayIndexKey = [];
    let arrayResidue = [];
    let abcArray = [];
    let arrayResult = [];

    let upperMessage = message.toUpperCase().split("");
    let upperKey = key.toUpperCase();
    console.log(message, key);
    for (let i = 0; upperMessage.length > i; i++) {
      arrayIndexMassage.push(
        this.arr_EN.findIndex((el) => el === upperMessage[i])
      );
    }
    let encryptMasageArray = arrayIndexMassage.filter((el) => el != -1);
    let strKey = upperKey
      .repeat(encryptMasageArray.length)
      .substring(0, encryptMasageArray.length);
    let arrayKey = strKey.split("");
    for (let i = 0; arrayKey.length > i; i++) {
      arrayIndexKey.push(this.arr_EN.findIndex((el) => el === arrayKey[i]));
    }
    for (let i = 0; encryptMasageArray.length > i; i++) {
      arrayResidue.push(
        (encryptMasageArray[i] - (arrayIndexKey[i] % 26) + 26) % 26
      );
    }
    for (let i = 0; arrayResidue.length > i; i++) {
      abcArray.push(this.arr_EN[arrayResidue[i]]);
    }

    for (let i = 0; arrayResult.length < arrayIndexMassage.length; i++) {
      if (arrayIndexMassage[i] === -1) {
        arrayResult.push(upperMessage[i]);
        abcArray.splice(i, 0, "");
      } else {
        arrayResult.push(abcArray[i]);
      }
    }
    return this.value ? arrayResult.join("") : arrayResult.reverse().join("");
  }
}

module.exports = {
  VigenereCipheringMachine,
};
