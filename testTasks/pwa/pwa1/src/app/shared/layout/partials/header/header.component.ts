// Angular
import {Component, OnInit} from '@angular/core';

// App
import { IconList } from 'src/app/core/mock/icon-list';
import { CartSelectors } from '../../../../core/store/cart/cart.selectors';
import { Observable } from 'rxjs';
import { CartDialogComponent } from './cart-dialog/cart-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public iconList = IconList;
  public cartCountProducts$: Observable<number>;

  constructor(private cartSelectors: CartSelectors, public dialogCart: MatDialog) { }

  ngOnInit(): void {
    this.cartCountProducts$ = this.cartSelectors.getCountProducts$();
  }

  showCart(): void {
    const dialogRef = this.dialogCart.open(CartDialogComponent, {
      panelClass: 'cart-modal',
      data: {someIncomingData: []}
    });
  }


}
