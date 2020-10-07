import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    SpinnerComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    SpinnerComponent
  ]
})
export class SharedModule { }