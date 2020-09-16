import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-account',
//   templateUrl: './account.component.html',
//   styleUrls: ['./account.component.scss']
// })
// export class AccountComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

import { FormGroup, FormControl, Validators } from '@angular/forms';

const links = [
  { path: 'account', icon: 'settings', title: 'Account info' },
  { path: 'users', icon: 'supervisor_account', title: 'Users' },
  { path: 'subscripion', icon: 'sentiment_satisfied_alt', title: 'Subscripion' },
  { path: 'billing', icon: 'credit_card', title: 'Billing' },
  { path: 'invoices', icon: 'wysiwyg', title: 'Invoices' },
  { path: 'gdpr', icon: 'security', title: 'GDPR' },
  { path: 'logout', icon: 'login', title: 'Log Out' }
];

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  filterNav = links;
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

  onSubmit() {

  }

}

