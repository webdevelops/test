import { Component } from '@angular/core';

export interface Post {
  title: string,
  text: string,
  id?: number
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts: Post[] = [
    {
      title: 'I want to learn Angular components',
      text: 'I\'m learning Angular',
      id: 1
    },
    {
      title: 'Next blok',
      text: 'There were directives and pipes',
      id: 2
    }
  ];

  ngOnInit(): void {
    // setTimeout(() => {
    //   console.log('Timeout');
    //   this.posts[0].title = 'Changed';
    // }, 5000);
  }

  updatePosts(post: Post) {
    this.posts.unshift(post);
  }

  removePost(id: number) {
    console.log('Id to remove: ', id);
    this.posts = this.posts.filter(p => p.id !== id);
  }
}