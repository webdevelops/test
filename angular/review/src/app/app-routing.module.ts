import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { SvgComponent } from './fundamentals/svg/svg.component';
import { HeroesComponent } from './fundamentals/dependency/heroes/heroes.component';

const routes: Routes = [
  { path: 'svg', component: SvgComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'about', loadChildren: () => import('./about-page/about-page.module').then(m => m.AboutPageModule) },
  { path: '', component: HomePageComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
