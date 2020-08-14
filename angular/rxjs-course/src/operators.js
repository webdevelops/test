const { interval, fromEvent } = require("rxjs");
const { map, filter, tap, take, takeLast, takeWhile, scan, reduce, switchMap } = require("rxjs/operators");

const s$ = interval(1000)
  .pipe(
    take(3),
    tap(v => console.log(v)),
    // map(v => v * 3),
    // filter(v => v % 2 == 0),
    // takeLast(5)
    // takeWhile(v => v < 8)
    // scan((acc, v) => acc + v)
    reduce((acc, v) => acc + v)
  );

s$.subscribe({
  next: v => console.log('Next:', v),
  complete: () => console.log('Complete')
});

fromEvent(document, 'click')
  .subscribe(() => {
    const s2$ = interval(1000)
      .pipe(
        take(5)
      )
      .subscribe({
        next: v => console.log('into:', v)
      });
  })

fromEvent(document, 'dblclick')
  .pipe(
    switchMap(event => {
      return interval(1000)
        .pipe(
          take(3),
          tap(v => console.log('dbl', v))
        )
    })
  )
  .subscribe({
    next: v => console.log('dbl-2', v)
  })