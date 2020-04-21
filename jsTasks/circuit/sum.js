function sum(num1) {
  return function(num2) {
    return num1 + num2;
  }
}

const sum2 = num1 => num2 => num1 + num2;

function sum3(num1) {
  return num2 => num1 + num2;
}

console.log(sum(2)(3));
console.log(sum(12)(13));

console.log("sum2", sum2(5)(7));
console.log("sum3", sum3(15)(7));