import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';

import { MaterialModule } from '@app/shared/libs/material/material.module';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }
}

@NgModule({
  declarations: [SearchComponent],
  imports: [CommonModule, MaterialModule],
  exports: [SearchComponent],
})
export class SearchModule { }
