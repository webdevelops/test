import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DetailPageComponent } from 'src/app/modules/detail-page/detail-page.component';
import { HomePageComponent } from '../../modules/home-page/home-page.component';
import { LayoutComponent } from './layout.component';

const routes = [
  // {
  //   path: '',
  //   component: LayoutComponent,
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'product/:id',
  //   component: DetailPageComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [],
})
export class LayoutRoutingModule { }