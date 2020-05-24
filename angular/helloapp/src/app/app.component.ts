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
  templateUrl: './app.component.html'
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