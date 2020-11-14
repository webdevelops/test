// Angulat
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
// import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

// Libs
import { Observable } from 'rxjs';

// App
import { IconList } from 'src/app/core/mock/icon.list';
import { ProductModel } from 'src/app/core/models/product.model';
import { BasketActions } from 'src/app/core/store/basket/basket.actions';
import { BasketSelectors } from '../../../../../core/store/basket/basket.selectors';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';

@Component({
  selector: 'app-cart-window',
  templateUrl: './cart-window.component.html',
  styleUrls: ['./cart-window.component.scss']
})
export class CartWindowComponent implements OnInit {
  // items = Array.from({ length: 10 }).map((_, i) => `index #${i}`);
  public iconList = IconList;
  public onlyRead: boolean = true;
  public options: Array<ServiceList> = [];
  productsFromBasket$: Observable<Array<ProductModel>>;
  productsFromBasket: ProductModel[] = [] as ProductModel[];

  public sendForm = new FormGroup({
    nameCompany: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(30)
    ]),
    messenger: new FormControl('', [
      Validators.required
    ]),
    messengerData: new FormControl(''),
    comment: new FormControl('')
  });

  constructor(
    private basketSelectors: BasketSelectors,
    private basketActions: BasketActions,
    private localStorage: LocalStorageService
  ) {
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
        name: 'whatsapp',
        icon: this.iconList.Whatsapp,
        userData: ''
      },
      {
        name: 'email',
        icon: this.iconList.Email,
        userData: ''
      }
    ];
  }

  ngOnInit() {
    this.productsFromBasket$ = this.basketSelectors.selectAllProductsFromBasket$();

    // this.basketSelectors.selectAllProductsFromBasket$()
    //   .subscribe(products => {
    //     console.log('products - 1', products);
    //     if (products.length > 0) {
    //       console.log('products - 2', products);
    //       this.productsFromBasket = products;
    //       // return this.productsFromBasket;

    //     } else if (this.localStorage.get('basket')) {
    //       console.log('products - 3', products);
    //       this.productsFromBasket = this.localStorage.get('basket');
    //       this.basketActions.addCartToLocalStorage(this.productsFromBasket);
        
    //     } else {
    //       this.productsFromBasket = products;
    //     }
    //   });
  }

  getUserData($event) {
    this.sendForm.controls.messenger.setValue($event.option.value.name);
    this.sendForm.controls.messengerData.setValue($event.option.value.userData);

    // console.log('$event.option.value', $event.option.value)
    // console.log('getUserData - messengerData', this.sendForm.controls.messengerData);
    // console.log('getUserData - messenger', this.sendForm.controls.messenger);
  }

  modalClose($event) {
    console.log('userData: ', this.sendForm.controls.messengerData.value);
    console.log('messanger: ', this.sendForm.controls.messenger.value);
  }

  removeFromCart(productId: string) {
    this.basketActions.removeFromCart(productId);
  }

  // ngOnDestroy() {

  // }
}

export interface ServiceList {
  name: string;
  icon: string;
  userData: string;
}
