import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ArticleRoutingModule } from './article-routing.module';
import { ArticleComponent } from './article.component';
import { MarkdownPipe } from './markdown.pipe';
import { ArticleCommentComponent } from './article-comment/article-comment.component';
import { ArticleResolver } from './article-resolver.service';

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
    ArticleResolver
  ]
})
export class ArticleModule { }
