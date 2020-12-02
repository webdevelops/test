// Angular
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

// App
import { IconList } from 'src/app/core/mock/icon-list';
import {Observable} from 'rxjs';
import {ProductModel} from '../../../../../core/models/product.model';
import {CartSelectors} from '../../../../../core/store/cart/cart.selectors';
import {CartActions} from '../../../../../core/store/cart/cart.actions';

export interface ServiceList {
  name: string;
  icon: string;
  userData: string;
}


@Component({
  selector: 'app-cart-window',
  templateUrl: './cart-window.component.html',
  styleUrls: ['./cart-window.component.scss']
})
export class CartWindowComponent {
  public cartProducts$: Observable<ProductModel[]>;
  public iconList = IconList;
  public options: Array<ServiceList> = [];
  public onlyRead: boolean = true;
  // public selected = ;
  public sendForm = new FormGroup({
    nameCompany: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]),
    messenger: new FormControl('', [Validators.required]),
    messengerData: new FormControl(''),
    comment: new FormControl('')
  });

  constructor(private cartSelectors: CartSelectors, private cartActions: CartActions) {
    console.log(this.sendForm);

    this.options = [
      {
        name: 'telegram',
        icon: this.iconList.Telegram,
        userData: ''
      },
      {
        name: 'skype',
        icon: this.iconList.Skype,
        userData: ''
      },
      {
        name: 'messenger',
        icon: this.iconList.Messenger,
        userData: ''
      },
      {
        name: 'email',
        icon: this.iconList.Email,
        userData: ''
      },
      {
        name: 'whatsapp',
        icon: this.iconList.Whatsapp,
        userData: ''
      }
    ];

    this.cartProducts$ = this.cartSelectors.selectAllProducts$();
  }

  modalClose(): void {
    console.log('userData: ', this.sendForm.controls.messengerData.value);
    console.log('messanger: ', this.sendForm.controls.messenger.value);
  }

  getUserData($event): void {
    this.sendForm.controls.messenger.setValue($event.option.value.name);
    this.sendForm.controls.messengerData.setValue($event.option.value.userData);
    // this.canFill = false;
    console.log(this.sendForm.controls.messengerData);
    console.log(this.sendForm.controls.messenger);
  }

  removeFromCart(product: ProductModel): void {
    this.cartActions.deleteProductFromCart(product);
  }

}
