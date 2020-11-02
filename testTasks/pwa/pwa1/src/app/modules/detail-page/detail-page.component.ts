// Angular
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Libs
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// App
import { ProductModel } from 'src/app/core/models/product.model';
import { BasketService } from 'src/app/core/services/basket.service';
import { BasketActions } from '../../core/store/basket/basket.actions';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})
export class DetailPageComponent implements OnInit {
  public product$: Observable<ProductModel>

  constructor(
    private route: ActivatedRoute,
    private basketAction: BasketActions,
    private baskerService: BasketService
  ) { }

  ngOnInit(): void {
    this.product$ = this.route.data.pipe(
      map(data => {
        // console.log("DetailPageComponent -> ngOnInit -> data", data)
        return data.product
      })
    );
  }

  addToCart(product: ProductModel) {
    this.basketAction.addToCart(product);
    this.baskerService.addToCart(product);
  }
}
