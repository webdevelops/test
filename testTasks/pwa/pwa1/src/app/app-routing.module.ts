// Angular
import { Injectable, NgModule } from '@angular/core';
import { Routes, RouterModule, Resolve } from '@angular/router';

// App
import { ProductModel } from './core/models/product.model';
import { DetailPageComponent } from './modules/detail-page/detail-page.component';
import { LayoutComponent } from './shared/layout/layout.component';

@Injectable({ providedIn: 'root' })

// export class ProductResolver implements Resolve<ProductModel>{
//   constructor(
//     private productSelectors: ProductSelectors,
//     private productActions: ProductActions
//   ) {}

  // resolve() {
  //   return;
  // }
// }

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent
  },
  {
    path: 'product/:id',
    component: DetailPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
