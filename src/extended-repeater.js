const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
 str = String(str);

 /*Поскольку некоторых знаечений может не быть, нужны локальные значения по умолчанию.
   Их удобно объединить в локальный объект*/
  let localObj = {};
  localObj.repeatTimes = options.repeatTimes > 0 ? options.repeatTimes : 0;
  localObj.separator = typeof options['separator'] !== 'undefined' ? String(options.separator) : '+';
  localObj.addition = typeof options['addition'] !== 'undefined' ? String(options.addition) : '';
  localObj.additionRepeatTimes = options.additionRepeatTimes > 0 ? options.additionRepeatTimes : 0;
  localObj.additionSeparator = typeof options['additionSeparator'] !== 'undefined' ? String(options.additionSeparator) : '|';

  /*Удобно разделить итоговую строку на два компонента: сама строка и добавочная часть*/
  let res = '';
  let addStr = '';

  /*Формирование добавочной части*/
   // Если есть добавочная часть
    if (localObj.additionRepeatTimes <= 1) { // Если добавочная часть повторяется 1 раз (т. е. не будет separator)
      addStr += localObj.addition;
    } else { // Если добавочная часть повторяется больше 1 раза (т. е. будут separator)
      addStr += localObj.addition;
      for (let i = 1; i < localObj.additionRepeatTimes; i++) { // Повторений на 1 меньше поскольку перед циклом есть 1 повторение
        addStr += localObj.additionSeparator + localObj.addition;
      };
    };
  

  /*Формирование самой строки*/
   // Если нужно повторять строку
    if (localObj.repeatTimes <= 1) { // Если нужно строку сформировать (т. е. повторить 1 раз)
      res += str + addStr;
    } else {
      res += str + addStr;
      for (let i = 1; i < localObj.repeatTimes; i++) { // Повторений на 1 меньше поскольку перед циклом есть 1 повторение
        res += localObj.separator + str + addStr;
      };
    };
  

   // Если строка повторяется
  return res;
  
};
  