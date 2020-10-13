import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import { Article } from 'src/app/core';
import * as ArticleActions from '../actions';

export interface State extends EntityState<Article> {
  selectedArticleId: number | null;
};

export const adapter: EntityAdapter<Article> = createEntityAdapter<Article>();

export const initialState: State = adapter.getInitialState({
  selectedArticleId: null
});

console.log('initialState', initialState);

const articleReducer = createReducer(
  initialState,
  on(ArticleActions.LoadArticlesSuccess, (state, { articles }) => {
    return adapter.setAll(articles, state);
  })
);

export const articleFutureKey = 'articles';

export function reducer(state: State | undefined, action: Action) {
  return articleReducer(state, action);
}

export const getSelectedArticleId = (state: State) => state.selectedArticleId;