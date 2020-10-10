import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { ArticleComponent } from './article.component';

const routes = [
  {
    path: ':slug',
    component: ArticleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleRoutingModule { }