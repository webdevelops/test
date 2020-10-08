import { NgModule } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { ArticleListComponent } from './article-helpers/article-list/article-list.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [
    ArticleListComponent
  ],
  exports: [
    CommonModule,
    // HttpClientModule,
    ArticleListComponent
  ],
})
export class SharedModule { }