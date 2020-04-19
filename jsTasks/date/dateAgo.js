let date = new Date();

function getDateAgo(date, day) {
  let dateCopy = new Date(date);
  
  dateCopy.setDate(dateCopy.getDate() - day);
  
  return dateCopy.getDate();
}

console.log("getDateAgo -> getDateAgo", getDateAgo(date, 5));
console.log("date", date);
console.log("date", date.getDate());