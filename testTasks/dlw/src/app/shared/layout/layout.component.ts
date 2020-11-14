import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  public sidenavShow: boolean = false;

  public sidenavArray = [
    {
      label: 'Products',
      sectionId: 'product'
    },
    {
      label: 'Technologies',
      sectionId: 'technology'
    },
    {
      label: 'Who our Clients',
      sectionId: 'services'
    },
    {
      label: 'Case Studies',
      sectionId: 'portfolio'
    },
    {
      label: 'Feedbacks',
      sectionId: 'client'
    },
    {
      label: 'Contact Us',
      sectionId: 'contact'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  scroll(id: string) {

  }
}
