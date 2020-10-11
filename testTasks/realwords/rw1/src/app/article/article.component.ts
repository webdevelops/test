import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Article } from '../core/models/article.model';
import { Comment } from '../core/models/comment.model';
import { ArticlesService } from '../core/services/articles.service';
import { CommentsService } from '../core/services/comments.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private commentsService: CommentsService,
    private articlesService: ArticlesService,
    private router: Router
  ) { }

  article: Article;
  canModify: boolean;
  isDeleting = false;
  comments: Comment[];

  ngOnInit() {
    this.route.data.subscribe(
      (data: { article: Article }) => {
        this.article = data.article;

        this.populateComments();
      }
    )
  }

  populateComments() {
    this.commentsService.getAll(this.article.slug)
      .subscribe(comments => this.comments = comments)
  }

  deleteArticle() {
    this.isDeleting = true;

    this.articlesService.destroy(this.article.slug)
      .subscribe(
        success => {
          this.router.navigateByUrl('/');
        }
      )
  }

  onToggleFavorite(favorited: boolean) {
    this.article.favorited = favorited;

    if (favorited) {
      this.article.favoritesCount++;
    } else {
      this.article.favoritesCount--;
    }
  }

  onToggleFollowing(following: boolean) {
    this.article.author.following = following;
  }

}
