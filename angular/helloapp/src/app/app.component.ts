import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { ChildComponent } from './child.component';

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
  template: `<h2  [ngClass]="{verdanaFont:true}">Number of clicks: {{clicks}}</h2>
            <child-comp 
              [(userName)]="name" [userAge]="age" 
              (onChanged)="onChanged($event)"
            >
              <h3 #headerContent [ngClass]="currentClasses"> Welcom ContentChild !!!</h3>
            </child-comp>
            <p [ngClass]="{segoePrintFont:true}" >Hello {{name}}</p>
            <input type="text" [(ngModel)]="name">
            <br/><br/>
            <input type="number" [(ngModel)]="age">
            <br/><br/>
            <h5 [ngClass]="currentClasses">Template variables</h5>
            <button (click)="increment()">+</button>
            <button (click)="decrement()">-</button>
            <h5>ViewChild to Template variables</h5>
            <h6 #nameText>{{nameVC}}</h6>
            <p>{{nameText.textContent}}</p>
            <button (click)="change()">Change</button>
            <h3>AppModule</h3>
            <data-comp></data-comp>
            <h6>Directive</h6>
            <p>Text 1 - without</p>
            <p bold>Text 2 - with Directive</p>`,
  styles: [`h2, p {color: #333;}
            .verdanaFont {font-size: 33px; font-family: Verdana;}
            .segoePrintFont {font-size: 14px; font-family: "Segoe Print;}
            .navyColor {color: navy;}`]
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

  @ViewChild(ChildComponent, { static: false })
  private counterComponent: ChildComponent;

  increment() { this.counterComponent.increment(); }
  decrement() { this.counterComponent.decrement(); }

  @ViewChild("nameText", {static: false})
  nameParagraph: ElementRef;

  nameVC: string = "Tom";

  change() {
    console.log(this.nameParagraph.nativeElement.textContent);
    this.nameParagraph.nativeElement.textContent = "Hello";
  }

  isVerdana = true;
  isNavy = true;

  currentClasses = {
    verdanaFont: this.isVerdana,
    navyColor: this.isNavy
  };
}