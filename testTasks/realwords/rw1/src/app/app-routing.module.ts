import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { ArticleResolver } from './article/article-resolver.service';
import { ArticleComponent } from './article/article.component';
import { AuthComponent } from './auth/auth.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  {
    path: 'article/:slug',
    component: ArticleComponent,
    resolve: {
      article: ArticleResolver
    }
  },
  {
    path: 'settings',
    component: SettingsComponent
  }
  // {
  //   path: 'article',
  //   loadChildren: './article/article.module#ArticleModule'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
