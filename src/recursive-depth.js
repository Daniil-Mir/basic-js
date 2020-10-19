const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let level = 1;
    let depth = 0;
    for (let elem of arr) { // В данной задаче так компактнее чем через привычный цикл for (let i ...)
      if (Array.isArray(elem) !== true) continue; // Отсечка для остановки рекурсии в случае если больше нет вложенных массивов.
      depth = this.calculateDepth(elem) + 1; // Рекурсия
      if (depth > level) level = depth; // Если углубился больше одного уровня, то становится значением глубины
    };
    return level;
  }
};