// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

@NgModule({
  declarations: [],
  imports: [                          // remove all
    CommonModule,
    MatFormFieldModule,
    FlexLayoutModule,
    MatSelectModule,
    MatCardModule,
    MatPaginatorModule,
    MatDialogModule,
    MatButtonModule,
    MatTabsModule,
    MatToolbarModule,
    MatDividerModule,
    MatInputModule,
    ScrollingModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatAutocompleteModule,
  ],
  exports: [
    MatFormFieldModule,
    FlexLayoutModule,
    MatSelectModule,
    MatCardModule,
    MatPaginatorModule,
    MatDialogModule,
    MatButtonModule,
    MatTabsModule,
    MatToolbarModule,
    MatDividerModule,
    MatInputModule,
    ScrollingModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatAutocompleteModule,
  ]
})
export class MaterialModule { }

// aa-1 task 1