const CustomError = require("../extensions/custom-error");

const chainMaker = {
  array: [],
  chain: '',
  getLength() {
    return this.array.length();
  },
  addLink(value) {
    this.array.push(`( ${value} )`);
    return this; // метод должен возвращать объект после преобразования, чтобы с ним можно было работать дальше.
  },
  removeLink(position) {
    if (!this.array[position - 1] || !Number.isInteger(position)) {
      this.array = [];
      throw new Error('Error');
    };
    this.array.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.array.reverse();
    return this;
  },
  finishChain() {
    this.chain = this.array.join('~~');
    this.array = [];
    return this.chain; // А здесь нам нужна итоговая строка, поэтому выводится она.
  },
};

module.exports = chainMaker;
