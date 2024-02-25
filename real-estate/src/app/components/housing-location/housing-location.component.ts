import { Component, Input } from '@angular/core';
import { HousingLocation } from '../../models/housing-location';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './housing-location.component.html',
  styleUrl: './housing-location.component.css'
})
export class HousingLocationComponent {
    @Input() housingLocation!: HousingLocation;
}
