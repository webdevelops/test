import { Component, OnInit } from '@angular/core';
import { from, interval, fromEvent, of, pipe } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, filter, catchError, retry } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {

  constructor() {
    const data = from(fetch('https://api.github.com/search/users?q=vladilen'));
    // data.subscribe({
    // next(response) {console.log('next: ', response)},
    // error(err) {console.log('error: ', err)},
    // complete() {console.log('Complete!')}
    // });


    const secondsCounter = interval(1000);
    // secondsCounter.subscribe(n => console.log(`It's been ${n} seconds since subscribing!`));

    // const el = document.getElementById('my-element');
    // console.log("RxjsComponent -> constructor -> el", el)
    // const mouseMoves = fromEvent(el, 'mousemove');
    // const subscribtion = mouseMoves.subscribe((evt: MouseEvent) => {
    // console.log(`Coords: ${evt.clientX} X ${evt.clientY}`);

    //   if (evt.clientX < 40 && evt.clientY < 40) {
    //     subscribtion.unsubscribe();
    //   }
    // });;


    const apiData = ajax('https://api.github.com/search/users?q=vladilen');

    apiData.subscribe(res => {
      // console.log('res', res);
      // console.log('res - 2', res.status, res.response);
    });

    const nums = of(1, 2, 3);
    const squareValue = map((val: number) => val * val);
    const squareNums = squareValue(nums);

    // squareNums.subscribe(sq => console.log(sq));

    const nums_2 = of(1, 2, 3, 4, 5);
    const squareOddVals = pipe(
      filter((n: number) => n % 2 !== 0),
      map(n => n * n)
    );
    const squareOdd = squareOddVals(nums_2);

    squareOdd.subscribe(x => console.log(x));
    
    
    const apiData_2 = ajax('https://apis.github.com/search/users?q=vladilen').pipe(
      retry(3),
      map(res => {
        if (!res.response) {
          throw new Error('Value expected!');
        }

        return res.response;
      }),
      catchError(err => of([]))
    );

    // apiData_2.subscribe({
    //   next(res) {console.log(res)},
    //   error(err) {console.log('Error was cought but not run')},
    //   complete() {console.log('Go ahead!')}
    // });

    apiData_2.subscribe(
      res => console.log(res),
      (error) => console.log('It\'serror', error)
    );


  };
}
