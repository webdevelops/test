import { Component, OnInit } from '@angular/core';

import { Product } from 'src/app/core/models/product';

@Component({
  selector: 'app-team-skill-section',
  templateUrl: './team-skill-section.component.html',
  styleUrls: ['./team-skill-section.component.scss']
})
export class TeamSkillSectionComponent implements OnInit {
  private productImagePath = 'assets/images/key-product/';
  public readonly productArray: Array<Product> = [
    {
      // image: this.productImagePath + 'Devices.png',
      image: 'url(' + this.productImagePath + 'Devices.png)',
      isExpanded: true,
      title: 'Progressive web apps (PWA) Angular 10',
      description: 'Why spen more on defferent technologies got iOS, Android, and website with user-friendly mobile experience, if can get all in one with Progressive Web Apps? PWAs are convenient, cost-efficient, and independent from the App Store and Google Play!'
    },
    {
      // image: `url(${this.productImagePath}/Angular.png)`,
      image: 'url(' + this.productImagePath + 'Angular.png)',
      isExpanded: false,
      title: 'Angular 9 Ivy SSR',
      description: 'Angular 9 Ivy was released Feb 7, 2020, and we have already upgraded beta client. We recommended keeping the version of Angular up to date if this passible. For example, v9 allows to decrease a bundle up to 40% for large apps, has improved type-checking system and multi-language SSR enhancement'
    }
  ];

  constructor() { console.log('this.productArray', this.productArray) }

  ngOnInit(): void {
  }

  // public getCurrentImage(): string {
  //   const currentExpendedIndex = this.productArray.findIndex(product => product.isExpanded);
  //   return this.productArray[currentExpendedIndex].image;
  // }

  public setCurrentExpandedPanel(item: Product): void {
    this.productArray.map(product => {
      product.isExpanded = product.title === item.title ? true : false;
      return product;
    })
  }

  get currentImage(): string {
    // const currentExpendedIndex = this.productArray.findIndex(product => product.isExpanded);
    // return this.productArray[currentExpendedIndex].image;

    const currentProduct = this.productArray.find(product => product.isExpanded);
    return currentProduct.image;
  }
}
