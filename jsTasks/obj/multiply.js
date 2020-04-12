const menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

console.log(menu);

function multiplyNumeric(obj) {
  if (isEmpty(obj)) {
    return;
  }

  for (let key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] *= 2;
    }
  }
}

multiplyNumeric(menu);

console.log(menu);

function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }

  return true;
}