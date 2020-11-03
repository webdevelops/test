// Angular
import { Component, OnInit } from '@angular/core';

// Libs
import { Observable } from 'rxjs';

// App
import { ProductSelectors } from "../../core/store/product/product.selectors";
import { ProductActions } from '../../core/store/product/product.actions';
import { ProductModel } from 'src/app/core/models/product.model';

const PAGE_SIZE = 5;

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  public loading$: Observable<boolean>;
  productList$: Observable<Array<ProductModel>>;
  readonly pageSize = PAGE_SIZE;

  constructor(
    private productSelectors: ProductSelectors,
    private productActions: ProductActions
  ) { }

  ngOnInit(): void {
    this.loading$ = this.productSelectors.selectLoading$();
    this.productActions.loadProductList(this.pageSize);
    this.productList$ = this.productSelectors.selectAllProducts$();
    // console.log("ProductListComponent -> ngOnInit -> this.productList$", this.productList$)
  }

}
