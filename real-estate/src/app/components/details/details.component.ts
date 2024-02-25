import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../../services/housing.service';
import { HousingLocation } from '../../models/housing-location';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-details',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './details.component.html',
    styleUrl: './details.component.css',
})
export class DetailsComponent {
    route: ActivatedRoute = inject(ActivatedRoute);
    housingService: HousingService = inject(HousingService);

    housingLocationId = -1;
    housingLocation: HousingLocation | undefined;

    applyForm = new FormGroup({
        firstName: new FormControl(''),
        lastName: new FormControl(''),
        email: new FormControl(''),
    });

    constructor() {
        const housingLocationId = parseInt(
            this.route.snapshot.params['id'],
            10,
        );

        this.housingService
            .getHousingLocationById(housingLocationId)
            .then((housingLocation) => {
                this.housingLocation = housingLocation;
            });
    }

    submitApplication() {
        this.housingService.submitApplication(
            this.applyForm.value.firstName ?? '',
            this.applyForm.value.lastName ?? '',
            this.applyForm.value.email ?? '',
        );
    }
}
