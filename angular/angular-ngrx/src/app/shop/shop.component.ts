import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  // phones$: Observable<any> = this.store.select(state => state)

  // constructor(private store: Store<any>) { }

  ngOnInit(): void {
    console.log('-----------')
    // this.store.dispatch({ type: '[Phones] Load Phones' });
  }

}
