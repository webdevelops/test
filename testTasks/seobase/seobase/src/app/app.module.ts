import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { AngularMaterialModule } from './angular-material.module';
import { LoginPageComponent } from './auth/login-page/login-page.component';
import { UsersComponent } from './dashboard-page/users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardPageComponent,
    LoginPageComponent,
    UsersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
