let date = new Date();

function getLastDayOfMonth(year, month) {
  let date = new Date(year, month + 1, 0);
  
  return date.getDate();
}

console.log("getLastDayOfMonth -> getLastDayOfMonth", getLastDayOfMonth(2020, 3));
console.log("getLastDayOfMonth -> getLastDayOfMonth", getLastDayOfMonth(2020, 1));
console.log("getLastDayOfMonth -> getLastDayOfMonth", getLastDayOfMonth(2020, 0));