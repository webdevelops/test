import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component'
import { SvgComponent } from './fundamentals/svg/svg.component';
import { FirstComponent } from './fundamentals/routing/first/first.component';
import { SecondComponent } from './fundamentals/routing/second/second.component';

const routes: Routes = [
  // {path: '', component: FirstComponent},
  // {path: 'second', component: SecondComponent},

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
