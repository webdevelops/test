import { Component } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';

export class User {
  name: string;
  email: string;
  phone: string;
}

@Component({
  selector: 'my-app',
  templateUrl: `./app.component.html`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: User = new User;
  myForm2: FormGroup;
  constructor() {
    this.myForm2 = new FormGroup({
      "userName": new FormControl("Tom", Validators.required),
      "userEmail": new FormControl("", [
        Validators.required,
        Validators.email
      ]),
      "userPhone": new FormControl("", Validators.pattern("[0-9]{10}"))
    });
  }

  addUser() {
    console.log(this.user);
  }

  submit(form: NgForm) {
    console.log(form);
  }

  submit2() {
    console.log(this.myForm2);
  }

  onSubmit(form: NgForm) {
    console.log(form);
  }
}
