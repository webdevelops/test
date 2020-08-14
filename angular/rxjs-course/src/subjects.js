const { Subject, BehaviorSubject, ReplaySubject } = require("rxjs");

document.addEventListener('click', () => {
  const stream$ = new Subject();

  stream$.subscribe(v => console.log(v));

  stream$.next('Hello');
  stream$.next('Rx');
  stream$.next('JS');

  console.log('-----------');

  const stream_2$ = new BehaviorSubject('Behavior Subject!');

  stream_2$.subscribe(v => console.log(v));

  console.log('-----------');

  const stream_3$ = new ReplaySubject(2);

  stream_3$.next('1');
  stream_3$.next('2');
  stream_3$.next('3');
  
  stream_3$.subscribe(v => console.log(v));
});