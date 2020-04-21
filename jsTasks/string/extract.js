function extractCurrencyValue(value) {
  return Number(value[0]) ? +value : +value.slice(1);
}

console.log(extractCurrencyValue("$12"));
console.log(extractCurrencyValue("12"));
// console.log(extractCurrencyValue(12));