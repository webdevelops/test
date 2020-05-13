import { Component, Input } from '@angular/core';

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
  template: `<p>User name: {{userName}}</p>
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

  get userAge() {return this._userAge}
}