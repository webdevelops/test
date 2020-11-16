import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';

import { Tab } from 'src/app/core/models/tab';

const description_labelFirst = `Smart, driven, holding to high code standards professionals here.
DarkLime is an expert team that never stops learning.
Our focus is on cross code review, knowledge sharing, and using development best practices.`

const description_labelSecond = `Our client's feedback: “We decided to remain with DarkLime instead of
hiring a new (in-house) engineer.`;

const description_labelThird = `We share our knowledge transparently and clearly throughout your journey with us.
No hidden conditions are set, so you’ll always know how your end goal with web development is achieved.`;

@Component({
  selector: 'app-greeting-section',
  templateUrl: './greeting-section.component.html',
  styleUrls: ['./greeting-section.component.scss']
})
export class GreetingSectionComponent implements OnInit {
  public activeTabIndex: number = 0;
  tabs: Array<Tab>;

  constructor() {
    this.tabs = [
      {
        isActive: true,
        label: 'First',
        title: 'Angular expertise',
        title2: 'sinse 2016',
        description: description_labelFirst,
        imageSrc: 'url(assets/slider/greeting/Slide_02.jpg)'
      },
      {
        isActive: false,
        label: 'Second',
        title: 'Better than in-house',
        title2: 'Angular web development',
        description: description_labelSecond,
        imageSrc: 'url(assets/slider/greeting/Slide_01.jpg)'
      },
      {
        isActive: false,
        label: 'Second',
        title: 'What do',
        title2: 'we value?',
        description: description_labelThird,
        imageSrc: 'url(assets/slider/greeting/Slide_03.jpg)'
      }
    ];
  }

  ngOnInit(): void {
  }

  public selectedTabChange(event: MatTabChangeEvent) {
    this.activeTabIndex = event.index;
    this.tabs.forEach(tab => tab !== this.tabs[event.index] ? tab.isActive = false : tab.isActive = true);
  }
}

