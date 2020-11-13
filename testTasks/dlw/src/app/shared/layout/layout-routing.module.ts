import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';

const routes = [
  {
    path: '',
    component: LayoutComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {}