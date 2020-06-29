import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { MyValidators } from './my.validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  form: FormGroup
  appState = 'off'

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('', [
        Validators.email,
        Validators.required,
        MyValidators.restrictedEmails
      ], [MyValidators.uniqEmail]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6)
      ]),
      address: new FormGroup({
        country: new FormControl('ua'),
        city: new FormControl('', Validators.required)
      }),
      skills: new FormArray([])
    });
  }

  submit() {
    if (this.form.valid) {
      console.log('Form submited: ', this.form);
      const formData = { ...this.form.value };

      console.log('Form data: ', formData);

      this.form.reset();
    }
  }

  setCapital() {
    const cityMap = {
      ru: 'Moskow',
      ua: 'Kiev',
      en: 'New-York'
    };

    const cityKey = this.form.get('address').get('country').value;
    const city = cityMap[cityKey];

    this.form.patchValue({ address: { city }, country: 2 });

    console.log(this.form)
  }

  addSkills() {
    // console.log('1', this.form.get('skills'));
    // console.log('2', this.form.get('skills').controls);
    const control = new FormControl('', Validators.required);
    // (<FormArray>this.form.get('skills')).push()
    (this.form.get('skills') as FormArray).push(control);
  }

  handleChange() {
    console.log(this.appState);
  }
}