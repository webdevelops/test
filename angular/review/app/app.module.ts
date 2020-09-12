import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Provider } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AuthInterceptor } from './auth.interceptor';
// import { AboutComponent } from './components/about/about.component';
// import { AboutExtraComponent } from './components/about-extra/about-extra.component';
import { HomeComponent } from './components/home/home.component';
// import { PostComponent } from './components/post/post.component';
// import { PostsComponent } from './components/posts/posts.component';
import { AppRoutingModule } from './app-routing.module';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AboutModule } from './components/about/about.module';
import { ColorDirective } from './components/shared/color.directive';
import { PageNamePipe } from './components/shared/page-name.pipe';
import { SharedModule } from './components/shared/shared.module';

const INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true
}

@NgModule({
  declarations: [
    AppComponent,
    // AboutComponent,
    // AboutExtraComponent,
    HomeComponent,
    // PostComponent,
    // PostsComponent,
    ErrorPageComponent,
    ColorDirective,
    PageNamePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    AboutModule,
    SharedModule
  ],
  providers: [
    INTERCEPTOR_PROVIDER
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
