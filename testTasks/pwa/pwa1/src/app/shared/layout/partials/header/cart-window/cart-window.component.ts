// Angulat
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

// App
import { IconList } from 'src/app/core/mock/icon.list';

@Component({
  selector: 'app-cart-window',
  templateUrl: './cart-window.component.html',
  styleUrls: ['./cart-window.component.scss']
})
export class CartWindowComponent {
  items = Array.from({ length: 10 }).map((_, i) => `index #${i}`);
  public iconList = IconList;
  public selected = 'Chose messenger';
  public options: Array<ServiceList> = [];

  public sendForm = new FormGroup({
    nameCompany: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(30)
    ]),
    messenger: new FormControl('', [Validators.required]),
    comment: new FormControl('')
  });

  // fb: FormBuilder

  constructor() {
    this.options = [
      {
        name: 'telegram',
        icon: this.iconList.Telegram
      },
      {
        name: 'skype',
        icon: this.iconList.Skype
      },
      {
        name: 'whatsapp',
        icon: this.iconList.Whatsapp
      },
      {
        name: 'email',
        icon: this.iconList.Email
      }
    ];
  }

}

export interface ServiceList {
  name: string;
  icon: string;
}
