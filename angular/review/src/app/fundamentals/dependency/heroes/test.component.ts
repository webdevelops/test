import { HeroService } from "./hero.service";
import { HeroListComponent } from './hero-list.component';

const expectedHeroes = [{ name: 'A' }, { name: 'B' }];
const mockService = <HeroService>{ getHeroes: () => expectedHeroes };

it('should have heroes when HeroListComponent created', () => {
  const component = new HeroListComponent(mockService);
  expect(component.heroes.length).toEqual(expectedHeroes.length);
})