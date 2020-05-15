import { Component, OnInit, OnDestroy } from '@angular/core';

// @Component({
//   selector: 'my-app',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   name: string = 'Oleg';
//   age: number = 45;
//   colspan: number = 2;
//   count: number = 0;
//   increase($event: any): void {
//     this.count++;
//     console.log($event);
//   }
//   isRed: boolean = false;
//   blue: string = "isbluebox";
//   green: string = "isgreenbox"
// }

@Component({
  selector: 'my-app',
  template: `<h2>Number of clicks: {{clicks}}</h2>
            <child-comp 
              [(userName)]="name" [userAge]="age" 
              (onChanged)="onChanged($event)"
            >
            </child-comp>
            <p>Hello {{name}}</p>
            <input type="text" [(ngModel)]="name">
            <br/><br/>
            <input type="number" [(ngModel)]="age">`,
  styles: [`h2, p {color: #333}`]
})
export class AppComponent implements OnInit, OnDestroy {
  name: string = 'Pete';
  age: number = 45;
  clicks: number = 0;

  constructor() { this.log(`constructor`); }
  ngOnInit() { this.log(`onInit`); }
  ngOnDestroy() { this.log(`onDestroy`); }

  private log(msg: string) {
    console.log(msg);
  }

  onChanged(increased: any) {
    increased == true ? this.clicks++ : this.clicks--;
  }
}