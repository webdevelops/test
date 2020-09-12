import { Component, OnInit } from "@angular/core";

// import { HEROES } from "./mock-heroes";
import { Hero } from './hero';
import { ActivatedRoute } from '@angular/router';

import { HeroService } from './hero.service';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-hero-list',
  template: `
    <div *ngFor="let hero of heroes">
      {{hero.id}} - {{hero.name}}
    </div>
  `
})
export class HeroListComponent implements OnInit {
  // heroes = HEROES;тзь іеф
  heroes;
  heroes$: Observable<any>;
  selectedId: number;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService
  ) { }

  ngOnInit() {
    this.heroes = this.heroService.getHeroes();
    this.route.paramMap
      .pipe(
        switchMap(params => {
          const selectedId = Number(params.get('id'));
          // console.log('selectedId', selectedId)
          return this.heroService.getHeroes();
        })
      )
      // .subscribe(heroes => {
      //   // console.log('heroes', heroes)
      //   // this.heroes = this.heroService.getHeroes();
      //   this.heroes = heroes;
      // });
  }

}