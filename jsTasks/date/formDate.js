function formatDate(date) {
  let now = new Date();
  let diff = now - date;
  
  if (diff < 1000) {
    return 'right now';
  }
  
  let sec = Math.round(diff / (60 * 1000));
  console.log("formatDate -> sec", sec)
  if (sec < 60) {
    return `${sec} sec. ago`;
  }
  
  let min = Math.round(diff / (60 * 60 * 1000));
  if (min < 60) {
    return `${min} min. ago`;
  }
  
  return null;
}

console.log("formatDate -> ", formatDate(new Date() - 10 * 10));
console.log("formatDate -> ", formatDate(new Date() - 10 * 1000));
console.log("formatDate -> ", formatDate(new Date() - 10 * 10000));
console.log("formatDate -> ", formatDate(new Date() - 10 * 100000));