import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss']
})
export class SingupComponent implements OnInit {
  isLoading = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSingup(form: NgForm) {
    console.log('form', form.value);
  }

}
