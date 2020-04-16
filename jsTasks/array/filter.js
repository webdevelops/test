const arr = [1, 2, 4, 6, 9, 3, 0, 36];

function filterGange(arr, from, to) {
  return arr.filter(item => (from <= item && item <= to));
}

console.log(filterGange(arr, 1, 14))