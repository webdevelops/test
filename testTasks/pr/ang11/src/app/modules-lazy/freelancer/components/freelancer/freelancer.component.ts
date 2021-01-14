import { Component, OnInit, Input } from '@angular/core';

// app
import { IFreelancerProfile } from '@app/interfaces/core/server-responses/freelancer-response.interface';

@Component({
  selector: 'app-freelancer',
  templateUrl: './freelancer.component.html',
  styleUrls: ['./freelancer.component.scss']
})
export class FreelancerComponent implements OnInit {
  @Input() freelancer: any;
  // @Input() freelancer: IFreelancerProfile | null = null;

  constructor() { }

  ngOnInit(): void {
    // console.log('freelancer', this.freelancer)
  }
}
