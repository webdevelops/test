import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { PostsService } from '../shared/posts.service';
import { Post } from '../shared/interfaces';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit {
  post$: Observable<Post>

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService
  ) { }

  ngOnInit() {
    // console.log('params['id'] ', this.route.params._value['id']);
    // this.post$ = this.route.params
    //   .pipe(switchMap((params: Params) => {
    //     console.log('switchMap - params: ', params);
    //     return this.postsService.getById(params['id']);
    //   }))

    this.route.paramMap.subscribe((params: Params) => {
      this.post$ = this.postsService.getById(params.get('id'));
    })
  }

}
