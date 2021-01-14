import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { FreelancerHttpService } from '@app/core/servers/freelancer-http.service';
import { IFreelancerProfile } from '@app/interfaces/core/server-responses/freelancer-profile.interface';

@Component({
  selector: 'app-freelancer-list',
  templateUrl: './freelancer-list.component.html',
  styleUrls: ['./freelancer-list.component.scss'],
})
export class FreelancerListComponent implements OnInit {
  public freelancerList$: Observable<{
    pages: number;
    profiles: Array<IFreelancerProfile>;
  }>;

  constructor(private freelancerHttpService: FreelancerHttpService) {
    this.freelancerList$ = this.freelancerHttpService.searchFreelancerList();
  }

  ngOnInit(): void { }
}
