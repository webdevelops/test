import { Component, OnInit } from '@angular/core';

import { TechnologyInterface } from 'src/app/core/models/technology';

@Component({
  selector: 'app-technology-section',
  templateUrl: './technology-section.component.html',
  styleUrls: ['./technology-section.component.scss']
})
export class TechnologySectionComponent implements OnInit {
  private readonly TECHNOLOGY_PATH = 'assets/icons/technology/';

  public technologiesArray: Array<TechnologyInterface> = [
    {
      icon: this.TECHNOLOGY_PATH + 'ui.svg',
      title: 'UI/UX',
      description: 'Adobe XD, Figma, InVision, Zeplin, Adobe Photoshop, Adobe Illustrator, Cinema 4D'
    },
    {
      icon: this.TECHNOLOGY_PATH + 'markdown.svg',
      title: 'MARKDOWN/STYLE',
      description: 'HTML5, CSS3, SASS, BEM, Bootstrap, Angular Material'
    },
    {
      icon: this.TECHNOLOGY_PATH + 'frontend.svg',
      title: 'FRONT END',
      description: 'Javascript, Typescript, Angular 2+, Angular 9, Angular Universal (Server side rendering)'
    },
    {
      icon: this.TECHNOLOGY_PATH + 'enterprise.svg',
      title: 'FOR ENTERPRISE',
      description: 'NGRX(state management), effective module architecture, TSLINT, OOP on FE side, e2e'
    },
    {
      icon: this.TECHNOLOGY_PATH + 'mobile.svg',
      title: 'MOBILE',
      description: 'Progressive web application based on Angular'
    },
    {
      icon: this.TECHNOLOGY_PATH + 'database.svg',
      title: 'DATABASE/API',
      description: 'Google Cloud, Firebase, GraphQL, REST, MySQL, Postgresql'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
