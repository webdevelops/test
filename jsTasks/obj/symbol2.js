const id = Symbol("id");

let user = {
  name: "Pete",
  age: 45,
  [id]: "hidden"
};

for (let key in user) {
  console.log("key - ", key);
}