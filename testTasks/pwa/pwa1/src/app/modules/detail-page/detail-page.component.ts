// Angular
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// Libs
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// App
import { ProductModel } from 'src/app/core/models/product.model';
import { BasketActions } from '../../core/store/basket/basket.actions';
import { IconList } from 'src/app/core/mock/icon.list';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})
export class DetailPageComponent implements OnInit {
  public product$: Observable<ProductModel>;
  public iconList = IconList;

  constructor(
    private route: ActivatedRoute,
    private basketAction: BasketActions,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.product$ = this.route.data.pipe(
      map(data => data.product)
    );
  }

  addToCart(product: ProductModel) {
    this.basketAction.addToCart(product);
    this.router.navigate(['/']);
  }
}
