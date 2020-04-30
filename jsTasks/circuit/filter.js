let arr = [2, 4, 7, 9, 0, -2, 39];

function isBetween(a, b) {
  return item => (a <= item && item <= b);
}

function inArray(arr) {
  return item => (arr.includes(item));
}

console.log("isBetween -> isBetween", isBetween(2, 7)(5)); // --- tisting function
console.log("inArray -> inArray", inArray([1, 2, 3])(2)); // --- tisting function


console.log(arr.filter(isBetween(4, 20)));
console.log(arr.filter(inArray([1, 4, -2, 5, 39])));
