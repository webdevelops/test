function Calculator() {
  this.method = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
  };

  this.calculate = function (str) {
    let split = str.split(' ');
    let a = +split[0],
      op = split[1],
      b = +split[2]

    if (!this.method[op] || isNaN(a) || isNaN(b)) return NaN;

    return this.method[op](a, b);
  };

  this.addMethod = function (name, func) {
    this.method[name] = func;
  };
}

let calc = new Calculator();

console.log("calc.calculate()", calc.calculate("3 + 4"));

calc.addMethod("*", (a, b) => a * b);

console.log("calc.calculate()", calc.calculate("3 * 4"));
console.log("calc.calculate()", calc.method);