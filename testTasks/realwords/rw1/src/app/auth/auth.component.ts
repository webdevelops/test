import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { Errors } from '../core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  authType = '';
  errors: Errors = { errors: {} };
  title: String = '';
  isSubmitting = false;
  authForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {
    this.authForm = this.fb.group({
      'email': ['', Validators.required],
      'password': ['', Validators.required]
    });
  }

  ngOnInit() {
    this.route.url.subscribe(data => {
      this.authType = data[data.length - 1].path;
      this.title = (this.authType === 'login') ? 'Sign In' : 'Sign Up';

      if (this.authType === 'register') {
        this.authForm.addControl('username', new FormControl());
      }
    });
  }

}
