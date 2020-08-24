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
  totalPosts = 0;
  postsPerPage = 2;
  currentPage = 1;
  pageSizeOptions = [1, 2, 5, 10];
  private postSub: Subscription;

  constructor(
    public postsService: PostsService
  ) { }

  ngOnInit() {
    this.isLoading = true;
    this.postsService.getPosts(this.postsPerPage, this.currentPage);
    // this.postSub = this.postsService.getPostUpdateListener()
    //   .subscribe((posts: Post[]) => {
    //   // console.log("PostListComponent -> ngOnInit -> posts", posts)
    //     this.posts = posts;
    //   });
    this.postSub = this.postsService.postsUpdated
      .subscribe((postData: { posts: Post[], postCount: number }) => {
        // console.log("PostListComponent -> ngOnInit -> posts", posts)
        this.isLoading = false;
        this.totalPosts = postData.postCount;
        this.posts = postData.posts;
      })
  }

  onDelete(postId: string) {
    this.isLoading = true;
    this.postsService.deletePost(postId).subscribe(() => {
      this.postsService.getPosts(this.postsPerPage, this.currentPage);
    });
  }

  onChangedPage(pageData: PageEvent) {
    // console.log("PostListComponent -> onChangedPage -> pageData", pageData)
    this.currentPage = pageData.pageIndex + 1;
    this.postsPerPage = pageData.pageSize;
    this.postsService.getPosts(this.postsPerPage, this.currentPage);
  }

  ngOnDestroy() {
    this.postSub.unsubscribe();
  }
}
