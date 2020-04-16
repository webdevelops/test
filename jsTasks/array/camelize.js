function camelize(str) {
  const camelizeFirstLetter = (str, index) => {
    return (index == 0)
      ? str
      : str[0].toUpperCase() + str.slice(1);
  }
  
  return str
    .split('-')
    .map(camelizeFirstLetter)
    .join('');
}

console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));