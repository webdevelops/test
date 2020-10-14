import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromArticles from '../reducers';

export const selectArticlesState = createFeatureSelector<fromArticles.State>('articles');

export const selectAllArticles = createSelector(
  selectArticlesState,
  fromArticles.selectAllArticles
);