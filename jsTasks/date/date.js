let date = new Date(2020, 3, 19);
// let date = new Date(2013, 1, 20, 3, 12);

console.log("date", date);

function getWeekDay(date) {
  // let week = {
  //   0: "Вс", 1: "Пн", 2: "Bт", 3: "Ср", 4: "Чт", 5: "Пт", 6: "Сб",
  // };

  let days = ["Вс", "Пн", "Bт", "Ср", "Чт", "Пт", "Сб"];

  return days[date.getDay()];
}

console.log("getWeekDay -> getWeekDay", getWeekDay(date));

function getLocalDay(date) {
  let day = date.getDay();

  return (day == 0) ? 7 : day;
}

console.log("getLocalDay -> getLocalDay", getLocalDay(date));