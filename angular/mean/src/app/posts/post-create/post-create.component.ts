import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';

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
  isLoading = false;
  form: FormGroup;
  private mode = 'create';
  private postId: string;
  public post: Post;


  constructor(
    public postsService: PostsService,
    public route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      content: new FormControl(null, Validators.required),
      image: new FormControl(null, Validators.required)
    });
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      // console.log("PostCreateComponent -> ngOnInit -> paramMap", paramMap.params.postId)
      if (paramMap.has('postId')) {
        this.mode = 'edit';
        this.postId = paramMap.get('postId');
        this.isLoading = true;
        this.postsService.getPost(this.postId)
          .subscribe(post => {
            this.isLoading = false;
            this.post = {
              id: post._id,
              title: post.title,
              content: post.content
            };
            this.form.setValue({
              title: this.post.title,
              content: this.post.content
            });
          });

      } else {
        this.mode = 'create';
        this.postId = null;
      }
      // console.log("PostCreateComponent -> ngOnInit -> this.mode", this.mode)
    })
  }

  onImagePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({ image: file });
    this.form.get('image').updateValueAndValidity();
    console.log(file);
    console.log(this.form);
  }

  onSavePost() {
    if (this.form.invalid) {
      return;
    }

    this.isLoading = true;

    if (this.mode === 'create') {
      this.postsService.addPost(this.form.value.title, this.form.value.content);
    }

    else {
      this.postsService.updatePost(this.postId, this.form.value.title, this.form.value.content)
    }
    this.form.reset();
  }


}
