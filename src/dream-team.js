const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let stack = [];
  let temp;

  if (Array.isArray(members) !== true) {
    return false;
  } else {
    for (let i = 0; i < members.length; i++) {
      if (typeof(members[i]) === 'string') {
        stack.push(members[i].trim()[0].toUpperCase());
      };
    };
    
    for (let i = 0; i < stack.length - 1; i++) { // Сортировка методом "Пузырька", т.е. сравниваются два соседних элемента и меняются при необходимости
      temp = '';
      for (let j = 0; j < stack.length - 1 - i; j++) { // Последний элемент будет самый большой, поэтому на следующей итерации можно делать на i меньше шагов
        if (stack[j] > stack[j + 1]) {
          temp = stack[j + 1];
          stack[j + 1] = stack[j];
          stack[j] = temp;
        };
      };
    };
    return stack.join('');
  };
};
