import { NgModule } from "@angular/core";
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { UserService } from './services/user.service';
import { JwtService } from './services/jwt.service';
import { ApiService } from './services/api.service';
import { TagsService } from './services/tags.service';
import { ArticlesService } from './services/articles.service';
import { CommentsService } from './services/comments.service';
import { ProfileService } from './services/profile.service';
import { HttpTokenInterceptor } from './interseptors';

@NgModule({
  imports: [
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true },
    UserService,
    JwtService,
    ApiService,
    TagsService,
    ArticlesService,
    CommentsService,
    ProfileService
  ]
})
export class CoreModule { }