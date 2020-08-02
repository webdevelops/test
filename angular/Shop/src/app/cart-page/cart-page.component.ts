import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ProductService } from '../shared/product.service';
import { AuthService } from '../shared/auth.service';
import { OrderService } from '../shared/order.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {
  cartProducts = [];
  totalPrice = 0;
  form: FormGroup;
  submitted = false;
  // added = false;
  added = '';

  constructor(
    private productService: ProductService,
    private orderService: OrderService
  ) { }

  ngOnInit(): void {
    this.productService.unselectLink();
    this.cartProducts = this.productService.cartProducts;

    // this.totalPrice = this.cartProducts.map(prod => prod.price).reduce((a, b) => +a + +b, 0);

    for (let i = 0; i < this.cartProducts.length; i++) {
      this.totalPrice += +this.cartProducts[i].price;
    }

    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
      phone: new FormControl(null, Validators.required),
      address: new FormControl(null, Validators.required),
      payment: new FormControl('Cash')
    })
  }

  delete(product) {
    this.totalPrice -= product.price;
    this.cartProducts = this.cartProducts.filter(cartProduct => cartProduct.id !== product.id);
    // this.cartProducts.splice(this.cartProducts.indexOf(product), 1);
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }

    this.submitted = true;

    const order = {
      name: this.form.value.name,
      phone: this.form.value.phone,
      address: this.form.value.address,
      order: this.cartProducts,
      payment: this.form.value.payment,
      price: this.totalPrice,
      date: new Date()
    };

    this.orderService.create(order).subscribe(res => {
      this.form.reset();
      this.submitted = false;
      this.cartProducts = [];
      this.productService.cartProducts = [];
      // this.added = 'Delivary is framed';
      this.added = 'Tanks for your order';
    })
  }
}
