import { Component, OnInit } from '@angular/core';
import { FreelancerHttpService } from '@app/core/servers/freelancer-http.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-freelancer-list',
  templateUrl: './freelancer-list.component.html',
  styleUrls: ['./freelancer-list.component.scss']
})
export class FreelancerListComponent implements OnInit {

  public freelancerList$: Observable<any>;

  constructor(private freelancerHttpService: FreelancerHttpService) {
    this.freelancerList$ = this.freelancerHttpService.searchFreelancerList();

  }

  ngOnInit(): void {
  }


}
