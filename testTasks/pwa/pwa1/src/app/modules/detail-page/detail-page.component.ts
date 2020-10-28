// Angular
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Libs
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// App
import { ProductModel } from 'src/app/core/models/product.model';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})
export class DetailPageComponent implements OnInit {
  public product$: Observable<ProductModel>

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.product$ = this.route.data.pipe(
      map(data => data.product)
    );
  }

}
