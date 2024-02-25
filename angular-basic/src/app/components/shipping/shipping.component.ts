import { Component } from '@angular/core';
import { CartService } from '../../services/cart/cart.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-shipping',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './shipping.component.html',
    styleUrl: './shipping.component.scss',
})
export class ShippingComponent {
    shippingCosts!: Observable<{ type: string, price: number }[]>;

    ngOnInit(): void {
        this.shippingCosts = this.cartService.getShippingPrices();
    }

    constructor(private cartService: CartService) {}
}
