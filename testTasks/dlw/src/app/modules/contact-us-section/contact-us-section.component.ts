import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact-us-section',
  templateUrl: './contact-us-section.component.html',
  styleUrls: ['./contact-us-section.component.scss']
})
export class ContactUsSectionComponent implements OnInit {
  public contactUsForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.contactUsForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      skypeOrPhone: new FormControl(''),
      message: new FormControl('')
    })
  }

  onSubmit(): void {

  }

  get name() {
    return this.contactUsForm.get("name").value;
  }

  get email() {
    return this.contactUsForm.get("email").value;
  }

  get skypeOrPhone() {
    return this.contactUsForm.get("skypeOrPhone").value;
  }

  get message() {
    return this.contactUsForm.get("message").value;
  }
}
