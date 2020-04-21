function sumOfDigits(num) {
  const calcSum = (currentNum, nextNum) => currentNum + nextNum;

  let result = num
    .toString()
    .split('')
    .map(str => +str)
    .reduce(calcSum, 0)

  if (result.toString().length == 1) {
    return result;
  }
  
  return sumOfDigits(result);
}

console.log(sumOfDigits(1234567));