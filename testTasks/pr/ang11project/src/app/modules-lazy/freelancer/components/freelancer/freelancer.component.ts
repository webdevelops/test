import { Component, Input, OnInit } from '@angular/core';

// app
import { IFreelancerProfile } from '@app/interfaces/core/server-responses/freelancer-profile.interface';

@Component({
  selector: 'app-freelancer',
  templateUrl: './freelancer.component.html',
  styleUrls: ['./freelancer.component.scss'],
})
export class FreelancerComponent implements OnInit {
  @Input() freelancer: any;
  // @Input() freelancer: IFreelancerProfile;

  constructor() { }

  ngOnInit(): void {
    // console.log('freelancerName - 2', this.freelancer);
  }
}
