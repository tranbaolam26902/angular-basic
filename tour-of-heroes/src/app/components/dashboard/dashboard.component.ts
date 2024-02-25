import { Component } from '@angular/core';
import { Hero } from '../../models/hero';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  // Properties
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  // Lifecycle hooks
  ngOnInit(): void {
    this.getHeroes();
  }

  // Methods
  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => {
      this.heroes = heroes.slice(1, 5);
    });
  }
}
