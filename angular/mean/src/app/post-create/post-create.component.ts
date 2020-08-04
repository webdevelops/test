import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent implements OnInit {
  newPost = 'NO CONTENT';
  newPost2 = '';
  enteredValue = '';

  constructor() {}

  ngOnInit(): void {}

  onAddPost(postInput: HTMLTextAreaElement) {
    this.newPost = postInput.value;
  }

  onAddPost2() {
    this.newPost2 = this.enteredValue;
  }
}
