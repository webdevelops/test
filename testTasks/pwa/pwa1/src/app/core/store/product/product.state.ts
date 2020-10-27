// Libs
import { EntityState } from '@ngrx/entity';

// App
import { ProductModel } from "../../models/product.model";

export interface ProductState extends EntityState<ProductModel> {
  selectedProductId: string | null;
  error: TypeError | string;
  page: number;
  isDownloadedProductId: number;
  isLoading: boolean;
}