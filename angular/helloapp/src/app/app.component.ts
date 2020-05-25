import { Component } from '@angular/core';

export class User {
  name: string;
  email: string;
  phone: string;
}

@Component({
  selector: 'my-app',
  templateUrl: `./app.component.html`
  // template: `<div>Hello</div>`
})
export class AppComponent {
  user: User = new User;
  addUser() {
    console.log(this.user);
  }
}
