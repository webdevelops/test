function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }

  return true;
}

const schedule = {};

schedule["8:30"] = "get up";

console.log(isEmpty(schedule));