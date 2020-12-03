// Libs
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

// App
import { ProductModel } from '../../models/product.model';

export const basketAdapter: EntityAdapter<ProductModel> =
  createEntityAdapter<ProductModel>({
    selectId: selectProductId
  });

export function selectProductId(a: ProductModel): string | null {
  return a.productId;
}

export interface BasketState extends EntityState<ProductModel> {
  selectedProductId: string | null;
  error: TypeError | string;
  isLoading: boolean;
}

export const initialBasketState: BasketState = basketAdapter.getInitialState({
  selectedProductId: null,
  error: null,
  isLoading: true,
});