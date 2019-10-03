import { Component, Input, OnInit } from '@angular/core';
import { Unicorn } from '../../../shared/models/unicorn.model';
import { CartService } from '../../../shared/services/cart.service';
import { ThemePalette } from '@angular/material';

@Component({
    selector: 'fld-unicorn-card',
    templateUrl: './unicorn-card.component.html',
    styleUrls: ['./unicorn-card.component.scss']
})
export class UnicornCardComponent implements OnInit {

    @Input()
    public unicorn: Unicorn;
    public favoriteColor: ThemePalette;

    constructor(private cartService: CartService) {
    }

    public ngOnInit(): void {
        this.favoriteColor = this.cartService.isInCart(this.unicorn) ? 'warn' : 'primary';
    }

    public toggleToCart(): void {
        if (this.cartService.isInCart(this.unicorn)) {
            this.cartService.removeFromCart(this.unicorn);
            this.favoriteColor = 'primary';
        } else {
            this.cartService.addToCart(this.unicorn);
            this.favoriteColor = 'warn';
        }
    }


}
