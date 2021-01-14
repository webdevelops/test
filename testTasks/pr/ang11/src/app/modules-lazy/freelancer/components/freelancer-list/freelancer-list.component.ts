import { Component, OnInit } from '@angular/core';
import { FreelancerHttpService } from '@app/core/servers/freelancer-http.service';
import { Observable } from 'rxjs';

const PAGE_SIZE = 10;
const NEXT_PAGE_SIZE = 10;
const PAGE_SIZE_OPTIONS = [5, 10, 25];
// const FREELANCER_lIST_LENGTH = 25;

// app
import { IFreelancerProfile } from '@app/interfaces/core/server-responses/freelancer-response.interface';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-freelancer-list',
  templateUrl: './freelancer-list.component.html',
  styleUrls: ['./freelancer-list.component.scss']
})
export class FreelancerListComponent implements OnInit {

  public freelancerList$: Observable<{ pages: number, profiles: IFreelancerProfile[] }>;
  readonly pageSize = PAGE_SIZE;
  readonly pageSizeOptions = PAGE_SIZE_OPTIONS;
  private nextPageSize = NEXT_PAGE_SIZE;
  private currentPage = 1;

  constructor(private freelancerHttpService: FreelancerHttpService) {
    this.freelancerList$ = this.freelancerHttpService.searchFreelancerList(this.pageSize);

  }

  ngOnInit(): void {
  }

  onChangePage(pageData: PageEvent) {
    this.currentPage = pageData.pageIndex + 1;
    this.nextPageSize = pageData.pageSize;
    this.freelancerList$ = this.freelancerHttpService.getFreelancerList(this.currentPage, this.nextPageSize);

    console.log('pageData', pageData);
  }
}
