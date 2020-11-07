// Angular
import { Component, OnInit } from '@angular/core';

// Libs
import { fromEvent, interval, Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

// App
import { ProductSelectors } from "../../core/store/product/product.selectors";
import { ProductActions } from '../../core/store/product/product.actions';
import { ProductModel } from 'src/app/core/models/product.model';

const PAGE_SIZE = 5;
const NEXT_PAGE_SIZE = 3;
const PRODUCT_LIST_LENGTH = 11;

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  productList$: Observable<Array<ProductModel>>;
  readonly pageSize = PAGE_SIZE;
  readonly nextPageSize = NEXT_PAGE_SIZE;
  readonly productListLength = PRODUCT_LIST_LENGTH;
  public pageIndex$: Observable<number>;
  public loading$: Observable<boolean>;

  constructor(
    private productSelectors: ProductSelectors,
    private productActions: ProductActions
  ) { }

  ngOnInit(): void {
    this.loading$ = this.productSelectors.selectLoading$();
    this.productActions.loadProductList(this.pageSize);
    this.productList$ = this.productSelectors.selectAllProducts$();
    this.pageIndex$ = this.productSelectors.selectPage$().pipe(
      map((page: number) => {
        // console.log("ProductListComponent -> ngOnInit -> page * this.pageSize", page * this.pageSize)
        return page * this.pageSize;
      })
    )
  }

  loadNextPage(event): void {
    const previousPage = event.previousPageIndex + 1;
    const currentPage = event.pageIndex + 1;
    // console.log("ProductListComponent -> loadNextPage -> previousPage", previousPage)
    // const e = $event;
    this.productActions.loadNextPages(this.nextPageSize, previousPage, currentPage);
    // console.log('length', event.length);
    // console.log('pageIndex', event.pageIndex + 1);
    // console.log('pageSize', event.pageSize);
    // console.log('previousPageIndex', event.previousPageIndex + 1);
  }

}
