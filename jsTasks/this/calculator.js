const calculator = {
  read() {
    this.num1 = +prompt('Enter any first number: ', 0);
    this.num2 = +prompt('Enter any second number: ', 0);
  },

  sum() {
    return this.num1 + this.num2;
  },

  mul() {
    return this.num1 * this.num2;
  }
}

const calc = calculator;

calc.read();
alert(calc.sum());
alert(calc.mul());