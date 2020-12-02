// Libs
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

// App
import { ProductModel } from "../../models/product.model";

export const productAdapter: EntityAdapter<ProductModel> =
  createEntityAdapter<ProductModel>({
    selectId: selectProductId
  });

export function selectProductId(a: ProductModel): string | null {
  return a.productId;
}

export interface ProductState extends EntityState<ProductModel> {
  selectedProductId: string | null;
  error: TypeError | string;
  page: number;
  lastDownloadedProductId: number;
  isLoading: boolean;
}

export const initialProductState: ProductState = productAdapter.getInitialState({
  selectedProductId: null,
  error: null,
  page: 1,
  lastDownloadedProductId: null,
  isLoading: true,
});