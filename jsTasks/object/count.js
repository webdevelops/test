let user = {
  name: "John",
  age: 45,
  length: 3
};

function count(obj) {
  return Object.keys(obj).length;
}

console.log("count -> count", count(user));