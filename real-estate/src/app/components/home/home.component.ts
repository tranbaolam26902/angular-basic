import { Component, inject } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../../models/housing-location';
import { CommonModule } from '@angular/common';
import { HousingService } from '../../services/housing.service';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [HousingLocationComponent, CommonModule],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
})
export class HomeComponent {
    housingService: HousingService = inject(HousingService);

    housingLocationList: HousingLocation[] = [];
    filteredLocationList: HousingLocation[] = [];

    constructor() {
        this.housingService
            .getAllHousingLocations()
            .then((housingLocationList: HousingLocation[]) => {
                this.housingLocationList = housingLocationList;
                this.filteredLocationList = housingLocationList;
            });
    }

    filterResults(text: string) {
        if (!text) {
            this.filteredLocationList = this.housingLocationList;
            return;
        }

        this.filteredLocationList = this.housingLocationList.filter(
            (housingLocation) =>
                housingLocation?.state
                    .toLowerCase()
                    .includes(text.toLowerCase()) ||
                housingLocation?.city
                    .toLowerCase()
                    .includes(text.toLowerCase()) ||
                housingLocation?.name
                    .toLowerCase()
                    .includes(text.toLowerCase()),
        );
    }
}
