import { Component, OnInit } from '@angular/core';
import { AvailableServiceInterface } from 'src/app/core/models/available-service';

@Component({
  selector: 'app-available-services-section',
  templateUrl: './available-services-section.component.html',
  styleUrls: ['./available-services-section.component.scss']
})
export class AvailableServicesSectionComponent implements OnInit {
  private imagePath: string = '../../../../assets/images/';
  public sectionArray: Array<AvailableServiceInterface> = [
    {
      image: this.imagePath + 'Startup.png',
      title: 'StartUps',
      description: 'Clikable mockups to sell the investors'
    },
    {
      image: this.imagePath + 'Enterprice-01@2x.png',
      title: 'Enterprises',
      description: 'Angular + Angilar Material + ngrx/store + e2e/unit tests. AWS or Coogle Cloud'
    },
    {
      image: this.imagePath + 'Mobile-01@2x.png',
      title: 'Mobile friendly solution',
      description: 'Progressive Web Apps'
    }
  ]
  constructor() {}

  ngOnInit(): void {
  }

}
