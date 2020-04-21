function truncate(str, maxLength) {
  return (str.length > maxLength) 
    ? str.slice(0, maxLength - 3) + '...'
    : str;
}

console.log(truncate("Hello and good buy", 15));
console.log(truncate(123, 15));