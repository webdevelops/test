// Angular
import { Component, OnInit } from '@angular/core';

// Libs
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

// App
import { ProductActions } from './../../core/store/product/product.actions';
import { ProductSelectors } from './../../core/store/product/product.selectors';
import { ProductModel } from 'src/app/core/models/product.model';

const PRODUCT_LIST_LENGTH = 11;
const PAGE_SIZE = 5;
const NEXT_PAGE_SIZE = 3;

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  productList$: Observable<Array<ProductModel>>;
  readonly productListLength = PRODUCT_LIST_LENGTH;
  readonly pageSize = PAGE_SIZE;
  readonly nextPageSize = NEXT_PAGE_SIZE;
  public pageIndex$: Observable<number>;
  public loading$: Observable<boolean>;

  private obj = new BehaviorSubject<number>(5);

  constructor(
    private productSelectors: ProductSelectors,
    private productActions: ProductActions,
  ) { }


  ngOnInit(): void {
    this.loading$ = this.productSelectors.selectLoading$();
    this.productActions.loadProductList(this.pageSize);
    this.productList$ = this.productSelectors.selectAllProducts$();
    this.pageIndex$ = this.productSelectors.selectPage$().pipe(
      map((page: number) => page * this.pageSize)
    );
  }

  // loadNextPage(): void {
  //   this.productActions.loadNextPages(this.nextPageSize);
  // }

  onScroll(): void {
    this.productActions.loadNextPages(this.nextPageSize);
  }
}

