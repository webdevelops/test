import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';

import { Post } from '../post.model';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {
  posts: Post[] = [];
  isLoading = false;
  private postSub: Subscription;

  constructor(
    public postsService: PostsService
  ) { }

  ngOnInit() {
    this.isLoading = true;
    this.postsService.getPosts();
    // this.postSub = this.postsService.getPostUpdateListener()
    //   .subscribe((posts: Post[]) => {
    //   // console.log("PostListComponent -> ngOnInit -> posts", posts)
    //     this.posts = posts;
    //   });
    this.postSub = this.postsService.postsUpdated
      .subscribe((posts: Post[]) => {
      console.log("PostListComponent -> ngOnInit -> posts", posts)
        this.isLoading = false;
        this.posts = posts;
      })
  }

  onDelete(postId) {
    console.log('postId', postId);
    this.postsService.deletePost(postId);
  }

  ngOnDestroy() {
    this.postSub.unsubscribe();
  }
}
