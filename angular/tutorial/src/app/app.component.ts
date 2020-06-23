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
}