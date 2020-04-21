let str = "a4.3r t 4r4,3 43a b3.45b 123 cc gaeg4";

// -------- find and return all numbers as array of numbers !!!!!!!
function searchNumber(str) {
  return str.match(/[\d\,\.\+]+/g);  
}
console.log(searchNumber(str));





console.log("-----------");

// -------- find and join all numbers into one number
let num2 = parseFloat(str.replace(/\D+/g, ""));  
console.log(num2);

console.log("-----------");

// -------- find first number
let re = /\d+/g;
let num3 = parseInt(re.exec(str));  
console.log(num3);