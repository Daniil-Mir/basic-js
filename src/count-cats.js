const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let count = 0;
  for (let i = 0; i < matrix.length; i++) {  // Идея: просто перебрать все элементы массива (таблицы, первый цикл - по строкам, второй - по столбцам)
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === '^^') {
        count++;
      };
    };
  };
  return count;
};
