import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  imports: [
    CommonModule,
    // MatButtonModule,
    // FlexLayoutModule, // ?
    // MatProgressSpinnerModule, // ?
    // MatAutocompleteModule
  ],
  exports: [
    MatFormFieldModule,
    FlexLayoutModule,
    MatSelectModule,
    MatButtonModule,
    MatTabsModule,
    MatInputModule, // ?
    ScrollingModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatPaginatorModule,
    MatAutocompleteModule,
    MatToolbarModule,
  ]
})
export class MaterialModule { }