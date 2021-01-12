// Angular
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

// Libs
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

// App
import { ProductModel } from 'src/app/core/models/product.model';
import { IconList } from 'src/app/core/mock/icon-list';
import { CartActions } from '../../core/store/cart/cart.actions';
import { ProductSelectors } from '../../core/store/product/product.selectors';
import { ProductActions } from '../../core/store/product/product.actions';
import { CartSelectors } from '../../core/store/cart/cart.selectors';
import { CartDialogComponent } from 'src/app/shared/layout/partials/header/cart-dialog/cart-dialog.component';

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
    private cartSelectors: CartSelectors,
    private dialogCart: MatDialog) { }

  imageObject = [{
    image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/5.jpg',
    thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/5.jpg',
    title: 'PWA',
    productId: '1',
  }, {
    image: 'https://millionstatusov.ru/pic/statpic/all/58e61335ec518.jpg',
    thumbImage: 'https://millionstatusov.ru/pic/statpic/all/58e61335ec518.jpg',
    title: 'SSR',
    productId: '2',
  }, {
    image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/4.jpg',
    thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/4.jpg',
    title: 'Angular performance review and refactoring.'
  }, {
    image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/7.jpg',
    thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/7.jpg',
    title: 'Angular upgrade to Angular 11.'
  }, {
    image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/1.jpg',
    thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/1.jpg',
    title: 'ngrx/store architecture.'
  }, {
    image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/2.jpg',
    thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/2.jpg',
    title: 'PWA Angular Material customization/implementation.'
  }];

  ngOnInit(): void {
    this.productActions.loadProductList(20);

    this.product$ = this.route.data.pipe(
      map(data => {
        return data.product
      }),
      tap(product => {
        // console.log('product', product)
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

  showCart() {
    const dialogRef = this.dialogCart.open(CartDialogComponent, {
      panelClass: 'cart-modal',
      data: { someIncomingData: [] }
    });
  }
}
