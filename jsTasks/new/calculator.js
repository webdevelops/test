function Calculator() {
  this.read = function() {
    // this.num1 = prompt('Enter first number: ', 0);
    // this.num2 = prompt('Enter second number: ', 0);
    this.num1 = 5;
    this.num2 = 8;
  },
  this.sum = function() {
    return this.num1 + this.num2;
  },
  this.mul = function() {
    return this.num1 * this.num2;
  }
}

const calc = new Calculator();

calc.read();
console.log(calc.sum());
console.log(calc.mul());