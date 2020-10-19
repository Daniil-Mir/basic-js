const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let obj = { // Удобно объединить несколько переменных, относящихся к одному объекту в одном месте
    turns: 0,
    seconds: 0,
  };
  obj.turns = Math.pow(2, disksNumber) - 1;
  obj.seconds = Math.floor(obj.turns / (turnsSpeed / 3600));

  return obj;
};
