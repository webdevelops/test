const schedule = {};

schedule["7:00"] = "get up";

function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }

  return true;
}

console.log(isEmpty(schedule));