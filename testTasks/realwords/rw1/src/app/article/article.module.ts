import { NgModule } from '@angular/core';

import { ArticlesService } from '../core/services/articles.service';
import { SharedModule } from '../shared/shared.module';
import { ArticleRoutingModule } from './article-routing.module';
import { ArticleComponent } from './article.component';
import { MarkdownPipe } from './markdown.pipe';
import { ArticleCommentComponent } from './article-comment/article-comment.component';

@NgModule({
  imports: [
    SharedModule,
    ArticleRoutingModule
  ],
  declarations: [
    ArticleComponent,
    MarkdownPipe,
    ArticleCommentComponent
  ],
  providers: [
    // ArticlesService
  ]
})
export class ArticleModule { }
