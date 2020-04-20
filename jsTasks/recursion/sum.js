function sunTo(n) {
  let sum = 0;
  
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  
  return sum;
}

function sunToRec(n) {
  if (n == 1) return 1;
  return n + sunToRec(n - 1);
}

console.log("sunTo -> ", sunTo(10));
console.log("sunToRec -> ", sunToRec(10));