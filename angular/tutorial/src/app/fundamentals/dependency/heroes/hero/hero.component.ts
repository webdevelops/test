import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  hero$: Observable<Hero>;
  hero: Hero;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private heroService: HeroService
  ) { }

  ngOnInit(): void {
    const heroId = +this.route.snapshot.paramMap.get('heroId');
    this.hero = this.heroService.getHero(heroId);
  }

}
