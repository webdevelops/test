import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
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
  totalPosts = 10;
  postsPerPage = 3;
  pageSizeOptions = [1, 3, 5, 10];
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

  onChangedPage(pageData: PageEvent) {
  console.log("PostListComponent -> onChangedPage -> pageData", pageData)
    
  }

  ngOnDestroy() {
    this.postSub.unsubscribe();
  }
}
