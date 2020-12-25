// Angular
import { Component, OnInit } from '@angular/core';
import { CartActions } from '../../core/store/cart/cart.actions';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(private cartActions: CartActions) { }

  ngOnInit(): void {
    this.cartActions.loadCart();
  }
  // at-3  -task number 3
  // iv-1 -task 2
}
