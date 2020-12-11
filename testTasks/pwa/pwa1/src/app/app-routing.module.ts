// Angular 
import { NgModule, Injectable } from '@angular/core';
import { Routes, RouterModule, Resolve, ActivatedRouteSnapshot } from '@angular/router';

//Libs
import { Observable } from 'rxjs';
import { filter, take} from 'rxjs/operators';

// App
import { ProductSelectors } from './core/store/product/product.selectors';
import { ProductActions } from './core/store/product/product.actions';
import { ProductModel } from 'src/app/core/models/product.model';
import { DetailPageComponent } from './modules/detail-page/detail-page.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { CartWindowComponent } from './shared/layout/partials/header/cart-window/cart-window.component';


@Injectable({ providedIn: 'root' })

export class ProductResolver implements Resolve<ProductModel>{

  constructor(
    private productSelectors: ProductSelectors,
    private productActions: ProductActions
  ) { }

  resolve(route: ActivatedRouteSnapshot): Observable<ProductModel> {
    const neededId: string = route.paramMap.get('id');
    this.productActions.loadProductById(neededId);
    return this.productSelectors.selectProductById$(neededId)
      .pipe(
        filter(val => {
          // console.log('val', val);
          return !!val
        }),
        take(1),
      );
  }
}

const routes: Routes = [
  {
    path: 'cart',
    component: CartWindowComponent,
    outlet: 'modal'
  },
  {
    path: 'product/:id',
    component: DetailPageComponent,
    resolve: { product: ProductResolver }
  },
  {
    path: '',
    component: LayoutComponent,
  },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
