let id = Symbol("id");

let user = {
  name: "Pete",
  age: 45,
  [id]: "secret"
};

for (let key in user) {
  console.log('key: ', key, ' - ', 'user[key]: ', user[key]);
  console.log(user[id]);
}