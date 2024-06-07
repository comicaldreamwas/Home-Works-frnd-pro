function removeChars(str, charsToRemove) {
   let result = str;
   for (let char of charsToRemove) {
       let regex = new RegExp(char, 'g');
       result = result.replace(regex, '');
   }
   return result;
}

const inputString = prompt('Введіть рядок:');
const charsToRemoveInput = prompt('Введіть символи для видалення (без пробілів, наприклад "ld"):');


const charsToRemove = charsToRemoveInput.split('');

const resultString = removeChars(inputString, charsToRemove);
console.log(resultString);
