import { Component } from '@angular/core';
import { BasketService } from './core/services/basket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pwa1';

  constructor(private basketService: BasketService) {
    // this.basketService.putCartFromLoadStoregeToStore();
  }
}
