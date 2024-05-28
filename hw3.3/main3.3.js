function splitNumber(number) {
  let numberStr = number.toString();

  let digitsArray = numberStr.split("");

  let result = digitsArray.join(" ");

  return result;
}


let number = 10369;
console.log(splitNumber(number)); 
