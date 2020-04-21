function ucFirst(str) {
  if (typeof str != 'string') return 'Enter any word.';

  return str[0].toUpperCase() + str.slice(1);
}

console.log(ucFirst("hello"));
console.log(ucFirst("123"));
console.log(ucFirst(123));