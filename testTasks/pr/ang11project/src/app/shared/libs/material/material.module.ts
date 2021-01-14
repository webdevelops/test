import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';

const COMMON_LIST = [
  MatInputModule,
  MatButtonModule,
  MatFormFieldModule,
  MatPaginatorModule,
];

@NgModule({
  imports: COMMON_LIST,
  exports: COMMON_LIST,
})
export class MaterialModule { }
