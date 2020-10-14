import { NgModule } from "@angular/core";
import { EffectsModule } from '@ngrx/effects';

import { ArticlesEffects } from '../store/effects/articles.effects';
import { StoreModule } from '@ngrx/store';

import { SharedModule } from '../shared/shared.module';
import { articlesFutureKey, articlesReducer } from '../store/reducers';

@NgModule({
  imports: [
    SharedModule,
    EffectsModule.forFeature([ArticlesEffects]),
    StoreModule.forFeature(articlesFutureKey, articlesReducer)
  ]
})
export class ArticleListModule { }