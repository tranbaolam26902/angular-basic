import { Component } from '@angular/core';
import { Hero } from '../../models/hero';
import { HeroService } from '../../services/hero.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-heroes',
    standalone: true,
    imports: [CommonModule, RouterLink, FormsModule],
    templateUrl: './heroes.component.html',
    styleUrl: './heroes.component.css',
})
export class HeroesComponent {
    heroes!: Hero[];

    constructor(private heroService: HeroService) {
        this.heroService.getAllHeroes().subscribe((heroes) => {
            this.heroes = heroes;
        });
    }

    handleAdd(name: HTMLInputElement): void {
        const heroName: string = name.value.trim();
        if (!heroName) {
            alert('Please enter name.');
            return;
        }
        this.heroService.addHero({ name: heroName }).subscribe((hero) => {
            this.heroes.push(hero);
            name.value = '';
        });
    }
    handleDelete(hero: Hero): void {
        if (hero.id) {
            this.heroService.deleteHero(hero.id).subscribe((deletedHero) => {
                this.heroes = this.heroes.filter(
                    (h) => h.id !== deletedHero.id,
                );
            });
        }
    }
}
