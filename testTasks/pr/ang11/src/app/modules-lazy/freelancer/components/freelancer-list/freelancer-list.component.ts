import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

// libs
import { Observable } from 'rxjs';

// app
import { FreelancerHttpService } from '@app/core/servers/freelancer-http.service';
import { IFreelancerProfile } from '@app/interfaces';
import { FreelancerActionsService } from '@app/core/store/freelancers';
import { FreelancerSelectorService } from '@app/core/store/freelancers/freelancers.selectors';
//------------
import { freelancerList } from '@app/core/mock/freelancer-list';
//------------

const PAGE_SIZE = 10;
const NEXT_PAGE_SIZE = 10;
const PAGE_SIZE_OPTIONS = [5, 10, 25];
// const FREELANCER_lIST_LENGTH = 25;

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
  private currentPage = 0;
  public fromPosition = 0;
  public toPosition = PAGE_SIZE;

  constructor(
    private freelancerHttpService: FreelancerHttpService,
    private freelancerActions: FreelancerActionsService,
    private freelancersSelectors: FreelancerSelectorService
  ) {
    this.freelancerList$ = this.freelancersSelectors.selectFreelancerList();
  }

  ngOnInit(): void {
    this.freelancerActions.loadFreelancerList();
  }

  onChangePage(pageData: PageEvent) {
    this.currentPage = pageData.pageIndex;
    this.nextPageSize = pageData.pageSize;

    this.fromPosition = this.nextPageSize * this.currentPage;
    this.toPosition = this.fromPosition + this.nextPageSize;
  }
}
