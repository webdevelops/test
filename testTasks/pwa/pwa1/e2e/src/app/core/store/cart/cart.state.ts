// Libs
import { EntityState } from '@ngrx/entity';

// App
import { ProductModel } from '../../models/product.model';
import { productAdapter } from '../product/product.state';

export interface CartState extends EntityState<ProductModel> {
  isLoading: boolean;
  error: TypeError | string;
}

export const initialCartState: CartState = productAdapter.getInitialState({
  isLoading: false,
  error: null
});