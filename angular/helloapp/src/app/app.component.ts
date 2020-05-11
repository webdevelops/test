import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = 'Oleg';
  age: number = 45;
  colspan: number = 2;

  count: number = 0;
  increase($event: any): void {
    this.count++;
    console.log($event);
  }

  isRed: boolean = false;
  blue: string = "isbluebox";
  green: string = "isgreenbox"
}