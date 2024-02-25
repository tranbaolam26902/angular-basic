import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

import { CartService } from '../../services/cart/cart.service';

@Component({
    selector: 'app-cart',
    standalone: true,
    imports: [CommonModule, RouterModule, ReactiveFormsModule],
    templateUrl: './cart.component.html',
    styleUrl: './cart.component.scss',
})
export class CartComponent {
    items = this.cartService.getItems();

    checkoutForm = this.formBuilder.group({
        name: '',
        address: '',
    });

    constructor(
        private cartService: CartService,
        private formBuilder: FormBuilder,
    ) {}

    onSubmit(): void {
        this.items = this.cartService.clearCart();
        console.warn('Your order has been submitted', this.checkoutForm.value);
        this.checkoutForm.reset();
    }
}
