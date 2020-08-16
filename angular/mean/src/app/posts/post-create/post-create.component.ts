import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

import { PostsService } from '../posts.service';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent implements OnInit {
  enteredTitle = '';
  enteredContent = '';
  private mode = 'create';
  private postId: string;
  public post: Post;

  constructor(
    public postsService: PostsService,
    public route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
    // console.log("PostCreateComponent -> ngOnInit -> paramMap", paramMap.params.postId)
      if (paramMap.has('postId')) {
        this.mode = 'edit';
        this.postId = paramMap.get('postId');
        this.postsService.getPost(this.postId)
          .subscribe(post => {
            this.post = {id: post._id, title: post.title, content: post.content};
          });
      
      } else {
        this.mode = 'create';
        this.postId = null;
      }
      // console.log("PostCreateComponent -> ngOnInit -> this.mode", this.mode)
    })
  }

  onSavePost(form: NgForm) {
    if (form.invalid) {
      return;
    }

    if (this.mode === 'create') {
      this.postsService.addPost(form.value.title, form.value.content);
    }

    else {
      this.postsService.updatePost(this.postId, form.value.title, form.value.content)
    }
    form.resetForm();
  }


}
