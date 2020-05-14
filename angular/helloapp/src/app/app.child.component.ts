import { Component, Input, Output, EventEmitter } from '@angular/core';

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
            <br /><br />
            <input [(ngModel)]="userName" (ngModelChange)="onNameChange($event)">
            <p>User name: {{userName}}</p>
            <p>User age: {{userAge}}</p>`,
})
export class ChildComponent {
  @Input() userName: string;
  _userAge: number;

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