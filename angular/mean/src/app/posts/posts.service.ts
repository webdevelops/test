import { Injectable/* , EventEmitter */ } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

import { Post } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();
  // private postsUpdated2 = new EventEmitter<Post[]>(); // 2

  constructor(
    private http: HttpClient
  ) { }

  getPosts() {
    this.http.get<{ message: string, props: Post[] }>('http://localhost:3000/api/posts')
      .subscribe(postData => {
        this.posts = postData.props;
        this.postsUpdated.next([...this.posts]);

      });
  }

  getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }

  addPost(title: string, content: string) {
    const post: Post = { id: null, title: title, content: content };
    this.posts.push(post);
    this.postsUpdated.next([...this.posts]);
  }
}
