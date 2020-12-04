import { Component } from '@angular/core';

import { from, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pwa-upwork';

  constructor() {
    const subject = new Subject<number>();

    subject.subscribe({
      next: (x) => console.log(`ObserverA: ${x}`)
    });

    subject.subscribe({
      next: (x) => console.log(`ObserverB: ${x} - ${x * 10}`)
    });

    // setTimeout(() => {
    //   subject.next(1);
    //   subject.next(2);
    // }, 5000);

    const observable = from([1, 2, 3]);

    // observable.subscribe(subject);
  }

}
