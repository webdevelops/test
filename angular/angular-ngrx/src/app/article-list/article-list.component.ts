import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Article } from '../core';
import * as ArticleActions from '../store/actions';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {

  constructor(
    private store: Store
  ) { }

  articles: Article[] = [];
  // articles$ = 

  ngOnInit(): void {
    this.store.dispatch(ArticleActions.LoadArticles());
  }

}
