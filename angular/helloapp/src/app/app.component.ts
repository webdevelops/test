import { Component } from '@angular/core';

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
  template: `<child-comp [userName]="name" [userAge]="age"></child-comp>
            <p>Hello {{name}}</p>
            <input type="text" [(ngModel)]="name">
            <br/><br/>
            <input type="number" [(ngModel)]="age">`,
  styles: [`h2, p {color: #333}`]
})
export class AppComponent {
  name: string = 'Pete';
  age: number = 45;
}