let arrayLike = {
  0: "Hello",
  1: "World",
  "test": "Ok", // --- not displaing
  length: 2
};

let arr = Array.from(arrayLike);  // --- make object itarable

// for (let item of arrayLike) {
for (let item of arr) {
  console.log(item);
}