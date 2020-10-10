import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { ArticleModule } from './article/article.module';
import { ArticleResolver } from './article/article-resolver.service';
// import { ArticleComponent } from './article/article.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    // ArticleComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    HomeModule,
    AppRoutingModule,

    ArticleModule         // --- without lazyload loadChildren

  ],
  providers: [
    ArticleResolver        // --- without lazyload loadChildren
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
