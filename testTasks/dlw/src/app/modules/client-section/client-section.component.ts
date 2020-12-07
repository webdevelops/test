import { Component, OnInit } from '@angular/core';

import { ClientServiceInterface } from 'src/app/core/models/client-service';
import { clientServiceData } from 'src/app/core/mock/client-data';

const MAX_SLIDES_NUMBER = 5;

export enum Arrows {
  right = 'right',
  left = 'left'
}

@Component({
  selector: 'app-client-section',
  templateUrl: './client-section.component.html',
  styleUrls: ['./client-section.component.scss']
})
export class ClientSectionComponent implements OnInit {
  public tabs: Array<ClientServiceInterface> = clientServiceData;
  public arrow = '../../assets/icon/client-section/right-arrow.svg';
  public activeTabIndex: number = 0;
  arrows = Arrows;

  constructor() { }

  ngOnInit(): void {
    // console.log('this.activeTabIndex - middle', this.activeTabIndex)
  }

  changeSlide(arrow) {
    if (arrow == 'right') {
      this.activeTabIndex = this.activeTabIndex !== MAX_SLIDES_NUMBER
        ? ++this.activeTabIndex
        : this.activeTabIndex;

    } else {
      this.activeTabIndex = this.activeTabIndex < 1
        ? 0
        : --this.activeTabIndex;
    }
  }

  customSlider() {
    this.activeTabIndex = this.activeTabIndex > MAX_SLIDES_NUMBER ? 0 : ++this.activeTabIndex;
    console.log("🚀 ~ file: client-section.component.ts ~ line 45 ~ ClientSectionComponent ~ customSlider ~ this.activeTabIndex", this.activeTabIndex)
  }
}
