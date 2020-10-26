import { Component } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';

import { IconList } from 'src/app/core/mock/icon.list';

@Component({
  selector: 'app-greeting-section',
  templateUrl: './greeting-section.component.html',
  styleUrls: ['./greeting-section.component.scss']
})
export class GreetingSectionComponent {
  public activeTabIndex: number = 0;
  public tabs: Array<Tab>;
  public iconList = IconList;

  constructor() {
    this.tabs = [
      {
        isActive: true,
        label: 'First',
        title: 'INTERACTIVE - 1 SEARCH',
        description: 'You want to prepare a software prodject budget. It is quite east with the help of our PWA store.',
        imageSrc: 'assets/images/ImageItem.png',
      },
      {
        isActive: false,
        label: 'Second',
        title: 'INTERACTIVE - 2 TRENDING',
        description: 'You want to prepare a software prodject budget. It is quite east with the help of our PWA store.',
        imageSrc: 'assets/images/ImageItem.png',
      },
      {
        isActive: false,
        label: 'Third',
        title: 'INTERACTIVE - 3 TOPICS',
        description: 'You want to prepare a software prodject budget. It is quite east with the help of our PWA store.',
        imageSrc: 'assets/images/ImageItem.png',
      }
    ];
  }

  selectedTabChange(event: MatTabChangeEvent) {
    this.activeTabIndex = event.index;
    this.tabs.forEach(tab => tab !== this.tabs[event.index] ? tab.isActive = false : tab.isActive = true);
  }

  customSlider() {
    this.activeTabIndex = this.activeTabIndex > 1 ? 0 : ++this.activeTabIndex;
  }

}

export interface Tab {
  isActive: boolean,
  label: string;
  title: string;
  description: string;
  imageSrc: string;
};
