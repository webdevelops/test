const arr = [2, 5, 1, 2, 4, 4, 0, 6, 8];

function filterRangeInPlace(arr, from , to) {
  for (let i = 0; i < arr.length; i++) {
    if (from > arr[i] || arr[i] > to) {
      arr.splice(i, 1);
      i--;
    }
  }
}

filterRangeInPlace(arr, 2, 5);

console.log(arr);