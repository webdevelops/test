function printNumbers(from, to) {
  let timerId = setInterval(() => {
    console.log(from);

    if (from == to) clearInterval(timerId);
    from++;

  }, 1000);
}

function printNumbers2(from, to) {
  setTimeout(function nextNumber() {
    console.log(from);

    if (from < to) {
      setTimeout(nextNumber, 1000);
    }
    from++;

  }, 1000);
}

printNumbers(1, 10);
printNumbers2(1, 10);