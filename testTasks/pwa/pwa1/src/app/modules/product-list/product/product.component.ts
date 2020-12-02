// Angular
import { Component, Input } from '@angular/core';

// App
import { ProductModel } from '../../../core/models/product.model';

export type ProductViewMode = 'LIST_ITEM' | 'SIMPLE_CARD' | 'WIDE_CARD' | 'CARD';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() public product: ProductModel;
  @Input() public viewMode: ProductViewMode = 'SIMPLE_CARD';

  constructor() {}

}
