import { Component } from '@angular/core';

@Component({
  selector: 'child-comp',
  template: `<ng-content></ng-content>
            <p>Hi {{name}}!</p>`,
  styles: [`h2, p {color: red;}`]
})
export class ChildComponent {
  name: string = "Tom";
}