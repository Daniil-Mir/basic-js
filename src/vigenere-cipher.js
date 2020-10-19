const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(flag = true) {
    this.flag = flag;
  }

  encrypt(message, key) {
    if (typeof message === 'undefined' || typeof key === 'undefined') throw new Error(); // Валидация входных параметров

    let ind = 0;
    let temp = '';
    for (let i = 0; i < message.length; i++) { // Преобразование ключа под размер message с учетом побелов.

      if (message[i] === ' ') {
        temp += ' ';
      } else {
        temp += key[ind];
        ind++;
      };

      if (ind > key.length - 1) {
        ind -= key.length;
      };

    }
    key = temp;

    message = message.toUpperCase().trim();
    key = key.toUpperCase();

    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let res = '';
    let indexM = -1;
    let indexK = -1;

    // Реализация алгоритма шифрования.
    for (let i = 0; i < message.length; i++) {
      indexM = alphabet.indexOf(message[i]);
      indexK = alphabet.indexOf(key[i]);
      if (indexM !== -1) { // Проверка наличия символа в алфавите. Подразумевается, что key состоит из символов алфавита
        indexM += indexK;
        if (indexM >= 26) indexM -= 26;
        res += alphabet[indexM];
      } else {
        res += message[i];
      };
    };

    if (this.flag === true) { // Прямая машина
      return res;
    } else { // Обратная машина
      return res.split('').reverse().join('');
    };
  }

  decrypt(message, key) {
    if (typeof message === 'undefined' || typeof key === 'undefined') throw new Error(); // Валидация входных параметров

    let ind = 0;
    let temp = '';
    for (let i = 0; i < message.length; i++) {

      if (message[i] === ' ') {
        temp += ' ';
      } else {
        temp += key[ind];
        ind++;
      };

      if (ind > key.length - 1) {
        ind -= key.length;
      };

    }
    key = temp;

    message = message.toUpperCase();
    key = key.toUpperCase();


    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let res = '';
    let indexM = -1;
    let indexK = -1;

    // Реализация алгоритма дешифровки
    for (let i = 0; i < message.length; i++) {
      indexM = alphabet.indexOf(message[i]);
      indexK = alphabet.indexOf(key[i]);
      if (indexM !== -1) {
        indexM -= indexK;
        if (indexM < 0) indexM += 26;
        res += alphabet[indexM];
      } else {
        res += message[i];
      };
    };

    if (this.flag === true) { // Прямая машина
      return res;
    } else { // Обратная машина
      return res.split('').reverse().join('');
    }; 
  }
}

module.exports = VigenereCipheringMachine;
