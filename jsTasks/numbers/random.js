function random(min, max) {
  return min + Math.random() * (max - min);
}

console.log(random(1, 3));

function randomInteger(min, max) {
  return Math.floor(min + Math.random() * (max + 1 - min));
}

console.log(randomInteger(1, 3));