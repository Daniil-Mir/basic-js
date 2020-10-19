const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error('Not array');

  let stack = [];
  for (let i = 0; i < arr.length; i++) { // Удобнее оформить логику решения задачи через переключатель (switch() {case1: ...; case2 ...}) чем через if,
    switch (arr[i]) { // в таком случае понадобится меньше символов. Здесь заморочки только в индексах (какой индекс выбрать, чтобы выполнить задачу).
      case '--discard-next':
          i += 1;            
        break;
      case '--discard-prev':
        if (i !== 0 && arr[i - 2] !== '--discard-next') {
          stack.pop();
        };
        break;
      case '--double-next':
        if (i !== arr.length - 1) {
          stack.push(arr[i + 1]);
        };
        break;
      case '--double-prev':
        if (i !== 0 && arr[i - 2] !== '--discard-next') {
          stack.push(arr[i - 1]);
        };
        break;
      default:
        stack.push(arr[i]);
        break;
    };
  }
  return stack;
};
