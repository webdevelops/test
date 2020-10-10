import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import { Article } from '../../core';

@Component({
  selector: 'app-article-meta',
  templateUrl: './article-meta.component.html'
})
export class ArticleMetaComponent implements OnInit, OnChanges {
  @Input() article: Article;
  // counter: number = 0;

  // ------------

  // @Input() name: string;

  ngOnInit() {
    // console.log('ngOnInit');
  }

  ngOnChanges(changes: SimpleChanges) {
    // console.log('ngOnChanges');

    // console.log('changes.name', changes.name);
  }

  // // ------------

  // increment() {
  //   this.counter++;
  // }

  // decrement() {
  //   this.counter--;
  // }
}
