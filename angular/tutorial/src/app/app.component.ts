import { Component } from '@angular/core';
import { Observable } from 'rxjs';

export interface Post {
  title: string,
  text: string
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  search = '';
  searchField = 'title';
  posts: Post[] = [
    { title: 'Bear', text: 'The best drink in the world' },
    { title: 'JavaScript', text: 'The best language in the world' }
  ];

  p: Promise<string> = new Promise<string>(resolve => {
    setTimeout(() => {
      resolve('Promise resolved');
    }, 4000)
  });

  date: Observable<Date> = new Observable(obs => {
    setInterval(() => {
      obs.next(new Date());
    }, 1000);
  })

  addPost() {
    this.posts.unshift({
      title: 'Angular 9',
      text: 'Vlad'
    });
    console.log(this.posts)
  };
}