import { Component } from '@angular/core';
import { Hero } from '../../models/hero';
import { HeroService } from '../../services/hero.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
    heroes: Hero[] = [];

    constructor(private heroService: HeroService) {
        this.heroService.getAllHeroes().subscribe((heroes) => {
            this.heroes = heroes.slice(1, 5);
        });
    }
}
