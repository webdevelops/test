// Angular
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Libs
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

// App
import { ProductModel } from 'src/app/core/models/product.model';
import { IconList } from 'src/app/core/mock/icon-list';
import { CartActions } from '../../core/store/cart/cart.actions';
import { ProductSelectors } from '../../core/store/product/product.selectors';
import {ProductActions} from '../../core/store/product/product.actions';
import {CartSelectors} from '../../core/store/cart/cart.selectors';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})
export class DetailPageComponent implements OnInit {
  public product$: Observable<ProductModel>;
  public isProductInCart$: Observable<boolean>;
  public randomProductList$: Observable<ProductModel[]>;
  public iconList = IconList;

  constructor(private route: ActivatedRoute,
              private cartActions: CartActions,
              private productActions: ProductActions,
              private productSelectors: ProductSelectors,
              private cartSelectors: CartSelectors) { }

  ngOnInit(): void {
    this.productActions.loadProductList(20);

    this.product$ = this.route.data.pipe(
      map(data => data.product),
      tap( product => {
        this.isProductInCart$ = this.cartSelectors.selectProductById$(product.productId).pipe(
          map(foundProduct => !!foundProduct)
        );
        this.randomProductList$ = this.productSelectors.selectRandomProductList$(3);
      })
    );
  }

  addToCart(product): void {
    this.cartActions.addProductToCart(product);
  }

  removeFromCart(product): void {
    this.cartActions.deleteProductFromCart(product);
  }


}
