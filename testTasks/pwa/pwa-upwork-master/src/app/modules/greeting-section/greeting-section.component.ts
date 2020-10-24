// Angular
import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';

// App
import { IconList } from '../../core/mock/icon-list'

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
        title: 'INTERACTIVE SEARCH',
        description: 'You want to prepare a software project budget. It is quite easy with the help of our PWA store.',
        imageSrc: 'assets/images/ImageItem.png',
      },
      {
        isActive: false,
        label: 'Second',
        title: 'INTERACTIVE INTERACTIVE INTERACTIVE SEARCH',
        description: 'You want to prepare a software project budget. It is quite easy with the help of our PWA store.',
        imageSrc: 'assets/images/ImageItem.png',
      },
      {
        isActive: false,
        label: 'Third',
        title: 'INTERACTIVE SEARCH',
        description: 'You want to prepare a software project budget. It is quite easy with the help of our PWA store.',
        imageSrc: 'assets/images/ImageItem.png',
      },
    ];
  }

  public customSlider() {
    this.activeTabIndex = this.activeTabIndex > 1 ? 0 : ++this.activeTabIndex;
  }

  public selectedTabChange(event: MatTabChangeEvent) {
    this.activeTabIndex = event.index;
    this.tabs.forEach(tab => tab !== this.tabs[event.index] ? tab.isActive = false: tab.isActive = true);
  }
}

export interface Tab {
  isActive: boolean;
  label: string;
  title: string;
  description: string;
  imageSrc: string;
}