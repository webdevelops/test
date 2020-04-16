let arr = [1, 2, 3];

function shuffle(arr) {
  arr.sort(() => Math.random() - 0.5);
}

shuffle(arr);

console.log("shuffle -> arr", arr)