import { Component, Input } from '@angular/core';

import { Hero } from '../../models/hero';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../../services/hero.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css',
})
export class HeroDetailComponent {
  // Properties
  @Input() hero?: Hero;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private heroService: HeroService,
  ) { }

  // Lifecycle hooks
  ngOnInit(): void {
    this.getHero();
  }

  // Methods
  getHero(): void {
    const id: number = Number(this.route.snapshot.params['id']);
    this.heroService.getHero(id).subscribe((hero) => (this.hero = hero));
  }

  // Event handlers
  handleGoBack(): void {
    this.location.back();
  }
  handleSave(): void {
    if (this.hero)
      this.heroService.updateHero(this.hero).subscribe(() => {
        this.handleGoBack();
      });
  }
}
