import { Component, OnInit } from '@angular/core';

import { Book, selectedFeatureCount, selectUser } from './store/selectors/d-books.selectors';
import { selectBookById, selectFeature } from './store/selectors/d-books.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-ngrx';
  selectedBook: Book;

  ngOnInit() {
  }
}
