import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { User } from '../auth.interface';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  hide = true;
  formLogin: FormGroup;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.formLogin = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(8)
      ])
    });
  }

  onSubmit() {
    if (this.formLogin.invalid) {
      return;
    }

    const user: User = {
      email: this.formLogin.value.email,
      password: this.formLogin.value.password
    };

    this.authService.login(user);
  }
}
