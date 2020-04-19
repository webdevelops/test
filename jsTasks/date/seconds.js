function getSecondsToday() {
  let now = new Date();
  let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  
  return `${Math.round((now - today) / 1000)} sec.`;
}

function getSecondsToTomorrow() {
  let now = new Date();
  let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
  
  return `${Math.round((tomorrow - now) / 1000)} sec.`;
}

console.log("getSecondsToday -> getSecondsToday: ", getSecondsToday());
console.log("getSecondsToTomorrow -> getSecondsToTomorrow: ", getSecondsToTomorrow());