// Angular
import {Component, OnDestroy, OnInit} from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';

// App
import { IconList } from '../../core/mock/icon-list';
import {CartActions} from '../../core/store/cart/cart.actions';
import {ProductSelectors} from '../../core/store/product/product.selectors';
import {map, tap} from 'rxjs/operators';
import {BehaviorSubject, Observable} from 'rxjs';
import {CartSelectors} from '../../core/store/cart/cart.selectors';

export interface Tab {
  productId: string;  // link to the ProductModel.productId
  isActive: boolean;
  label: string;
  title: string;
  description: string;
  imageSrc: string;
}

@Component({
  selector: 'app-greeting-section',
  templateUrl: './greeting-section.component.html',
  styleUrls: ['./greeting-section.component.scss']
})
export class GreetingSectionComponent implements OnInit, OnDestroy {
  public activeTabIndex$ = new BehaviorSubject(0);
  public isProductInCart$: Observable<boolean>;
  public tabs: Array<Tab>;
  public iconList = IconList;

  constructor(private productSelectors: ProductSelectors, private cartSelectors: CartSelectors, private cartActions: CartActions) {
    this.tabs = [
      {
        productId: '1',  // here should be link to the Product by ID
        isActive: true,
        label: 'First',
        title: 'INTERACTIVE SEARCH',
        description: 'You want to prepare a software project budget. It is quite easy with the help of our PWA store.',
        imageSrc: 'assets/images/ImageItem.png',
      },
      {
        productId: '2',  // here should be link to the Product by ID
        isActive: false,
        label: 'Second',
        title: 'INTERACTIVE INTERACTIVE SEARCH',
        description: 'You want to prepare a software project budget. It is quite easy with the help of our PWA store.',
        imageSrc: 'assets/images/ImageItem.png',
      },
      {
        productId: '3',  // here should be link to the Product by ID
        isActive: false,
        label: 'Third',
        title: 'INTERACTIVE SEARCH',
        description: 'You want to prepare a software project budget. It is quite easy with the help of our PWA store.',
        imageSrc: 'assets/images/ImageItem.png',
      },
    ];
  }

  ngOnInit(): void {
    // change isProductInCart$ for each changed Tab
    this.activeTabIndex$.subscribe((activeTabIndex) => {
      const productId = this.tabs[activeTabIndex].productId;
      this.isProductInCart$ = this.cartSelectors.selectProductById$(productId).pipe(
        map(foundProduct => !!foundProduct)
      );
    });
    this.activeTabIndex$.next(0);
  }

  ngOnDestroy(): void {
    this.activeTabIndex$.unsubscribe();
  }

  public customSlider(): void {
    const tabIndex = this.activeTabIndex$.getValue();
    this.activeTabIndex$.next(tabIndex > 1 ? 0 : tabIndex + 1);
  }

  public selectedTabChange(event: MatTabChangeEvent): void {
    this.activeTabIndex$.next( event.index );
    this.tabs.forEach(tab => tab !== this.tabs[event.index] ? tab.isActive = false : tab.isActive = true);
  }

  public addToCart(): void {
    const productId = this.tabs[this.activeTabIndex$.getValue()].productId;
    this.productSelectors.selectProductById$(productId).subscribe((product) => {
      this.cartActions.addProductToCart(product);
    });
  }

  public removeFromCart(): void {
    const productId = this.tabs[this.activeTabIndex$.getValue()].productId;
    this.productSelectors.selectProductById$(productId).subscribe((product) => {
      this.cartActions.deleteProductFromCart(product);
    });
  }

}
