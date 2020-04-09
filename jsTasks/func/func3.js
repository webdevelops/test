function min(a, b) {
  return a < b ? a : b;
}

console.log(min(13, 5));

console.log('-----');

const ask = (question, yes, no) => {
  if (question) yes();
  else no();
}

ask('Do you agree',
  () => console.log('Welcome!'),
  () => console.log('Bye!')
);