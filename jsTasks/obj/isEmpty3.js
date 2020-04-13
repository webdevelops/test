function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }

  return true;
}

let schedule = {};

schedule["07:10"] = "get up";

console.log(isEmpty(schedule));