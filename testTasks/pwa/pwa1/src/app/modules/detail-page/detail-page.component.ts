// Angular
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Libs
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

// App
import { ProductModel } from 'src/app/core/models/product.model';
import { IconList } from 'src/app/core/mock/icon.list';
import { CartActions } from 'src/app/core/store/cart/cart.actions';
import { CartSelectors } from 'src/app/core/store/cart/cart.selectors';
import { ProductSelectors } from 'src/app/core/store/product/product.selectors';
import { ProductActions } from 'src/app/core/store/product/product.actions';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})
export class DetailPageComponent implements OnInit {
  public product$: Observable<ProductModel>;
  public iconList = IconList;
  public randomProductList$: Observable<ProductModel[]>;
  public isProductInCart$: Observable<boolean>;

  constructor(
    private route: ActivatedRoute,
    private productActions: ProductActions,
    private cartActions: CartActions,
    private cartSelectors: CartSelectors,
    private productSelectors: ProductSelectors,
  ) { }

  ngOnInit(): void {
    this.productActions.loadProductList(20);

    this.product$ = this.route.data.pipe(
      map(data => data.product),
      tap(product => {
        this.isProductInCart$ = this.cartSelectors.selectProductById$(product.productId).pipe(
          map(foundProduct => !!foundProduct)
        );
        this.randomProductList$ = this.productSelectors.selecRandomProductList$(3);
      })
    );
  }

  addToCart(product: ProductModel) {
    this.cartActions.addProductToCart(product);
    // this.router.navigate(['/']);
  }

  removeFromCart(product: ProductModel): void {
    this.cartActions.removeProductFromCart(product);
  }
}
