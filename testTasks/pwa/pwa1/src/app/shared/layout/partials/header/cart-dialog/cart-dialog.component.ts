// Angular
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

// Libs
import { Observable } from 'rxjs';

// App
import { IconList } from 'src/app/core/mock/icon.list';
import { ProductModel } from 'src/app/core/models/product.model';
import { CartSelectors } from 'src/app/core/store/cart/cart.selectors';
import { CartActions } from '../../../../../core/store/cart/cart.actions';
import { ServiceList } from '../cart-window/cart-window.component';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-cart-dialog',
  templateUrl: './cart-dialog.component.html',
  styleUrls: ['./cart-dialog.component.scss']
})
export class CartDialogComponent implements OnInit {
  constructor(
    private cartSelectors: CartSelectors,
    private dialogRef: MatDialogRef<CartDialogComponent>,
    private cartActions: CartActions
  ) { }

  public isMobileMode = false;
  public isShowSendingForm = false;
  public iconList = IconList;
  public cartProducts$: Observable<ProductModel[]>;
  public options: Array<ServiceList>

  ngOnInit(): void {
    this.options = [ // попробовать создать в отдельном файле
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
      },
    ];

    this.cartProducts$ = this.cartSelectors.selectAllProducts$();
  }

  close(resultData?: any): void {
    this.dialogRef.close(resultData);
  }

  removeFromCart(product: ProductModel): void {
    this.cartActions.removeProductFromCart(product);
  }
}


// // --------------------
// @Component({
//   selector: 'example-dialog',
//   templateUrl: 'example-dialog.html'
// })
// export class ExampleDialog {
//   constructor(
//     public dialogRef: MatDialogRef<ExampleDialog>,
//     @Inject(MAT_DIALOG_DATA) public data: DialogData
//   ) { }

//   onNoClick(): void {
//     this.dialogRef.close();
//   }
// }
