import { Component, inject } from '@angular/core';
import { Hero } from '../../models/hero';
import { CommonModule, Location } from '@angular/common';
import { HeroService } from '../../services/hero.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-detail',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './detail.component.html',
    styleUrl: './detail.component.css',
})
export class DetailComponent {
    hero!: Hero;
    routeParamId: number;

    constructor(
        private location: Location,
        private route: ActivatedRoute,
        private heroService: HeroService,
    ) {
        this.routeParamId = Number(this.route.snapshot.params['id']);
        this.heroService.getHeroById(this.routeParamId).subscribe((hero) => {
            this.hero = hero;
        });
    }

    goBack() {
        this.location.back();
    }

    handleSave(name: string) {
        this.hero.name = name;
        this.heroService.renameHero(this.hero).subscribe((hero) => {
            this.hero = hero;
        });
    }
}
