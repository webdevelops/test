// Angular
import { Component, Input } from '@angular/core';

// App
import { ProductModel } from './../../../core/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() public product: ProductModel;
  @Input() public isWide: boolean = false;

  constructor() {}

}