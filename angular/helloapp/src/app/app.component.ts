import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';

import { ChildComponent } from './child.component';
import { DataService } from './data.service';
import { LogService } from './log.service';

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
  template: `<h4 red selectedSize="28px" [defaultSize]="'14px'" [ngClass]="{verdanaFont:true}">1. Number of               clicks: {{clicks}}</h4>
            <child-comp 
              [(userName)]="name" [userAge]="age" 
              (onChanged)="onChanged($event)"
            >
              <h4 #headerContent [ngClass]="currentClasses">2. Welcom ContentChild !!!</h4>
            </child-comp>
            <p red [ngClass]="{segoePrintFont:true}" >Hello {{name}}</p>
            <input type="text" [(ngModel)]="name">
            <br/><br/>
            <input type="number" [(ngModel)]="age">
            <br/><br/>
            <h4 [ngClass]="currentClasses">3. Template variables</h4>
            <button (click)="increment()">+</button>
            <button (click)="decrement()">-</button>
            <h5>ViewChild to Template variables</h5>
            <h4 #nameText>4. {{nameVC}}</h4>
            <p>{{nameText.textContent}}</p>
            <button (click)="change()">Change</button>
            <h4>5. AppModule</h4>
            <data-comp></data-comp>
            <h4>6. Directive</h4>
            <p>Text 1 - without</p>
            <p bold>Text 2 - with Directive</p>
            <h4>7. ngIf, ngFor, ngSwitch</h4>
            <p *ngIf="condition">Hello world</p>
            <p *ngIf="!condition">Bye world</p>
            <button (click)="toggle()">Toggle</button>
            <p *ngIf="condition; else some">show ng-template</p>
            <ng-template #unset>show unset</ng-template>
            <ng-template #some>show something else...</ng-template>
            <button (click)="toggle()">Toggle-2</button>
            <ul>
              <li *ngFor="let item of items; let i = index">{{i + 1}}. {{item}}</li>
            </ul>
            <div [ngSwitch]="count">
              <ng-template ngSwitchCase="1">{{count * 10}}</ng-template>
              <ng-template ngSwitchCase="2">{{count * 100}}</ng-template>
              <ng-template ngSwitchDefault>{{count * 1000}}</ng-template>
            </div>
            <h4>8. Structural directives</h4>
            <p *while="condition">First paragraf</p>
            <p *while="!condition">Second paragraf</p>
            <button (click)="toggle()">Toggle()</button>
            <h4>9. Services</h4>
            <div class="panel">
              <div>
                <input [(ngModel)]="name2" placeholder="Model" />
                <button (click)="addItem(name2)">Add</button>
              </div>
              <table>
                <tr *ngFor="let item of items2">
                  <td>{{item}}</td>
                </tr>
              </table>
            </div>`,
  providers: [DataService, LogService],
  styles: [`h2, p {color: #333;}
            .verdanaFont {font-size: 33px; font-family: Verdana;}
            .segoePrintFont {font-size: 14px; font-family: "Segoe Print;}
            .navyColor {color: navy;}`]
})
export class AppComponent implements OnInit, OnDestroy {
  name: string = 'Pete';
  age: number = 45;
  clicks: number = 0;
  items2: string[] = [];
  name2: string;

  constructor(private dataService: DataService) { this.log(`constructor`); }

  addItem(name: string) {
    this.dataService.addData(name);
  }

  ngOnInit() {
    this.log(`onInit`);
    this.items2 = this.dataService.getData();
  }
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

  @ViewChild("nameText", { static: false })
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

  condition: boolean = true;

  toggle() {
    this.condition = !this.condition;
  }

  items = ["Tom", "Bob", "Sam", "Bill"];

  count: number = 5;

}