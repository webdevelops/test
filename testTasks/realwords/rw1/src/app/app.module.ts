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
import { AuthModule } from './auth/auth.module';
import { SettingsComponent } from './settings/settings.component';
import { ProfileResolver } from './profile/profile-resolver.service';
import { ProfileModule } from './profile/profile.module';
import { EditorComponent } from './editor/editor.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SettingsComponent,
    EditorComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    HomeModule,
    AuthModule,
    AppRoutingModule,

    ArticleModule,      // --- without lazyload loadChildren
    ProfileModule       // --- without lazyload loadChildren

  ],
  providers: [
    ArticleResolver,        // --- without lazyload loadChildren
    ProfileResolver         // --- without lazyload loadChildren
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
