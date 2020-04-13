const id = Symbol("id");

let user = {
  name: "Pete",
  age: 45,
  [id]: "Hello from Pete"
};

for (let key in user) {
  console.log(key);
}