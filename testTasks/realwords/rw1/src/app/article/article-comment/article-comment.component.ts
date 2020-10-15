import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';

import { Comment } from 'src/app/core/models/comment.model';
import { User } from 'src/app/core/models/user.model';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-article-comment',
  templateUrl: './article-comment.component.html',
  styleUrls: ['./article-comment.component.scss']
})
export class ArticleCommentComponent implements OnInit, OnDestroy {
  constructor(
    private userService: UserService
  ) { }

  @Input() comment: Comment;
  @Output() deleteComment = new EventEmitter<boolean>();

  private subscription: Subscription;
  canModify: boolean;

  ngOnInit() {
    this.subscription = this.userService.currentUser.subscribe(
      (userData: User) => {
        this.canModify = (userData.username === this.comment.author.username);
      }
    )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  deleteClicked() {
    this.deleteComment.emit(true);
  }
}
