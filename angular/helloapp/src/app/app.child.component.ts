import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked } from '@angular/core';

// @Component({
//   selector: 'child-comp',
//   template: `<ng-content></ng-content>
//             <p>Hi {{name}}!</p>`,
//   styles: [`h2, p {color: red;}`]
// })
// export class ChildComponent {
//   name: string = "Tom";
// }

@Component({
  selector: 'child-comp',
  template: `<button (click)="change(true)">+</button> :
            <button (click)="change(false)">-</button>
            <br/><br/>
            <input [(ngModel)]="userName" (ngModelChange)="onNameChange($event)">
            <p>User name: {{userName}}</p>
            <p>Test!</p>
            <p>User age: {{userAge}}</p>`,
})
export class ChildComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  @Input() userName: string;
  _userAge: number;


  constructor() { this.log(`constructor-child`); }
  ngOnInit() { this.log(`OnInit-child`); }

  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {
      let chng = changes[propName];
      // let cur = JSON.stringify(chng.currentValue);
      // let prev = JSON.stringify(chng.previousValue);
      let cur = chng.currentValue;
      let prev = chng.previousValue;
      this.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    }
  }

  ngDoCheck() { this.log('ngDoCheck-child'); }
  ngAfterContentInit() { this.log(`AfterContentInit-child`); }
  ngAfterContentChecked() { this.log(`AfterContentChecked-child`); }
  ngAfterViewInit() { this.log(`AfterViewInit-child`); }
  ngAfterViewChecked() { this.log(`AfterViewChecked-child`); }

  private log(msg: string) {
    console.log(msg);
  }


  @Input()
  set userAge(age: number) {
    if (age < 0) this._userAge = 0;
    else if (age > 100) this._userAge = 100;
    else this._userAge = age;
  }

  get userAge() { return this._userAge }

  @Output() onChanged = new EventEmitter<boolean>();
  change(increased: any) {
    this.onChanged.emit(increased);
  }

  @Output() onUserChange = new EventEmitter<string>();
  onNameChange(model: string) {
    this.userName = model;
    this.onUserChange.emit(model);
  }
}