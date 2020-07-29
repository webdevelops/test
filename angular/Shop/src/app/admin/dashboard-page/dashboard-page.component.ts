import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { ProductService } from 'src/app/shared/product.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit, OnDestroy {
  products = [];
  pSub: Subscription;
  rSub: Subscription;
  productName;

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.pSub = this.productService.getAll().subscribe(products => {
      // console.log('products', products);
      this.products = products;
    });
  }

  remove(id) {
    this.rSub = this.productService.remove(id).subscribe(() => {
      this.products = this.products.filter(p => p.id !== id);
    });
  }

  ngOnDestroy() {
    if (this.pSub) {
      this.pSub.unsubscribe();
    }

    if (this.rSub) {
      this.rSub.unsubscribe();
    }
  }
}
