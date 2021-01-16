import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '@app/shared/libs/material/material.module';
import { FormsModule } from '@angular/forms';

// app
import { FreelancerHttpService } from '@app/core/servers/freelancer-http.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public freelancerName: string = '';

  constructor(
    private freelancerHttpService: FreelancerHttpService
  ) { }

  ngOnInit(): void {
  }

  searchFreelancer() {
    this.freelancerHttpService.searchFreelancerList(this.freelancerName);
  }
}

@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  exports: [
    SearchComponent
  ]
})
export class SearchModule { }
