// Angular
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

// Lib
import { Observable } from 'rxjs';

//App
import { IconList } from '../../../../core/mock/icon.list';
import { CartSelectors } from '../../../../core/store/cart/cart.selectors';
import { CartDialogComponent } from './cart-dialog/cart-dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public iconList = IconList;
  public cartCountProducts$: Observable<number>;
  constructor(
    private cartSelectors: CartSelectors,
    public dialogCart: MatDialog
  ) { }

  ngOnInit() {
    this.cartCountProducts$ = this.cartSelectors.getCountProducts$();
  }

  showCart(): void {
    const dialogRef = this.dialogCart.open(CartDialogComponent, {
      panelClass: 'cart-modal',
      data: { someIncomingData: [] }
    });
  }
}
