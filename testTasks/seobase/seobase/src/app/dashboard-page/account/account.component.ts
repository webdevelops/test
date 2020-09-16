import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  isOpen = true;
  form: FormGroup;
  hideCurrentPass = true;
  hideNewPass = true;
  hideConfirmPass = true;

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      currentPass: new FormControl(null, [
        Validators.required,
        Validators.minLength(8)
      ]),
      newPass: new FormControl(null, [
        Validators.required,
        Validators.minLength(8)
      ]),
      confirmPass: new FormControl(null, [
        Validators.required,
        Validators.minLength(8)
      ])
    });
  }

  onSubmit() {}
}

