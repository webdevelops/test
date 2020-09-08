import { Component } from "@angular/core";

// import { HEROES } from "./mock-heroes";
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-hero-list',
  template: `
    <div *ngFor="let hero of heroes">
      {{hero.id}} - {{hero.name}}
    </div>
  `
})
export class HeroListComponent {
  // heroes = HEROES;
  heroes: Hero[];

  constructor(private heroService: HeroService) { 
    
    this.heroes = this.heroService.getHeroes();
    
  }
  
}