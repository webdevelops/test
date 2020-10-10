import { NgModule } from '@angular/core';

import { ArticlesService } from '../core/services/articles.service';
import { SharedModule } from '../shared/shared.module';
import { ArticleRoutingModule } from './article-routing.module';
import { ArticleComponent } from './article.component';

@NgModule({
  imports: [
    SharedModule,
    ArticleRoutingModule
  ],
  declarations: [
    ArticleComponent
  ],
  providers: [
    // ArticlesService
  ]
})
export class ArticleModule { }
