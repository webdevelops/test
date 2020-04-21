let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

console.log("keys", keys)

keys.push("age");

console.log("keys", keys);