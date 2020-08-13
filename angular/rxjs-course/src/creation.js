import { of, from, Observable } from 'rxjs';
import { scan } from 'rxjs/operators';

const stream$ = of(1, 2, 3, 4, 5);

stream$.subscribe(val => {
	// console.log('val', val);
});

const stream_2$ = from([1, 2, 2, 3, 3, 3]);
const stream_22$ = stream_2$;


// stream_2$.subscribe(val => console.log('arrVal', val));

stream_22$
	.pipe(
		scan((acc, v) => acc.concat(v), [])
	)
	// .subscribe(val => console.log('stream_2', val));


const stream_3$ = new Observable(observer => {
	observer.next('First value');

	setTimeout(() => observer.next('After 2000 ms'), 2000);
	setTimeout(() => observer.complete(), 2500);
	setTimeout(() => {
		observer.error('Something went wrong.');
	}, 3000);
	setTimeout(() => observer.next('After 4000 ms'), 4000);
});

// stream_3$.subscribe(
// 	val => console.log(val),
// 	err => console.log(err),
// 	() => console.log('Complete')
// );

stream_3$.subscribe({
	next(val) {
		console.log(val);
	},
	error(err) {
		console.log(err);
	},
	complete() {
		console.log('Complete - as abject')
	}
});