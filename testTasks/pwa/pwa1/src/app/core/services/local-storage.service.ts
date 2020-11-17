// Angular
import { Injectable } from '@angular/core';

// App
import { ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  public localStorage: Storage;
  public productsFromBasket: ProductModel[] = [];

  constructor() {
    this.localStorage = window.localStorage;
    this.productsFromBasket = [] as ProductModel[];
  }

  public get(key: string): any {
    if (this.isLocalStorage) {
      return JSON.parse(this.localStorage.getItem(key));
    }
  }

  public set(key: string, value: any): boolean {
    if (this.isLocalStorage) {
      this.localStorage.setItem(key, JSON.stringify(value));  
      
      return true;
    }
    
    return false;
  }

  public remove(key: string): boolean {
    if (this.isLocalStorage) {
      this.localStorage.removeItem(key);

      return true;
    }

    return false;
  }

  private get isLocalStorage(): boolean {
    return !!this.localStorage;
  }
}
