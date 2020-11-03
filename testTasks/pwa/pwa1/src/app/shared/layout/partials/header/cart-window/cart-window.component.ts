// Angulat
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

// Libs
import { Observable } from 'rxjs';

// App
import { IconList } from 'src/app/core/mock/icon.list';
import { ProductModel } from 'src/app/core/models/product.model';
import { BasketActions } from 'src/app/core/store/basket/basket.actions';
import { BasketSelectors } from '../../../../../core/store/basket/basket.selectors';

@Component({
  selector: 'app-cart-window',
  templateUrl: './cart-window.component.html',
  styleUrls: ['./cart-window.component.scss']
})
export class CartWindowComponent implements OnInit {
  items = Array.from({ length: 10 }).map((_, i) => `index #${i}`);
  public iconList = IconList;
  public selected = 'Chose messenger';
  public options: Array<ServiceList> = [];
  productFromBasket$: Observable<Array<ProductModel>>;

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

  constructor(
    private basketSelectors: BasketSelectors,
    private basketActions: BasketActions
  ) {
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

  ngOnInit() {
    this.productFromBasket$ = this.basketSelectors.selectAllProductsFromBasket$();
  }

  modalClose($event) { }

  removeFromCart(productId: string) {
    this.basketActions.removeFromCart(productId);
  }
}

export interface ServiceList {
  name: string;
  icon: string;
}
