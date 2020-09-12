import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, debounceTime, filter, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-usage',
  templateUrl: './usage.component.html',
  styleUrls: ['./usage.component.css']
})
export class UsageComponent implements OnInit {

  constructor() {
    const searchBox = document.getElementById('search-box');

    const typeahead = fromEvent(searchBox, 'enter')
      .pipe(
        map((e: KeyboardEvent) => (e.target as HTMLInputElement).value),
        filter(text => text.length > 2),
        debounceTime(10),
        distinctUntilChanged(),
        switchMap(() => ajax('/api/posts'))
      )
      .subscribe(data => {
        // Hande the data from the API
      });
  }

  ngOnInit(): void {
  }

}
