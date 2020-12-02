export interface ProductModel {
  productId: string;
  productName: string;
  productShortDescription: string;
  productFullDescription: string;
  productPrice: string;
  productPhotos: Array<ProductPhoto>;
  productTags?: Array<string>;
}

export class ProductPhoto {
  isMain: boolean;
  src: string;
}