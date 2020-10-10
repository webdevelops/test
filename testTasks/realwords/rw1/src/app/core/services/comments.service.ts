import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Comment } from '../models/comment.model';
import { ApiService } from './api.service';

@Injectable()
export class CommentsService {
  constructor(
    private apiService: ApiService
  ) { }

  getAll(slug): Observable<Comment[]> {
    return this.apiService.get(`/articles/${slug}/comments`)
      .pipe(map(data => data.comments));
  }
}