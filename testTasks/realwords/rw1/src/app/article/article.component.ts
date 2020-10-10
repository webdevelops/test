import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Article } from '../core/models/article.model';
import { CommentsService } from '../core/services/comments.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private commentsService: CommentsService
  ) { }

  article: Article;
  canModify: boolean;
  isDeleting: false;

  ngOnInit() {
    this.route.data.subscribe(
      (data: { article: Article }) => {
        this.article = data.article;

        this.populateComments();
      }
    )
  }

  populateComments() {
    this.commentsService
  }

  deleteArticle() {

  }

}
