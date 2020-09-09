import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Hero } from './heroes/hero';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from './heroes/hero.service';

@Component({
  selector: 'app-dependency',
  templateUrl: './dependency.component.html',
  styleUrls: ['./dependency.component.css']
})
export class DependencyComponent implements OnInit {
  heroes$: Observable<any>;
  selectedId: number;
  // heroes = HEROES;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService
  ) { }

  ngOnInit(): void {
    this.heroes$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = Number(params.get('id'));
        return this.heroService.getHeroes();
      })
    );
  }

}
