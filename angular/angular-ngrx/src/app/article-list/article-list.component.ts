import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Article } from '../core';
import * as ArticlesActions from '../store/actions';
import * as ArticlesSelections from '../store/selectors';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {

  constructor(
    private store: Store
  ) { }

  articles$: Observable<Article[]>;

  ngOnInit(): void {
    this.store.dispatch(ArticlesActions.LoadArticles());

    this.articles$ = this.store.select(ArticlesSelections.selectAllArticles);
  }

}
