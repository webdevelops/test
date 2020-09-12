import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { Post, PostsService } from './posts.service';

export class PostResolver implements Resolve<Post> {
  constructor(private postsService: PostsService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Post> | Promise<Post> | Post {
    // console.log('route', route);
    return this.postsService.getById(+route.params['id']);
  }
}