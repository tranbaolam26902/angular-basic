import { Component } from '@angular/core';

import { Hero } from '../../models/hero';
import { HEROES } from '../../mock-heroes';
import { HeroService } from '../../services/hero.service';
import { MessagesService } from '../../services/messages.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css',
})
export class HeroesComponent {
  // Properties
  heroes: Hero[] = [];

  constructor(
    private heroService: HeroService,
    private messageService: MessagesService,
  ) { }

  // Lifecycle hooks
  ngOnInit(): void {
    this.getHeroes();
  }

  // Methods
  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => {
      this.heroes = heroes;
    });
  }

  // Event handlers
  handleAdd(newHero: HTMLInputElement): void {
    const name = newHero.value.trim();
    if (!name) return;
    this.heroService.addHero({ name } as Hero).subscribe((hero) => {
      this.heroes.push(hero);
    });
  }
  handleDelete(hero: Hero): void {
    this.heroes = this.heroes.filter((h) => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }
}
