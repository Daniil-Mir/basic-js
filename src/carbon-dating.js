const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  const A = Number(sampleActivity);

  if (typeof(sampleActivity) === 'string' &&  // Проверка входного параметра
      A !== NaN &&                            // и проверка преобразования в число.
      A > 0 && 
      A < MODERN_ACTIVITY) {
        let k = Math.log(2) / HALF_LIFE_PERIOD;
        let t = Math.ceil(Math.log(MODERN_ACTIVITY / A) / k);
        return t;
  } else {
    return false;
  };
};
