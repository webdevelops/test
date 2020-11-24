// Angular
import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';

// Libs
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

// App
import { IconList } from 'src/app/core/mock/icon.list';
import { CartSelectors } from 'src/app/core/store/cart/cart.selectors';
import { CartActions } from 'src/app/core/store/cart/cart.actions';
import { ProductSelectors } from 'src/app/core/store/product/product.selectors';

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

  constructor(
    private cartSelectors: CartSelectors,
    private productSelectors: ProductSelectors,
    private cartActions: CartActions
  ) {
    this.tabs = [
      {
        productId: '1',
        isActive: true,
        label: 'First',
        title: 'INTERACTIVE - 1 SEARCH',
        description: 'You want to prepare a software prodject budget. It is quite east with the help of our PWA store.',
        imageSrc: 'assets/images/ImageItem.png',
      },
      {
        productId: '2',
        isActive: false,
        label: 'Second',
        title: 'INTERACTIVE - 2 TRENDING',
        description: 'You want to prepare a software prodject budget. It is quite east with the help of our PWA store.',
        imageSrc: 'assets/images/ImageItem.png',
      },
      {
        productId: '3',
        isActive: false,
        label: 'Third',
        title: 'INTERACTIVE - 3 TOPICS',
        description: 'You want to prepare a software prodject budget. It is quite east with the help of our PWA store.',
        imageSrc: 'assets/images/ImageItem.png',
      }
    ];
  }

  ngOnInit(): void {
    this.activeTabIndex$.subscribe(activeTabIndex => {
      const productId = this.tabs[activeTabIndex].productId;
      this.isProductInCart$ = this.cartSelectors.selectProductById$(productId).pipe(
        map(foundProduct => {
          return !!foundProduct
        })
      );
    });
    // this.activeTabIndex$.next(0);
  }

  public selectedTabChange(event: MatTabChangeEvent): void {
    this.activeTabIndex$.next(event.index);
    this.tabs.forEach(tab => tab !== this.tabs[event.index] ? tab.isActive = false : tab.isActive = true);
  }

  public addToCart(): void {
    const productId = this.tabs[this.activeTabIndex$.getValue()].productId;
    this.productSelectors.selectProductById$(productId)
      .subscribe(product => {
        this.cartActions.addProductToCart(product);
      })
  }

  public removeFromCart(): void {
    const productId = this.tabs[this.activeTabIndex$.getValue()].productId;
    this.productSelectors.selectProductById$(productId)
      .subscribe(product => {
        this.cartActions.removeProductFromCart(product);
      })
  }

  ngOnDestroy(): void {
    this.activeTabIndex$.unsubscribe();
  }

  public customSlider(): void {
    const tabIndex = this.activeTabIndex$.getValue();
    this.activeTabIndex$.next(tabIndex > 1 ? 0 : tabIndex + 1);
  }

  // customSlider(): void {
  //   this.activeTabIndex = this.activeTabIndex > 1 ? 0 : ++this.activeTabIndex;
  // }

}

export interface Tab {
  productId: string;
  isActive: boolean,
  label: string;
  title: string;
  description: string;
  imageSrc: string;
};
