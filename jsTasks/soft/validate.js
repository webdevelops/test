function validateLogin(login) {
  if (Number(login[0])) return false;
  if (login.length < 2 || login.length > 10) return false;

  // const regexp = /^[a-zA-Z0-9]+$/;
  const regexp = /^\w+$/;
  
  return regexp.test(login);
}

const login = 'a1as';
const login2 = 'a1as!';

console.log(validateLogin(login));
console.log(validateLogin(login2));