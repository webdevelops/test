import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ChildComponent } from './child.component';
import { DataModule } from './data/data.module';
import { BoldDirective } from './bold.directive';
import { RedDirective } from './red.directive';

@NgModule({
  imports: [BrowserModule, FormsModule, DataModule],
  declarations: [AppComponent, ChildComponent, BoldDirective, RedDirective],
  bootstrap: [AppComponent]
})
export class AppModule { }