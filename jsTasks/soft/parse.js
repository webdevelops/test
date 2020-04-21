function parseNumber(num) {
  const stringNumber = num.toString();
  const arrayNumber = [...stringNumber];

  let odd = 0;
  let even = 0;

  for (let i = 0; i < arrayNumber.length; i++) {
    if (arrayNumber[i] % 2 === 0) {
      even++;

    } else {
      odd++;
    }
  }

  return { odd, even };
}

console.log(parseNumber(12345));
console.log(parseNumber(100));