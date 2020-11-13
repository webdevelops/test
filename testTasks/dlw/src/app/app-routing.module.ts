import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientSectionComponent } from './modules/client-section/client-section.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./shared/layout/layout.module').then(m => m.LayoutModule),
    pathMatch: 'full'
  },
  {
    path: 'cl',
    component: ClientSectionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
