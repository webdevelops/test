let user = {
  name: "John",
  years: 45,
};

let { name, years: age, isAdmin = false } = user;

console.log("isAdmin", isAdmin)
console.log("age", age)
console.log("name", name)

