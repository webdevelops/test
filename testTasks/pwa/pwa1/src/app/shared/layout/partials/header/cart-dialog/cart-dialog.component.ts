import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProductModel } from '../../../../../core/models/product.model';
import { Observable } from 'rxjs';
import { IconList } from 'src/app/core/mock/icon.list';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceList } from '../cart-window/cart-window.component';
import { CartSelectors } from '../../../../../core/store/cart/cart.selectors';
import { CartActions } from '../../../../../core/store/cart/cart.actions';

export interface CartDialogData {
  someIncomingData: any;
}

@Component({
  selector: 'app-cart-dialog',
  templateUrl: './cart-dialog.component.html',
  styleUrls: ['./cart-dialog.component.scss']
})
export class CartDialogComponent implements OnInit {

  public cartProducts$: Observable<ProductModel[]>;
  public iconList = IconList;
  public options: Array<ServiceList> = [];
  public onlyRead = true;
  public isMobileMode = false;
  public isShowSendingFormPart = false;

  public sendForm = new FormGroup({
    nameCompany: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]),
    messenger: new FormControl('', [Validators.required]),
    messengerData: new FormControl(''),
    comment: new FormControl('')
  });

  @HostListener('window:resize', [])
  private onResize(): void {
    this.checkMobileMode();
  }

  constructor(public dialogRef: MatDialogRef<CartDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CartDialogData,
    private cartSelectors: CartSelectors,
    private cartActions: CartActions) {
  }

  ngOnInit(): void {
    this.checkMobileMode();

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

  close(resultData?: any): void {
    this.dialogRef.close(resultData);
  }


  getUserData($event): void {
    this.sendForm.controls.messenger.setValue($event.option.value.name);
    this.sendForm.controls.messengerData.setValue($event.option.value.userData);
    // this.canFill = false;
    console.log(this.sendForm.controls.messengerData);
    console.log(this.sendForm.controls.messenger);
  }

  removeFromCart(product: ProductModel): void {
    this.cartActions.removeProductFromCart(product);
  }

  private checkMobileMode(): void {
    console.log("CartDialogComponent -> isShowSendingFormPart-1", this.isShowSendingFormPart)
    this.isMobileMode = false;
    if (document) {
      const width = document.body.clientWidth;
      this.isMobileMode = width < 1100;
      console.log("CartDialogComponent -> checkMobileMode -> isMobileMode", this.isMobileMode)
    }
    if (!this.isMobileMode) {
      console.log("CartDialogComponent -> isShowSendingFormPart-2", this.isShowSendingFormPart)
      this.isShowSendingFormPart = false;
    }
  }
}
