const { interval, timer, range } = require("rxjs");
const { take } = require("rxjs/operators");

const sub = interval(1000)
  .pipe(take(11))
  .subscribe(v => console.log(v));

setTimeout(() => sub.unsubscribe(), 7000);

timer(2500).subscribe(v => console.log('timer', v));

range(33, 5).subscribe(v => console.log(v));