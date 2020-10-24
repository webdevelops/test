//Angular
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

//App
import { IconList } from 'src/app/core/mock/icon-list';

@Component({
  selector: 'app-cart-window',
  templateUrl: './cart-window.component.html',
  styleUrls: ['./cart-window.component.scss']
})
export class CartWindowComponent {
  items = Array.from({ length: 10 }).map((_, i) => `Item #${i}`);
  public iconList = IconList;
  public options: Array<ServiceList> = [];
  public selected = 'Chose messenger';
  public sendForm = new FormGroup({
    nameCompany: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]),
    messenger: new FormControl('', [Validators.required]),
    comment: new FormControl('')
  });

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
        name: 'messenger',
        icon: this.iconList.Messenger
      },
      {
        name: 'email',
        icon: this.iconList.Email
      },
      {
        name: 'whatsapp',
        icon: this.iconList.Whatsapp
      }
    ]
  }

  modalClose($event) {
  }

}

export interface ServiceList {
  name: string;
  icon: string;
}