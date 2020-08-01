import { Component, OnInit, OnDestroy } from '@angular/core';
import { OrderService } from 'src/app/shared/order.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-orders-page',
  templateUrl: './orders-page.component.html',
  styleUrls: ['./orders-page.component.scss']
})
export class OrdersPageComponent implements OnInit, OnDestroy {
  orders = [];
  pSub: Subscription;
  rSub: Subscription;

  constructor(
    private orderService: OrderService
  ) { }

  ngOnInit(): void {
    this.orderService.getAll().subscribe(orders => {
      this.orders = orders;
    });
  }

  remove(id) {
    this.orderService.delete(id).subscribe(() => {
      this.orders = this.orders.filter(order => order.id !== id);
    })
  }

  ngOnDestroy() {
    if (this.pSub) {
      this.pSub.unsubscribe();
    }

    if (this.rSub) {
      this.rSub.unsubscribe();
    }
  }
}
