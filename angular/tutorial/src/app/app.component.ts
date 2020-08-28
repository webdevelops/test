import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentItem = 'Hello';
  items = ['item1', 'item2', 'item3', 'item4'];
  color = 'yellow';

  addItem(newItem: string) {
    this.items.push(newItem);
  }
}
