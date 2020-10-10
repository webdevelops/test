import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { ArticleResolver } from './article/article-resolver.service';
import { ArticleComponent } from './article/article.component';

const routes: Routes = [
  {
    path: 'article/:slug',
    component: ArticleComponent,
    resolve: {
      article: ArticleResolver
    }
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
