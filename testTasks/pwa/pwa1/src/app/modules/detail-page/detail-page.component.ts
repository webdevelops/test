// Angular
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// Libs
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// App
import { ProductModel } from 'src/app/core/models/product.model';
// import { BasketActions } from '../../core/store/basket/basket.actions';
import { IconList } from 'src/app/core/mock/icon.list';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { CartActions } from 'src/app/core/store/cart/cart.actions';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})
export class DetailPageComponent implements OnInit {
  public product$: Observable<ProductModel>;
  public iconList = IconList;
  public randomProductList$: Observable<ProductModel[]>;

  constructor(
    private route: ActivatedRoute,
    private cartAction: CartActions,
    private router: Router,
    private localStorage: LocalStorageService
  ) { }

  ngOnInit(): void {
    this.product$ = this.route.data.pipe(
      map(data => data.product)
    );
  }

  addToCart(product: ProductModel) {
    this.cartAction.addProductToCart(product);
    this.router.navigate(['/']);
  }
}
