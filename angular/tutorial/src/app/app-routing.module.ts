import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component'
import { SvgComponent } from './fundamentals/svg/svg.component';

const routes: Routes = [
  { path: '', component: HomePageComponent, pathMatch: 'full' },
  { path: 'svg', component: SvgComponent },
  { path: 'about', loadChildren: () => import('./about-page/about-page.module').then(m => m.AboutPageModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
