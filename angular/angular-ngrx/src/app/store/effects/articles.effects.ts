import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from '@ngrx/effects';

import * as ArticleActions from '../actions';
import { mergeMap, map } from 'rxjs/operators';
import { ArticlesService } from 'src/app/core/services/articles.service';

@Injectable()
export class ArticlesEffects {
  loadArticles$ = createEffect(() => this.actions$.pipe(
    ofType(ArticleActions.LoadArticles),
    mergeMap(() => this.articlesService.getAll()
        .pipe(
          // map(articles => ({ type: '[Articles] Articles Loaded Success', payload: articles }))
          map(articles => {
            console.log('articles --------', articles)
            return {
              type: '[Articles] Articles Loaded Success', payload: articles 
            }
        })
      )
    )
  ))

  constructor(
    private actions$: Actions,
    private articlesService: ArticlesService
  ) { }
};
