import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';

export class Phone {
  constructor(
    public title: string,
    public price: number,
    public company: string
  ) { }
}

@Component({
  selector: 'my-app',
  template: `<div>
  <div class="form-group">
    <label>Model's name</label>
    <input 
      class="form-control" 
      name="title" [(ngModel)]="phone.title" 
      #phoneTitle="ngModel"
      (ngModelChange)="onTitleChange()"
    />
  </div>
  <div class="form-group">
    <label>Price</label>
    <input type="number" class="form-control" name="price" [(ngModel)]="phone.price"  #phonePrice="ngModel"/>
  </div>
  <div class="form-group">
    <label>Manufacturer</label>
    <select class="form-control" name="company" [(ngModel)]="phone.company" #phoneCompany="ngModel">
      <option *ngFor="let comp of companies" [value]="comp">
        {{comp}}
      </option>
    </select>
  </div>
  <div class="form-group">
    <button class="btn btn-default" (click)="addPhone()">Add</button>
  </div>
  <div>
    <h3>Added elements</h3>
    <ul *ngFor="let p of phones">
      <li>{{p.title}} ({{p.company}}) - {{p.price}} </li>
    </ul>
  </div>
  <div>
    <p>{{phoneTitle.name}} : {{phoneTitle.model}}</p>
    <p>{{phonePrice.name}} : {{phonePrice.model}}</p>
    <p>{{phoneCompany.name}} : {{phoneCompany.model}}</p>
  </div>
</div>`
  // templateUrl: './app.component.html'
})
export class AppComponent {
  title: string;
  price: number;
  company: string;

  phone: Phone = new Phone("", 0, "Huawei");
  phones: Phone[] = [];
  companies: string[] = ["Apple", "Huawei", "Xiaomi", "Samsung", "LG", "Motorola", "Alcatel"];

  onTitleChange() {
    if (this.phone.title == "no") {
      this.phone.title = "nothing";
    }
  }

  addPhone() {
    this.phones.push(new Phone(this.phone.title, this.phone.price, this.phone.company));
  }
}